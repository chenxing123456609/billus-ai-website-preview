const assets='/billus-ai-website-preview/assets/';
export const homeAdvantagesEnglish={};
const c=(zh,en)=>(homeAdvantagesEnglish[zh]=en,zh);
export const homeAdvantages=[
 {id:'industry',title:c('知识辅助方案选品','Knowledge-assisted selection'),tag:'SELECTION',
  description:c('让设计方案与实际家居产品相对应，业主在看效果图时即可了解产品的款式、材质与规格，减少后期重新选品、反复沟通和调整的工作。','Connect designs with real home furnishing products so clients can see styles, materials and specifications alongside renderings, reducing later reselection, repeated discussions and revisions.'),
  image:assets+'advantages/knowledge-assisted-selection-20261127.webp',alt:c('设计师使用电脑与平板进行家居方案选品','A designer selecting home furnishings using a computer and tablet'),
  keywords:c('方案选品 · 产品款式 · 材质规格','Product selection · Styles · Materials and specifications')},
 {id:'execution',title:c('选品清单衔接报价','Selections linked to quotes'),tag:'QUOTATION',
  description:c('减少设计方案与商品、订单环节之间的信息重复整理，业主在设计之初就可以使用同一份报价单来确认整体，所见即所得。','Reduce repeated information entry between designs, products and orders. Clients can confirm the complete proposal with a single quote from the start, connecting what they see with what they get.'),
  image:assets+'advantages/quotation-analysis-20261127.webp',alt:c('家居选品分析界面的场景示意图','Illustrative scene of a home furnishing product selection analysis interface'),
  keywords:c('选品清单 · 统一报价 · 方案确认','Product lists · Unified quotes · Proposal confirmation')},
 {id:'data',title:c('无限画布组织方案','Infinite canvas for design'),tag:'CANVAS',
  description:c('将项目资料、方案图片与选品参考集中在同一画布，方便设计师对照不同方案、梳理设计思路，并与业主讨论和确认修改方向，减少在多个文件与页面之间反复查找、切换和整理的工作。','Bring project files, design images and product references onto one canvas. Compare options, organize ideas and agree on revisions with clients, reducing repeated searching, switching and sorting across files and pages.'),
  image:assets+'advantages/infinite-canvas-workspace-20261127.webp',alt:c('绿色创作空间中的笔记本电脑展示无限画布界面','A laptop displaying an infinite canvas interface in a green creative workspace'),
  keywords:c('项目资料 · 方案对照 · 修改协同','Project files · Design comparison · Collaborative revisions')},
 {id:'business',title:c('自研探针复用经验','Probe-assisted references'),tag:'PROBE',
  description:c('遇到相似空间、预算或选品需求时，设计师可以利用探针系统参考已有项目或外部的方案、选品搭配与报价资料，减少从头查找、比较和整理的工作。','For similar spaces, budgets or product needs, designers can use the probe system to reference designs, product combinations and quotes from existing projects or external sources, reducing research, comparison and organization from scratch.'),
  image:assets+'industries/retail-20261123.webp',alt:c('连锁商业空间主题画面','Retail space illustrating commercial applications'),
  keywords:c('相似项目 · 选品参考 · 报价资料','Similar projects · Product references · Quote references')},
 {id:'team',title:c('企业系统定制部署','Custom enterprise deployment'),tag:'INTEGRATION',
  description:c('围绕空间企业的项目标准、选品规则与协作流程定制 AI 应用，让方案设计与后续业务按企业既有要求推进，降低实际使用中的适配成本。','Customize AI applications around spatial design companies’ project standards, product selection rules and workflows, aligning design and subsequent business processes with existing requirements to reduce adoption costs.'),
  image:assets+'advantages/enterprise-deployment-office-20261127.webp',alt:c('绿色智能办公空间与企业系统展示场景','A green intelligent office with enterprise systems on display'),
  keywords:c('企业标准 · 系统接入 · 定制部署','Company standards · System integration · Custom deployment')}
];
c('毕鲁斯的','Billus');c('五个核心优势','Five core strengths');
c('以行业积淀','Grounded in industry');c('驱动持续创新','driven by innovation');
c('以行业理解连接技术、数据与交付','Connecting industry insight, technology, data and delivery');
c('选择核心优势','Choose a core strength');c('暂停优势轮播','Pause strengths carousel');c('播放优势轮播','Play strengths carousel');
c('上一项优势','Previous strength');c('下一项优势','Next strength');c('核心优势图片','Core strength images');
