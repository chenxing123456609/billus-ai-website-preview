import {ref,computed,watch,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

// A single index drives the feature heading, selected tab and panel content.
export function useWorkspaceFeatureCarousel({page,index,count,paused,durations=[]}){
 const root=ref(null),visible=ref(false),hovered=ref(false),focused=ref(false),hidden=ref(document.hidden),reduced=ref(false);
 const playing=computed(()=>page.value==='home'&&visible.value&&!paused.value&&!hovered.value&&!focused.value&&!hidden.value&&!reduced.value);
 let timer=null,observer=null,motionQuery=null;
 function clear(){if(timer){clearTimeout(timer);timer=null;}}
 function restart(){clear();if(playing.value)timer=setTimeout(()=>{index.value=(index.value+1)%count;},durations[index.value]||4200);}
 function observe(){
  observer?.disconnect();visible.value=false;
  if(page.value!=='home'||!root.value)return;
  if(!('IntersectionObserver' in window)){visible.value=true;return;}
  observer=new IntersectionObserver(entries=>{visible.value=entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=.2);},{threshold:[0,.2]});
  observer.observe(root.value);
 }
 function onMotion(){reduced.value=motionQuery.matches;}
 function onVisibility(){hidden.value=document.hidden;}
 function pointerEnter(){if(matchMedia('(hover:hover)').matches)hovered.value=true;}
 function pointerLeave(){hovered.value=false;}
 function focusIn(){focused.value=true;}
 function focusOut(event){if(!event.currentTarget.contains(event.relatedTarget))focused.value=false;}
 watch([playing,index],restart);
 watch([page,root],observe,{flush:'post'});
 onMounted(()=>{
  motionQuery=matchMedia('(prefers-reduced-motion: reduce)');onMotion();observe();
  motionQuery.addEventListener('change',onMotion);
  document.addEventListener('visibilitychange',onVisibility);
 });
 onBeforeUnmount(()=>{
  clear();observer?.disconnect();motionQuery?.removeEventListener('change',onMotion);
  document.removeEventListener('visibilitychange',onVisibility);
 });
 return{root,playing,pointerEnter,pointerLeave,focusIn,focusOut};
}
