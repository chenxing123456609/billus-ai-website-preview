// Keep English next to the new page copy; the shared t() dictionary consumes it.
export const apiSquareEnglish={};
const c=(zh,en)=>{apiSquareEnglish[zh]=en;return zh;};

export const apiCapabilityCards=[
 {diagram:'integration',title:c('接入方式清楚','A clear path to access'),body:c('先核对模型、接口与开发工具配置，按当前服务指引安排接入。','Confirm the model, interface and developer-tool configuration, then follow the current service guide.')},
 {diagram:'support',title:c('使用支持到位','Support through actual use'),body:c('围绕开通、使用问题与异常处理沟通支持安排，具体范围以服务说明为准。','Discuss setup, usage questions and issue handling within the agreed support scope.')},
 {diagram:'pricing',title:c('计费口径明确','Understand how usage is billed'),body:c('核对模型、计费单位、报价基准和结算规则，便于评估实际使用成本。','Check models, billing units, pricing references and settlement rules before evaluating costs.')},
 {diagram:'enterprise',title:c('企业合作衔接','Built for business discussions'),body:c('沟通团队需求、合同、开票与数据处理要求，再确认具体合作方式。','Discuss team requirements, contracts, invoicing and data handling before agreeing on an arrangement.')},
];

export const apiServiceCatalog=[
 {mark:'CC',name:'Claude Code',category:c('相关代码模型服务','Related coding-model services'),body:c('围绕 Claude Code 的实际使用场景，沟通服务配置与适配方式。','Discuss service configuration and compatibility for your Claude Code workflow.'),tags:[c('工具配置','Tool configuration'),c('使用支持','Usage support')],detail:c('确认所需模型、服务地址、认证方式和使用权限后，参照教程完成配置。','Confirm the required model, service address, authentication and access permissions before following the setup guide.')},
 {mark:'CX',name:'Codex',category:c('相关代码模型服务','Related coding-model services'),body:c('面向 Codex 工作流，按当前资料核对模型服务与连接方式。','Check available model services and connection methods for your Codex workflow.'),tags:[c('接入验证','Access validation'),c('开发流程','Development workflow')],detail:c('按对应指引配置服务信息，用不含敏感资料的最小任务验证接入结果。','Configure the service according to its guide and validate access with a small, non-sensitive task.')},
 {mark:'API',name:c('团队模型需求','Team model requirements'),category:c('团队接入与长期合作','Team access and ongoing cooperation'),body:c('结合团队场景、使用规模和采购要求，沟通合适的模型服务安排。','Discuss model services that fit your team’s scenarios, usage scale and procurement needs.'),tags:[c('需求匹配','Requirements matching'),c('企业合作','Business cooperation')],detail:c('具体底层模型、接口范围、报价和服务支持在合作前分别确认。','Confirm the underlying models, interface scope, pricing and support before starting cooperation.')},
];

export const apiCompanionCards=[
 {kind:'workspace',title:'毕鲁斯智能体',body:c('在电脑上组织空间项目、连续修改方案，并整理选品报价与成果。','Organize spatial projects, refine proposals and prepare selections, estimates and outputs on your computer.'),caption:c('真实客户端界面','Actual desktop interface'),link:c('了解桌面智能体','Explore the desktop agent'),to:'/products/workspace'},
 {kind:'knowledge',title:c('企业知识协同','Company knowledge in context'),body:c('围绕品牌规范、产品 SKU 与报价规则，沟通企业知识接入方案。','Discuss how brand guidelines, product SKUs and pricing rules can support company knowledge use.'),caption:c('资料组织示意','Knowledge organization diagram'),link:c('查看企业能力','View company capabilities'),to:'/products/workspace#workspace-capabilities'},
 {kind:'setup',title:c('开发工具接入指引','Developer-tool setup guides'),body:c('分别查阅 Claude Code 与 Codex 教程，核对模型、地址与凭证。','Use the Claude Code and Codex guides to check model identifiers, service addresses and credentials.'),caption:c('配置字段示意','Configuration field diagram'),link:c('查看接入教程','Read the setup guide'),to:'/support/manual/claude'},
];

