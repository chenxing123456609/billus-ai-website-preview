import {ref,computed,watch,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {homeApiModels} from './home-api-content.js';
import {t} from './i18n.js';

const modelNames=[
 ['Claude Sonnet 5','gemini-3-pro-image-preview','gpt-6.2-astra','Claude Opus 5.5'],
 ['gemini-nano-banana-2.1','gpt-6.1-sol','Claude Haiku 5.5','gpt-6-astra'],
];
const rows=modelNames.map(names=>names.map(name=>homeApiModels.find(model=>model.name===name)).filter(Boolean));

export default {
 setup(){
  const root=ref(null),paused=ref(false),hovered=ref(false),visible=ref(false),hidden=ref(document.hidden);
  const motion=matchMedia('(prefers-reduced-motion: reduce)'),reduced=ref(motion.matches);
  const playing=computed(()=>visible.value&&!paused.value&&!hovered.value&&!hidden.value&&!reduced.value);
  let observer,resizeObserver,frame=0,layout=[];
  // Keep the arc anchored to the viewport while the original tracks move underneath it.
  function drawArc(){
   for(const row of layout){
    const progress=row.track.getAnimations()[0]?.effect?.getComputedTiming().progress??0;
    const drift=-row.loopWidth*progress,half=row.width/2;
    const strength=Math.min(1,row.width/700),direction=row.index===0?1:-1;
    for(const card of row.cards){
     const center=card.center+drift;
     if(center < -card.width || center > row.width+card.width) continue;
     const position=Math.max(-1,Math.min(1,(center-half)/half));
     const edge=position*position,scale=1-.18*(1-edge)*strength;
     const lift=direction*(8-18*edge)*strength;
     const angle=Math.max(-5,Math.min(5,direction*-36*position/half*180/Math.PI*strength));
     card.element.style.transform=`translate3d(0,${lift.toFixed(2)}px,0) rotate(${angle.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
    }
   }
  }
  function animateArc(){
   drawArc();
   frame=playing.value?requestAnimationFrame(animateArc):0;
  }
  function refreshArc(){
   cancelAnimationFrame(frame);frame=0;
   const viewport=root.value?.querySelector('.home-api-model-viewport');
   if(!viewport) return;
   const elements=[...viewport.querySelectorAll('.home-api-model-card')];
   for(const element of elements) element.style.transform='';
   const width=viewport.clientWidth;
   layout=[...viewport.querySelectorAll('.home-api-model-track')].map((track,index)=>{
    const left=track.getBoundingClientRect().left;
    return{track,index,width,loopWidth:track.offsetWidth/2,cards:[...track.querySelectorAll('.home-api-model-card')].map(element=>({element,width:element.offsetWidth,center:element.getBoundingClientRect().left-left+element.offsetWidth/2}))};
   });
   drawArc();
   if(playing.value) frame=requestAnimationFrame(animateArc);
  }
  watch([playing,reduced],refreshArc,{flush:'post'});
  function onVisibility(){hidden.value=document.hidden;}
  function onMotion(){reduced.value=motion.matches;}
  onMounted(()=>{
   if('IntersectionObserver' in window){
    observer=new IntersectionObserver(([entry])=>visible.value=entry.isIntersecting);
    observer.observe(root.value);
   }else visible.value=true;
   resizeObserver=new ResizeObserver(refreshArc);
   resizeObserver.observe(root.value.querySelector('.home-api-model-viewport'));
   refreshArc();
   document.addEventListener('visibilitychange',onVisibility);
   motion.addEventListener('change',onMotion);
  });
  onBeforeUnmount(()=>{observer?.disconnect();resizeObserver?.disconnect();cancelAnimationFrame(frame);document.removeEventListener('visibilitychange',onVisibility);motion.removeEventListener('change',onMotion);});
  return{root,rows,models:rows.flat(),paused,hovered,playing,reduced,t};
 },
 template:`<section ref="root" class="home-api-model-flow" :data-playing="playing" :data-reduced="reduced" :aria-label="t('模型服务展示')" @mouseenter="hovered=true" @mouseleave="hovered=false">
  <div class="home-api-model-viewport" aria-hidden="true">
   <div class="home-api-model-row" v-for="(row,index) in rows" :key="index">
    <div class="home-api-model-track" :style="{'--model-flow-duration':index?'72s':'60s','--model-flow-delay':index?'-13s':'-3s'}">
     <div class="home-api-model-group" v-for="copy in 2" :key="copy">
      <div class="home-api-model-card" v-for="(model,modelIndex) in row.concat(row)" :key="modelIndex"><img :src="model.icon" alt="" width="38" height="38"><span>{{model.brand}}</span><strong>{{model.name}}</strong></div>
     </div>
    </div>
   </div>
  </div>
  <ul class="sr-only"><li v-for="model in models" :key="model.name">{{model.name}}</li></ul>
  <button v-if="!reduced" type="button" class="home-api-model-toggle" :aria-pressed="paused" :aria-label="t(paused?'继续模型滚动':'暂停模型滚动')" :title="t(paused?'继续模型滚动':'暂停模型滚动')" @click="paused=!paused"><svg viewBox="0 0 24 24" aria-hidden="true"><path v-if="paused" d="m9 5 10 7-10 7Z"/><path v-else d="M8 5v14M16 5v14"/></svg></button>
 </section>`,
};
