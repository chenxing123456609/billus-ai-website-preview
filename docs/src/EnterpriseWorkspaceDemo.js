import {ref,computed,watch,nextTick,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {t,locale} from './i18n.js';

const DemoIcon={props:{name:String},setup(){return{paths:{arrow:'M5 12h14m-5-5 5 5-5 5',file:'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6',grid:'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',check:'m5 12 4 4L19 6',replay:'M3 10a9 9 0 1 1 2 9M3 3v7h7',upload:'M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5',close:'m6 6 12 12M6 18 18 6'}}},template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="paths[name]||paths.file"/></svg>'};

export default{
 components:{DemoIcon},
 setup(){
  const root=ref(null),enterButton=ref(null),librariesButton=ref(null),step=ref(0),playing=ref(true),visible=ref(false),hidden=ref(document.hidden),reduced=ref(false),activeLibrary=ref(0),importState=ref('idle');
  const cursor=ref({left:'55%',top:'68%'});
  const libraryLabel=computed(()=>locale.value==='en'?'Business libraries':'三库一表');
  const screen=computed(()=>step.value<3?'welcome':step.value<6?'workspace':'libraries');
  const cursorVisible=computed(()=>playing.value&&!reduced.value&&[1,2,4,5].includes(step.value));
  const canPlay=computed(()=>playing.value&&visible.value&&!hidden.value&&!reduced.value);
  let timer=null,importTimer=null,observer=null,motionQuery=null,alive=true;
  const delays=[1100,850,300,1300,850,300];
  const tabs=['施工报价库','商品 SKU 库','供应平台'];
  const rows=[
   [['墙面涂饰','m²','工艺与单价'],['吊顶施工','m²','工艺与单价'],['地面铺装','m²','工艺与单价']],
   [['家具与软装','SKU','品牌与参考价格'],['材料与饰面','SKU','规格与参考价格'],['照明与灯具','SKU','型号与参考价格']],
   [['采购搜索入口','渠道','适用范围'],['供应平台域名','渠道','来源与优先级'],['商品查询链接','渠道','采购参考']]
  ];
  function clear(){clearTimeout(timer);timer=null;}
  function schedule(){
   clear();if(!canPlay.value||step.value>=6)return;
   timer=setTimeout(()=>{step.value+=1;if(step.value>=6)playing.value=false;else schedule();},delays[step.value]);
  }
  async function positionCursor(){
   await nextTick();if(!alive)return;
   const target=step.value<3?enterButton.value:librariesButton.value;
   if(!root.value||!target)return;
   const box=root.value.getBoundingClientRect(),button=target.getBoundingClientRect();
   if(box.width&&box.height)cursor.value={left:((button.left-box.left+button.width*.7)/box.width*100)+'%',top:((button.top-box.top+button.height*.65)/box.height*100)+'%'};
  }
  function enter(){clear();playing.value=false;step.value=3;}
  function openLibraries(){clear();playing.value=false;step.value=6;}
  function replay(){clear();clearTimeout(importTimer);importState.value='idle';activeLibrary.value=0;step.value=reduced.value?6:0;playing.value=!reduced.value;schedule();}
  function togglePlayback(){playing.value=!playing.value;schedule();}
  function focusIn(event){if(event.target.matches?.(':focus-visible')){clear();playing.value=false;}}
  function previewImport(){
   clearTimeout(importTimer);importState.value='checking';
   importTimer=setTimeout(()=>{importState.value='ready';},reduced.value?0:1100);
  }
  function motionChange(){reduced.value=motionQuery.matches;if(reduced.value){clear();step.value=6;playing.value=false;}}
  function visibilityChange(){hidden.value=document.hidden;}
  watch(canPlay,schedule);watch(step,positionCursor);
  onMounted(()=>{
   motionQuery=matchMedia('(prefers-reduced-motion: reduce)');motionChange();
   motionQuery.addEventListener('change',motionChange);document.addEventListener('visibilitychange',visibilityChange);addEventListener('resize',positionCursor);
   if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{visible.value=entries.some(entry=>entry.isIntersecting&&entry.intersectionRatio>=.2);},{threshold:[0,.2,.6]});observer.observe(root.value);}else visible.value=true;
  });
  onBeforeUnmount(()=>{alive=false;clear();clearTimeout(importTimer);observer?.disconnect();motionQuery?.removeEventListener('change',motionChange);document.removeEventListener('visibilitychange',visibilityChange);removeEventListener('resize',positionCursor);});
  return{t,libraryLabel,root,enterButton,librariesButton,step,screen,playing,reduced,cursor,cursorVisible,activeLibrary,importState,tabs,rows,enter,openLibraries,replay,togglePlayback,focusIn,previewImport};
 },
 template:`<div ref="root" class="enterprise-workspace-demo" :data-screen="screen" :data-step="step" role="group" :aria-label="t('浅色工作台与三库一表交互演示')" @focusin="focusIn">
  <div class="ewd-chrome" aria-hidden="true"><span class="ewd-window-dots"><i></i><i></i><i></i></span><span>Billus AI WORKSPACE</span><span class="ewd-chrome-tag">ENTERPRISE</span></div>
  <transition name="ewd-screen">
   <div v-if="screen==='welcome'" key="welcome" class="ewd-welcome">
    <img src="/billus-ai-website-preview/assets/brand-mark.webp" width="104" height="104" alt="">
    <p class="ewd-welcome-brand">BILLUS AI WORKSPACE</p><h3>{{t('让企业资料参与每个项目')}}</h3><p class="ewd-welcome-description">{{t('从三库一表开始 建立自己的报价依据')}}</p>
    <button ref="enterButton" type="button" class="ewd-enter" @click="enter">{{t('进入工作台')}}<DemoIcon name="arrow"/></button>
    <div class="ewd-welcome-datasets" aria-hidden="true"><span>{{t('施工报价')}}</span><span>{{t('商品 SKU')}}</span><span>{{t('供应渠道')}}</span></div>
   </div>
   <div v-else key="app" class="ewd-app">
    <aside class="ewd-sidebar">
     <div class="ewd-sidebar-brand"><img src="/billus-ai-website-preview/assets/brand-mark.webp" width="104" height="104" alt=""><span>BILLUS<small>WORKSPACE</small></span></div>
     <span class="ewd-nav-caption">{{t('企业项目')}}</span><div class="ewd-project"><span></span>{{t('空间设计项目')}}</div>
     <button type="button" :class="{'is-selected':screen==='workspace'}" @click="enter"><DemoIcon name="grid"/><span>{{t('项目工作台')}}</span></button>
     <button ref="librariesButton" type="button" :class="{'is-selected':screen==='libraries','is-guided':step===4||step===5}" @click="openLibraries"><DemoIcon name="file"/><span>{{libraryLabel}}</span><span class="ewd-nav-dot"></span></button>
     <div class="ewd-sidebar-footer"><i></i>{{t('企业工作空间')}}</div>
    </aside>
    <div class="ewd-main">
     <div class="ewd-app-bar"><span>{{t('空间设计项目')}}</span><span class="ewd-example-badge">{{t('交互示意')}}</span></div>
     <transition name="ewd-panel" mode="out-in">
      <div v-if="screen==='workspace'" key="workspace" class="ewd-project-home">
       <span class="ewd-project-eyebrow">YOUR COMPANY. YOUR WORKSPACE.</span><h3>{{t('把企业资料 变成项目依据')}}</h3><p>{{t('先维护施工、商品与采购资料 再推进算量与报价')}}</p>
       <div class="ewd-project-prompt"><span>{{t('为这个项目整理选品与报价资料')}}</span><DemoIcon name="arrow"/></div>
       <button type="button" class="ewd-open-library" @click="openLibraries"><span><DemoIcon name="file"/></span><div><strong>{{libraryLabel}}</strong><small>{{t('施工报价 · 商品 SKU · 供应渠道')}}</small></div><DemoIcon name="arrow"/></button>
      </div>
      <div v-else key="libraries" class="ewd-data-panel">
       <header class="ewd-data-heading"><div><span>COMPANY DATA</span><h3>{{libraryLabel}}</h3><p>{{t('企业自己的施工、商品与采购依据')}}</p></div><span class="ewd-data-ready"><i></i>{{t('资料维护')}}</span></header>
       <div class="ewd-data-cards"><button v-for="(tab,i) in tabs" :key="tab" type="button" :class="{'is-active':activeLibrary===i}" :aria-pressed="activeLibrary===i" @click="activeLibrary=i"><span class="ewd-data-card-index">0{{i+1}}</span><strong>{{t(tab)}}</strong><small>{{t(['工艺 · 单位 · 单价','品牌 · 规格 · 价格','入口 · 范围 · 来源'][i])}}</small></button></div>
       <div class="ewd-workbook-row"><span class="ewd-workbook-file"><DemoIcon name="file"/><span>{{t('三库维护表')}}<small>XLSX · {{t('示例文件')}}</small></span></span><button type="button" :disabled="importState==='checking'" @click="previewImport"><DemoIcon :name="importState==='ready'?'check':'upload'"/>{{t(importState==='checking'?'校验中…':importState==='ready'?'示例校验完成':'演示导入')}}</button></div>
       <div class="ewd-import-path" role="status"><span :class="{'is-complete':importState!=='idle'}">{{t('上传维护表')}}</span><span aria-hidden="true">→</span><span :class="{'is-complete':importState==='ready'}">{{t('校验预览')}}</span><span aria-hidden="true">→</span><span>{{t('确认三库草稿')}}</span></div>
       <div class="ewd-table-preview"><div class="ewd-table-caption"><strong>{{t(tabs[activeLibrary])}}</strong><span>{{t('资料结构示例')}}</span></div><table><thead><tr><th scope="col">{{t('项目内容')}}</th><th scope="col">{{t('单位')}}</th><th scope="col">{{t('企业维护')}}</th></tr></thead><tbody><tr v-for="row in rows[activeLibrary]" :key="row[0]"><td>{{t(row[0])}}</td><td>{{t(row[1])}}</td><td>{{t(row[2])}}</td></tr></tbody></table></div>
      </div>
     </transition>
    </div>
   </div>
  </transition>
  <div class="ewd-demo-cursor" :style="cursor" :class="{'is-visible':cursorVisible,'is-clicking':step===2||step===5}" aria-hidden="true"><svg viewBox="0 0 24 28"><path d="M3 2v22l6-6 5 9 4-2-5-9h8Z"/></svg><i></i></div>
  <div class="ewd-demo-footer"><span>{{t('交互示意 实际操作在客户端完成')}}</span><div><button v-if="playing&&!reduced" type="button" @click="togglePlayback">{{t('暂停')}}</button><button type="button" @click="replay"><DemoIcon name="replay"/>{{t('重播演示')}}</button></div></div>
 </div>`
};
