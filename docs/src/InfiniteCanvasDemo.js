import {t} from './i18n.js';
export default{
 setup(){return{t}},
 template:`<div class="infinite-demo" role="img" :aria-label="t('平面布局连线生成效果图的画布演示')">
  <div class="infinite-toolbar"><span>✥</span><span>＋</span><span>▢</span><i></i><small>{{t('无限画布')}}</small></div>
  <div class="infinite-drag" aria-hidden="true"><img src="/billus-ai-website-preview/assets/workspace-showcase/floor-plan.webp" alt=""><svg viewBox="0 0 48 58"><path d="M6 3 41 33 25 36 19 52Z" fill="#418a2f" transform="translate(2 3)"/><path d="M6 3 41 33 25 36 19 52Z" fill="#a5ea76" stroke="#e7ffd9" stroke-width="1.5"/></svg><span>＋</span></div>
  <div class="infinite-drop-zone" aria-hidden="true"></div>
  <svg class="infinite-wire" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true"><path class="infinite-wire-base" d="M260 175 C330 175 290 225 350 225"/><path class="infinite-wire-flow" d="M260 175 C330 175 290 225 350 225"/></svg>
  <div class="infinite-node infinite-source"><header><i></i>{{t('平面布局')}}</header><img src="/billus-ai-website-preview/assets/workspace-showcase/floor-plan.webp" alt=""><span class="infinite-port infinite-out"></span></div>
  <div class="infinite-node infinite-result"><header><i></i><span>{{t('效果图')}}</span><small class="infinite-done">✓</small></header><div class="infinite-result-media"><div class="infinite-generating"><span class="infinite-spinner"></span><strong>{{t('生成中…')}}</strong><div class="infinite-progress"><i></i></div></div><img class="infinite-output" src="/billus-ai-website-preview/assets/workspace-showcase/render.webp" alt=""></div><span class="infinite-port infinite-in"></span></div>
  <div class="infinite-bottom"><span>{{t('项目画布')}}</span><span>− &nbsp; 100% &nbsp; ＋</span></div>
 </div>`
};
