// Reuse the legacy website's brand assets; this list makes future replacements local.
export const clientLogos=[
 {id:'cswadi',name:'中建西南院',nameEn:'CSWADI',src:'/billus-ai-website-preview/assets/clients/cswadi.jpg',width:448,height:187},
 {id:'beijing-jianshe-research',name:'北京建工建研院',nameEn:'Beijing Jiangong Architectural Research Institute',src:'/billus-ai-website-preview/assets/clients/beijing-jianshe-research.jpg',width:448,height:216},
 {id:'beijing-construction',name:'北京建工',nameEn:'Beijing Construction Engineering Group',src:'/billus-ai-website-preview/assets/clients/beijing-construction-engineering-group.png',width:931,height:326},
 {id:'der',name:'德尔未来',nameEn:'Der',src:'/billus-ai-website-preview/assets/clients/der.jpg',width:448,height:210},
];
const rotated=[...clientLogos.slice(2),...clientLogos.slice(0,2)];
export const clientLogoRows=[
 {id:'left',logos:[...clientLogos,...clientLogos]},
 {id:'right',logos:[...rotated,...rotated]},
];
