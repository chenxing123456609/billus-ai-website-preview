// User-specified industry labels and supplied scene images, received 2026-11-23.
// These visuals illustrate service scenarios; they are not verified customer cases.
export const homeIndustryEnglish={};
const c=(zh,en)=>(homeIndustryEnglish[zh]=en,zh);
const assets='/billus-ai-website-preview/assets/industries/';

export const homeIndustries=[
 {id:'dining',name:c('餐饮','Food and beverage'),tag:'FOOD & BEVERAGE',description:c('围绕餐饮空间的动线、氛围与品牌表达，协助门店方案设计和选品资料整理。','Support restaurant concepts and product-selection materials around circulation, atmosphere and brand expression.'),image:assets+'dining-20261123.webp',fit:'cover'},
 {id:'hotels',name:c('酒店','Hotels'),tag:'HOTELS',description:c('结合大堂、客房等场景，梳理空间风格、软装搭配与项目汇报资料。','Develop spatial direction, furnishing ideas and project presentations for lobbies, guest rooms and other hotel settings.'),image:assets+'hotels-20261123.webp',fit:'cover'},
 {id:'retail',name:c('零售连锁','Retail chains'),tag:'RETAIL CHAINS',description:c('复用品牌标准，围绕陈列、动线与门店形象，协助开店改店方案和汇报资料整理。','Reuse brand standards to support new-store and renovation proposals, merchandising, circulation and project presentations.'),image:assets+'retail-20261123.webp',fit:'cover'},
 {id:'interior',name:c('装修设计','Interior design'),tag:'INTERIOR DESIGN',description:c('从需求梳理、空间效果到材料选型，协助设计团队推进方案与项目沟通。','Support design teams with requirements, spatial visuals and material selection for clearer project discussions.'),image:assets+'interior-20261123.webp',fit:'cover'},
 {id:'furnishings',name:c('软装家居','Furniture and furnishings'),tag:'FURNITURE & FURNISHINGS',description:c('围绕家具、织物与装饰搭配，呈现产品入景效果，整理选品与报价资料。','Visualize furniture, fabrics and accessories in context, and organize product selections and quotation materials.'),image:assets+'furnishings-20261123.webp',fit:'cover'},
 {id:'materials',name:c('建材供应链','Building materials supply chain'),tag:'MATERIALS & SUPPLY CHAIN',description:c('结合产品 SKU 与报价规则，协助材料匹配、清单整理与采购资料准备。','Use product SKUs and pricing rules to support material matching, item lists and procurement documentation.'),image:assets+'materials-20261123.webp',fit:'cover'}
];
