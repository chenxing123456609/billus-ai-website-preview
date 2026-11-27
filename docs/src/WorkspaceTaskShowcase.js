import {ref,computed} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {locale,t} from './i18n.js';
import {workspaceDemoSlides as slides} from './workspace-demo-content.js';
import {useWorkspaceDemo} from './workspace-demo-playback.js';
import InfiniteCanvasDemo from './InfiniteCanvasDemo.js';
import WorkspaceImageCompare from './workspace-image-compare.js';

export default {
 components:{InfiniteCanvasDemo,WorkspaceImageCompare},
 setup(){
  const demo=useWorkspaceDemo({page:ref('workspace'),slides,initialIndex:0,activePage:'workspace',interval:4200});
  const text=(zh,en)=>locale.value==='en'?en:zh;
  const groups=[{start:0,end:0,zh:'梳理资料',en:'Brief'},{start:1,end:3,zh:'生成与修改',en:'Create'},{start:4,end:7,zh:'分析与核对',en:'Review'},{start:8,end:12,zh:'整理与交付',en:'Deliver'}];
  const group=computed(()=>groups.find(g=>demo.index.value>=g.start&&demo.index.value<=g.end));
  function move(delta){demo.select(demo.index.value+delta)}
  return{...demo,slides,text,t,group,move};
 },
 template:`<section class="workspace-task-section workspace-split-hero" id="workspace-task" aria-labelledby="workspace-task-title">
  <div class="wrap">
   <header class="product-showcase-heading"><p>BILLUS AI WORKSPACE · WORKFLOW</p><h2 id="workspace-task-title">{{text('从一份资料 到一套完整成果','From the first reference to the final deliverables')}}</h2><div>{{text('跟随一个空间项目 看资料如何变成方案 再接着完成修改与交付','Follow one spatial project from references to concepts, revisions and deliverables')}}</div></header>
   <div class="workspace-task-layout" @mouseenter="pointerEnter" @mouseleave="pointerLeave" @focusin="focusIn" @focusout="focusOut($event)">
    <div class="workspace-task-copy" :data-task-step="selected.id">
     <div id="task-current-copy" role="group" :aria-label="text('当前任务步骤','Current project step')" :aria-live="paused||interacting?'polite':'off'" aria-atomic="true">
      <p class="task-step-number"><span>{{String(index+1).padStart(2,'0')}}</span><i></i>{{text(group.zh,group.en)}}</p>
      <h3 :key="selected.id+'-title'">{{t(selected.title)}}</h3><p class="task-step-description" :key="selected.id+'-intro'">{{t(selected.intro)}}</p>
      <div class="task-current-prompt"><span>{{text('这一刻的任务','The task at this step')}}</span><p>{{t(selected.prompt)}}</p></div>
     </div>
     <div class="product-carousel-controls"><button type="button" @click="move(-1)" :aria-label="text('上一步','Previous step')"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m5-5-5 5 5 5"/></svg></button><span>{{String(index+1).padStart(2,'0')}} / {{String(slides.length).padStart(2,'0')}}</span><button type="button" class="product-carousel-pause" @click="toggle" :aria-label="paused?text('继续任务演示','Resume project demo'):text('暂停任务演示','Pause project demo')">{{paused?text('继续','Play'):text('暂停','Pause')}}</button><button type="button" @click="move(1)" :aria-label="text('下一步','Next step')"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></button></div>
    </div>
    <div ref="root" class="workspace-demo task-workspace-demo" role="group" :aria-label="text('完整项目工作台演示','Complete project workspace demo')">
     <div class="workspace-demo-chrome" aria-hidden="true"><span class="workspace-demo-dots"><i></i><i></i><i></i></span><span>Billus AI Workspace</span></div>
     <div class="workspace-demo-body">
      <div class="workspace-demo-sidebar" aria-hidden="true"><img src="/billus-ai-website-preview/assets/brand-mark.webp" width="104" height="104" alt=""></div>
      <div class="workspace-demo-chat" role="group" :aria-label="text('当前演示对话','Current demonstration dialogue')">
       <div class="workspace-demo-prompt" :key="selected.id+'-prompt'">{{t(selected.prompt)}}</div>
       <div class="workspace-demo-response"><span :key="selected.id+'-reply'">{{t(selected.reply)}}</span></div>
       <img v-if="!selected.format" class="workspace-demo-plan" :src="selected.image" width="1224" height="1080" alt=""><div v-else class="workspace-demo-file-card"><span class="task-file-glyph" aria-hidden="true">{{selected.format}}</span><strong>{{selected.format}}</strong><span>{{t(selected.attachment)}}</span><small>{{text('成果预览','Output preview')}}</small></div>
       <div class="workspace-demo-input" aria-hidden="true">{{text('继续描述你的想法…','Keep describing your idea…')}} <span>↑</span></div>
      </div>
      <div class="workspace-demo-stage"><div class="workspace-demo-stage-heading"><strong>{{t(selected.title)}}</strong><span>{{String(index+1).padStart(2,'0')}} / {{String(slides.length).padStart(2,'0')}}</span></div>
       <div class="workspace-demo-image-stage" :class="{'is-video':selected.type==='video'}" :data-demo-id="selected.id">
        <img v-if="selected.type==='image'&&!selected.compareBefore" :key="selected.id" class="is-current" :src="selected.image" :alt="t(selected.title)+' · '+text('项目演示素材','Project demonstration')" width="1500" height="1125" decoding="async">
        <infinite-canvas-demo v-if="selected.type==='canvas'" :key="selected.id"></infinite-canvas-demo>
        <workspace-image-compare v-if="selected.compareBefore" :before="selected.compareBefore" :after="selected.image" :before-label="text('修改前','Before')" :after-label="text('修改后','After')"></workspace-image-compare>
        <video v-if="selected.type==='video'" :key="selected.id" ref="video" class="workspace-demo-video" :src="selected.video" :poster="selected.image" controls muted playsinline preload="metadata" :aria-label="t(selected.title)+' · '+text('项目演示素材','Project demonstration')" @play="videoPlay" @pause="videoPause($event)" @ended="videoEnded"></video>
       </div>
      </div>
     </div>
     <div class="workspace-demo-controls"><div class="workspace-demo-thumbs" role="group" :aria-label="text('选择任务步骤','Choose a project step')" @keydown="keydown($event)"><button v-for="(slide,i) in slides" :key="slide.id" type="button" :class="{'is-current':index===i}" :aria-label="text('查看步骤','Show step')+' '+(i+1)+' '+t(slide.title)" :aria-pressed="index===i" @click="select(i)"><img :src="slide.image" alt="" width="100" height="75" loading="lazy"><span v-if="slide.format" class="workspace-demo-thumb-format" aria-hidden="true">{{slide.format}}</span></button></div></div>
    </div>
   </div>
   <p class="task-showcase-note">{{text('项目流程演示 · 方案、数量与价格由项目人员复核','Project workflow demonstration · Concepts, quantities and prices require project review')}}</p>
  </div>
 </section>`
};
