import {ref,nextTick,watch,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

// Animate the supplied posters from one tilted stack into their CSS positions.
// CSS owns the final layout, so interruption and viewport changes remain stable.
export function useOpenModelHeroEntrance(){
 const root=ref(null),phase=ref('idle'),ambientActive=ref(false);
 const tilts=[-13,10,-7,16,-17,8,12,-10];
 const jitters=[[-18,8],[12,-12],[-8,-20],[22,10],[-20,-7],[8,20],[18,-18],[-13,18]];
 let animations=[],observer=null,motionQuery=null,mounted=false,disposed=false,inView=false,generation=0;
 function cancelAnimations(){for(const animation of animations)animation.cancel();animations=[];}
 function finish(){++generation;cancelAnimations();if(!disposed){phase.value='complete';updateAmbient();}}
 function updateAmbient(){ambientActive.value=inView&&!!root.value&&!document.hidden&&!motionQuery?.matches&&phase.value==='complete';}
 function onMotion(){if(motionQuery.matches)finish();updateAmbient();}
 function onVisibility(){if(document.hidden)finish();updateAmbient();}
 function onResize(){if(phase.value==='preparing'||phase.value==='running')finish();}
 async function start(){
  if(!mounted||disposed)return;
  const run=++generation;
  cancelAnimations();observer?.disconnect();observer=null;ambientActive.value=false;inView=false;
  const hero=root.value;
  if(!hero){phase.value='idle';return;}
  const rect=hero.getBoundingClientRect();
  inView=rect.bottom>0&&rect.top<innerHeight;
  if('IntersectionObserver' in window){
   observer=new IntersectionObserver(entries=>{inView=entries.some(entry=>entry.isIntersecting);updateAmbient();},{threshold:.05});
   observer.observe(hero);
  }
  if(motionQuery.matches||document.hidden){phase.value='complete';return;}
  phase.value='preparing';
  await nextTick();
  const posters=[...hero.querySelectorAll('.open-model-poster')];
  const images=posters.map(poster=>poster.querySelector('img'));
  try{
   await Promise.all([document.fonts.ready,...images.map(image=>image.decode().catch(()=>{}))]);
   if(run!==generation||disposed||hero!==root.value)return;
   const field=hero.querySelector('.open-model-poster-field');
   if(!field||!posters.length||!posters[0].animate){finish();return;}
   const centerX=field.clientWidth/2,centerY=field.clientHeight*.45;
   const cardAnimations=posters.map((poster,index)=>{
    const x=centerX-poster.offsetLeft-poster.offsetWidth/2+jitters[index][0];
    const y=centerY-poster.offsetTop-poster.offsetHeight/2+jitters[index][1];
    const style=getComputedStyle(poster);
    const angle=style.getPropertyValue('--poster-angle').trim()||'0deg';
    const finalOpacity=style.opacity;
    const initial='translate3d('+x+'px,'+y+'px,0) rotate('+tilts[index]+'deg) scale(.88)';
    return poster.animate([
     {transform:initial,opacity:.94,offset:0},
     {transform:initial,opacity:.94,offset:.12},
     {transform:'translate3d(0,0,0) rotate('+angle+') scale(1)',opacity:finalOpacity,offset:1}
    ],{duration:1800,delay:index*35,easing:'cubic-bezier(.2,.65,.2,1)',fill:'both'});
   });
   const copyAnimations=[...hero.querySelector('.open-model-hero-copy').children].map((element,index)=>element.animate([
    {opacity:0,transform:'translate3d(0,16px,0)'},
    {opacity:1,transform:'translate3d(0,0,0)'}
   ],{delay:650+index*110,duration:1250,easing:'ease-out',fill:'both'}));
   animations=[...cardAnimations,...copyAnimations];
   phase.value='running';
   await Promise.allSettled(animations.map(animation=>animation.finished));
   if(run!==generation||disposed)return;
   cancelAnimations();phase.value='complete';updateAmbient();
  }catch{finish();}
 }
 watch(root,start,{flush:'post'});
 onMounted(()=>{
  mounted=true;motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
  motionQuery.addEventListener('change',onMotion);
  document.addEventListener('visibilitychange',onVisibility);
  window.addEventListener('resize',onResize);
  start();
 });
 onBeforeUnmount(()=>{
  disposed=true;++generation;cancelAnimations();observer?.disconnect();
  motionQuery?.removeEventListener('change',onMotion);
  document.removeEventListener('visibilitychange',onVisibility);
  window.removeEventListener('resize',onResize);
 });
 return{root,phase,ambientActive,finish};
}
