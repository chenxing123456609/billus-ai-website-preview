import {ref,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';

export default{
 props:{before:String,after:String,beforeLabel:String,afterLabel:String},
 setup(){
  const root=ref(null),position=ref(0);
  let frame=0,motionQuery=null,hovered=false,focused=false,dragging=false;
  const clamp=value=>Math.max(0,Math.min(100,value));
  function stop(){if(frame){cancelAnimationFrame(frame);frame=0;}}
  function animate(from,duration,delay=0){
   stop();
   if(motionQuery?.matches){position.value=50;return;}
   const start=performance.now()+delay;
   function tick(now){
    const progress=Math.max(0,Math.min(1,(now-start)/duration));
    const eased=progress*progress*(3-2*progress);
    position.value=from+(100-from)*eased;
    if(progress<1)frame=requestAnimationFrame(tick);
    else frame=0;
   }
   frame=requestAnimationFrame(tick);
  }
  function setFromPointer(event){
   const bounds=root.value?.getBoundingClientRect();
   if(bounds?.width)position.value=clamp((event.clientX-bounds.left)/bounds.width*100);
  }
  function pointerEnter(event){
   if(event.pointerType!=='mouse'&&event.pointerType!=='pen')return;
   hovered=true;stop();setFromPointer(event);
  }
  function pointerMove(event){
   if(hovered||dragging)setFromPointer(event);
  }
  function resume(){
   if(hovered||focused||dragging||motionQuery?.matches)return;
   animate(position.value,Math.max(450,3200*(100-position.value)/100));
  }
  function pointerLeave(){hovered=false;resume();}
  function pointerDown(event){
   if(event.pointerType==='mouse')return;
   dragging=true;stop();setFromPointer(event);
   root.value?.setPointerCapture(event.pointerId);
  }
  function pointerUp(event){
   if(!dragging)return;
   dragging=false;
   if(root.value?.hasPointerCapture(event.pointerId))root.value.releasePointerCapture(event.pointerId);
   resume();
  }
  function keydown(event){
   const next={ArrowLeft:position.value-5,ArrowRight:position.value+5,Home:0,End:100}[event.key];
   if(next===undefined)return;
   event.preventDefault();stop();position.value=clamp(next);
  }
  function motionChange(){
   stop();
   if(motionQuery.matches)position.value=50;
   else if(!hovered&&!focused&&!dragging)animate(position.value,3200);
  }
  onMounted(()=>{
   motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
   motionQuery.addEventListener('change',motionChange);
   if(motionQuery.matches)position.value=50;
   else animate(0,3500,250);
  });
  onBeforeUnmount(()=>{stop();motionQuery?.removeEventListener('change',motionChange);});
  return{root,position,pointerEnter,pointerMove,pointerLeave,pointerDown,pointerUp,keydown,
   focus(event){focused=event.target.matches(':focus-visible');if(focused)stop();},blur(){focused=false;resume();}};
 },
 template:`<div class="workspace-demo-compare-shell"><div ref="root" class="workspace-demo-compare" role="slider" tabindex="0"
  :style="{'--compare-position':position+'%'}" :aria-label="beforeLabel+' / '+afterLabel"
  aria-valuemin="0" aria-valuemax="100" :aria-valuenow="Math.round(position)"
  :aria-valuetext="afterLabel+' '+Math.round(position)+'%'"
  @pointerenter="pointerEnter" @pointermove="pointerMove" @pointerleave="pointerLeave"
  @pointerdown="pointerDown" @pointerup="pointerUp" @pointercancel="pointerUp"
  @focus="focus" @blur="blur" @keydown="keydown">
  <img class="workspace-demo-compare-before" :src="before" alt="" width="1500" height="1125" aria-hidden="true">
  <div class="workspace-demo-compare-after"><img :src="after" alt="" width="1500" height="1125" aria-hidden="true"><span class="workspace-demo-compare-label" aria-hidden="true">{{afterLabel}}</span></div>
  <span class="workspace-demo-compare-before-region" aria-hidden="true"><span class="workspace-demo-compare-label workspace-demo-compare-label-before">{{beforeLabel}}</span></span>
  <span class="workspace-demo-compare-divider" aria-hidden="true"><span class="workspace-demo-compare-grip"></span></span>
 </div></div>`
};
