import {ref,computed,nextTick,watch,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {locale,t} from './i18n.js';

// Keep final layout reserved while the wordmark, typing and details play once.
export function useHomeBrandEntrance(){
 const root=ref(null),phase=ref('waiting'),typed=ref('');
 const slogan=computed(()=>t('把未来，做成生活。'));
 let observer=null,motionQuery=null,animations=[],frame=0,typeDone=null;
 let mounted=false,disposed=false,inView=false,generation=0;
 function cancel(){
  cancelAnimationFrame(frame);frame=0;
  if(typeDone){const done=typeDone;typeDone=null;done(false);}
  for(const animation of animations)animation.cancel();
  animations=[];
 }
 function finish(){
  ++generation;cancel();
  if(!disposed){typed.value=slogan.value;phase.value='complete';}
 }
 function valid(run,hero){return !disposed&&run===generation&&root.value===hero;}
 async function playAnimation(element,keyframes,options){
  const animation=element.animate(keyframes,{fill:'both',...options});
  animations.push(animation);
  try{await animation.finished;return true;}catch{return false;}
 }
 function typeSlogan(run,hero){
  const letters=Array.from(slogan.value),pace=locale.value==='en'?36:130;
  return new Promise(resolve=>{
   let started=null;typeDone=resolve;
   function advance(time){
    if(!valid(run,hero)){typeDone=null;resolve(false);return;}
    if(started===null)started=time;
    const count=Math.min(letters.length,Math.floor((time-started)/pace));
    typed.value=letters.slice(0,count).join('');
    if(count<letters.length)frame=requestAnimationFrame(advance);
    else{frame=0;typeDone=null;resolve(true);}
   }
   frame=requestAnimationFrame(advance);
  });
 }
 async function start(){
  const hero=root.value;
  if(!mounted||disposed||!hero||document.hidden||phase.value!=='waiting')return;
  if(motionQuery.matches||innerHeight<480){finish();return;}
  const run=++generation;phase.value='preparing';
  try{
   await nextTick();await document.fonts.ready;
   if(!valid(run,hero))return;
   const wordmark=hero.querySelector('.home-closing-wordmark');
   const heading=hero.querySelector('#about-title');
   if(!wordmark?.animate||!heading){finish();return;}
   const bounds=hero.getBoundingClientRect(),word=wordmark.getBoundingClientRect();
   if(!word.width||!word.height||!bounds.height){finish();return;}
   const scale=Math.max(1,Math.min(5,240/parseFloat(getComputedStyle(wordmark).fontSize),(bounds.width-48)/word.width,bounds.height*.66/word.height));
   const x=bounds.left+bounds.width/2-(word.left+word.width/2);
   const y=bounds.top+bounds.height*.56-(word.top+word.height/2);
   const initial='translate3d('+x+'px,'+y+'px,0) scale('+scale+')';
   phase.value='brand';
   const brandDone=await playAnimation(wordmark,[
    {transform:initial,opacity:0,offset:0},
    {transform:initial,opacity:1,offset:.12},
    {transform:initial,opacity:1,offset:.22},
    {transform:'none',opacity:1,offset:1}
   ],{duration:2300,easing:'ease-in-out'});
   if(!brandDone||!valid(run,hero))return;
   phase.value='typing';
   if(!await typeSlogan(run,hero)||!valid(run,hero))return;
   phase.value='lifting';
   const lift=parseFloat(getComputedStyle(hero).getPropertyValue('--home-brand-lift'))||56;
   const lifted=await playAnimation(heading,[{transform:'translateY('+lift+'px)'},{transform:'none'}],{duration:650,easing:'ease-out'});
   if(!lifted||!valid(run,hero))return;
   phase.value='revealing';
   await Promise.all([...hero.querySelectorAll('.home-brand-detail')].map((element,index)=>playAnimation(element,[
    {opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}
   ],{duration:620,delay:index*90,easing:'ease-out'})));
   if(valid(run,hero))finish();
  }catch{if(valid(run,hero))finish();}
 }
 function observe(){
  observer?.disconnect();observer=null;inView=false;
  ++generation;cancel();typed.value='';phase.value='waiting';
  if(!mounted||!root.value)return;
  if(motionQuery.matches||innerHeight<480||!('IntersectionObserver' in window)){finish();return;}
  const target=root.value.querySelector('.about-invitation-inner');
  const ratio=Math.min(.98,Math.max(.25,(innerHeight-96)/Math.max(target.getBoundingClientRect().height,1)*.85));
  observer=new IntersectionObserver(entries=>{
   inView=entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=ratio-.001);
   if(inView)start();
  },{threshold:[0,ratio],rootMargin:'0px 0px -64px 0px'});
  observer.observe(target);
 }
 function visibilityChange(){
  if(document.hidden&&phase.value!=='waiting'&&phase.value!=='complete')finish();
  else if(!document.hidden&&inView)start();
 }
 function motionChange(){if(motionQuery.matches)finish();}
 function resize(){if(phase.value!=='waiting'&&phase.value!=='complete')finish();}
 watch(root,observe,{flush:'post'});
 watch(locale,()=>{if(phase.value==='waiting')typed.value='';else finish();});
 onMounted(()=>{
  mounted=true;motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
  motionQuery.addEventListener('change',motionChange);
  document.addEventListener('visibilitychange',visibilityChange);window.addEventListener('resize',resize);
  observe();
 });
 onBeforeUnmount(()=>{
  disposed=true;++generation;cancel();observer?.disconnect();
  motionQuery?.removeEventListener('change',motionChange);
  document.removeEventListener('visibilitychange',visibilityChange);window.removeEventListener('resize',resize);
 });
 return{root,phase,typed,finish};
}
