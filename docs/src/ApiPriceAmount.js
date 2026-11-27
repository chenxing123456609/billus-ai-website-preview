import {homeApiPricing} from './home-api-content.js';
import {locale,t} from './i18n.js';

export default {
 props:{reference:Boolean},
 setup(){return{homeApiPricing,locale,t};},
 template:`<span class="api-price-amount"><template v-if="locale==='en'"><small class="api-price-from">From </small>{{t(homeApiPricing.label)}}<template v-if="reference"> of official rates</template></template><template v-else><template v-if="reference">官方价</template>{{t(homeApiPricing.label)}}<small class="api-price-from">起</small></template></span>`,
};
