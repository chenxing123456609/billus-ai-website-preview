import {ref,computed,watch,onMounted,onBeforeUnmount,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {homeAdvantages as cards} from './home-advantages-content.js';
import {t} from './i18n.js';

// Five visible cards move right. One offscreen buffer enters from the left.
export default{
 setup(){
  const root=ref(null),index=ref(0),phase=ref('holding'),shift=ref(0),intro=ref('pending');
  const visible=ref(false),hidden=ref(document.hidden),reduced=ref(false),focused=ref(false),hovered=ref(false);
  let serial=0,timer=null,observer=null,motionQuery=null,touchStart=null,introTimer=null,introFrame=0;
  const createQueue=center=>Array.from({length:6},(_,slot)=>({key:serial++,item:(center+3-slot+cards.length)%cards.length}));
  const queue=ref(createQueue(0));
  const covers=computed(()=>queue.value.map((cover,slot)=>({...cards[cover.item],...cover,position:slot-3+shift.value})));
  const current=computed(()=>cards[index.value]);
  const playing=computed(()=>intro.value==='ready'&&visible.value&&!hidden.value&&!reduced.value&&!focused.value&&!hovered.value);
  function completeIntro(){cancelAnimationFrame(introFrame);clearTimeout(introTimer);intro.value='ready';}
  function startIntro(){
   if(intro.value!=='pending')return;
   if(reduced.value){completeIntro();return;}
   introFrame=requestAnimationFrame(()=>{introFrame=requestAnimationFrame(()=>{
    intro.value='spreading';introTimer=setTimeout(()=>{intro.value='ready';},750);
   });});
  }
  function stop(){clearTimeout(timer);timer=null;}
  function schedule(){
   stop();if(!playing.value)return;
   timer=setTimeout(()=>phase.value==='moving'?finishMove():beginMove(),phase.value==='moving'?500:2800);
  }
  function beginMove(){
   shift.value=1;phase.value='moving';index.value=(index.value+1)%cards.length;schedule();
  }
  function finishMove(){
   const nextItem=(queue.value[0].item+1)%cards.length;
   queue.value=[{key:serial++,item:nextItem},...queue.value.slice(0,-1)];
   shift.value=0;phase.value='holding';schedule();
  }
  function cardStyle(position){
   const distance=Math.abs(position),sign=Math.sign(position);
   const x=distance===0?'0px':`calc((var(--center-width) / 2 + var(--card-gap) * ${distance} + var(--side-width) * ${distance-.5}) * ${sign})`;
   return{'--card-x':intro.value==='pending'?'0px':x,'--intro-delay':intro.value==='spreading'?distance*90+'ms':'0ms',opacity:intro.value==='pending'?(position===0?1:0):(distance>2?0:1),'z-index':position===0?3:1};
  }
  function select(i,focus=false){
   completeIntro();index.value=(i+cards.length)%cards.length;queue.value=createQueue(index.value);shift.value=0;phase.value='holding';schedule();
   if(matchMedia('(min-width: 801px)').matches)root.value?.scrollIntoView({block:'start',behavior:reduced.value?'instant':'smooth'});
   if(focus)nextTick(()=>root.value?.querySelectorAll('[role="tab"]')[index.value]?.focus());
  }
  function keydown(event){
   if(event.ctrlKey||event.metaKey||event.altKey)return;
   const next={ArrowRight:index.value+1,ArrowDown:index.value+1,ArrowLeft:index.value-1,ArrowUp:index.value-1,Home:0,End:cards.length-1}[event.key];
   if(next===undefined)return;event.preventDefault();select(next,true);
  }
  function focusIn(event){focused.value=!!event.target.matches?.(':focus-visible');}
  function focusOut(event){if(!root.value?.contains(event.relatedTarget))focused.value=false;}
  function pointerEnter(event){if(event.pointerType==='mouse'){hovered.value=true;if(phase.value==='moving')finishMove();}}
  function pointerLeave(){hovered.value=false;}
  function touchBegin(event){const point=event.changedTouches[0];touchStart=point?{x:point.clientX,y:point.clientY}:null;}
  function touchEnd(event){
   const point=event.changedTouches[0];if(!touchStart||!point)return;
   const x=point.clientX-touchStart.x,y=point.clientY-touchStart.y;
   if(Math.abs(x)>45&&Math.abs(x)>Math.abs(y)*1.4)select(index.value+(x>0?1:-1));
   touchStart=null;
  }
  function motionChange(){reduced.value=motionQuery.matches;if(reduced.value){completeIntro();if(phase.value==='moving')finishMove();}}
  function visibilityChange(){hidden.value=document.hidden;}
  watch(playing,schedule);
  watch([visible,hidden],()=>{if(visible.value&&!hidden.value)startIntro();});
  onMounted(()=>{
   motionQuery=matchMedia('(prefers-reduced-motion: reduce)');motionChange();
   motionQuery.addEventListener('change',motionChange);document.addEventListener('visibilitychange',visibilityChange);
   if('IntersectionObserver' in window){
    observer=new IntersectionObserver(entries=>{visible.value=entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=.35);},{threshold:[0,.35,.7]});observer.observe(root.value);
   }else visible.value=true;
  });
  onBeforeUnmount(()=>{stop();clearTimeout(introTimer);cancelAnimationFrame(introFrame);observer?.disconnect();motionQuery?.removeEventListener('change',motionChange);document.removeEventListener('visibilitychange',visibilityChange);});
  return{root,cards,covers,current,index,phase,intro,playing,t,cardStyle,select,keydown,focusIn,focusOut,pointerEnter,pointerLeave,touchBegin,touchEnd};
 },
 template:`<section ref="root" class="home-advantages" id="solutions" aria-labelledby="advantages-title" :data-phase="phase" :data-intro="intro" :data-playing="playing" @focusin="focusIn" @focusout="focusOut">
  <div class="advantages-layout">
   <header class="advantages-heading">
    <h2 id="advantages-title">{{t('以行业积淀')}} <span>{{t('驱动持续创新')}}</span></h2>
    <p class="advantages-intro">{{t('以行业理解连接技术、数据与交付')}}</p>
   </header>
   <div class="advantages-stage" :aria-label="t('核心优势图片')" @touchstart.passive="touchBegin" @touchend.passive="touchEnd">
    <article v-for="cover in covers" :key="cover.key" class="advantage-cover" :class="[{'is-center':cover.position===0},'advantage-cover-'+cover.id]" :style="cardStyle(cover.position)" :id="cover.position===0?'advantage-current':'advantage-cover-'+cover.key" role="tabpanel" :aria-labelledby="'advantage-tab-'+cover.id" :aria-hidden="Math.abs(cover.position)>2" @pointerenter="cover.position===0&&pointerEnter($event)" @pointerleave="pointerLeave">
     <button class="advantage-image-action" type="button" :aria-label="t(cover.title)" :tabindex="Math.abs(cover.position)<=2?0:-1" @click="select(cover.item)" @pointerenter="pointerEnter($event)" @pointerleave="pointerLeave"></button>
     <img :src="cover.image" :alt="cover.position===0?t(cover.alt):''" width="800" height="800" loading="lazy" decoding="async">
     <div class="advantage-cover-top" aria-hidden="true"><span>BILLUS</span><span>{{String(cover.item+1).padStart(2,'0')}} / 05</span></div>
     <div class="advantage-cover-copy"><span class="advantage-cover-tag">{{cover.tag}}</span><h3>{{t(cover.title)}}</h3><p>{{t(cover.description)}}</p><span class="advantage-keywords">{{t(cover.keywords)}}</span></div>
    </article>
   </div>
   <p class="advantages-mobile-description" :aria-live="playing?'off':'polite'">{{t(current.description)}}</p>
   <div class="advantages-nav" role="tablist" :aria-label="t('选择核心优势')" aria-orientation="horizontal" @keydown="keydown">
    <button v-for="(card,i) in cards" :key="card.id" type="button" role="tab" :id="'advantage-tab-'+card.id" :aria-label="t(card.title)" aria-controls="advantage-current" :aria-selected="index===i" :tabindex="index===i?0:-1" @click="select(i)"><span class="advantage-nav-number" aria-hidden="true">{{String(i+1).padStart(2,'0')}}</span><span class="advantage-nav-name">{{t(card.title)}}</span><span class="advantage-nav-mark" aria-hidden="true"></span></button>
   </div>
  </div>
 </section>`
};
