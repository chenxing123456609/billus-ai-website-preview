import {ref,computed,onMounted,onBeforeUnmount} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
export default{
 setup(){
  const title='BILLUS AI WORKSPACE',prefix='BILLUS AI ',count=ref(0);
  const typedBrand=computed(()=>title.slice(0,Math.min(count.value,prefix.length)));
  const typedWorkspace=computed(()=>title.slice(prefix.length,count.value));
  const typing=computed(()=>count.value<title.length);
  let timer=0,motion;
  function tick(){
   if(document.hidden)return;
   count.value=Math.min(count.value+1,title.length);
   if(typing.value)timer=setTimeout(tick,85);
  }
  function resume(){
   clearTimeout(timer);
   if(motion.matches){count.value=title.length;return;}
   if(!document.hidden&&typing.value)timer=setTimeout(tick,count.value===0?220:85);
  }
  onMounted(()=>{
   motion=matchMedia('(prefers-reduced-motion: reduce)');
   motion.addEventListener('change',resume);
   document.addEventListener('visibilitychange',resume);
   resume();
  });
  onBeforeUnmount(()=>{
   clearTimeout(timer);
   motion?.removeEventListener('change',resume);
   document.removeEventListener('visibilitychange',resume);
  });
  return{typedBrand,typedWorkspace,typing};
 },
 template:`<h1 id="workspace-overview-title" class="workspace-animated-title workspace-fixed-title" aria-label="BILLUS AI WORKSPACE"><span class="workspace-fixed-brand" aria-hidden="true"><span class="workspace-brand-measure">BILLUS AI <em>WORKSPACE</em></span><span class="workspace-brand-typed"><span v-text="typedBrand"></span><em v-text="typedWorkspace"></em><i v-if="typing" class="workspace-title-caret"></i></span></span></h1>`
};
