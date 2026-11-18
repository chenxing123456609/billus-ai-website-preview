import {ref,computed,nextTick,watch,onBeforeUnmount,onMounted} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {workspaceInstallSteps,workspaceCapabilities,workspaceFaq,apiAdvantages,apiFaq,apiGuideTabs,apiSetupSteps,apiUsageNotes,apiPolicyOverview} from './products.js';
import ContentPage from './ContentPage.js';
import SupportPage from './SupportPage.js';
import TeamPage from './TeamPage.js';
import NewsPage from './NewsPage.js';
import OpenModelsPage from './OpenModelsPage.js';
import {createScrollReveal} from './scroll-reveal.js';
import {supportContent} from './support-content.js';
import {companyContent} from './company-content.js';
import {siteContent} from './site-content.js';
import {productLinks} from './config.js';
import {locale,t,toggleLocale} from './i18n.js';
const paths={
 download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
 arrow:'M5 12h14m-5-5 5 5-5 5',
 sun:'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17m10-10 1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 moon:'M20.5 14a8.5 8.5 0 0 1-10.4-10.5A8.5 8.5 0 1 0 20.5 14Z',
 grid:'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
 code:'m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
 globe:'M21 12H3m9-9c5 4 5 14 0 18-5-4-5-14 0-18m9 9a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
 phone:'M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 15h2',
 screen:'M3 4h18v13H3zm5 17h8m-4-4v4',
 close:'m6 6 12 12M6 18 18 6',
 check:'m5 12 4 4L19 6',
 chat:'M4 4h16v12H9l-5 4V4Z',
 file:'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6',
 menu:'M4 6h16M4 12h16M4 18h16'
};
const Icon={props:{name:String},setup(){return{paths}},template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name] || paths.arrow"/></svg>'};
export default{
 components:{Icon,ContentPage,SupportPage,TeamPage,NewsPage,OpenModelsPage},
 setup(){
  const theme=ref(document.documentElement.dataset.theme||'light'), menuOpen=ref(false),activeScene=ref(1),compare=ref(42),activeModal=ref(''),dialog=ref(null),requestSent=ref(false),contactName=ref(''),contactWay=ref(''),selectedModel=ref(null);
  const motion=createScrollReveal();
  const scenes=[
   {name:'线稿构思',tag:'LINE ART',image:'/billus-ai-website-preview/assets/lineart.webp',description:'从一张线稿开始，让空间构想有迹可循。'},
   {name:'效果呈现',tag:'SPACE DESIGN',image:'/billus-ai-website-preview/assets/livingroom.webp',description:'结合项目需求与参考素材，形成可沟通的空间方案。'},
   {name:'材质调整',tag:'MATERIAL EDIT',image:'/billus-ai-website-preview/assets/material.webp',description:'围绕同一空间，探索材质、软装与色彩的更多组合。'},
   {name:'风格探索',tag:'STYLE EXPLORATION',image:'/billus-ai-website-preview/assets/evening.webp',description:'从日间温暖到夜间氛围，找到适合项目的表达。'}
  ];
  const selectedScene=computed(()=>scenes[activeScene.value]);
  const values=[
   {title:'减少重复设计和资料核对',description:'复用企业标准与历史项目，让团队少做重复整理。'},
   {title:'加快方案响应',description:'结合需求、参考素材和连续修改，推进可讨论的方案。'},
   {title:'连接设计与业务',description:'让方案、商品匹配、报价和交付资料衔接起来。'},
   {title:'复用企业知识',description:'把品牌规范、产品资料和报价规则用于具体任务。'}
  ];
  const steps=['需求输入','方案生成','商品匹配','报价核算','成果整理'];
  const siteBase=String(window.__BILLUS_BASE__||'').replace(/\/$/,'');
  const browserPath=()=>siteBase&&(location.pathname===siteBase||location.pathname.startsWith(siteBase+'/'))?(location.pathname.slice(siteBase.length)||'/'):location.pathname;
  const canonicalRoute=path=>({'/support/developers':'/support/manual','/support/service-policy':'/support/usage-policy','/about':'/about/company'}[path.replace(/\/$/,'')]||path.replace(/\/$/,'')||'/');
  const currentPath=ref(canonicalRoute(browserPath()));
  const routePages={"/": "home", "/products/workspace": "workspace", "/products/billus-agent": "workspace", "/products/api-model-square": "api", "/products/open-models": "openModels", "/products/open-models/downloads": "modelDownloads", "/support/manual": "manual", "/support/usage-notes": "usage", "/support/usage-policy": "policy", "/support/updates": "updates", "/about/company": "about", "/about/team": "team", "/about/news": "news", "/contact-sales": "sales"};
  const page=computed(()=>currentPath.value.startsWith('/about/news/')?'news':currentPath.value.startsWith('/support/manual/')?'manual':routePages[currentPath.value]||'home');
  const supportDocKey=computed(()=>Object.entries(supportContent).find(([,doc])=>doc.path===currentPath.value)?.[0]||'overview');
  const newsSlug=computed(()=>currentPath.value.startsWith('/about/news/')?currentPath.value.slice('/about/news/'.length):'');
  const pageTitle=computed(()=>['manual','usage','policy','updates'].includes(page.value)?supportContent[supportDocKey.value].title:page.value==='team'?companyContent.team.title:page.value==='news'?(companyContent.news.items.find(item=>item.slug===newsSlug.value)?.title||companyContent.news.title):page.value==='openModels'?'开源模型':page.value==='modelDownloads'?'往期模型':siteContent[page.value]?.title||(page.value==='workspace'?'毕鲁斯智能体':page.value==='api'?'API 模型广场':'把未来，做成生活。'));
  const copiedFooter=ref(''),footerStatus=ref(''),selectedProduct=ref('毕鲁斯智能体');
  const guideTab=ref('install');
  const productAnchors=computed(()=>page.value==='workspace'?[{id:'workspace-overview',name:'产品介绍'},{id:'workspace-capabilities',name:'核心能力'},{id:'workspace-install',name:'下载与安装'},{id:'workspace-faq',name:'使用须知'}]:[{id:'api-overview',name:'产品介绍'},{id:'api-benefits',name:'服务优势'},{id:'api-guide',name:'使用帮助'},{id:'api-faq',name:'常见问题'}]);
  function stepGuide(delta){const tabs=['install','notes','policy'];guideTab.value=tabs[(tabs.indexOf(guideTab.value)+delta+tabs.length)%tabs.length];nextTick(()=>document.getElementById('guide-tab-'+guideTab.value)?.focus())}
  const workspaceFlow=[
   {title:'需求输入',body:'整理目标、空间资料与品牌要求。'},
   {title:'方案生成',body:'结合参考素材形成并修改方案。'},
   {title:'商品匹配',body:'关联企业商品与材料资料。'},
   {title:'报价核算',body:'按照企业规则整理预算清单。'},
   {title:'成果交付',body:'汇总文件，交由项目人员复核。'}
  ];
  const apiFlow=[
   {title:'说明需求',body:'沟通场景、用量与希望使用的服务。'},
   {title:'确认接入',body:'核对可用模型、接口和适配范围。'},
   {title:'核对报价',body:'明确单位、基准与实际结算规则。'},
   {title:'测试合作',body:'验证实际需求，再确定合作安排。'}
  ];
  function scrollToRoute(){
   nextTick(()=>requestAnimationFrame(()=>{
    const id=decodeURIComponent(location.hash.slice(1));
    const target=id&&document.getElementById(id);
    if(target)target.scrollIntoView({behavior:'instant',block:'start'});else scrollTo({top:0,behavior:'instant'});
   }));
  }
  function navigate(to,event){
   if(event&&(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0))return;
   event?.preventDefault();
   const url=new URL(to,location.origin);
   const routePath=siteBase&&url.pathname.startsWith(siteBase+'/')?url.pathname.slice(siteBase.length):url.pathname;
   history.pushState({},'',siteBase+routePath+url.search+url.hash);
   currentPath.value=canonicalRoute(routePath);
   menuOpen.value=false;
   document.querySelectorAll('.nav-dropdown[open]').forEach(el=>el.open=false);
   scrollToRoute();
  }
  function onPop(){currentPath.value=canonicalRoute(browserPath());if(currentPath.value!==browserPath())history.replaceState({},'',siteBase+currentPath.value+location.search+location.hash);menuOpen.value=false;scrollToRoute()}
  addEventListener('popstate',onPop);
  onBeforeUnmount(()=>{removeEventListener('popstate',onPop);motion.dispose()});
  onMounted(()=>{if(currentPath.value!==browserPath())history.replaceState({},'',siteBase+currentPath.value+location.search+location.hash);if(location.hash)scrollToRoute();requestAnimationFrame(motion.refresh)});
  watch(currentPath,()=>nextTick(()=>requestAnimationFrame(motion.refresh)));
  watch([pageTitle,locale],([title])=>{document.title=t(title)+' · Billus AI';document.querySelector('meta[name=description]')?.setAttribute('content',t('Billus AI 美好生活产业的智能缔造者，智能体驱动的供应链采购平台。'))},{immediate:true});
  function hoverProducts(event,open){if(matchMedia('(hover:hover)').matches)event.currentTarget.open=open}
  async function copyFooter(text){
   try{await navigator.clipboard.writeText(text);copiedFooter.value=text;footerStatus.value=t('已复制')+' '+text}
   catch{footerStatus.value=t('请复制账号：')+text}
  }

  function requestDownload(){openModal('download')}
  function requestPatch(){if(productLinks.workspacePatch){location.assign(productLinks.workspacePatch)}else{openModal('patch')}}
  function visitApi(){if(productLinks.apiWebsite){window.open(productLinks.apiWebsite,'_blank','noopener,noreferrer')}else{openModal('api-visit')}}
  function openModelLink(model){selectedModel.value=model;openModal('model-link')}
  function toggleTheme(){theme.value=theme.value==='light'?'dark':'light';document.documentElement.dataset.theme=theme.value;try{localStorage.setItem('billus-theme',theme.value)}catch{}}
  function chooseScene(i){activeScene.value=i}
  async function openModal(kind){selectedProduct.value=kind==='api-contact'?'API 模型广场':'毕鲁斯智能体';activeModal.value=kind==='api-contact'?'demo':kind;requestSent.value=false;menuOpen.value=false;document.querySelectorAll('.nav-dropdown[open]').forEach(el=>el.open=false);await nextTick();if(!dialog.value.open)dialog.value.showModal()}
  function closeModal(){dialog.value.close();activeModal.value=''}
  function backdropClose(e){if(e.target===dialog.value)closeModal()}
  function submitRequest(){requestSent.value=true}
  return{productLinks,supportDocKey,newsSlug,locale,toggleLocale,requestPatch,requestDownload,visitApi,openModelLink,selectedModel,workspaceInstallSteps,guideTab,stepGuide,productAnchors,apiGuideTabs,apiSetupSteps,apiUsageNotes,apiPolicyOverview,page,navigate,hoverProducts,copiedFooter,footerStatus,copyFooter,selectedProduct,workspaceCapabilities,workspaceFaq,workspaceFlow,apiAdvantages,apiFaq,apiFlow,theme,toggleTheme,menuOpen,activeScene,compare,scenes,selectedScene,chooseScene,values,steps,activeModal,dialog,openModal,closeModal,backdropClose,requestSent,contactName,contactWay,submitRequest};
 }
};
