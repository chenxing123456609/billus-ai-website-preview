import {companyPageContent} from './company-page-content.js';
import {localizeTemplate} from './i18n.js';

export default {
  emits: ['navigate'],
  setup() {
    return {data: companyPageContent};
  },
  template: localizeTemplate(`
    <main id="main" class="about-company-page">
      <section class="wrap company2-hero" aria-labelledby="company2-title">
        <div class="company2-hero-copy">
          <p class="company2-kicker">ABOUT BILLUS AI</p>
          <p class="company2-positioning">{{data.hero.positioning}}</p>
          <p class="company2-platform">{{data.hero.platform}}</p>
          <h1 id="company2-title" aria-label="从空间方案，到采购订单">从空间方案，<br><span>到采购订单</span></h1>
          <p class="company2-hero-lead">{{data.hero.lead}}</p>
          <div class="company2-hero-actions">
            <a class="button button-dark" href="#company-approach">了解我们的工作 <span aria-hidden="true">↓</span></a>
            <a class="company2-text-link" href="/about/team" @click="$emit('navigate','/about/team',$event)">认识项目团队 <span aria-hidden="true">↗</span></a>
          </div>
          <p class="company2-legal">{{data.hero.legalName}}</p>
        </div>
        <figure class="company2-visual">
          <img src="/billus-ai-website-preview/assets/industries/interior-20261123.webp" alt="空间材料与室内设计场景示意" width="1920" height="1280" fetchpriority="high">
          <figcaption><span>BILLUS AI / SPATIAL DESIGN</span><span>空间项目视觉示意</span></figcaption>
        </figure>
      </section>

      <section class="company2-intro" id="company-approach" aria-labelledby="company2-intro-title">
        <div class="wrap company2-intro-grid">
          <p class="company2-section-index">01 / COMPANY</p>
          <div>
            <h2 id="company2-intro-title">{{data.introduction.title}}</h2>
            <p class="company2-brand-line">把未来，做成生活。</p>
          </div>
          <div class="company2-intro-body">
            <p v-for="paragraph in data.introduction.paragraphs" :key="paragraph">{{paragraph}}</p>
            <small>{{data.introduction.industries}}</small>
          </div>
        </div>
      </section>

      <section class="wrap company2-flow" aria-labelledby="company2-flow-title">
        <div class="company2-section-heading">
          <p class="company2-section-index">02 / WORKFLOW</p>
          <h2 id="company2-flow-title">从项目需求，到可复核的成果</h2>
          <p>围绕同一项目，逐步衔接设计表达与业务资料。</p>
        </div>
        <ol class="company2-flow-list">
          <li v-for="(step,index) in data.workflow" :key="step.title">
            <span class="company2-flow-number">0{{index+1}}</span>
            <h3>{{step.title}}</h3>
            <p>{{step.body}}</p>
          </li>
        </ol>
      </section>

      <section class="company2-products" aria-labelledby="company2-products-title">
        <div class="wrap">
          <div class="company2-section-heading">
            <p class="company2-section-index">03 / PRODUCTS</p>
            <h2 id="company2-products-title">面向不同任务的产品与服务</h2>
          </div>
          <div class="company2-product-grid">
            <article v-for="(product,index) in data.products" :key="product.name" class="company2-product" :class="'company2-product-'+index">
              <p class="company2-product-form">{{product.form}}</p>
              <h3>{{product.name}}</h3>
              <p>{{product.body}}</p>
              <a v-if="product.path" :href="product.path" @click="$emit('navigate',product.path,$event)">了解产品 <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section class="wrap company2-enterprise" aria-labelledby="company2-enterprise-title">
        <div class="company2-enterprise-heading">
          <p class="company2-section-index">04 / ENTERPRISE</p>
          <h2 id="company2-enterprise-title">让企业资料，成为工作依据</h2>
          <p>把品牌、商品与业务规则接入项目，按实际范围配置。</p>
        </div>
        <div class="company2-enterprise-list">
          <article v-for="item in data.enterprise" :key="item.title">
            <h3>{{item.title}}</h3>
            <p>{{item.body}}</p>
          </article>
        </div>
        <p class="company2-enterprise-note">资料授权、版本、价格和交付范围由项目双方确认。</p>
      </section>

      <section class="company2-progress" aria-labelledby="company2-progress-title">
        <div class="wrap company2-progress-inner">
          <p class="company2-section-index">阶段进展</p>
          <h2 id="company2-progress-title">在真实项目中，持续完善能力。</h2>
          <p>{{data.progress}}</p>
        </div>
      </section>

      <section class="wrap company2-closing" aria-labelledby="company2-closing-title">
        <div>
          <p class="company2-section-index">WORK WITH BILLUS</p>
          <h2 id="company2-closing-title">从你的项目开始，讨论下一步。</h2>
        </div>
        <div class="company2-closing-links">
          <a href="/about/team" @click="$emit('navigate','/about/team',$event)">认识项目团队 ↗</a>
          <a class="button button-dark" href="/contact-sales" @click="$emit('navigate','/contact-sales',$event)">联系销售 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  `),
};
