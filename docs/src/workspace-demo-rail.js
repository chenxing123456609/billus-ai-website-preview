import {ref,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
export function useDemoRail({index,select,count}){
 const root=ref(null);
 function keydown(event){
  if(event.ctrlKey||event.metaKey||event.altKey)return;
  const moves={ArrowLeft:index.value-1,ArrowRight:index.value+1,Home:0,End:count-1};
  if(!Object.hasOwn(moves,event.key))return;
  event.preventDefault();
  const next=(moves[event.key]+count)%count;
  select(next);
  nextTick(()=>root.value?.querySelectorAll('button')[next]?.focus());
 }
 return{root,keydown};
}
