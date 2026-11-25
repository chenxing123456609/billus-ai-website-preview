import InfiniteCanvasDemo from './InfiniteCanvasDemo.js';
import WorkspaceHeroTitle from './WorkspaceHeroTitle.js';
import WorkspaceEntrance from './WorkspaceEntrance.js';
import SharedBalance from './SharedBalance.js';
import EnterpriseWorkspacePage from './EnterpriseWorkspacePage.js';
import HomeAdvantages from './HomeAdvantages.js';
import {ref,computed,nextTick,watch,onBeforeUnmount,onMounted} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {workspaceInstallSteps,workspaceFaq,apiAdvantages,apiFaq,apiGuideTabs,apiSetupSteps,apiUsageNotes,apiPolicyOverview} from './products.js';
import ContentPage from './ContentPage.js';
import SupportPage from './SupportPage.js';
import TeamPage from './TeamPage.js';
import NewsPage from './NewsPage.js';
import OpenModelsPage from './OpenModelsPage.js';
import ApiSquarePage from './ApiSquarePage.js';
import {createScrollReveal} from './scroll-reveal.js';
import {createHeaderScroll} from './header-scroll.js';
import {useSceneCarousel} from './scene-carousel.js';
import {homeIndustries} from './home-industry-content.js';
import {workspaceDemoSlides as demoSlides} from './workspace-demo-content.js';
import {useWorkspaceDemo} from './workspace-demo-playback.js';
import WorkspaceImageCompare from './workspace-image-compare.js';
import {useDemoRail} from './workspace-demo-rail.js';
import {createHomeScrollSnap} from './home-scroll-snap.js';
import {supportContent} from './support-content.js';
import {companyContent} from './company-content.js';
import {clientLogos,clientLogoTrack,clientLogoDuration} from './home-client-logos.js';
import {homeApiFeatures,homeApiPricing,homeApiModels} from './home-api-content.js';
import {siteContent} from './site-content.js';
import {productLinks} from './config.js';
import {workspaceShowcaseTabs,workspaceHighlights} from './workspace-showcase.js';
import {useWorkspaceFeatureCarousel} from './workspace-feature-carousel.js';
import {useHomeBrandEntrance} from './home-brand-entrance.js';
import WorkspaceFeatureDemo from './WorkspaceFeatureDemo.js';
import {locale,t,toggleLocale} from './i18n.js';
const paths={
 download:'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
 play:'M8 5l11 7-11 7Z',
 pause:'M8 5v14M16 5v14',
 arrow:'M5 12h14m-5-5 5 5-5 5',
 arrowUpRight:'M7 17 17 7M7 7h10v10',
 chevronDown:'m19.5 8.25-7.5 7.5-7.5-7.5',
 sun:'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17m10-10 1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 moon:'M20.5 14a8.5 8.5 0 0 1-10.4-10.5A8.5 8.5 0 1 0 20.5 14Z',
 grid:'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
 calculator:'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z',
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
 components:{EnterpriseWorkspacePage,InfiniteCanvasDemo,WorkspaceHeroTitle,WorkspaceEntrance,SharedBalance,HomeAdvantages,Icon,ContentPage,SupportPage,TeamPage,NewsPage,OpenModelsPage,ApiSquarePage,WorkspaceImageCompare,WorkspaceFeatureDemo},
 setup(){
  const {root:closingBrandRoot,phase:closingBrandPhase,typed:closingBrandTyped,finish:finishClosingBrandEntrance}=useHomeBrandEntrance();
  const menuOpen=ref(false),activeScene=ref(0),compare=ref(42),activeModal=ref(''),dialog=ref(null),requestSent=ref(false),contactName=ref(''),contactWay=ref(''),selectedModel=ref(null);
  const motion=createScrollReveal();
  const headerScroll=createHeaderScroll();
  const homeScroll=createHomeScrollSnap();
  const clientLogoStep=ref(0),clientLogoHovered=ref(false);
  const clientLogoMotion=matchMedia('(prefers-reduced-motion: reduce)');
  function nextClientLogoPage(){clientLogoStep.value=(clientLogoStep.value+1)%clientLogoTrack.length;}
  function stopClientLogoRotation(){clientLogoHovered.value=false;}
  function startClientLogoRotation(event){
   if(event.pointerType!=='mouse'||clientLogoMotion.matches||document.hidden)return;
   clientLogoHovered.value=true;
  }
  function onClientLogoVisibility(){if(document.hidden)stopClientLogoRotation();}
  document.addEventListener('visibilitychange',onClientLogoVisibility);
  clientLogoMotion.addEventListener('change',stopClientLogoRotation);
  onBeforeUnmount(()=>{stopClientLogoRotation();document.removeEventListener('visibilitychange',onClientLogoVisibility);clientLogoMotion.removeEventListener('change',stopClientLogoRotation);});
  const workspaceTabIndex=ref(0),workspaceTabPaused=ref(false),workspaceTitleDirection=ref('forward');
  const featureDemoRef=ref(null),featureDemoStep=ref(0);
  function selectFeatureDemoStep(i){featureDemoRef.value?.selectStep(i);featureDemoStep.value=i;}
  const selectedWorkspaceTab=computed(()=>workspaceShowcaseTabs[workspaceTabIndex.value]);
  watch(workspaceTabIndex,(next,previous)=>{workspaceTitleDirection.value=(next-previous+workspaceShowcaseTabs.length)%workspaceShowcaseTabs.length===1?'forward':'backward';});
  function selectWorkspaceTab(index,focus=false){
   workspaceTabPaused.value=true;
   workspaceTabIndex.value=index;
   if(focus)nextTick(()=>document.getElementById('workspace-tab-'+workspaceShowcaseTabs[index].id)?.focus());
  }
  function onWorkspaceTabKeydown(event){
   const last=workspaceShowcaseTabs.length-1;
   const positions={ArrowLeft:(workspaceTabIndex.value+last)%(last+1),ArrowRight:(workspaceTabIndex.value+1)%(last+1),Home:0,End:last};
   if(!Object.hasOwn(positions,event.key))return;
   event.preventDefault();
   selectWorkspaceTab(positions[event.key],true);
  }
  const scenes=homeIndustries;
  const selectedScene=computed(()=>scenes[activeScene.value]);
  const steps=['需求输入','方案生成','商品匹配','报价核算','成果整理'];
  const siteBase=String(window.__BILLUS_BASE__||'').replace(/\/$/,'');
  const browserPath=()=>siteBase&&(location.pathname===siteBase||location.pathname.startsWith(siteBase+'/'))?(location.pathname.slice(siteBase.length)||'/'):location.pathname;
  const canonicalRoute=path=>({'/support/developers':'/support/manual','/support/service-policy':'/support/usage-policy','/about':'/about/company'}[path.replace(/\/$/,'')]||path.replace(/\/$/,'')||'/');
  const currentPath=ref(canonicalRoute(browserPath()));
  const routePages={"/": "workspace", "/home": "home", "/products/workspace": "workspace", "/products/workspace/enterprise": "enterprise", "/products/billus-agent": "workspace", "/products/api-model-square": "api", "/products/open-models": "openModels", "/products/open-models/downloads": "modelDownloads", "/support/manual": "manual", "/support/usage-notes": "usage", "/support/usage-policy": "policy", "/support/updates": "updates", "/about/company": "about", "/about/team": "team", "/about/news": "news", "/contact-sales": "sales"};
  const page=computed(()=>currentPath.value.startsWith('/about/news/')?'news':currentPath.value.startsWith('/support/manual/')?'manual':routePages[currentPath.value]||'home');
  const workspaceFeatures=useWorkspaceFeatureCarousel({page,index:workspaceTabIndex,count:workspaceShowcaseTabs.length,paused:workspaceTabPaused,durations:[23000,20500,20500]});
  const workspaceDemo=useWorkspaceDemo({page,slides:demoSlides,initialIndex:1});
  const {root:demoRoot,video:demoVideo,index:demoIndex,paused:demoPaused,interacting:demoInteracting,selected:selectedDemoSlide,select:selectDemoSlide,toggle:toggleDemoPlayback,pointerEnter:onDemoPointerEnter,pointerLeave:onDemoPointerLeave,focusIn:onDemoFocusIn,focusOut:onDemoFocusOut,keydown:onDemoKeydown,videoPlay:onDemoVideoPlay,videoPause:onDemoVideoPause,videoEnded:onDemoVideoEnded}=workspaceDemo;
  const demoRail=useDemoRail({index:demoIndex,select:selectDemoSlide,count:demoSlides.length});
  const introDirection=ref('forward');
  watch(demoIndex,(next,previous)=>{introDirection.value=(next-previous+demoSlides.length)%demoSlides.length<=demoSlides.length/2?'forward':'backward';});
  const sceneCarousel=useSceneCarousel({page,activeIndex:activeScene,sceneCount:scenes.length});
  const typedHomeTitle=ref(''),homeTypeDone=ref(false);
  let homeTypeTimer=null;
  function typeHomeTitle(){
   if(homeTypeTimer){clearInterval(homeTypeTimer);homeTypeTimer=null}
   const fullTitle='Billus AI '+t('把未来，做成生活。');
   if(page.value!=='workspace'||matchMedia('(prefers-reduced-motion: reduce)').matches){typedHomeTitle.value=fullTitle;homeTypeDone.value=true;return}
   const letters=Array.from(fullTitle);let position=0;
   typedHomeTitle.value='';homeTypeDone.value=false;
   homeTypeTimer=setInterval(()=>{
    typedHomeTitle.value=letters.slice(0,++position).join('');
    if(position>=letters.length){clearInterval(homeTypeTimer);homeTypeTimer=null;homeTypeDone.value=true}
   },locale.value==='en'?35:70)
  }
  watch([page,locale],typeHomeTitle,{immediate:true});
  onBeforeUnmount(()=>{if(homeTypeTimer)clearInterval(homeTypeTimer)});
  const supportDocKey=computed(()=>Object.entries(supportContent).find(([,doc])=>doc.path===currentPath.value)?.[0]||'overview');
  const newsSlug=computed(()=>currentPath.value.startsWith('/about/news/')?currentPath.value.slice('/about/news/'.length):'');
  const homeNewsImages={
   'enterprise-data-for-procurement':'/billus-ai-website-preview/assets/workspace-scene-render.webp',
   'workspace-and-model-square':'/billus-ai-website-preview/assets/workspace-client-20261112.webp',
  };
  const latestNews=computed(()=>[...companyContent.news.items].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6).map(item=>({...item,homeImage:homeNewsImages[item.slug]||item.image})));
  const pageTitle=computed(()=>page.value==='enterprise'?'WORKSPACE 企业使用功能':['manual','usage','policy','updates'].includes(page.value)?supportContent[supportDocKey.value].title:page.value==='team'?companyContent.team.title:page.value==='news'?(companyContent.news.items.find(item=>item.slug===newsSlug.value)?.title||companyContent.news.title):page.value==='openModels'?'开源模型':page.value==='modelDownloads'?'往期模型':siteContent[page.value]?.title||(page.value==='workspace'?'毕鲁斯智能体':page.value==='api'?'API 模型广场':'把未来，做成生活。'));
  const copiedFooter=ref(''),footerStatus=ref(''),selectedProduct=ref('毕鲁斯智能体');
  const guideTab=ref('install');
  const productAnchors=computed(()=>page.value==='workspace'?[{id:'workspace-overview',name:'产品介绍'},{id:'workspace-capabilities',name:'核心能力'},{id:'workspace-faq',name:'使用须知'},{id:'workspace-install',name:'下载与安装'}]:[{id:'api-overview',name:'产品介绍'},{id:'api-benefits',name:'服务优势'},{id:'api-guide',name:'使用帮助'},{id:'api-faq',name:'常见问题'}]);
  function stepGuide(delta){const tabs=['install','notes','policy'];guideTab.value=tabs[(tabs.indexOf(guideTab.value)+delta+tabs.length)%tabs.length];nextTick(()=>document.getElementById('guide-tab-'+guideTab.value)?.focus())}
  const apiFlow=[
   {title:'说明需求',body:'沟通场景、用量与希望使用的服务。'},
   {title:'确认接入',body:'核对可用模型、接口和适配范围。'},
   {title:'核对报价',body:'明确单位、基准与实际结算规则。'},
   {title:'测试合作',body:'验证实际需求，再确定合作安排。'}
  ];
  watch(page,value=>{homeScroll.setEnabled(value==='home');if(value!=='home')stopClientLogoRotation();},{immediate:true,flush:'sync'});
  onBeforeUnmount(()=>homeScroll.dispose());
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
  onBeforeUnmount(()=>{removeEventListener('popstate',onPop);motion.dispose();headerScroll.dispose()});
  onMounted(()=>{if(currentPath.value!==browserPath())history.replaceState({},'',siteBase+currentPath.value+location.search+location.hash);if(location.hash)scrollToRoute();requestAnimationFrame(()=>{motion.refresh();headerScroll.refresh()})});
  watch(currentPath,()=>nextTick(()=>requestAnimationFrame(()=>{motion.refresh();headerScroll.refresh()})));
  watch([pageTitle,locale],([title])=>{document.title=t(title)+' · Billus AI';document.querySelector('meta[name=description]')?.setAttribute('content',t('Billus AI 美好生活产业的智能缔造者，智能体驱动的供应链采购平台。'))},{immediate:true});
  function hoverProducts(event,open){
   if(!matchMedia('(hover:hover)').matches)return;
   if(!open&&event.currentTarget.contains(document.activeElement))return;
   event.currentTarget.open=open;
  }
  function syncDropdown(event){
   const current=event.currentTarget;
   if(current.open)document.querySelectorAll('.nav-dropdown[open]').forEach(item=>{if(item!==current)item.open=false});
  }
  function closeDropdown(event){
   const current=event.currentTarget;
   if(!current.open)return;
   event.stopPropagation();
   current.open=false;
   current.querySelector('summary')?.focus();
  }
  function closeDropdownOnBlur(event){if(!event.currentTarget.contains(event.relatedTarget))event.currentTarget.open=false}
  function closeNavigation(){
   menuOpen.value=false;
   document.querySelectorAll('.nav-dropdown[open]').forEach(item=>item.open=false);
   nextTick(()=>document.querySelector('.menu-toggle')?.focus());
  }
  function toggleNavigation(){
   if(menuOpen.value){closeNavigation();return;}
   menuOpen.value=true;
   nextTick(()=>document.querySelector('.primary-nav summary')?.focus());
  }
  async function copyFooter(text){
   try{await navigator.clipboard.writeText(text);copiedFooter.value=text;footerStatus.value=t('已复制')+' '+text}
   catch{footerStatus.value=t('请复制账号：')+text}
  }

  function requestDownload(){openModal('download')}
  function requestPatch(){if(productLinks.workspacePatch){location.assign(productLinks.workspacePatch)}else{openModal('patch')}}
  function visitApi(){if(productLinks.apiWebsite){window.open(productLinks.apiWebsite,'_blank','noopener,noreferrer')}else{openModal('api-visit')}}
  function openModelLink(model){selectedModel.value=model;openModal('model-link')}
  function chooseScene(i){sceneCarousel.select(i)}
  async function openModal(kind){selectedProduct.value=kind==='api-contact'?'API 模型广场':'毕鲁斯智能体';activeModal.value=kind==='api-contact'?'demo':kind;requestSent.value=false;menuOpen.value=false;document.querySelectorAll('.nav-dropdown[open]').forEach(el=>el.open=false);await nextTick();if(!dialog.value.open)dialog.value.showModal()}
  function closeModal(){dialog.value.close();activeModal.value=''}
  function backdropClose(e){if(e.target===dialog.value)closeModal()}
  function submitRequest(){requestSent.value=true}
  return{closingBrandRoot,closingBrandPhase,closingBrandTyped,finishClosingBrandEntrance,featureDemoRef,featureDemoStep,selectFeatureDemoStep,clientLogoHovered,startClientLogoRotation,stopClientLogoRotation,clientLogoStep,clientLogoTrack,clientLogoDuration,nextClientLogoPage,homeApiModels,workspaceTitleDirection,workspaceFeatureRoot:workspaceFeatures.root,workspaceFeaturePlaying:workspaceFeatures.playing,onWorkspaceFeaturePointerEnter:workspaceFeatures.pointerEnter,onWorkspaceFeaturePointerLeave:workspaceFeatures.pointerLeave,onWorkspaceFeatureFocusIn:workspaceFeatures.focusIn,onWorkspaceFeatureFocusOut:workspaceFeatures.focusOut,demoRailRoot:demoRail.root,onDemoRailKeydown:demoRail.keydown,introDirection,demoRoot,demoVideo,selectedDemoSlide,toggleDemoPlayback,onDemoPointerEnter,onDemoPointerLeave,onDemoFocusIn,onDemoKeydown,onDemoVideoPlay,onDemoVideoPause,onDemoVideoEnded,sceneRoot:sceneCarousel.root,scenePlaying:sceneCarousel.playing,nextScene:sceneCarousel.next,onSceneKeydown:sceneCarousel.onKeydown,onSceneFocusIn:sceneCarousel.onFocusIn,onSceneFocusOut:sceneCarousel.onFocusOut,onSceneTouchStart:sceneCarousel.onTouchStart,onSceneTouchEnd:sceneCarousel.onTouchEnd,syncDropdown,closeDropdown,closeDropdownOnBlur,closeNavigation,toggleNavigation,homeApiFeatures,homeApiPricing,clientLogos,latestNews,typedHomeTitle,homeTypeDone,demoSlides,demoIndex,demoPaused,demoInteracting,selectDemoSlide,onDemoFocusOut,workspaceShowcaseTabs,workspaceHighlights,workspaceTabIndex,selectedWorkspaceTab,selectWorkspaceTab,onWorkspaceTabKeydown,productLinks,supportDocKey,newsSlug,locale,toggleLocale,requestPatch,requestDownload,visitApi,openModelLink,selectedModel,workspaceInstallSteps,guideTab,stepGuide,productAnchors,apiGuideTabs,apiSetupSteps,apiUsageNotes,apiPolicyOverview,page,navigate,hoverProducts,copiedFooter,footerStatus,copyFooter,selectedProduct,workspaceFaq,apiAdvantages,apiFaq,apiFlow,menuOpen,activeScene,compare,scenes,selectedScene,chooseScene,steps,activeModal,dialog,openModal,closeModal,backdropClose,requestSent,contactName,contactWay,submitRequest};
 }
};
