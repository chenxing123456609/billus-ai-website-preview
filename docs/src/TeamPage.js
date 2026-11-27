import {companyContent} from './company-content.js';
import {localizeTemplate,locale} from './i18n.js';

export default {
  emits: ['navigate'],
  setup() {
    return {data: companyContent.team, locale};
  },
  template: localizeTemplate(`
    <main id="main" class="about-team-page">
      <header class="wrap team2-hero">
        <div class="team2-hero-copy">
          <p class="team2-kicker">BILLUS AI / PEOPLE</p>
          <h1 aria-label="不同专长，同一个方向。">不同专长，<br><span>同一个方向。</span></h1>
          <p>{{data.lead}}</p>
          <a href="#team-members" class="team2-hero-link">认识项目成员 <span aria-hidden="true">↓</span></a>
        </div>
        <div class="team2-hero-mark" aria-label="当前项目核心成员共四位">
          <strong>04</strong>
          <span>当前项目核心成员</span>
          <div aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        </div>
      </header>

      <section class="wrap team2-members" id="team-members" aria-labelledby="team2-members-title">
        <div class="team2-section-heading">
          <p class="team2-kicker">THE CORE TEAM</p>
          <h2 id="team2-members-title">把分工放进同一个项目</h2>
          <p>商务、模型、工程与设计，在项目中持续协作。</p>
        </div>
        <ol class="team2-roster">
          <li v-for="(member,index) in data.members" :key="member.name" class="team2-member">
            <span class="team2-member-index">0{{index+1}}</span>
            <div class="team2-member-identity">
              <h3>{{locale==='en'?member.nameEn:member.name}}</h3>
              <p>{{member.role}}</p>
            </div>
            <h4>{{member.focus}}</h4>
            <p class="team2-member-body">{{member.body}}</p>
          </li>
        </ol>
      </section>

      <section class="team2-collaboration" aria-labelledby="team2-collaboration-title">
        <div class="wrap team2-collaboration-inner">
          <p class="team2-kicker">WORKING TOGETHER</p>
          <h2 id="team2-collaboration-title">从需求到实现，<br>保持同一项目语境。</h2>
          <p>商业合作带回真实问题，模型研发和平台工程组织能力，交互设计让成果更易理解与使用。团队根据项目反馈持续迭代。</p>
          <div class="team2-capabilities" aria-label="团队协作方向">
            <span>企业合作</span><span>模型与智能体</span><span>平台工程</span><span>体验设计</span>
          </div>
        </div>
      </section>

      <section class="wrap team2-closing" aria-labelledby="team2-closing-title">
        <div>
          <p class="team2-kicker">LET'S TALK</p>
          <h2 id="team2-closing-title">带上项目需求，开始一次具体对话。</h2>
        </div>
        <div class="team2-closing-links">
          <a href="/about/company" @click="$emit('navigate','/about/company',$event)">了解 Billus AI ↗</a>
          <a class="button button-dark" href="/contact-sales" @click="$emit('navigate','/contact-sales',$event)">联系销售 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  `),
};
