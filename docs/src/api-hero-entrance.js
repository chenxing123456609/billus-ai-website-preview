import {ref,nextTick,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

// Play once per page entry. The decorative mark never intercepts page controls.
export function useApiHeroEntrance(){
 const root=ref(null),phase=ref('idle');
 let animations=[],motionQuery=null,disposed=false;
 function finish(){
  for(const animation of animations)animation.cancel();
  animations=[];
  if(!disposed)phase.value='complete';
 }
 function onMotion(){if(motionQuery.matches)finish();}
 function onVisibility(){if(document.hidden)finish();}
 onMounted(async()=>{
  motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
  motionQuery.addEventListener('change',onMotion);
  document.addEventListener('visibilitychange',onVisibility);
  if(motionQuery.matches||document.hidden||!root.value){finish();return;}
  phase.value='running';
  await nextTick();
  const hero=root.value;
  const flyer=hero?.querySelector('.api-code-flyer');
  const title=hero?.querySelector('#api2-title');
  const image=flyer?.querySelector('img');
  if(!flyer||!title||!flyer.animate){finish();return;}
  try{
   await Promise.all([image.decode(),document.fonts.ready]);
   if(disposed||phase.value!=='running')return;
   const bounds=hero.getBoundingClientRect(),heading=title.getBoundingClientRect();
   const textRange=document.createRange();
   textRange.selectNodeContents(title);
   const textBounds=textRange.getBoundingClientRect();
   flyer.style.top=(heading.top-bounds.top+(heading.height-flyer.offsetHeight)/2)+'px';
   const start=textBounds.left-bounds.left;
   const end=Math.max(start,textBounds.right-bounds.left-flyer.offsetWidth);
   const x=value=>'translate3d('+value+'px,0,0)';
   const clip=value=>'inset(0 '+Math.max(0,heading.right-value)+'px 0 0)';
   animations=[
    flyer.animate([
     {transform:x(start),opacity:0,offset:0},
     {transform:x(start+(end-start)*.1),opacity:1,offset:.1},
     {transform:x(start+(end-start)*.9),opacity:1,offset:.9},
     {transform:x(end),opacity:0,offset:1}
    ],{duration:1800,easing:'ease-in-out',fill:'both'}),
    title.animate([
     {clipPath:clip(textBounds.left)},
     {clipPath:clip(textBounds.right)}
    ],{duration:1800,easing:'ease-in-out',fill:'both'})
   ];
   await Promise.allSettled(animations.map(animation=>animation.finished));
   if(!disposed)finish();
  }catch{finish();}
 });
 onBeforeUnmount(()=>{
  disposed=true;finish();
  motionQuery?.removeEventListener('change',onMotion);
  document.removeEventListener('visibilitychange',onVisibility);
 });
 return{root,phase,finish};
}
