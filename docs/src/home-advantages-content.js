const assets='/billus-ai-website-preview/assets/';
export const homeAdvantagesEnglish={};
const c=(zh,en)=>(homeAdvantagesEnglish[zh]=en,zh);
export const homeAdvantages=[
 {id:'industry',title:c('行业场景深入','Deep industry focus'),tag:'INDUSTRY',
  description:c('围绕空间设计、装修、家居建材及连锁商业，衔接方案生成、商品匹配、报价与交付，解决各环节信息割裂和重复沟通的问题。','Connect proposals, product matching, estimates and deliverables across spatial design, renovation, home furnishings, building materials and retail chains, addressing fragmented information and repeated communication.'),
  image:assets+'industries/interior-20261123.webp',alt:c('空间设计与家居材料场景','Spatial design and furnishing materials'),
  keywords:c('空间设计 · 家居建材 · 连锁商业','Spatial design · Materials · Retail')},
 {id:'execution',title:c('自研执行底座','Purpose-built execution'),tag:'EXECUTION',
  description:c('以多模态能力和企业级智能体组织任务拆解、模型调用、状态管理与异常处理，支持复杂项目的连续执行。','Use multimodal capabilities and an enterprise agent to organize task decomposition, model calls, state management and exception handling, supporting continuous execution across complex projects.'),
  image:assets+'advantages/execution.svg',alt:c('连接任务节点的执行底座主题插画','Illustration of connected task execution nodes'),
  keywords:c('任务拆解 · 模型调用 · 连续执行','Task planning · Model calls · Execution')},
 {id:'data',title:c('企业数据积累','Company knowledge that grows'),tag:'KNOWLEDGE',
  description:c('接入企业知识库、产品 SKU 库和报价规则库，结合授权项目经验持续完善选品、报价及交付能力，形成行业积累。','Connect company knowledge, product SKU catalogs and pricing rules. Build on authorized project experience to refine selections, estimates and deliverables, accumulating industry knowledge.'),
  image:assets+'advantages/knowledge.svg',alt:c('企业知识与商品资料汇集的主题插画','Illustration of company knowledge and product data coming together'),
  keywords:c('企业知识 · 产品 SKU · 报价规则','Company knowledge · SKUs · Pricing')},
 {id:'business',title:c('商业化路径清晰','A clear commercial path'),tag:'BUSINESS',
  description:c('已开展 B 端试点交付，以订阅、模型调用和企业定制切入，再逐步向供应商服务、采购协同及交易服务延伸。','B2B pilot delivery is underway, starting with subscriptions, model usage and company customization, then gradually extending toward supplier services, procurement collaboration and transaction services.'),
  image:assets+'industries/retail-20261123.webp',alt:c('连锁商业空间主题画面','Retail space illustrating commercial applications'),
  keywords:c('B 端试点 · 企业服务 · 采购协同','B2B pilots · Enterprise services · Procurement')},
 {id:'team',title:c('团队能力互补','Complementary expertise'),tag:'PEOPLE',
  description:c('团队覆盖产业商务、多模态与智能体架构、全栈工程及交互设计，能够协同推进技术研发、企业接入和项目交付。','The team brings together industry and business, multimodal and agent architecture, full-stack engineering and interaction design to advance R&D, company integration and project delivery.'),
  image:assets+'advantages/team.svg',alt:c('四种能力相互连接的团队协作主题插画','Illustration of four complementary areas of expertise'),
  keywords:c('产业商务 · 技术研发 · 产品设计','Industry · Engineering · Product design')}
];
c('毕鲁斯的','Billus');c('五个核心优势','Five core strengths');
c('深耕空间产业','Built for spatial industries');c('连接方案与交付','from concept to delivery');
c('以行业理解连接技术、数据与交付','Connecting industry insight, technology, data and delivery');
c('选择核心优势','Choose a core strength');c('暂停优势轮播','Pause strengths carousel');c('播放优势轮播','Play strengths carousel');
c('上一项优势','Previous strength');c('下一项优势','Next strength');c('核心优势图片','Core strength images');
