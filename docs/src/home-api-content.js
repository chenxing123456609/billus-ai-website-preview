export const homeApiEnglish={};
const copy=(zh,en)=>{homeApiEnglish[zh]=en;return zh;};

// Latest user correction on 2026-11-27: starting at 30% of official reference prices.
export const homeApiPricing={label:copy('3折','30%')};

export const homeApiFeatures=[
 {id:'stability',tag:copy('稳定接入','Reliable access'),title:copy('稳定接入 少些封号困扰','Reliable access, fewer account disruptions'),body:copy('为 Claude Code、Codex 等工具提供稳定的模型接入服务，减少账号封禁带来的使用中断，让开发与设计持续推进。','Reliable model access for tools such as Claude Code and Codex helps reduce interruptions caused by account suspensions, keeping development and design moving.')},
 {id:'pricing',tag:copy('价格方案','Pricing'),title:copy('官方价3折起','From 30% of official rates'),body:copy('大幅降低使用成本，具体模型、币种与计费单位开通前确认。','Substantially lower usage costs. Confirm the model, currency and billing unit before activation.')},
 {id:'invoicing',tag:copy('企业合作','Business services'),title:copy('支持开票，衔接企业合作','Invoicing for business cooperation'),body:copy('支持专用发票开票，资源来源、服务方式与开票条件在合作前确认。','Special invoices are supported. Confirm service sourcing, delivery and invoicing terms before cooperation.')},
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

copy('从空间设计到开发与设计，探索AI的更多可能','Spatial design, code & design—explore more with AI');
copy('Billus 毕鲁斯 AI','Billus AI');
copy('业务一','Business 1');
copy('WORKSPACE视频介绍','WORKSPACE video introduction');
copy('业务二','Business 2');
copy('开放平台','Open Platform');
copy('毕鲁斯API开放平台','Billus API Open Platform');
copy('模型广场','Model Square');
copy('Claude Code、Codex 相关代码模型 API 服务（转让使用）','Coding-model API services related to Claude Code and Codex (for transferred use)');
copy('诚邀有代码大模型需求的开发者与企业，沟通接入方式，洽谈长期合作。','Developers and teams with coding-model needs are welcome to discuss access and ongoing cooperation.');
copy('面向开发者与设计师的线上模型 API 入口','An online model API entry point for developers and designers');
copy('提供 Claude Code、Codex 等工具相关的模型 API 服务（转让使用），沟通接入、使用支持与长期合作。','Model API services related to tools such as Claude Code and Codex (for transferred use). Discuss access, usage support and ongoing cooperation.');
copy('一个品牌，两个业务','One brand, two businesses');
copy('WORKSPACE 是桌面项目工作台，模型广场是线上 API 入口。','WORKSPACE is a desktop project workspace. Model Square is an online API entry point.');
copy('下载到电脑使用','Download and use on your computer');
copy('桌面项目工作台','Desktop project workspace');
copy('在同一项目中整理需求与参考资料，推进空间方案生成、连续修改与成果交付。','Organize requirements and references in one project, then develop spatial concepts, refine them and prepare deliverables.');
copy('了解 WORKSPACE','Explore WORKSPACE');
copy('查看空间项目演示','View the project demo');
copy('通过浏览器访问','Access through your browser');
copy('线上 API 入口','Online API entry point');
copy('面向开发者与设计师，围绕开发与设计任务提供模型 API 接入、调用配置与使用支持。','For developers and designers: model API access, configuration and usage support for development and design tasks.');
copy('了解模型广场','Explore Model Square');
copy('查看模型服务介绍','View model services');
copy('咨询长期合作','Discuss ongoing cooperation');
copy('API 服务优势','API service advantages');
copy('官方价格','Official price');
copy('专用发票','Special invoice');
copy('接入与使用支持','Access and usage support');
copy('接入方式、服务支持范围、计价基准与开票条件，以双方确认的服务说明为准。','Access methods, support scope, pricing references and invoicing conditions follow the service terms agreed by both parties.');
copy('从设计现场，到开发接口','From design workflows to model APIs');
copy('WORKSPACE 组织空间项目，API 开放平台面向开发者与设计师提供模型接入。两种方式分别服务不同任务。','WORKSPACE organizes spatial projects. The API Open Platform provides model access for developers and designers. Each serves a different kind of work.');
copy('模型卡片展示','Model cards');
copy('选模型，也要选服务','Model choice is only the beginning');
copy('接入支持、价格与企业合作条件，在使用前都应清楚。','Understand access support, pricing and business terms before you start.');
copy('了解服务','Explore services');
copy('设计师','Designers');
copy('开发者','Developers');
copy('使用支持','Usage support');
copy('从空间设计','From spatial design');
copy('到开发与创作','to development and creation');
copy('为不同任务，找到合适的 AI 入口','Choose an AI entry point for your workflow');
copy('WORKSPACE 服务空间项目，API 开放平台面向开发者与设计师提供模型接入，支持 Claude Code、Codex 等工具相关服务（转让使用）。','WORKSPACE serves spatial projects. The API Open Platform gives developers and designers model access, including services related to tools such as Claude Code and Codex (for transferred use).');
copy('接入支持、优惠定价、企业开票，让开发与设计更顺畅。','Access support, competitive pricing and business invoicing for smoother development and design.');
copy('从空间设计 到开发与创作','From spatial design to code & creation');
copy('模型服务的三大优势','Three advantages of our model services');
copy('模型之外 更有专业服务','Beyond models, professional support');
copy('让开发与设计 更顺畅','Smoother development and design');
copy('稳定接入与持续支持','Reliable access and ongoing support');
copy('模型服务展示','Model services');
copy('暂停模型滚动','Pause model scrolling');
copy('继续模型滚动','Resume model scrolling');
copy('接入更稳 创作更从容','Reliable access, room to create');
