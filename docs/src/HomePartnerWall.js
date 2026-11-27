import {locale,t} from './i18n.js';
import {homePartners} from './home-partners-content.js';

export default{
 setup(){
  const rows=[homePartners.slice(0,6),homePartners.slice(6,13),homePartners.slice(13)];
  return{locale,t,rows};
 },
 template:`<section class="home-partner-section" id="partners" aria-labelledby="home-partner-title">
  <header class="home-partner-heading wrap"><h2 id="home-partner-title">{{t('携手同行，共创更多可能')}}</h2></header>
  <div class="home-partner-wall" role="list" :aria-label="t('合作企业')">
   <div class="home-partner-row" v-for="(row,index) in rows" :key="index" role="presentation">
    <div class="home-partner-tile" v-for="partner in row" :key="partner.id" role="listitem" :title="partner.name">
     <img v-if="partner.src" :src="partner.src" :alt="locale==='en'?partner.nameEn:partner.name" :width="partner.width" :height="partner.height" loading="lazy" decoding="async">
     <span v-else class="home-partner-wordmark" :class="partner.id" :aria-label="partner.name"><strong>{{partner.label}}</strong><small v-if="partner.caption">{{partner.caption}}</small></span>
    </div>
   </div>
  </div>
 </section>`
};
