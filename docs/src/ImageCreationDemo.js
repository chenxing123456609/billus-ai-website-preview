import {ref,computed,watch} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {t} from './i18n.js';
import {featureImageCreationTools as tools,featureImageCreationMedia as media} from './workspace-feature-demo-content.js';

// The parent owns the clock: pause, visibility and reduced-motion all stay in sync.
// Selection overlays illustrate the tools; image enlargement preserves the full composition.
export default{
 props:{elapsed:Number,reduced:Boolean,paused:Boolean},emits:['select-tool'],
 setup(props,{emit}){
  const selected=ref(null);
  const index=computed(()=>selected.value??(props.reduced?0:Math.min(tools.length-1,Math.floor(Math.max(0,props.elapsed)/1300))));
  const current=computed(()=>tools[index.value]);
  const selectTool=i=>{selected.value=i;emit('select-tool')};
  watch(()=>props.paused,value=>{if(!value)selected.value=null});
  watch(()=>props.elapsed,(value,previous)=>{if(value<previous)selected.value=null});
  return{tools,media,index,current,selectTool,t};
 },
 template:`<div class="sequence-image-tools" role="group" :aria-label="t('空间方案深化工具演示')" :data-tool="current.id">
  <div class="sequence-image-tools-heading"><strong>{{t('空间方案深化')}}</strong><span>{{t('图像工具示意')}}</span></div>
  <div class="sequence-image-tools-body">
   <ul class="sequence-image-tools-rail"><li v-for="(tool,i) in tools" :key="tool.id" :class="{'is-current':index===i}"><button type="button" :aria-pressed="index===i" :aria-controls="'image-tool-preview'" @click="selectTool(i)"><i aria-hidden="true"></i><span>{{t(tool.label)}}</span></button></li></ul>
   <div class="sequence-image-tools-preview" id="image-tool-preview">
    <div class="image-tool-scene" :class="'image-tool-'+current.id" :key="current.id">
     <img v-if="current.id==='views'" class="image-tool-contact-sheet" :src="media.views" :alt="t(media.viewsAlt)" width="1600" height="893" decoding="async">
     <div v-else-if="current.id==='expand'" class="image-tool-expand-canvas">
      <div class="image-tool-expand-original"><img :src="media.source" :alt="t(media.sourceAlt)"><span>{{t('原图')}}</span></div>
      <div class="image-tool-selection image-tool-expand-frame" aria-hidden="true"><i v-for="corner in 4" :key="corner"></i></div>
      <span class="image-tool-canvas-label">{{t('扩展范围')}}</span>
      <svg class="image-tool-expand-arrows" viewBox="0 0 400 250" aria-hidden="true"><path d="M112 70 55 33m0 0 5 20m-5-20 22-1M288 180l57 37m0 0-5-20m5 20-22 1"/></svg>
     </div>
     <div v-else class="image-tool-source">
      <img :src="media.source" :alt="t(media.sourceAlt)" width="1500" height="1125">
      <div v-if="current.id==='edit'" class="image-tool-selection image-tool-edit-frame" aria-hidden="true"><i v-for="corner in 4" :key="corner"></i></div>
      <template v-if="current.id==='enlarge'">
       <div class="image-tool-selection image-tool-enlarge-frame" aria-hidden="true"><i v-for="handle in 8" :key="handle"></i></div>
       <svg class="image-tool-enlarge-arrows" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true"><path d="M17 17-12-12m0 0v17m0-17H5M383 283l29 29m0 0v-17m0 17h-17"/></svg>
      </template>
      <div v-if="current.id==='crop'" class="image-tool-selection image-tool-crop-frame" aria-hidden="true"><i v-for="corner in 4" :key="corner"></i><span class="image-tool-crop-grid"></span><small>1:1</small></div>
      <svg v-if="current.id!=='crop'" class="image-tool-cursor" viewBox="0 0 32 36" aria-hidden="true"><path d="m3 2 24 20-11 2-4 9Z"/></svg>
     </div>
    </div>
   </div>
  </div>
  <div class="sequence-image-tools-description" aria-live="off"><strong>{{t(current.label)}}</strong><span>{{t(current.description)}}</span></div>
 </div>`
};
