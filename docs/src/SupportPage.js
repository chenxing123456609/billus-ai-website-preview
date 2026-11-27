import {computed,ref,watch,onMounted,onBeforeUnmount,nextTick} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {supportContent} from './support-content.js';
import {localizeTemplate,t,locale} from './i18n.js';
export default{
 props:{docKey:{type:String,default:'overview'}},
 emits:['navigate','download','patch','contact'],
 setup(props,{emit}){
  const data=computed(()=>supportContent[props.docKey]||supportContent.overview);
  const activeSection=ref(''),navOpen=ref(false),copyState=ref('');
  const groups=[{title:'快速上手',keys:['overview','model-square']},{title:'BILLUS AI WORKSPACE',keys:['agent-install','agent-basics']},{title:'工具安装配置',keys:['claude-desktop','claude','codex']},{title:'使用规则',keys:['usage','policy']},{title:'产品记录',keys:['updates']}];
  const groupFor=key=>groups.find(group=>group.keys.includes(key))?.title||groups[0].title;
  const expandedGroup=ref(groupFor(props.docKey));
  function toggleGroup(title){expandedGroup.value=expandedGroup.value===title?'':title;}
  let observer;
  async function observe(){
   observer?.disconnect();await nextTick();activeSection.value=data.value.sections[0]?.id||'';
   observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)activeSection.value=entry.target.id},{rootMargin:'-120px 0px -55% 0px'});
   document.querySelectorAll('.docs-section').forEach(el=>observer.observe(el));
  }
  function navigate(path,event){navOpen.value=false;copyState.value='';emit('navigate',path,event)}
  async function copyPage(){
   const text=[t(data.value.title),...data.value.sections.flatMap(s=>[t(s.title),t(s.body),...(s.bullets||[]).map(t),...(s.steps||[]).map((item,i)=>(i+1)+'. '+t(item.title)+'\n'+t(item.body)+(item.href?'\n'+item.href:'')),...(s.example?[t(s.example.title),t(s.example.text)]:[]),...(s.faq||[]).map(item=>t(item.title)+'\n'+t(item.body)),...(s.links||[]).map(item=>t(item.title)+'\n'+t(item.detail))])].join('\n\n');
   try{await navigator.clipboard.writeText(text);copyState.value='copied'}catch{copyState.value='failed'}
  }
  function seekVideo(id,time){
   const video=document.getElementById(id)?.querySelector('video');
   if(!video)return;
   const play=()=>{video.currentTime=time;video.play()?.catch(()=>{});};
   if(video.readyState>=1)play();else{video.addEventListener('loadedmetadata',play,{once:true});video.load();}
  }
  watch(()=>props.docKey,key=>{navOpen.value=false;copyState.value='';expandedGroup.value=groupFor(key);observe()});
  onMounted(observe);onBeforeUnmount(()=>observer?.disconnect());
  return{locale,data,activeSection,navOpen,copyState,groups,expandedGroup,toggleGroup,supportContent,navigate,copyPage,seekVideo};
 },
 template:localizeTemplate(`<main id="main" class="support-documentation">
 <div class="wrap docs-grid">
  <aside class="docs-sidebar"><button class="docs-nav-toggle" :aria-expanded="navOpen" aria-controls="docs-navigation" @click="navOpen=!navOpen">功能手册与支持 <span aria-hidden="true">⌄</span></button><nav id="docs-navigation" class="docs-navigation" :class="{'is-open':navOpen}" aria-label="服务支持文档导航"><section v-for="(group,index) in groups" :key="group.title" class="docs-nav-group"><h2><button type="button" :aria-expanded="expandedGroup===group.title" :aria-controls="'docs-group-links-'+index" @click="toggleGroup(group.title)"><span>{{group.title}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></button></h2><div :id="'docs-group-links-'+index" v-show="expandedGroup===group.title" class="docs-nav-group-links"><a v-for="key in group.keys" :key="key" :href="supportContent[key].path" :aria-current="docKey===key?'page':undefined" @click="navigate(supportContent[key].path,$event)">{{supportContent[key].title}}</a></div></section><div class="docs-nav-help"><p>需要进一步帮助？</p><button @click="$emit('contact')">查看官方客服 ↗</button></div></nav></aside>
  <article class="docs-article">
   <header class="docs-heading"><div class="docs-title-row"><h1>{{data.title}}</h1><button class="docs-copy" @click="copyPage">{{copyState==='copied'?'已复制':'复制本页'}}</button></div><p class="docs-copy-status" role="status" aria-live="polite">{{copyState==='failed'?'暂时无法自动复制，请选择正文后复制。':''}}</p></header>
   <details class="docs-inline-toc"><summary>本篇目录</summary><nav aria-label="本篇目录"><a v-for="section in data.sections" :key="section.id" :href="'#'+section.id">{{section.title}}</a></nav></details>
   <section v-for="(section,index) in data.sections" :key="section.id" :id="section.id" class="docs-section"><h2>{{section.title}}</h2><p>{{section.body}}</p><ul v-if="section.bullets"><li v-for="line in section.bullets" :key="line">{{line}}</li></ul>
    <ol v-if="section.steps" class="docs-tutorial-steps"><li v-for="item in section.steps" :key="item.title"><h3>{{item.title}}</h3><p>{{item.body}}</p><a v-if="item.href" class="docs-step-link" :href="item.href" target="_blank" rel="noopener noreferrer">{{item.linkLabel}} <span aria-hidden="true">↗</span></a></li></ol>
    <div v-if="section.example" class="docs-task-example"><h3>{{section.example.title}}</h3><blockquote>{{section.example.text}}</blockquote></div>
    <figure v-if="section.video" class="docs-video"><video controls playsinline preload="metadata" :poster="section.video.poster" :aria-label="section.video.title"><source :src="section.video.src" type="video/mp4">视频暂不可播放</video><figcaption>{{section.video.caption}}</figcaption></figure>
    <nav v-if="section.chapters" class="docs-video-chapters" aria-label="视频章节"><button v-for="chapter in section.chapters" :key="chapter.time" type="button" @click="seekVideo(section.id,chapter.time)"><span>{{Math.floor(chapter.time/60)}}:{{String(chapter.time%60).padStart(2,'0')}}</span>{{chapter.label}}</button></nav>
    <figure v-if="section.image" class="docs-figure"><img :src="section.image.src" :alt="section.image.alt" loading="lazy"><figcaption>{{section.image.caption}}</figcaption></figure>
    <div v-if="section.faq" class="docs-tutorial-faq"><details v-for="item in section.faq" :key="item.title"><summary>{{item.title}}</summary><p>{{item.body}}</p></details></div>
    <nav v-if="section.links" class="docs-related-tutorials" aria-label="相关教程"><a v-for="link in section.links" :key="link.href" :href="link.href" @click="navigate(link.href,$event)"><strong>{{link.title}}</strong><span>{{link.detail}}</span><span aria-hidden="true">↗</span></a></nav>
    <figure v-if="data.figure && index===0" class="docs-figure"><img :src="locale==='en'&&data.figure.srcEn?data.figure.srcEn:data.figure.src" :alt="data.figure.alt"><figcaption>{{data.figure.caption}}</figcaption></figure></section>
   <a v-if="data.link" class="manual-official-link" :href="data.link.href" target="_blank" rel="noopener noreferrer">{{data.link.label}} ↗</a>
   <nav class="docs-bottom-links" aria-label="文档相关入口"><button v-if="['overview','agent-install','agent-basics'].includes(docKey)" @click="$emit('download')">下载毕鲁斯智能体 ↗</button><button v-if="docKey==='agent-install'" @click="$emit('patch')">下载补丁包 ↗</button><a v-if="docKey!=='policy'" href="/support/usage-policy" @click="navigate('/support/usage-policy',$event)">阅读使用政策 ↗</a><a href="/contact-sales" @click="$emit('navigate','/contact-sales',$event)">联系销售 ↗</a></nav>
  </article>
  <aside class="docs-toc"><p>本篇目录</p><nav aria-label="文章章节"><a v-for="section in data.sections" :key="section.id" :href="'#'+section.id" :aria-current="activeSection===section.id?'location':undefined">{{section.title}}</a></nav></aside>
 </div>
</main>`)
};
