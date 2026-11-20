// One deliberate wheel gesture advances one home section. Native snapping also
// supports touch and keyboard, while oversized sections retain normal scrolling.
export function createHomeScrollSnap(){
 const root=document.documentElement;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let enabled=false,lastWheel=0,lastStep=0,direction=0,total=0,consumed=false;
 function canScrollWithin(target,delta){
  for(let el=target;el&&el!==document.body&&el!==root;el=el.parentElement){
   if(el.scrollHeight<=el.clientHeight+1||!/(auto|scroll)/.test(getComputedStyle(el).overflowY))continue;
   if(delta>0&&el.scrollTop+el.clientHeight<el.scrollHeight-1)return true;
   if(delta<0&&el.scrollTop>1)return true;
  }
  return false;
 }
 function onWheel(event){
  if(!enabled||reduced.matches||event.defaultPrevented||event.ctrlKey||!event.cancelable)return;
  if(Math.abs(event.deltaX)>Math.abs(event.deltaY)||!event.deltaY)return;
  if(document.querySelector('dialog[open],.primary-nav.open'))return;
  const target=event.target instanceof Element?event.target:null;
  if(target?.closest('input,textarea,select,[contenteditable="true"],.dropdown-panel'))return;
  const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
  if(canScrollWithin(target,delta))return;
  const now=performance.now(),sign=Math.sign(delta),quiet=now-lastWheel>200;
  lastWheel=now;
  if(quiet||sign!==direction){total=0;consumed=false;}
  // Absorb the tail of a trackpad gesture rather than skipping several pages.
  if(sign===direction&&(consumed||(lastStep>0&&now-lastStep<500))){
   event.preventDefault();
   return;
  }
  direction=sign;
  const header=document.querySelector('.site-header')?.getBoundingClientRect().height||0;
  const viewport=innerHeight-header;
  const sections=[...document.querySelectorAll('.home-page>section,.site>.home-ending')];
  const points=sections.map(el=>{
   const rect=el.getBoundingClientRect();
   return{top:Math.max(0,rect.top+scrollY-header),height:rect.height};
  });
  let index=points.findLastIndex(point=>point.top<=scrollY+2);
  if(index<0)index=0;
  const current=points[index];
  if(!current)return;
  if(sign>0&&scrollY<current.top+current.height-viewport-2)return;
  if(sign<0&&scrollY>current.top+2)return;
  const next=points[index+sign];
  if(!next)return;
  event.preventDefault();
  total+=Math.abs(delta);
  if(total<28)return;
  consumed=true;
  lastStep=now;
  window.scrollTo({top:next.top,behavior:'smooth'});
 }
 function setEnabled(value){
  enabled=value;
  root.classList.toggle('home-scroll-snap',value);
  lastWheel=lastStep=total=direction=0;
  consumed=false;
 }
 function dispose(){
  setEnabled(false);
  window.removeEventListener('wheel',onWheel);
 }
 window.addEventListener('wheel',onWheel,{passive:false});
 return{setEnabled,dispose};
}
