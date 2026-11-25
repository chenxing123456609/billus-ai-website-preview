import {ref,computed,watch,onMounted,onBeforeUnmount,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

// A full-viewport gallery. Autoplay runs only while the gallery is in view.
// Manual paging resets the interval; keyboard focus pauses until focus leaves.
export function useSceneCarousel({page,activeIndex,sceneCount}) {
  const root=ref(null),paused=ref(false),visible=ref(false),reduced=ref(false),hidden=ref(false);
  const playing=computed(()=>page.value==='home'&&visible.value&&!paused.value&&!reduced.value&&!hidden.value);
  let timer=null,observer=null,motionQuery=null,touchStart=null;
  function stopTimer(){if(timer){clearInterval(timer);timer=null;}}
  function restartTimer(){
    stopTimer();
    if(playing.value)timer=setInterval(()=>{activeIndex.value=(activeIndex.value+1)%sceneCount;},2400);
  }
  function observe(){
    observer?.disconnect();observer=null;visible.value=false;
    if(page.value!=='home'||!root.value)return;
    if(!('IntersectionObserver' in window)){visible.value=true;return;}
    observer=new IntersectionObserver(entries=>{
      visible.value=entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=.45);
    },{threshold:[0,.45,.75]});
    observer.observe(root.value);
  }
  function onVisibility(){hidden.value=document.hidden;}
  function onMotion(){reduced.value=motionQuery.matches;}
  function select(index,focus=false){
    activeIndex.value=(index+sceneCount)%sceneCount;
    paused.value=focus||!!root.value?.querySelector(':focus-visible');
    restartTimer();
    if(focus)nextTick(()=>root.value?.querySelector('[data-scene-index="'+activeIndex.value+'"]')?.focus());
  }
  function next(){select(activeIndex.value+1);}
  function onKeydown(event){
    const moves={ArrowLeft:activeIndex.value-1,ArrowRight:activeIndex.value+1,Home:0,End:sceneCount-1};
    if(!Object.hasOwn(moves,event.key))return;
    event.preventDefault();
    select(moves[event.key],true);
  }
  function onFocusIn(event){
    paused.value=!!event.target.matches?.(':focus-visible');
  }
  function onFocusOut(event){if(!event.currentTarget.contains(event.relatedTarget))paused.value=false;}
  function onTouchStart(event){
    const touch=event.changedTouches[0];
    touchStart=touch?{x:touch.clientX,y:touch.clientY}:null;
  }
  function onTouchEnd(event){
    const touch=event.changedTouches[0];
    if(!touchStart||!touch)return;
    const dx=touch.clientX-touchStart.x,dy=touch.clientY-touchStart.y;
    if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.4)select(activeIndex.value+(dx<0?1:-1));
    touchStart=null;
  }
  watch(playing,restartTimer);
  watch([page,root],observe,{flush:'post'});
  onMounted(()=>{
    motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
    onMotion();onVisibility();observe();
    motionQuery.addEventListener('change',onMotion);
    document.addEventListener('visibilitychange',onVisibility);
  });
  onBeforeUnmount(()=>{
    stopTimer();observer?.disconnect();
    motionQuery?.removeEventListener('change',onMotion);
    document.removeEventListener('visibilitychange',onVisibility);
  });
  return{root,paused,playing,reduced,select,next,onKeydown,onFocusIn,onFocusOut,onTouchStart,onTouchEnd};
}
