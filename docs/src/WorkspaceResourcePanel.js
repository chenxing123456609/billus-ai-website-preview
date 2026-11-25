import {ref,computed,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {locale} from './i18n.js';

// Lucide icons, ISC / Feather MIT. See assets/icons/LUCIDE-LICENSE.txt.
const icons={
 panelOpen:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18M10 15l-3-3 3-3"/>',
 panelClose:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/>',
 workbench:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
 assets:'<path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/>',
 files:'<path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706zM5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"/>',
 browser:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
 canvas:'<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414zM18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"/><circle cx="11" cy="11" r="2"/>',
 close:'<path d="m18 6-12 12M6 6l12 12"/>'
};
export const EntranceIcon={
 props:{name:String},
 setup(){return{icons}},
 template:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="icons[name] || icons.workbench"></svg>'
};

export default{
 components:{EntranceIcon},
 props:{open:Boolean},
 emits:['close','interact'],
 setup(props,{emit}){
  const active=ref('workbench'),tabButtons=ref([]);
  const text=(zh,en)=>locale.value==='en'?en:zh;
  const tabs=computed(()=>[
   {id:'workbench',name:text('工作台','Workbench')},
   {id:'assets',name:text('设计资产库','Assets'),description:text('图片素材与参考资料','Images and references')},
   {id:'files',name:text('文件','Files'),description:text('项目文件与任务交付','Project files and deliverables')},
   {id:'browser',name:text('浏览器','Browser'),description:text('在看板内打开网页','Open web pages within the board')},
   {id:'canvas',name:text('画布','Canvas'),description:text('摆放、生成和修改图片与视频','Arrange, generate and edit images and videos')}
  ]);
  const current=computed(()=>tabs.value.find(tab=>tab.id===active.value));
  function select(id,focus=false){active.value=id;emit('interact');if(focus)nextTick(()=>tabButtons.value[tabs.value.findIndex(tab=>tab.id===id)]?.focus())}
  function navigateTabs(event){
   if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
   event.preventDefault();
   const index=tabs.value.findIndex(tab=>tab.id===active.value);
   const next=event.key==='Home'?0:event.key==='End'?tabs.value.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.value.length)%tabs.value.length;
   select(tabs.value[next].id);
   nextTick(()=>tabButtons.value[next]?.focus());
  }
  return{active,tabButtons,text,tabs,current,select,navigateTabs};
 },
 template:`<section id="entrance-resource-panel" class="entrance-resource-panel" :class="{'is-open':open}" :inert="!open" :aria-hidden="!open" :aria-label="text('工具与资产展示区','Tools and assets preview')" @keydown.esc.stop.prevent="$emit('close')">
  <div class="entrance-resource-surface">
   <header class="entrance-resource-header"><div><small>{{text('工具与资产','TOOLS & ASSETS')}}</small><strong>{{text('工作台','Workbench')}}</strong></div><button type="button" class="entrance-resource-close" @click="$emit('close')" :aria-label="text('收起工具与资产展示区','Close tools and assets preview')"><entrance-icon name="close"/></button></header>
   <div class="entrance-resource-tabs" role="tablist" :aria-label="text('工具与资产分类','Tools and assets categories')" @keydown="navigateTabs"><button v-for="tab in tabs" :key="tab.id" ref="tabButtons" type="button" role="tab" :id="'entrance-resource-tab-'+tab.id" :aria-selected="active===tab.id" :tabindex="active===tab.id?0:-1" aria-controls="entrance-resource-content" @click="select(tab.id)">{{tab.name}}</button></div>
   <div id="entrance-resource-content" class="entrance-resource-content" role="tabpanel" :aria-labelledby="'entrance-resource-tab-'+active" tabindex="0">
    <template v-if="active==='workbench'">
     <div class="entrance-resource-intro"><small>{{text('设计工作台','DESIGN WORKBENCH')}}</small><h4>{{text('管理设计资产与项目产物','Design assets and project deliverables')}}</h4><p>{{text('设计图片与参考资料按账户统一管理，分类可以自己设定，所有项目都可以引用。','Organize images and references in your account, create your own categories and reuse them across projects.')}}</p></div>
     <div class="entrance-resource-links"><button v-for="tab in tabs.slice(1)" :key="tab.id" type="button" @click="select(tab.id,true)"><entrance-icon :name="tab.id"/><span><strong>{{tab.name}}</strong><small>{{tab.description}}</small></span></button></div>
    </template>
    <template v-else>
     <div class="entrance-resource-intro entrance-resource-detail"><entrance-icon :name="current.id"/><small>{{text('设计工作台','DESIGN WORKBENCH')}}</small><h4>{{current.name}}</h4><p>{{current.description}}</p></div>
    </template>
   </div>
  </div>
 </section>`
};
