import {modelArchive} from './open-models-content.js';
import {t} from './i18n.js';

export default {
  props: {view: {type: String, default: 'overview'}},
  emits: ['navigate', 'model-link'],
  setup(_props, {emit}) {
    const navigate = (to, event) => emit('navigate', to, event);
    const openModel = (model, event) => { event?.preventDefault(); emit('model-link', model); };
    return {modelArchive, navigate, openModel, t};
  },
  template: `
  <main id="main" class="open-models-page">
    <nav class="wrap breadcrumb" aria-label="面包屑导航">
      <a href="/" @click="navigate('/', $event)">{{t('首页')}}</a><span>/</span>
      <span>{{t('产品')}}</span><span>/</span>
      <template v-if="view==='downloads'"><a href="/products/open-models" @click="navigate('/products/open-models', $event)">{{t('开源模型')}}</a><span>/</span><span>{{t('往期模型')}}</span></template>
      <span v-else>{{t('开源模型')}}</span>
    </nav>

    <template v-if="view==='overview'">
      <section class="model-hero wrap" aria-labelledby="model-page-title">
        <div class="model-hero-copy">
          <p class="model-kicker">BILLUS DIFFUSION / OPEN MODELS</p>
          <h1 id="model-page-title">{{t('开源模型')}}</h1>
          <p class="model-hero-lead">{{t('面向建筑、室内与景观创作的模型作品。')}}</p>
          <div class="model-hero-actions">
            <a class="button button-green" href="/products/open-models/downloads" @click="navigate('/products/open-models/downloads', $event)">{{t('查看往期模型')}} <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="/about/company" @click="navigate('/about/company', $event)">{{t('了解毕鲁斯')}} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div class="model-hero-visual" aria-hidden="true">
          <div class="model-visual-field"><span class="model-visual-top">BILLUS / 04C</span><strong>0.4C</strong><span class="model-visual-bottom">ARCHITECTURE · INTERIOR · LANDSCAPE</span></div>
        </div>
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
