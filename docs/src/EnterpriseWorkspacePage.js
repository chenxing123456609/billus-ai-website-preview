import {ref,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {t,locale} from './i18n.js';
import EnterpriseWorkspaceDemo from './EnterpriseWorkspaceDemo.js';
import {enterpriseLibraries as libraries,enterpriseImportSteps as importSteps,enterpriseQuoteBasis as quoteBasis,enterpriseFaq as faq} from './workspace-enterprise-content.js';

const assets='/billus-ai-website-preview/assets/';
const visuals={
 quotation:{src:assets+'workspace-showcase/deliverables/quote-preview.png',alt:'示例项目报价草稿'}
};
const EnterpriseIcon={props:{name:String},setup(){return{paths:{download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',arrow:'M5 12h14m-5-5 5 5-5 5',close:'m6 6 12 12M6 18 18 6',file:'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6'}}},template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]||paths.arrow"/></svg>'};

export default{
 components:{EnterpriseIcon,EnterpriseWorkspaceDemo},emits:['navigate','download','contact'],
 setup(_,{emit}){
  const imageDialog=ref(null),preview=ref(visuals.quotation);
  async function openImage(kind){preview.value=visuals[kind];await nextTick();imageDialog.value?.showModal();}
  function closeImage(){imageDialog.value?.close();}
  function imageBackdrop(event){if(event.target===imageDialog.value)closeImage();}
  return{t,locale,libraries,importSteps,quoteBasis,faq,visuals,imageDialog,preview,openImage,closeImage,imageBackdrop,
   navigate:(to,event)=>emit('navigate',to,event),download:()=>emit('download'),contact:()=>emit('contact')};
 },
 template:`<main id="main" class="workspace-enterprise">
  <section class="enterprise-hero wrap" aria-labelledby="enterprise-title">
   <div class="enterprise-hero-copy">
    <p class="enterprise-kicker">BILLUS AI WORKSPACE · ENTERPRISE</p>
    <h1 id="enterprise-title">{{t('三库一表')}}<span>{{t('让算量报价有据可循')}}</span></h1>
    <p class="enterprise-lead">{{t('把企业施工单价、商品资料和采购渠道放进同一套数据底座。上传维护表后，在项目中结合图纸与尺寸组织算量、选品和报价。')}}</p>
    <div class="enterprise-actions"><a class="button button-dark" href="#enterprise-data">{{t('了解三库一表')}}<EnterpriseIcon name="arrow"/></a><button class="button button-outline" type="button" @click="contact">{{t('咨询企业接入')}}</button></div>
    <a class="enterprise-back" href="/products/workspace" @click="navigate('/products/workspace',$event)">{{t('返回产品介绍')}}<EnterpriseIcon name="arrow"/></a>
   </div>
   <div class="enterprise-demo-figure"><enterprise-workspace-demo></enterprise-workspace-demo></div>
  </section>

  <section id="enterprise-data" class="enterprise-section enterprise-data-section" aria-labelledby="enterprise-data-title">
   <div class="wrap">
    <header class="enterprise-section-heading"><p class="enterprise-kicker">01 / COMPANY DATA</p><h2 id="enterprise-data-title">{{t('三类业务数据 一张表统一维护')}}</h2><p>{{t('先把企业资料整理清楚 再让智能体参与项目')}}</p></header>
    <div class="enterprise-library-grid">
     <article v-for="library in libraries" :key="library.id" class="enterprise-library"><span class="enterprise-library-label">{{library.label}}</span><h3>{{t(library.name)}}</h3><p class="enterprise-library-summary">{{t(library.summary)}}</p><p>{{t(library.description)}}</p><ul><li v-for="field in library.fields" :key="field">{{t(field)}}</li></ul><small>{{t(library.example)}}</small></article>
    </div>
    <div class="enterprise-workbook"><span class="enterprise-workbook-icon"><EnterpriseIcon name="file"/></span><div><h3>{{t('一张维护表 连接三类资料')}}</h3><p>{{t('下载维护表 填写企业数据 上传校验 确认后用于项目')}}</p></div></div>
   </div>
  </section>

  <section id="enterprise-import" class="enterprise-section wrap" aria-labelledby="enterprise-import-title">
   <header class="enterprise-section-heading"><p class="enterprise-kicker">02 / IMPORT & VALIDATE</p><h2 id="enterprise-import-title">{{t('在 WORKSPACE 中完成上传与维护')}}</h2></header>
   <ol class="enterprise-import-steps"><li v-for="(step,i) in importSteps" :key="step.title"><span class="enterprise-step-number">{{String(i+1).padStart(2,'0')}}</span><h3>{{t(step.title)}}</h3><p>{{t(step.body)}}</p></li></ol>
   <a class="enterprise-guide-link" href="/support/manual/agent/basics#review-delivery" @click="navigate('/support/manual/agent/basics#review-delivery',$event)">{{t('查看三库使用教程')}}<EnterpriseIcon name="arrow"/></a>
  </section>

  <section id="enterprise-quotation" class="enterprise-section enterprise-quotation-section" aria-labelledby="enterprise-quotation-title">
   <div class="wrap">
    <header class="enterprise-section-heading"><p class="enterprise-kicker">03 / QUANTITIES & QUOTATIONS</p><h2 id="enterprise-quotation-title">{{t('算量有依据 报价可追溯')}}</h2><p>{{t('从项目资料到报价清单 把每个环节的依据保留下来')}}</p></header>
    <div class="enterprise-quotation-grid">
     <div class="enterprise-quotation-visual"><div class="enterprise-formula"><strong>{{t('工程量 × 对应单价')}}</strong><span>{{t('逐项核对工程范围、计量单位及价格来源')}}</span></div><figure><button class="enterprise-image-preview" type="button" :aria-label="t('点击放大报价草稿')" @click="openImage('quotation')"><img :src="visuals.quotation.src" :alt="t(visuals.quotation.alt)" width="1766" height="869" loading="lazy" decoding="async"></button><figcaption>{{t('示例项目报价草稿')}}</figcaption></figure></div>
     <div class="enterprise-quote-basis"><article v-for="(basis,i) in quoteBasis" :key="basis.title"><span>{{String(i+1).padStart(2,'0')}}</span><div><h3>{{t(basis.title)}}</h3><p>{{t(basis.body)}}</p></div></article></div>
    </div>
   </div>
  </section>

  <section class="enterprise-section enterprise-faq wrap" aria-labelledby="enterprise-faq-title"><header class="enterprise-section-heading"><h2 id="enterprise-faq-title">{{t('企业使用常见问题')}}</h2></header><div class="faq-list"><details v-for="item in faq" :key="item.q"><summary>{{t(item.q)}}<span aria-hidden="true">+</span></summary><p>{{t(item.a)}}</p></details></div></section>
  <section class="enterprise-closing"><div class="wrap"><h2>{{t('带上企业数据 开始第一个项目')}}</h2><p>{{t('先从一份目录、一组商品和一个明确的项目开始')}}</p><div class="enterprise-actions"><button class="button button-dark" type="button" @click="download"><EnterpriseIcon name="download"/><span>{{locale==='en'?'Download WORKSPACE':'下载 WORKSPACE'}}</span></button><button class="button button-outline" type="button" @click="contact">{{t('咨询企业接入')}}<EnterpriseIcon name="arrow"/></button></div></div></section>
  <dialog ref="imageDialog" class="enterprise-image-dialog" :aria-label="t(preview.alt)" @click="imageBackdrop"><button class="enterprise-preview-close" type="button" :aria-label="t('关闭图片预览')" @click="closeImage"><EnterpriseIcon name="close"/></button><img :src="preview.src" :alt="t(preview.alt)"><p>{{t(preview.alt)}}</p></dialog>
 </main>`
};
