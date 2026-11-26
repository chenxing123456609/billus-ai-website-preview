import {apiPersonalSteps} from './api-square-content.js';
import {homeApiFeatures,homeApiPricing,homeApiModels} from './home-api-content.js';
import {apiFaq} from './products.js';
import {t} from './i18n.js';
import {useApiHeroEntrance} from './api-hero-entrance.js';
import SharedBalance from './SharedBalance.js';

const paths={
 code:'m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
 file:'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6',
 grid:'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
 screen:'M3 4h18v13H3zm5 17h8m-4-4v4',
 check:'m5 12 4 4L19 6',arrow:'M5 12h14m-5-5 5 5-5 5',
 arrowUpRight:'M7 17 17 7M7 7h10v10',
 chat:'M4 4h16v12H9l-5 4V4Z',
};
const ApiIcon={props:{name:String},setup(){return{paths}},template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]||paths.arrow"/></svg>'};

export default{
 components:{ApiIcon,SharedBalance},emits:['navigate','visit-api','contact'],
 setup(_,{emit}){
  const entrance=useApiHeroEntrance();
  return{heroRoot:entrance.root,introPhase:entrance.phase,finishHeroEntrance:entrance.finish,t,apiPersonalSteps,apiFaq,homeApiFeatures,homeApiPricing,homeApiModels,
   navigate:(to,event)=>emit('navigate',to,event),visitApi:()=>emit('visit-api'),contact:()=>emit('contact')};
 },
 template:`
 <div class="api-square-page">
  <section ref="heroRoot" class="api2-hero" id="api-overview" aria-labelledby="api2-title" :data-intro-state="introPhase" @pointerdown="finishHeroEntrance" @focusin="finishHeroEntrance">
   <div v-if="introPhase==='running'" class="api-code-lane" aria-hidden="true"><div class="api-code-flyer"><img src="/billus-ai-website-preview/assets/api-code-green.svg" alt="" width="320" height="192" decoding="async"></div></div>
   <div class="wrap">
    <p class="api2-kicker">BILLUS AI MODEL SQUARE</p>
    <p class="api2-audience">{{t('开发者与设计师')}}<span>/</span>{{t('服务接入')}}<span>/</span>{{t('长期合作')}}</p>
    <h1 id="api2-title">{{t('对接模型服务，')}}<strong>{{t('从需求开始。')}}</strong></h1>
    <p class="api2-hero-lead">{{t('面向开发者与设计师，围绕开发与设计中的模型使用需求，提供服务接入、使用支持与合作沟通。')}}</p>
    <div class="api2-hero-actions"><button class="button button-green" @click="visitApi"><ApiIcon name="code"/>{{t('访问模型广场')}}</button><a class="button button-outline" href="#api-benefits">{{t('咨询了解更多')}}<ApiIcon name="arrow"/></a></div>
   </div>
  </section>

  <section class="api2-feature-section wrap" id="api-benefits" aria-labelledby="api2-benefits-title">
   <h2 id="api2-benefits-title" class="sr-only">{{t('我们的三个优势')}}</h2>
   <div class="home-api-features" role="group" :aria-label="t('API 服务优势')">
    <article class="home-api-feature" v-for="item in homeApiFeatures" :key="item.id" :class="'feature-'+item.id">
     <h3>{{t(item.title)}}</h3><p>{{t(item.body)}}</p>
     <div class="home-api-art" aria-hidden="true">
      <div v-if="item.id==='stability'" class="home-api-support-art"><div><ApiIcon name="code"/><span>Claude Code</span><ApiIcon name="check"/></div><div><ApiIcon name="code"/><span>Codex</span><ApiIcon name="check"/></div><small>{{t('接入与使用支持')}}</small></div>
      <div v-else-if="item.id==='pricing'" class="home-api-price-art"><span>{{t('官方价格')}}</span><strong>{{t(homeApiPricing.label)}}</strong><div><i></i><i></i><i></i></div></div>
      <div v-else class="home-api-invoice-art"><div class="home-api-invoice-paper"><ApiIcon name="file"/><span>{{t('专用发票')}}</span><i></i><i></i><i></i></div><span class="home-api-invoice-check"><ApiIcon name="check"/></span></div>
     </div>
    </article>
   </div>
   <p class="home-api-note">{{t('接入方式、服务支持范围、计价基准与开票条件，以双方确认的服务说明为准。')}}</p>
  </section>

  <section class="home-model-section" id="api-model-catalog" aria-labelledby="api-model-title">
   <div class="wrap">
    <header class="home-model-heading"><h2 id="api-model-title">{{t('接入你需要的模型')}}</h2><button class="text-link home-model-more" type="button" @click="visitApi">{{t('查看更多')}}<ApiIcon name="arrow"/></button><p>{{t('从 Claude、Gemini 到 GPT，按任务选择模型，沟通接入与使用方式。')}}</p></header>
    <ul class="home-model-grid" :aria-label="t('模型服务目录')">
     <li v-for="model in homeApiModels" :key="model.name">
      <button class="home-model-entry" type="button" :aria-label="t('咨询模型接入')+' '+model.name" @click="contact">
       <span class="home-model-brand" aria-hidden="true"><img :src="model.icon" alt="" width="40" height="40" loading="lazy" decoding="async"></span>
       <span class="home-model-copy"><span class="home-model-provider">{{model.brand}}</span><strong class="home-model-name">{{model.name}}</strong><span class="home-model-billing">{{t(model.billing)}}</span></span>
       <ApiIcon name="arrowUpRight" class="home-model-arrow"/>
      </button>
     </li>
    </ul>
    <p class="home-model-note">{{t('型号与计费以模型广场实际展示及开通说明为准。')}}</p>
   </div>
  </section>

  <shared-balance @recharge="visitApi"></shared-balance>

  <section class="api2-section api2-access-section" id="api-access" aria-labelledby="api2-access-title"><div class="wrap">
   <header class="api2-section-heading" id="api-guide"><div><p class="api2-kicker">FOR DEVELOPERS &amp; DESIGNERS</p><h2 id="api2-access-title">{{t('开发者与设计师')}}<span>{{t('从需求确认，到第一次接入验证。')}}</span></h2></div></header>
   <ol class="api2-step-grid"><li v-for="(item,i) in apiPersonalSteps" :key="item.kind">
    <span class="api2-step-number" aria-hidden="true">0{{i+1}}</span><h3>{{t(item.title)}}</h3><p>{{t(item.body)}}</p>
    <div class="api2-step-visual">
     <div v-if="item.kind==='needs'" class="api2-need-fields"><div><ApiIcon name="code"/><span>{{t('使用工具')}}</span><strong>Claude Code / Codex</strong></div><div><ApiIcon name="chat"/><span>{{t('使用场景')}}</span><strong>{{t('代码模型服务')}}</strong></div></div>
     <div v-else-if="item.kind==='billing'" class="api2-billing-fields"><span><ApiIcon name="check"/>{{t('模型')}}</span><span><ApiIcon name="check"/>{{t('计费单位')}}</span><span><ApiIcon name="check"/>{{t('结算规则')}}</span></div>
     <div v-else class="api2-access-fields"><code>BASE_URL<span>{{t('按服务说明填写')}}</span></code><code>MODEL_ID<span>{{t('按当前资料确认')}}</span></code><code>API_KEY<span>••••••••••</span></code></div>
    </div>
    <a v-if="item.to" class="button button-dark api2-step-action" :href="item.to" @click="navigate(item.to,$event)">{{t(item.action)}}<ApiIcon name="arrow"/></a><button v-else class="button button-dark api2-step-action" @click="contact">{{t(item.action)}}<ApiIcon name="arrow"/></button>
   </li></ol>
  </div></section>

  <section class="api2-section wrap" id="api-enterprise" aria-labelledby="api2-enterprise-title">
   <header class="api2-section-heading"><div><p class="api2-kicker">FOR ENTERPRISES</p><h2 id="api2-enterprise-title">{{t('企业客户')}}<span>{{t('围绕团队需求，沟通长期合作。')}}</span></h2></div></header>
   <div class="api2-enterprise-grid"><article><span class="api2-step-number" aria-hidden="true">01</span><h3>{{t('一对一沟通接入方案')}}</h3><p>{{t('说明团队场景、使用规模与系统要求，一起确认服务和接入方式。')}}</p><button class="api2-enterprise-qr" @click="contact" :aria-label="t('放大小客服助手二维码')"><img src="/billus-ai-website-preview/assets/support-qr.png" :alt="t('小客服助手二维码')" width="96" height="96" loading="lazy"></button><button class="button button-dark" @click="contact">{{t('联系接入顾问')}}<ApiIcon name="arrow"/></button></article>
   <article><span class="api2-step-number" aria-hidden="true">02</span><h3>{{t('团队采购与服务安排')}}</h3><p>{{t('结合用量、周期、权限与开票需求，确认具体合作条件。')}}</p><div class="api2-enterprise-terms"><span>{{t('用量')}}</span><span>{{t('周期')}}</span><span>{{t('条款')}}</span></div><button class="button button-dark" @click="contact">{{t('沟通长期合作')}}<ApiIcon name="arrow"/></button></article></div>
  </section>

  <section class="api2-section api2-faq-section" id="api-faq"><div class="wrap api2-faq-layout"><header><p class="api2-kicker">QUESTIONS & ANSWERS</p><h2>{{t('接入与合作常见问题')}}</h2><p>{{t('开始之前，先了解清楚。')}}</p></header><div class="api2-faq-list"><details v-for="item in apiFaq" :key="item.q"><summary>{{t(item.q)}}<span aria-hidden="true">+</span></summary><p>{{t(item.a)}}</p></details></div></div></section>
  <section class="api2-final"><div class="wrap"><p class="api2-kicker">BILLUS AI MODEL SQUARE</p><h2>{{t('让模型服务更容易接入，')}}<br>{{t('让你把精力留给开发与设计。')}}</h2><p>{{t('从实际需求出发，一起确认适合的接入方式与合作安排。')}}</p><button class="button button-green" @click="visitApi">{{t('访问模型广场')}}<ApiIcon name="arrow"/></button></div></section>
 </div>`
};
