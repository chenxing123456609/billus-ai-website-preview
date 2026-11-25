import {modelArchive,modelCapabilities} from './open-models-content.js';
import {t} from './i18n.js';
import {modelHeroPosters} from './open-model-hero-assets.js';
import {useOpenModelHeroEntrance} from './open-model-hero-entrance.js';

// Same line-icon paths and stroke treatment as the existing site Icon component.
const capabilityIcons = {
  screen: 'M3 4h18v13H3zm5 17h8m-4-4v4',
  grid: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
  file: 'M6 3h8l4 4v14H6zm8 0v5h4M9 12h6m-6 4h6',
  chat: 'M4 4h16v12H9l-5 4V4Z',
};

export default {
  props: {view: {type: String, default: 'overview'}},
  emits: ['navigate', 'model-link'],
  setup(_props, {emit}) {
    const entrance=useOpenModelHeroEntrance();
    const navigate = (to, event) => emit('navigate', to, event);
    const openModel = (model, event) => { event?.preventDefault(); emit('model-link', model); };
    return {heroRoot:entrance.root,scatterPhase:entrance.phase,ambientActive:entrance.ambientActive,finishEntrance:entrance.finish,modelHeroPosters, modelArchive, modelCapabilities, capabilityIcons, navigate, openModel, t};
  },
  template: `
  <main id="main" class="open-models-page">
    <template v-if="view==='overview'">
      <section ref="heroRoot" class="open-model-gallery-hero" id="open-model-overview" aria-labelledby="model-page-title" :data-scatter-state="scatterPhase" :data-ambient-active="ambientActive" @pointerdown="finishEntrance" @focusin="finishEntrance">
        <div class="open-model-poster-field" aria-hidden="true">
          <figure v-for="(poster,index) in modelHeroPosters" :key="poster.id" class="open-model-poster" :class="'poster-position-'+index"><img :src="poster.src" alt="" width="768" height="1024" decoding="async"></figure>
        </div>
        <div class="open-model-hero-copy">
          <p class="model-kicker">BILLUS DIFFUSION · OPEN MODELS</p>
          <h1 id="model-page-title">{{t('毕鲁斯自研大模型')}}</h1>
          <p class="open-model-hero-subtitle">{{t('空间创作的能力底座')}}</p>
          <p class="open-model-hero-description">{{t('面向建筑、室内与景观场景，围绕图像生成、参考图编辑与空间表达持续研发。通过毕鲁斯智能体，衔接企业知识、项目任务与成果整理。')}}</p>
          <div class="open-model-hero-actions">
            <a class="button button-green" href="/products/open-models/downloads" @click="navigate('/products/open-models/downloads', $event)">{{t('查看模型档案')}} <span aria-hidden="true">→</span></a>
            <a class="button button-outline" href="#model-capabilities">{{t('了解模型能力')}} <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section class="open-model-capabilities wrap" id="model-capabilities" :aria-label="t('模型能力')">
        <ul class="model-capability-list" :aria-label="t('模型能力')">
          <li v-for="item in modelCapabilities" :key="item.title">
            <span class="model-capability-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="capabilityIcons[item.icon]"/></svg></span>
            <div><h2>{{t(item.title)}}</h2><p>{{t(item.body)}}</p></div>
          </li>
        </ul>
      </section>

      <section class="model-feature wrap" aria-labelledby="model-feature-title">
        <div class="model-feature-index">01 / PUBLIC MODEL</div>
        <div class="model-feature-body"><h2 id="model-feature-title">{{t('空间方向的公开作品')}}</h2><p>{{t('毕鲁斯已在 LiblibAI 发布“毕鲁斯建筑室内景观大模型 0.4C”。版本、下载方式与许可范围以模型发布页为准。')}}</p></div>
        <div class="model-feature-aside"><span>0.4C</span><small>{{t('建筑 · 室内 · 景观')}}</small></div>
      </section>

      <section class="model-archive-link" aria-labelledby="model-archive-title"><div class="wrap model-archive-link-inner">
        <div><p class="model-kicker">MODEL ARCHIVE</p><h2 id="model-archive-title">{{t('往期模型')}}</h2></div>
        <a href="/products/open-models/downloads" @click="navigate('/products/open-models/downloads', $event)" class="model-big-link">{{t('查看模型档案与下载入口')}} <span aria-hidden="true">↗</span></a>
      </div></section>
    </template>

    <template v-else>
      <section class="model-download-hero wrap" aria-labelledby="model-download-title">
        <p class="model-kicker">MODEL ARCHIVE / DOWNLOADS</p>
        <h1 id="model-download-title">{{t('往期模型')}}</h1>
        <p>{{t('按版本查看模型档案。页面中的跳转链接目前用于界面演示。')}}</p>
      </section>
      <section class="model-archive-list wrap" aria-label="往期模型列表">
        <article v-for="(model,index) in modelArchive" :key="model.slug" class="model-archive-row" :id="model.slug">
          <div class="model-row-index">0{{index+1}}</div>
          <div class="model-row-content"><p class="model-row-version">{{model.version}}</p><h2>{{t(model.title)}}</h2><p class="model-row-scope">{{t(model.scope)}}</p><details class="model-row-details"><summary>{{t('版本说明')}}</summary><p>{{t(model.note)}}</p></details></div>
          <div class="model-row-action"><span class="model-status" :class="{'is-checked':model.checked}">{{t(model.status)}}</span><a :href="'#'+model.slug" @click="openModel(model,$event)">{{t('预览模型页跳转')}} <span aria-hidden="true">↗</span></a></div>
        </article>
      </section>
    </template>
  </main>`
};
