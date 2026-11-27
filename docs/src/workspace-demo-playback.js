import {ref,computed,watch,onMounted,onBeforeUnmount,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

// One state drives the dialogue, attachment, preview and controls.
export function useWorkspaceDemo({page,slides,initialIndex=1,activePage='home',interval=1800}){
 const root=ref(null),video=ref(null),index=ref(initialIndex),paused=ref(false);
 const hovered=ref(false),focused=ref(false),visible=ref(false),hidden=ref(false),reduced=ref(false);
 const interacting=computed(()=>hovered.value||focused.value);
 const selected=computed(()=>slides[index.value]||slides[0]);
 const ignoredPauses=new WeakSet();
 let timer=null,observer=null,motionQuery=null,revision=0,alive=true,lastVideo=null,explicitVideoPlay=false;
 function clearTimer(){if(timer){clearTimeout(timer);timer=null;}}
 function pauseVideo(element=lastVideo){
  if(element&&!element.paused){ignoredPauses.add(element);element.pause();}
 }
 function advance(){
  explicitVideoPlay=false;
  index.value=(index.value+1)%slides.length;
 }
 function scrollSelectedThumb(){
  const track=root.value?.querySelector('.workspace-demo-thumbs');
  const button=track?.querySelector('[aria-pressed="true"]');
  if(!track||!button)return;
  const a=track.getBoundingClientRect(),b=button.getBoundingClientRect();
  if(b.right>a.right-4)track.scrollBy({left:b.right-a.right+6,behavior:reduced.value?'auto':'smooth'});
  else if(b.left<a.left+4)track.scrollBy({left:b.left-a.left-6,behavior:reduced.value?'auto':'smooth'});
 }
 async function sync(){
  const currentRevision=++revision;
  clearTimer();
  await nextTick();
  if(!alive||currentRevision!==revision)return;
  const currentVideo=video.value;
  if(lastVideo&&lastVideo!==currentVideo)pauseVideo(lastVideo);
  if(currentVideo&&lastVideo!==currentVideo){currentVideo.muted=true;lastVideo=currentVideo;}
  const enabled=page.value===activePage&&visible.value&&!hidden.value&&!paused.value;
  if(selected.value.type==='video'){
   if(!enabled||(reduced.value&&!explicitVideoPlay)){pauseVideo(currentVideo);return;}
   if(currentVideo){
    try{await currentVideo.play();}catch{/* Native controls remain available if autoplay is unavailable. */}
   }
  }else{
   pauseVideo();
   if(enabled&&!reduced.value&&!interacting.value)timer=setTimeout(advance,selected.value.duration||interval);
  }
 }
 function observe(){
  observer?.disconnect();observer=null;visible.value=false;
  if(page.value!==activePage||!root.value)return;
  if(!('IntersectionObserver' in window)){visible.value=true;return;}
  observer=new IntersectionObserver(entries=>{visible.value=entries.some(e=>e.isIntersecting&&e.intersectionRatio>=.15);},{threshold:[0,.15,.6]});
  observer.observe(root.value);
 }
 function select(next){
  pauseVideo();
  explicitVideoPlay=false;
  index.value=(next+slides.length)%slides.length;
  nextTick(scrollSelectedThumb);
  sync();
 }
 function toggle(){
  paused.value=!paused.value;
  if(!paused.value){hovered.value=false;focused.value=false;}
 }
 function pointerEnter(){hovered.value=true;}
 function pointerLeave(){hovered.value=false;}
 function focusIn(){focused.value=true;}
 function focusOut(event){if(!event.currentTarget.contains(event.relatedTarget))focused.value=false;}
 function keydown(event){
  if(event.ctrlKey||event.metaKey||event.altKey)return;
  const moves={ArrowLeft:index.value-1,ArrowRight:index.value+1,Home:0,End:slides.length-1};
  if(!Object.hasOwn(moves,event.key))return;
  event.preventDefault();
  select(moves[event.key]);
  nextTick(()=>root.value?.querySelectorAll('.workspace-demo-thumbs button')[index.value]?.focus());
 }
 function videoPlay(){
  explicitVideoPlay=true;
  if(paused.value)paused.value=false;
 }
 function videoPause(event){
  const element=event.currentTarget;
  if(ignoredPauses.has(element)){ignoredPauses.delete(element);return;}
  if(element===video.value&&!element.ended&&!hidden.value&&visible.value&&selected.value.type==='video')paused.value=true;
 }
 function videoEnded(){
  if(page.value===activePage&&!paused.value&&!reduced.value){
   hovered.value=false;focused.value=false;
   advance();
  }
 }
 function visibilityChange(){hidden.value=document.hidden;}
 function motionChange(){reduced.value=motionQuery.matches;explicitVideoPlay=false;sync();}
 watch([page,index,paused,hovered,focused,visible,hidden,reduced,video],sync,{flush:'post'});
 watch([page,root],observe,{flush:'post'});
 watch(index,()=>nextTick(scrollSelectedThumb),{flush:'post'});
 onMounted(()=>{
  motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
  motionChange();visibilityChange();observe();
  motionQuery.addEventListener('change',motionChange);
  document.addEventListener('visibilitychange',visibilityChange);
 });
 onBeforeUnmount(()=>{
  alive=false;++revision;clearTimer();pauseVideo();observer?.disconnect();
  motionQuery?.removeEventListener('change',motionChange);
  document.removeEventListener('visibilitychange',visibilityChange);
 });
 return{root,video,index,paused,interacting,selected,select,toggle,pointerEnter,pointerLeave,focusIn,focusOut,keydown,videoPlay,videoPause,videoEnded};
}
