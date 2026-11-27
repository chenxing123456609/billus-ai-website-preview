import {ref,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {locale} from './i18n.js';
export default {
 emits:['recharge'],
 setup(){
  const root=ref(null),progress=ref(0),phase=ref('waiting'),wide=ref(innerWidth>=1100);
  let frame=0,observer=null;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const finish=()=>{cancelAnimationFrame(frame);frame=0;observer?.disconnect();progress.value=1;phase.value='complete'};
  const play=()=>{
   if(phase.value!=='waiting')return;
   observer?.disconnect();
   if(reduced.matches||document.hidden){finish();return}
   phase.value='running';let startedAt=null;
   const advance=now=>{
    if(!root.value)return;
    if(startedAt===null)startedAt=now;
    progress.value=Math.min(1,(now-startedAt)/900);
    if(progress.value<1)frame=requestAnimationFrame(advance);else finish();
   };
   frame=requestAnimationFrame(advance);
  };
  const onMotion=()=>{if(reduced.matches)finish()};
  const onVisibility=()=>{if(document.hidden&&phase.value==='running')finish()};
  const onResize=()=>{wide.value=innerWidth>=1100};
  onMounted(()=>{
   addEventListener('resize',onResize);reduced.addEventListener('change',onMotion);document.addEventListener('visibilitychange',onVisibility);
   if(reduced.matches||!('IntersectionObserver' in window)){finish();return}
   observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=.22))play()},{threshold:.22,rootMargin:'0px 0px -48px 0px'});
   observer.observe(root.value.querySelector('.balance-scene'));
  });
  onBeforeUnmount(()=>{observer?.disconnect();cancelAnimationFrame(frame);removeEventListener('resize',onResize);reduced.removeEventListener('change',onMotion);document.removeEventListener('visibilitychange',onVisibility)});
  const copy=(zh,en)=>locale.value==='en'?en:zh;
  const cards=[{name:'WORKSPACE',en:'WORKSPACE',desc:'项目任务与方案交付',enDesc:'Projects and deliverables',image:'workspace-client-20261112.webp',icon:'brand-mark.webp',kind:'workspace'}, {name:'毕鲁斯网页端',en:'Billus Online',desc:'图片与视频在线创作',enDesc:'Create images and videos',image:'livingroom.webp',icon:'brand-mark.webp',kind:'web'}, {name:'Claude Code',en:'Claude Code',desc:'接入模型，辅助编程',enDesc:'Connect models. Build code.',icon:'model-brands/anthropic.png',kind:'claude'}, {name:'Codex',en:'Codex',desc:'接入模型，处理代码任务',enDesc:'Models for coding tasks',icon:'model-brands/openai.png',kind:'codex'}];
  const cardStyle=i=>{
   const q=Math.max(0,Math.min(1,(progress.value-i*.045)/.76));
   const e=q*q*(3-2*q);
   const w=wide.value?250:210,h=wide.value?370:310;
   // Uneven folder heights settle into aligned rows as the cards unfold.
   const stagger=[.08,-.06,-.15,.035][i]*h*(1-e);
   return {
    '--x':Math.round((i-1.5)*(42+68*e)*w/100)+'px',
    '--y':Math.round((-18-64*e)*h/100+stagger)+'px',
    '--r':((i-1.5)*12*(1-e))+'deg','--lift':e,
    '--mobile-x':((i%2-.5)*172*e+(i-1.5)*26*(1-e))+'px',
    '--mobile-y':(-100-e*(i<2?148:-62)+stagger*.55)+'px'
   };
  };
  return{root,progress,phase,finish,cards,copy,cardStyle};
 },
 template:`<section ref="root" class="shared-balance" aria-labelledby="shared-balance-title" :data-balance-state="phase" :style="{'--balance-progress':progress}" @focusin="finish" @pointerdown="finish">
 <div class="balance-sticky wrap">
 <header class="balance-heading"><h2 id="shared-balance-title" class="product-section-title">{{copy('一次充值，多端通用','One balance. Across your tools.').replace(/[，,]/g,' ')}}</h2><p>{{copy('在毕鲁斯充值，让创作、项目与代码任务共用同一账户余额。','Top up with Billus. Use one balance for creative work, projects and code.')}}</p></header>
 <div class="balance-scene">
 <div class="balance-folder-back" aria-hidden="true"><span></span></div>
 <article v-for="(card,i) in cards" :key="card.kind" class="balance-card" :class="'balance-card-'+card.kind" :style="cardStyle(i)">
 <div class="balance-card-top"><img :src="'/billus-ai-website-preview/assets/'+card.icon" alt="" width="28" height="28"><span>0{{i+1}}</span></div>
 <h3>{{copy(card.name,card.en)}}</h3><p>{{copy(card.desc,card.enDesc)}}</p>
 <div v-if="card.image" class="balance-card-photo"><img :src="'/billus-ai-website-preview/assets/'+card.image" alt="" loading="lazy"></div>
 <div v-else class="balance-code-art" aria-hidden="true"><div class="balance-terminal-dots">● ● ●</div><code><span>~/billus/project</span><br><b>›</b> {{card.kind==='claude'?'claude':'codex'}}<br><i>▰ ▰▰▰ ▰▰</i><br>▰▰▰ ▰▰ ▰▰▰<br>▰▰ ▰▰▰▰<br><em>✓ Connected</em></code></div>
 <span class="balance-card-status"><i></i>{{copy('共享账户余额','Shared balance')}}</span>
 </article>
 <div class="balance-folder-front"><div class="balance-folder-label"><span>BILLUS</span><strong>{{copy('统一余额','One balance')}}</strong><small>{{copy('连接每一种可能','Connected possibilities')}}</small></div>
 <button class="balance-recharge" type="button" @click="$emit('recharge')" :aria-label="copy('前往充值','Top up balance')"><span>{{copy('前往充值','Top up')}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></div>
 </div>
 <p class="balance-footnote">{{copy('Claude Code、Codex 需完成接入配置；余额用于毕鲁斯模型调用服务，不等同于第三方官方订阅。','Claude Code and Codex require connection setup. Balance covers Billus model calls, not third-party subscriptions.')}}</p>
 </div></section>`
};
