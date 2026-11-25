// Follow scroll with a gentle start, stop and frame-rate-independent damping.
export function createHeaderScroll(){
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let header=null,frame=0,lastValue='',current=null,previousTime=null;
 function update(time){
  frame=0;
  if(!header?.isConnected){
   header=document.querySelector('.site-header');lastValue='';current=null;previousTime=null;
  }
  if(!header)return;
  // Keep the first two home screens spread out; gather only on the way to the third.
  const homeSections=document.querySelectorAll('.home-page>section');
  let start=0,end=180;
  if(homeSections.length>=3){
   const headerHeight=header.getBoundingClientRect().height;
   start=Math.max(0,homeSections[1].getBoundingClientRect().top+scrollY-headerHeight);
   end=Math.max(start+1,homeSections[2].getBoundingClientRect().top+scrollY-headerHeight);
  }
  const progress=Math.min(Math.max((window.scrollY-start)/(end-start),0),1);
  const target=1-progress*progress*(3-2*progress);
  if(current===null||reduced.matches)current=target;
  else{
   const elapsed=previousTime===null?1000/60:Math.min(time-previousTime,64);
   current+=(target-current)*(1-Math.exp(-elapsed/90));
   if(Math.abs(target-current)<.0005)current=target;
  }
  const value=current.toFixed(4);
  if(value!==lastValue){
   header.style.setProperty('--header-expand',value);
   lastValue=value;
  }
  if(current!==target){previousTime=time;frame=requestAnimationFrame(update);}
  else previousTime=null;
 }
 function refresh(){if(!frame)frame=requestAnimationFrame(update);}
 window.addEventListener('scroll',refresh,{passive:true});
 window.addEventListener('resize',refresh,{passive:true});
 reduced.addEventListener('change',refresh);
 function dispose(){
  window.removeEventListener('scroll',refresh);
  window.removeEventListener('resize',refresh);
  reduced.removeEventListener('change',refresh);
  if(frame)cancelAnimationFrame(frame);
 }
 return{refresh,dispose};
}
