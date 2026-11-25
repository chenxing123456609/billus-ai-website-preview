import {computed,ref} from '/billus-ai-website-preview/vendor/vue.esm-browser.prod.js';
import {companyContent} from './company-content.js';
import {localizeTemplate,t} from './i18n.js';
export default{
 props:{slug:{type:String,default:''}},emits:['navigate'],
 setup(props){
  const data=companyContent.news,category=ref('全部'),query=ref('');
  const article=computed(()=>data.items.find(item=>item.slug===props.slug));
  const filtered=computed(()=>{const q=query.value.trim().toLocaleLowerCase();return data.items.filter(item=>(category.value==='全部'||item.category===category.value)&&(!q||[item.title,item.summary,t(item.title),t(item.summary)].some(text=>text.toLocaleLowerCase().includes(q))))});
  function reset(){query.value='';category.value='全部'}
  return{data,category,query,article,filtered,reset};
 },
 template:localizeTemplate(`<main id="main" class="news-page">
 <template v-if="!slug"><header class="wrap company-reading-hero"><h1>{{data.title}}</h1></header><section class="wrap news-browser" aria-label="新闻筛选"><div class="news-categories" role="group" aria-label="新闻分类"><button v-for="item in data.categories" :key="item" :aria-pressed="category===item" @click="category=item">{{item}}</button></div><div class="news-search"><label for="news-search" class="sr-only">搜索新闻</label><input id="news-search" type="search" v-model="query" placeholder="搜索新闻标题、摘要…"><button v-if="query" @click="query=''">清除</button></div><p v-if="query || category!=='全部'" class="news-count" role="status" aria-live="polite">共 {{filtered.length}} 篇内容</p></section><section class="wrap news-list" aria-label="新闻列表"><article v-for="item in filtered" :key="item.slug" class="news-card"><a class="news-card-image" :class="{'image-contain':item.imageMode==='contain'}" :href="'/about/news/'+item.slug" @click="$emit('navigate','/about/news/'+item.slug,$event)" :aria-label="item.title"><img :src="item.image" :alt="item.title" loading="lazy"></a><div class="news-card-copy"><h2><a :href="'/about/news/'+item.slug" @click="$emit('navigate','/about/news/'+item.slug,$event)">{{item.title}}</a></h2><p>{{item.summary}}</p><div class="news-card-meta"><span class="news-category">{{item.category}}</span><span>{{item.dateType}} {{item.date}}</span><span>{{item.editorialStatus}}</span></div></div><a class="news-read-link" :href="'/about/news/'+item.slug" @click="$emit('navigate','/about/news/'+item.slug,$event)">阅读全文 <span aria-hidden="true">→</span></a></article><div v-if="!filtered.length" class="news-empty"><h2>暂未找到相关内容</h2><button class="button button-outline" @click="reset">查看全部内容</button></div></section></template>
 <article v-else-if="article" class="wrap news-detail"><header><span class="news-category">{{article.category}}</span><h1>{{article.title}}</h1><p class="news-detail-meta">{{article.dateType}} {{article.date}} · {{article.editorialStatus}}</p></header><img class="news-detail-image" :class="{'image-contain':article.imageMode==='contain'}" :src="article.image" :alt="article.title"><section v-for="section in article.sections" :key="section.title"><h2>{{section.title}}</h2><p>{{section.body}}</p></section><p class="news-source">资料依据：{{article.source}}</p><a class="news-back-link" href="/about/news" @click="$emit('navigate','/about/news',$event)">← 返回新闻动态</a></article>
 <section v-else class="wrap news-empty"><h1>未找到这篇内容</h1><a class="button button-outline" href="/about/news" @click="$emit('navigate','/about/news',$event)">返回新闻动态</a></section>
</main>`)
};
