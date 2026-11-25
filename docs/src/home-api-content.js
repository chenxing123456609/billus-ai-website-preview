export const homeApiEnglish={};
const copy=(zh,en)=>{homeApiEnglish[zh]=en;return zh;};

// Updated by the user on 2026-11-24: 3.4 zhe means 34% of the official price.
export const homeApiPricing={label:copy('3.4折','34%')};

export const homeApiFeatures=[
 {id:'stability',title:copy('稳定使用，专注开发','Stable use. Focused development.'),body:copy('关注封号痛点与持续使用体验，围绕相关代码模型服务提供接入与使用支持。','Access and usage support for related coding-model services, with attention to account restrictions and continuity of use.')},
 {id:'pricing',title:copy('定价仅为官方价的3.4折','Priced at 34% of official rates'),body:copy('大幅降低使用成本，具体模型、币种与计费单位开通前确认。','Substantially lower usage costs. Confirm the model, currency and billing unit before activation.')},
 {id:'invoicing',title:copy('支持开票，衔接企业合作','Invoicing for business cooperation'),body:copy('支持专用发票开票，资源来源、服务方式与开票条件在合作前确认。','Special invoices are supported. Confirm service sourcing, delivery and invoicing terms before cooperation.')},
];

// User-selected display names and billing labels from the 2026-11-23 reference.
// This catalog is presentation content, not an independently verified availability list.
const tokenBilling=copy('Token 计费','Token billing');
const imageBilling=copy('按图片计费','Per-image billing');
const brands='/billus-ai-website-preview/assets/model-brands/';
export const homeApiModels=[
 {name:'Claude Haiku 5.5',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'Claude Opus 5.5',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'Claude Sonnet 5',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'claude-fable-5-1',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'claude-fable-5-2',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'claude-haiku-4-5',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'claude-sonnet-5-5',brand:'Anthropic',icon:brands+'anthropic.png',billing:tokenBilling},
 {name:'gemini-3-pro-image-preview',brand:'Gemini',icon:brands+'gemini.png',billing:imageBilling},
 {name:'gemini-nano-banana-2.1',brand:'Gemini',icon:brands+'gemini.png',billing:imageBilling},
 {name:'gpt-6-astra',brand:'OpenAI',icon:brands+'openai.png',billing:tokenBilling},
 {name:'gpt-6.1-sol',brand:'OpenAI',icon:brands+'openai.png',billing:tokenBilling},
 {name:'gpt-6.2-astra',brand:'OpenAI',icon:brands+'openai.png',billing:tokenBilling}
];

copy('接入你需要的模型','Connect to the models you need');
copy('从 Claude、Gemini 到 GPT，按任务选择模型，沟通接入与使用方式。','Explore Claude, Gemini and GPT models, and discuss access for your workflow.');
copy('模型服务目录','Model service catalog');
copy('咨询模型接入','Discuss model access');
copy('型号与计费以模型广场实际展示及开通说明为准。','Model availability and billing follow the Model Square listing and activation details.');

copy('Billus 毕鲁斯 AI','Billus AI');
copy('模型广场','Model Square');
copy('Claude Code、Codex 相关代码模型 API 服务（转让使用）','Coding-model API services related to Claude Code and Codex (for transferred use)');
copy('诚邀有代码大模型需求的开发者与企业，沟通接入方式，洽谈长期合作。','Developers and teams with coding-model needs are welcome to discuss access and ongoing cooperation.');
copy('咨询长期合作','Discuss ongoing cooperation');
copy('API 服务优势','API service advantages');
copy('官方价格','Official price');
copy('专用发票','Special invoice');
copy('接入与使用支持','Access and usage support');
copy('接入方式、服务支持范围、计价基准与开票条件，以双方确认的服务说明为准。','Access methods, support scope, pricing references and invoicing conditions follow the service terms agreed by both parties.');
