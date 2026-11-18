import {companyContent} from './company-content.js';
import {localizeTemplate,locale} from './i18n.js';
export default{
 emits:['navigate'],
 setup(){return{data:companyContent.team,locale}},
 template:localizeTemplate(`<main id="main" class="team-page"><div class="wrap breadcrumb"><a href="/" @click="$emit('navigate','/',$event)">首页</a><span>/</span><span>关于我们</span><span>/</span><span>团队介绍</span></div><header class="wrap company-reading-hero"><h1>{{data.title}}</h1><p>{{data.lead}}</p></header><section class="wrap team-grid" aria-label="团队成员"><article v-for="(member,index) in data.members" :key="member.name" class="team-member"><div class="team-member-index"><span>0{{index+1}}</span><small>{{member.role}}</small></div><h2>{{locale==='en'?member.nameEn:member.name}}</h2><h3>{{member.focus}}</h3><p>{{member.body}}</p></article></section><section class="wrap team-collaboration"><h2>把分工变成协作。</h2><div><article v-for="item in data.collaboration" :key="item.title"><h3>{{item.title}}</h3><p>{{item.body}}</p></article></div></section><section class="closing-section"><div class="wrap closing-inner"><div><h2>从你的项目开始，认识我们的团队。</h2></div><a class="button button-green" href="/contact-sales" @click="$emit('navigate','/contact-sales',$event)">联系我们 ↗</a></div></section></main>`)
};
