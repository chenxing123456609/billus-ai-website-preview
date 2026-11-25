const entranceStyle=document.createElement('link');entranceStyle.rel='stylesheet';entranceStyle.href='/billus-ai-website-preview/src/workspace-entrance.css';document.head.append(entranceStyle);
const balanceStyle=document.createElement('link');balanceStyle.rel='stylesheet';balanceStyle.href='/billus-ai-website-preview/src/shared-balance.css';document.head.append(balanceStyle);
import {createApp} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import App from './App.js';
import {localizeTemplate,t} from './i18n.js';
import {installFormFeedback} from './design-accessibility.js';
const response=await fetch('/billus-ai-website-preview/src/template.html');
App.template=localizeTemplate(await response.text());
const app=createApp(App);
app.config.globalProperties.t=t;
app.mount('#app');
installFormFeedback();
const siteBase=String(window.__BILLUS_BASE__||'').replace(/\/$/,'');
if(siteBase){
 const rewriteInternalLinks=()=>document.querySelectorAll('a[href^="/"]').forEach(link=>{
  const href=link.getAttribute('href');
  if(href&&!href.startsWith('//')&&!href.startsWith(siteBase+'/'))link.setAttribute('href',siteBase+href);
 });
 const observer=new MutationObserver(rewriteInternalLinks);
 observer.observe(document.getElementById('app'),{subtree:true,childList:true,attributes:true,attributeFilter:['href']});
 rewriteInternalLinks();
}