export const apiPersonalSteps=[
 {kind:'needs',title:c('说明使用需求','Describe what you need'),body:c('确认使用工具、使用场景与预估用量，再选择合适的服务沟通方向。','Identify your tools, scenarios and expected usage before discussing an appropriate service.'),action:c('咨询接入','Discuss access'),to:''},
 {kind:'billing',title:c('确认服务与计费','Confirm the service and billing'),body:c('核对可用模型、适配方式和计费单位，按确认的报价与规则开通。','Confirm models, compatibility and billing units, then proceed under the agreed pricing and rules.'),action:c('了解使用规则','Read the usage rules'),to:'/support/usage-policy'},
 {kind:'configure',title:c('配置并测试接入','Configure and test access'),body:c('按指引配置地址与凭证，用最小任务检查结果后再安排正式使用。','Configure addresses and credentials, then validate a small task before arranging regular use.'),action:c('查看工具教程','Read the tool guide'),to:'/support/manual/claude'},
];

const pageCopy=[
 ['我们的三个优势','Our three advantages'],
 ['开发者与设计师','Developers & designers'],['服务接入','Service access'],['长期合作','Ongoing cooperation'],
 ['对接模型服务，','Model services. '],['从需求开始。','Built around your needs.'],
 ['面向开发者与设计师，围绕开发与设计中的模型使用需求，提供服务接入、使用支持与合作沟通。','For developers and designers: discuss model access, usage support and cooperation around your development and design needs.'],
 ['咨询了解更多','Contact us to learn more'],['开发工具','Developer tools'],['使用工具','Tools'],['访问凭证','Access credentials'],['工具配置','Tool configuration'],['使用验证','Usage validation'],
 ['工具与模型服务','Tools & model services'],['围绕你的开发方式选择','Choose around your workflow'],['前往模型广场','Visit the model square'],
 ['具体模型标识、服务范围与计费方式，以开通时的说明为准。','Model identifiers, service scope and billing are confirmed when access is arranged.'],
 ['接入前核对','Check before getting started'],['咨询配置','Discuss configuration'],
 ['相关工具与资料','Related tools & resources'],['让服务接得上，也用得好。','Connect services to the way you work.'],
 ['品牌与项目资料','Brand & project information'],['产品 SKU 与材料','Product SKUs & materials'],['报价规则','Pricing rules'],['用于具体项目任务','For specific project tasks'],
 ['按服务说明填写','Follow the service guide'],['按当前资料确认','Confirm against current service details'],['妥善保管访问凭证','Keep access credentials secure'],
 ['桌面智能体与模型广场分别提供，账号、额度和功能范围按产品确认。','The desktop agent and model square are separate products. Accounts, quotas and capabilities are confirmed for each.'],
 ['个人开发者','Individual developers'],['从需求确认，到第一次接入验证。','From requirements to your first access check.'],
 ['开发工具','Developer tools'],['使用场景','Usage scenario'],['代码模型服务','Coding-model services'],['计费单位','Billing unit'],['结算规则','Settlement rules'],
 ['企业客户','Enterprise teams'],['围绕团队需求，沟通长期合作。','Plan cooperation around your team’s needs.'],
 ['一对一沟通接入方案','Discuss access with a specialist'],['说明团队场景、使用规模与系统要求，一起确认服务和接入方式。','Share your team’s scenarios, usage scale and system requirements to discuss services and access.'],
 ['联系接入顾问','Contact the service team'],['团队采购与服务安排','Team procurement and service planning'],['结合用量、周期、权限与开票需求，确认具体合作条件。','Agree on cooperation terms around usage, duration, permissions and invoicing needs.'],
 ['用量','Usage'],['周期','Duration'],['条款','Terms'],['沟通长期合作','Discuss ongoing cooperation'],
 ['接入与合作常见问题','Access & cooperation questions'],['开始之前，先了解清楚。','A few things to clarify before you start.'],
 ['让模型服务更容易接入，','Make model services easier to access'],['让你把精力留给开发与设计','Stay focused on development and design'],
 ['从实际需求出发，一起确认适合的接入方式与合作安排','Start with actual needs and discuss a suitable approach to access and cooperation'],['开始接入沟通','Start the conversation'],
 ['需求','Needs'],['配置','Setup'],['验证','Validation'],['开通','Access'],['使用','Usage'],['支持','Support'],['模型','Model'],['单位','Unit'],['规则','Rules'],['团队','Team'],['服务','Service'],['约定','Terms'],
];
for(const [zh,en] of pageCopy)c(zh,en);
