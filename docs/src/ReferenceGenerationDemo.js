import {computed} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {t} from './i18n.js';
import {featureReferenceGeneration as content} from './workspace-feature-demo-content.js';

export default{
 props:{elapsed:Number,reduced:Boolean},
 setup(props){
  const typed=computed(()=>Array.from(t(content.prompt)).slice(0,props.reduced?999:Math.max(0,Math.floor((props.elapsed-1200)/25))).join(''));
  return{content,typed,t};
 },
 template:`<div class="sequence-chat sequence-reference-chat">
  <div class="sequence-chat-heading">{{t('空间设计项目')}}</div>
  <div class="sequence-reference-request">
   <div class="sequence-reference-inputs"><figure v-for="(input,i) in content.inputs" :key="input.type" :class="input.type" v-show="reduced||elapsed>350+i*650"><img :src="input.image" :alt="t(input.role)"><figcaption>{{t(input.name)}}</figcaption></figure></div>
   <p class="sequence-reference-prompt">{{typed}}<i v-if="!reduced&&elapsed>=1200&&elapsed<3100" class="feature-type-caret"></i></p>
  </div>
  <p class="sequence-reference-answer" v-if="reduced||elapsed>3200"><span class="sequence-answer-dot"></span>{{t(elapsed<4400&&!reduced?content.loading:content.ready)}}</p>
  <figure class="sequence-reference-result" v-if="reduced||elapsed>4400"><img :src="content.resultImage" :alt="t(content.resultLabel)"><figcaption>{{t(content.resultLabel)}}</figcaption></figure>
  <div class="sequence-input sequence-reference-composer"><p>{{t(elapsed>3200||reduced?content.continue:content.placeholder)}}</p><div class="sequence-composer-tools"><span class="sequence-attach-tool"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span><span class="sequence-image-tool"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.5"/><path d="m4 17 5-5 4 4 3-3 5 5"/></svg></span><span class="sequence-send-tool"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-5 5 5-5 5 5"/></svg></span></div></div>
 </div>`
};
