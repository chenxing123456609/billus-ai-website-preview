// Reuse the legacy website's brand assets; this list makes future replacements local.
export const clientLogos=[
 {id:'cswadi',name:'中建西南院',nameEn:'CSWADI',src:'/billus-ai-website-preview/assets/clients/cswadi-muted.png',width:372,height:125},
 {id:'beijing-jianshe-research',name:'北京建工建研院',nameEn:'Beijing Jiangong Architectural Research Institute',src:'/billus-ai-website-preview/assets/clients/beijing-jianshe-research-muted.png',width:448,height:216},
 {id:'beijing-construction',name:'北京建工',nameEn:'Beijing Construction Engineering Group',src:'/billus-ai-website-preview/assets/clients/beijing-construction-engineering-group-muted.png',width:708,height:172},
 {id:'der',name:'德尔未来',nameEn:'Der',src:'/billus-ai-website-preview/assets/clients/der-muted.png',width:372,height:123},
];


// A complete 12-item sequence keeps the four original marks repeating evenly.
export const clientLogoTrack=Array.from({length:12},(_,index)=>clientLogos[index%clientLogos.length]);
export const clientLogoDuration=180;
