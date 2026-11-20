import {apiCapabilityCards,apiServiceCatalog,apiCompanionCards,apiPersonalSteps} from './api-square-content.js';
import {apiFaq} from './products.js';
import {t} from './i18n.js';

const paths={
 code:'m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
 file:'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6',
 grid:'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
 screen:'M3 4h18v13H3zm5 17h8m-4-4v4',
 check:'m5 12 4 4L19 6',arrow:'M5 12h14m-5-5 5 5-5 5',
 chat:'M4 4h16v12H9l-5 4V4Z',
};
const ApiIcon={props:{name:String},setup(){return{paths}},template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]||paths.arrow"/></svg>'};

export default{
 components:{ApiIcon},emits:['navigate','visit-api','contact'],
 setup(_,{emit}){
  return{t,apiCapabilityCards,apiServiceCatalog,apiCompanionCards,apiPersonalSteps,apiFaq,
   navigate:(to,event)=>emit('navigate',to,event),visitApi:()=>emit('visit-api'),contact:()=>emit('contact')};
 },
 template:`
 <div class="api-square-page">
  <section class="api2-hero" id="api-overview" aria-labelledby="api2-title">
   <div class="wrap">
    <p class="api2-kicker">BILLUS AI MODEL SQUARE</p>
    <p class="api2-audience">{{t('开发者与企业')}}<span>/</span>{{t('服务接入')}}<span>/</span>{{t('长期合作')}}</p>
    <h1 id="api2-title">{{t('对接模型服务，')}}<strong>{{t('从开发需求开始。')}}</strong></h1>
    <p class="api2-hero-lead">{{t('面向个人开发者与企业团队，对接 Claude Code、Codex 相关代码模型服务，让接入方式、使用支持与合作沟通更清楚。')}}</p>
    <div class="api2-hero-actions"><button class="button button-green" @click="visitApi"><ApiIcon name="code"/>{{t('访问模型广场')}}</button><a class="button button-outline" href="#api-services">{{t('探索模型服务')}}<ApiIcon name="arrow"/></a></div>
   </div>
  </section>

  <section class="api2-feature-section wrap" id="api-benefits">
   <div class="api2-feature-grid">
    <article class="api2-feature-card" v-for="item in apiCapabilityCards" :key="item.title">
     <div class="api2-feature-visual" aria-hidden="true">
      <svg v-if="item.diagram==='integration'" viewBox="0 0 320 140"><path class="wire" d="M78 70h52m60 0h52"/><circle class="dot" cx="105" cy="70" r="3"/><circle class="dot" cx="216" cy="70" r="3"/><rect class="node" x="16" y="46" width="64" height="48" rx="9"/><rect class="accent-node" x="126" y="33" width="68" height="74" rx="12"/><rect class="node" x="240" y="46" width="64" height="48" rx="9"/><text x="48" y="75">APP</text><text class="big-label" x="160" y="77">API</text><text x="272" y="75">CLI</text><path class="wire" d="M160 15v12m-5-4 5 5 5-5M160 113v12"/></svg>
      <svg v-else-if="item.diagram==='support'" viewBox="0 0 320 140"><path class="wire" d="M69 70h52m78 0h52"/><rect class="node" x="13" y="45" width="74" height="50" rx="9"/><rect class="accent-node" x="123" y="32" width="74" height="76" rx="12"/><rect class="node" x="233" y="45" width="74" height="50" rx="9"/><text x="50" y="76">SETUP</text><path class="check-line" d="m143 64 11 11 22-24"/><text x="270" y="76">HELP</text><circle class="status-dot" cx="89" cy="45" r="9"/><path class="small-check" d="m85 45 3 3 5-6"/><circle class="status-dot" cx="306" cy="45" r="9"/><path class="small-check" d="m302 45 3 3 5-6"/></svg>
      <svg v-else-if="item.diagram==='pricing'" viewBox="0 0 320 140"><rect class="node" x="35" y="29" width="72" height="85" rx="9"/><rect class="accent-node" x="124" y="19" width="72" height="105" rx="9"/><rect class="node" x="213" y="29" width="72" height="85" rx="9"/><text x="71" y="55">MODEL</text><text x="160" y="49">UNIT</text><text x="249" y="55">RULE</text><path class="check-line" d="m59 84 8 8 15-18m65 5 9 9 18-21m63 17 8 8 15-18"/></svg>
      <svg v-else viewBox="0 0 320 140"><circle class="accent-node" cx="66" cy="70" r="31"/><text x="66" y="76">TEAM</text><path class="wire" d="M97 70h27V30h40m-40 40h40m-40 0v40h40"/><rect class="node" x="165" y="14" width="120" height="32" rx="7"/><rect class="node" x="165" y="54" width="120" height="32" rx="7"/><rect class="node" x="165" y="94" width="120" height="32" rx="7"/><text x="225" y="35">DOCS</text><text x="225" y="75">SERVICE</text><text x="225" y="115">TERMS</text></svg>
     </div>
     <div class="api2-feature-copy"><h2>{{t(item.title)}}</h2><p>{{t(item.body)}}</p></div>
    </article>
   </div>
  </section>

  <section class="api2-section api2-service-section" id="api-services" aria-labelledby="api2-services-title"><div class="wrap">
   <header class="api2-section-heading"><div><p class="api2-kicker">MODEL SERVICES</p><h2 id="api2-services-title">{{t('工具与模型服务')}}<span>{{t('围绕你的开发方式选择')}}</span></h2></div><button class="api2-heading-link" @click="visitApi">{{t('前往模型广场')}}<ApiIcon name="arrow"/></button></header>
   <div class="api2-service-grid"><article class="api2-service-card" v-for="item in apiServiceCatalog" :key="item.name">
    <div class="api2-service-top"><div><h3>{{t(item.name)}}</h3><p>{{t(item.category)}}</p></div><span class="api2-service-mark" aria-hidden="true">{{item.mark}}</span></div>
    <p class="api2-service-description">{{t(item.body)}}</p><div class="api2-tags"><span v-for="tag in item.tags" :key="tag">{{t(tag)}}</span></div>
    <details class="api2-service-details"><summary>{{t('接入前核对')}}<ApiIcon name="arrow"/></summary><p>{{t(item.detail)}}</p></details>
    <button class="api2-card-link" @click="contact">{{t('咨询配置')}}<ApiIcon name="arrow"/></button>
   </article></div>
   <p class="api2-section-note">{{t('具体模型标识、服务范围与计费方式，以开通时的说明为准。')}}</p>
  </div></section>

  <section class="api2-section wrap" id="api-tools" aria-labelledby="api2-tools-title">
   <header class="api2-section-heading"><div><p class="api2-kicker">TOOLS & RESOURCES</p><h2 id="api2-tools-title">{{t('相关工具与资料')}}<span>{{t('让服务接得上，也用得好。')}}</span></h2></div></header>
   <div class="api2-tool-grid"><article v-for="item in apiCompanionCards" :key="item.kind" class="api2-tool-card">
    <figure class="api2-tool-preview" :class="'preview-'+item.kind">
     <img v-if="item.kind==='workspace'" class="api2-workspace-image" src="/billus-ai-website-preview/assets/workspace-client-20261112.webp" :alt="t('毕鲁斯智能体 · 真实客户端界面')" width="1600" height="880" loading="lazy">
     <div v-else-if="item.kind==='knowledge'" class="api2-knowledge-preview"><small>COMPANY KNOWLEDGE</small><div><ApiIcon name="file"/><span>{{t('品牌与项目资料')}}</span></div><div><ApiIcon name="grid"/><span>{{t('产品 SKU 与材料')}}</span></div><div><ApiIcon name="check"/><span>{{t('报价规则')}}</span></div><p>{{t('用于具体项目任务')}}<ApiIcon name="arrow"/></p></div>
     <div v-else class="api2-code-preview"><small>ACCESS CONFIG</small><code><b>BASE_URL</b><span>YOUR_SERVICE_URL</span></code><code><b>MODEL_ID</b><span>YOUR_MODEL_ID</span></code><code><b>API_KEY</b><span>••••••••••••</span></code></div>
     <figcaption>{{t(item.caption)}}</figcaption>
    </figure>
    <h3>{{t(item.title)}}</h3><p>{{t(item.body)}}</p><a class="api2-card-link" :href="item.to" @click="navigate(item.to,$event)">{{t(item.link)}}<ApiIcon name="arrow"/></a>
   </article></div>
   <p class="api2-section-note">{{t('桌面智能体与模型广场分别提供，账号、额度和功能范围按产品确认。')}}</p>
  </section>

  <section class="api2-section api2-access-section" id="api-access" aria-labelledby="api2-access-title"><div class="wrap">
   <header class="api2-section-heading" id="api-guide"><div><p class="api2-kicker">FOR DEVELOPERS</p><h2 id="api2-access-title">{{t('个人开发者')}}<span>{{t('从需求确认，到第一次接入验证。')}}</span></h2></div></header>
   <ol class="api2-step-grid"><li v-for="(item,i) in apiPersonalSteps" :key="item.kind">
    <span class="api2-step-number" aria-hidden="true">0{{i+1}}</span><h3>{{t(item.title)}}</h3><p>{{t(item.body)}}</p>
    <div class="api2-step-visual">
     <div v-if="item.kind==='needs'" class="api2-need-fields"><div><ApiIcon name="code"/><span>{{t('开发工具')}}</span><strong>Claude Code / Codex</strong></div><div><ApiIcon name="chat"/><span>{{t('使用场景')}}</span><strong>{{t('代码模型服务')}}</strong></div></div>
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
  <section class="api2-final"><div class="wrap"><p class="api2-kicker">BILLUS AI MODEL SQUARE</p><h2>{{t('让模型服务更容易接入，')}}<br>{{t('让团队把精力留给实际开发。')}}</h2><p>{{t('从实际需求出发，一起确认适合的接入方式与合作安排。')}}</p><button class="button button-green" @click="contact">{{t('开始接入沟通')}}<ApiIcon name="arrow"/></button></div></section>
 </div>`
};
