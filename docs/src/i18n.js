import {ref,watch} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {english} from './locales/en.js';
import {formatDisplayText} from './display-text.js';
import {supportTutorialEnglish} from './support-tutorial-content.js';

let savedLocale='zh';
try{savedLocale=localStorage.getItem('billus-locale')==='en'?'en':'zh'}catch{}
export const locale=ref(savedLocale);
export const missingTranslations=new Set();
watch(locale,value=>{
 document.documentElement.lang=value==='en'?'en':'zh-CN';
 try{localStorage.setItem('billus-locale',value)}catch{}
},{immediate:true});
export function toggleLocale(){locale.value=locale.value==='zh'?'en':'zh'}
export function t(value){
 if(typeof value!=='string')return value;
 let result=value;
 if(locale.value==='en'){
  if(Object.hasOwn(supportTutorialEnglish,value))result=supportTutorialEnglish[value];
  else if(Object.hasOwn(english,value))result=english[value];
  else if(/[\u3400-\u9fff]/.test(value))missingTranslations.add(value);
 }
 return formatDisplayText(result);
}

// Compile both templates once; Vue keeps all subsequent language changes reactive.
// Values, routes, v-model bindings and user-provided form values stay unchanged.
export function localizeTemplate(source){
 const holder=document.createElement('template');
 holder.innerHTML=source
  .replace(/<(Icon|ContentPage|SupportPage|TeamPage|NewsPage|OpenModelsPage)\b((?:"[^"]*"|'[^']*'|[^'">])*)\/>/g,(_,name,attributes)=>'<'+name+attributes+'></'+name+'>')
  .replace(/<(\/?)(ContentPage|SupportPage|TeamPage|NewsPage|OpenModelsPage)\b/g,(_,slash,name)=>'<'+slash+name.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase());
 function textPart(part){
  if(!part.trim())return part;
  const [,before,content,after]=part.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return before+'{{ t('+JSON.stringify(content)+') }}'+after;
 }
 function walk(parent){
  for(const node of [...parent.childNodes]){
   if(node.nodeType===3){
    node.textContent=node.textContent.split(/(\{\{[\s\S]*?\}\})/g).map(part=>{
     if(part.startsWith('{{')){
      const expression=part.slice(2,-2).trim();
      return /^t\(/.test(expression)?part:'{{ t('+expression+') }}';
     }
     return textPart(part);
    }).join('');
   }else if(node.nodeType===1){
    for(const name of ['aria-label','title','placeholder','alt']){
     if(node.hasAttribute(name)&&/[\u3400-\u9fff]/.test(node.getAttribute(name))){
      node.setAttribute(':'+name,'t('+JSON.stringify(node.getAttribute(name))+')');
      node.removeAttribute(name);
     }else if(node.hasAttribute(':'+name)){
      const expression=node.getAttribute(':'+name);
      if(!/^t\(/.test(expression))node.setAttribute(':'+name,'t('+expression+')');
     }
    }
    walk(node.tagName==='TEMPLATE'?node.content:node);
   }
  }
 }
 walk(holder.content);
 return holder.innerHTML;
}
