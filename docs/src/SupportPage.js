import {computed,ref,watch,onMounted,onBeforeUnmount,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {supportContent} from './support-content.js';
import {localizeTemplate,t,locale} from './i18n.js';
export default{
 props:{docKey:{type:String,default:'overview'}},
 emits:['navigate','download','patch','contact'],
 setup(props,{emit}){
  const data=computed(()=>supportContent[props.docKey]||supportContent.overview);
  const activeSection=ref(''),navOpen=ref(false),copyState=ref('');
  const groups=[{title:'快速上手',keys:['overview']},{title:'智能体',keys:['agent-install','agent-basics']},{title:'工具安装配置',keys:['claude','codex']},{title:'使用规则',keys:['usage','policy']},{title:'产品记录',keys:['updates']}];
  let observer;
  async function observe(){
   observer?.disconnect();await nextTick();activeSection.value=data.value.sections[0]?.id||'';
   observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)activeSection.value=entry.target.id},{rootMargin:'-120px 0px -55% 0px'});
   document.querySelectorAll('.docs-section').forEach(el=>observer.observe(el));
  }
  function navigate(path,event){navOpen.value=false;copyState.value='';emit('navigate',path,event)}
  async function copyPage(){
   const text=[t(data.value.title),...data.value.sections.flatMap(s=>[t(s.title),t(s.body),...(s.bullets||[]).map(t)])].join('\n\n');
   try{await navigator.clipboard.writeText(text);copyState.value='copied'}catch{copyState.value='failed'}
  }
  watch(()=>props.docKey,()=>{navOpen.value=false;copyState.value='';observe()});
  onMounted(observe);onBeforeUnmount(()=>observer?.disconnect());
  return{locale,data,activeSection,navOpen,copyState,groups,supportContent,navigate,copyPage};
 },
 template:localizeTemplate(`<main id="main" class="support-documentation">
 <div class="wrap breadcrumb"><a href="/" @click="$emit('navigate','/',$event)">首页</a><span>/</span><a href="/support/manual" @click="navigate('/support/manual',$event)">服务支持</a><span>/</span><span>{{data.title}}</span></div>
 <div class="wrap docs-grid">
  <aside class="docs-sidebar"><button class="docs-nav-toggle" :aria-expanded="navOpen" aria-controls="docs-navigation" @click="navOpen=!navOpen">功能手册与支持 <span aria-hidden="true">⌄</span></button><nav id="docs-navigation" class="docs-navigation" :class="{'is-open':navOpen}" aria-label="服务支持文档导航"><section v-for="group in groups" :key="group.title" class="docs-nav-group"><h2>{{group.title}}</h2><a v-for="key in group.keys" :key="key" :href="supportContent[key].path" :aria-current="docKey===key?'page':undefined" @click="navigate(supportContent[key].path,$event)">{{supportContent[key].title}}</a></section><div class="docs-nav-help"><p>需要进一步帮助？</p><button @click="$emit('contact')">查看官方客服 ↗</button></div></nav></aside>
  <article class="docs-article">
   <header class="docs-heading"><div class="docs-title-row"><h1>{{data.title}}</h1><button class="docs-copy" @click="copyPage">{{copyState==='copied'?'已复制':'复制本页'}}</button></div><p class="docs-copy-status" role="status" aria-live="polite">{{copyState==='failed'?'暂时无法自动复制，请选择正文后复制。':''}}</p></header>
   <details class="docs-inline-toc"><summary>本篇目录</summary><nav aria-label="本篇目录"><a v-for="section in data.sections" :key="section.id" :href="'#'+section.id">{{section.title}}</a></nav></details>
   <section v-for="(section,index) in data.sections" :key="section.id" :id="section.id" class="docs-section"><h2>{{section.title}}</h2><p>{{section.body}}</p><ul v-if="section.bullets"><li v-for="line in section.bullets" :key="line">{{line}}</li></ul><figure v-if="data.figure && index===0" class="docs-figure"><img :src="locale==='en'&&data.figure.srcEn?data.figure.srcEn:data.figure.src" :alt="data.figure.alt"><figcaption>{{data.figure.caption}}</figcaption></figure></section>
   <a v-if="data.link" class="manual-official-link" :href="data.link.href" target="_blank" rel="noopener noreferrer">{{data.link.label}} ↗</a>
   <nav class="docs-bottom-links" aria-label="文档相关入口"><button v-if="['overview','agent-install','agent-basics'].includes(docKey)" @click="$emit('download')">下载毕鲁斯智能体 ↗</button><button v-if="docKey==='agent-install'" @click="$emit('patch')">下载补丁包 ↗</button><a v-if="docKey!=='policy'" href="/support/usage-policy" @click="navigate('/support/usage-policy',$event)">阅读使用政策 ↗</a><a href="/contact-sales" @click="$emit('navigate','/contact-sales',$event)">联系销售 ↗</a></nav>
  </article>
  <aside class="docs-toc"><p>本篇目录</p><nav aria-label="文章章节"><a v-for="section in data.sections" :key="section.id" :href="'#'+section.id" :aria-current="activeSection===section.id?'location':undefined">{{section.title}}</a></nav></aside>
 </div>
</main>`)
};
