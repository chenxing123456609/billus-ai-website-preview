import {locale,t} from './i18n.js';

export default {
 setup(){return{locale,t};},
 template:`<h2 id="home-api-product-title" class="home-api-fixed-title"><span>{{locale==='en'?'Billus API ':'毕鲁斯API'}}<em>{{t('开放平台')}}</em></span></h2>`,
};
