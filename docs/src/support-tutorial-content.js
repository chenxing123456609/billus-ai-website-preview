// Website tutorials distilled from the user's November 2026 documents and videos.
// Credentials and private configuration values are intentionally absent.
export const supportTutorialEnglish={};
const c=(zh,en)=>(supportTutorialEnglish[zh]=en,zh);
c('视频章节','Video chapters');
const assets='/billus-ai-website-preview/assets/';
const tutorial=assets+'tutorials/';
const link=(title,en,detail,enDetail,href)=>({title:c(title,en),detail:c(detail,enDetail),href});
const section=(id,title,en,body,enBody,extra={})=>({id,title:c(title,en),body:c(body,enBody),...extra});
const step=(title,en,body,enBody,extra={})=>({title:c(title,en),body:c(body,enBody),...extra});

export function applySupportTutorials(content){
 content.overview.title=c('BILLUS AI WORKSPACE 介绍','About BILLUS AI WORKSPACE');
 content.overview.lead=c('从项目演示开始，依次了解安装、模型配置、素材管理和成果整理','Start with the project tour, then explore installation, model setup, reference assets and deliverables');
 content.overview.sections=[
  section('introduction','简介','Introduction','BILLUS AI WORKSPACE 是下载安装到电脑使用的企业级智能体，可在同一个项目中整理需求、参考资料与对话，持续生成和修改空间方案，并汇总报价草稿与交付文件','BILLUS AI WORKSPACE is a desktop agent for organizing requirements, references and conversations within one project, refining spatial proposals and preparing quotation drafts and deliverables',{
   bullets:[c('工作起点：项目需求、平面图、现场照片和企业已有资料','Start with project requirements, floor plans, site photos and company references'),c('工作过程：选择模型、调用资产、生成方案，并围绕同一项目连续修改','Choose models, use assets, generate proposals and refine them within the same project'),c('工作成果：空间效果、设计说明、汇报文件与报价草稿，交付前逐项复核','Review spatial visuals, design briefs, presentations and quotation drafts before delivery')]
  }),
  section('project-video','项目演示视频','Project walkthrough','先看一个空间项目如何从资料整理推进到平面分析、空间表达和方案修改，再进入对应教程实践','Watch references become a floor-plan study, spatial proposal and successive revisions, then follow the tutorials',{
   video:{src:tutorial+'workspace-project-tour-202611.mp4',poster:tutorial+'workspace-project-tour-202611.webp',title:c('空间项目工作流程演示','Spatial project workflow demonstration'),caption:c('项目演示节选 · 1分16秒 · 画面字幕说明操作，无旁白','Project walkthrough excerpt · 1 min 16 sec · on-screen captions, no narration')},
   chapters:[{time:0,label:c('空间需求与项目背景','Project background')},{time:18,label:c('资料与项目工作区','References and project workspace')},{time:34,label:c('平面与空间表达','Floor plan and spatial proposal')},{time:54,label:c('方案修改与分析','Revisions and analysis')}]
  }),
  section('learning-path','按顺序开始','Start here','第一次使用时，先完成客户端安装和首次测试，再用基础教程中的小任务熟悉项目工作流','Install the client and complete a first test, then practise the project workflow with the basic tutorials',{
   links:[link('安装与首次测试','Installation and first test','账号准备 → 客户端安装 → 服务配置 → 测试项目','Account → client installation → service setup → test project','/support/manual/agent/install'),link('基础使用与任务示例','Basic usage and examples','创建项目 → 素材引用 → 图像修改 → 成果复核','Project → references → image editing → output review','/support/manual/agent/basics'),link('Claude Desktop 配置','Claude Desktop setup','桌面工具的下载、配置与重启验证','Download, setup and restart verification for the desktop tool','/support/manual/claude-desktop'),link('Codex 配置','Codex setup','核对使用方式、认证与最小任务测试','Check the interface, authentication and a small test task','/support/manual/codex')]
  }),
  section('workflow','使用流程','Workflow','将一个项目作为连续工作的上下文，先把资料和目标说明白，再逐轮生成、检查和补充','Keep one project as the context for ongoing work: explain the inputs and goals, then generate, review and refine',{
   steps:[step('整理需求','Define the task','准备平面图、现场图、风格参考与交付目标，标明需要保留的结构和限制','Prepare plans, site photos, references and deliverables; state the structures and constraints to preserve'),step('建立项目','Create a project','创建项目并导入本次资料，按任务选择文字与图像模型','Create a project, import the references and select text and image models for the task'),step('连续修改','Refine the proposal','围绕同一方案逐轮提出局部调整，检查空间结构、比例与商品表现','Request focused changes to the same proposal and review structure, scale and product representation'),step('整理成果','Prepare deliverables','汇总设计说明、PPT、HTML 或报价草稿，核对文件内容和业务数据后再交付','Prepare a brief, PPT, HTML report or quotation draft; check the files and business data before delivery')]
  }),
  section('scenarios','适用场景','Use cases','装修设计团队可用来整理空间方案和沟通修改；家具建材企业可结合已有商品资料进行入景与选配；连锁团队可复用门店标准与历史方案','Design teams can organize spatial proposals and revisions; furniture and materials teams can use product references in visual proposals and selections; chains can reuse store standards and past projects'),
  section('capabilities','教程覆盖的任务','Tasks covered by the tutorials','本批基础教程涵盖模型选择、设计资产库、图像编辑、业务目录和多种成果整理；功能和模型以当前客户端版本及接入配置为准','The supplied basic tutorial covers model selection, design assets, image editing, business catalogs and deliverables; availability depends on the current client and service configuration',{
   bullets:[c('图像任务：空间生成、局部修改、多图融合和线稿渲染','Image tasks: spatial concepts, local edits, image blending and drawing-based rendering'),c('成果任务：PPT 方案汇报、HTML 展示、Word 设计说明','Deliverables: PPT presentations, HTML showcases and Word design briefs'),c('报价任务：结合企业三库表、商品 SKU 与报价规则整理草稿','Quotation tasks: prepare drafts using company catalogs, product SKUs and pricing rules')]
  })
 ];
 content['model-square']={
  path:'/support/manual/model-square',
  title:c('模型广场介绍','About Model Square'),
  group:'快速上手',
  lead:c('了解模型广场的线上访问方式、代码模型服务和接入前需要确认的事项','Learn how to access Model Square online, what coding-model services it covers, and what to confirm before connecting'),
  sections:[
   section('model-square-intro','模型广场是什么','What is Model Square?','Billus 毕鲁斯 AI 模型广场通过浏览器访问，面向使用 Claude Code、Codex 等开发工具的个人开发者和企业团队，提供相关代码模型 API 服务；BILLUS AI WORKSPACE 则是单独的电脑客户端，需要下载安装后使用','Billus AI Model Square is accessed in a browser and offers coding-model API services for developers and teams using tools such as Claude Code and Codex; BILLUS AI WORKSPACE is a separate desktop app that must be installed'),
   section('model-square-start','如何开始','Getting started','先说明所用开发工具、任务场景和预估用量，再按当前服务说明核对可用模型、接入方式和使用权限；配置后用不含敏感资料的小任务验证连接与结果','Describe your development tool, task and expected usage; then confirm available models, connection methods and access permissions against the current service guide; after setup, test the connection with a small task that contains no sensitive information',{
    steps:[step('明确需求','Describe your needs','确认使用 Claude Code、Codex 或其他工具，以及主要任务和预估用量','Identify whether you use Claude Code, Codex or another tool, along with your main tasks and expected usage'),step('核对服务','Confirm the service','按当前说明确认模型标识、服务地址、认证方式与使用支持范围','Confirm model identifiers, the service URL, authentication and support scope against current instructions'),step('完成验证','Run a small test','使用获授权的配置完成一次小任务，检查连接、结果和计费信息','Run a small task with authorized settings and check the connection, output and billing information')]
   }),
   section('model-square-terms','计费与服务说明','Billing and service terms','具体模型、价格基准、币种、计费单位及开票条件，以开通前双方确认的服务说明为准；模型广场与电脑客户端的账号、额度和功能范围分别核对。','Confirm models, pricing references, currency, billing units and invoicing terms in the agreed service details before activation. Check accounts, quotas and features separately for Model Square and the desktop app.'),
   section('model-square-next','继续了解','Continue exploring','进入模型广场产品页查看当前介绍，也可以先阅读使用政策和对应开发工具的配置教程。','Read the current Model Square product overview, usage policy and the setup guide for your development tool.',{
    links:[link('查看模型广场','View Model Square','产品介绍与当前服务说明','Product overview and current service information','/products/api-model-square'),link('阅读使用政策','Read the usage policy','核对开通、计费与服务条件','Review access, billing and service terms','/support/usage-policy')]
   })
  ]
 };
 const install=content['agent-install'];
 install.sections.find(s=>s.id==='installation').steps=[
  step('获取并安装客户端','Get and install the client','在已开通的服务入口获取对应安装包，核对版本后按安装器提示完成安装','Get the installer from the provisioned service, check the version and follow the installer'),
  step('确认程序与项目保存位置','Check program and project locations','本批教程的安装器使用固定程序目录；项目资料与生成结果的保存位置需要另外确认','The supplied tutorial uses a fixed program directory; check the storage location for projects and generated files separately'),
  step('打开并核对版本','Open the client and check its version','首次启动后确认可以进入工作区，再进行模型服务设置','Confirm the workspace opens before configuring the model service')
 ];
 const serviceSetup=install.sections.find(s=>s.id==='service-setup');
 serviceSetup.body=c('按照“获取密钥 → 创建密钥 → 进入 WORKSPACE 配置”的顺序完成模型服务接入，保存后进行一次连接测试','Set up model access in three steps: open key management, create a key, then configure WORKSPACE and test the connection');
 serviceSetup.steps=[
  step('获取密钥','Get an API key','前往密钥管理页面，登录你的账号，准备创建用于 WORKSPACE 的服务密钥','Open the key management page and sign in to prepare a service key for WORKSPACE',{
   href:'https://sub.aigcacs.com/keys',linkLabel:c('前往密钥管理','Open key management')
  }),
  step('创建密钥','Create a key','在密钥管理页面创建新密钥，填写名称并选择适用分组；创建完成后复制密钥，供 WORKSPACE 配置使用','Create a key on the key management page, enter a name and select the appropriate group, then copy the key for use in WORKSPACE'),
  step('进入 WORKSPACE 进行配置','Configure WORKSPACE','打开 WORKSPACE，进入“高级后台 → 模型与执行能力 → API 配置”，填写服务地址与密钥后保存，再选择可用模型完成一次连接测试；具体入口以当前版本为准','Open WORKSPACE and go to Advanced settings → Models and execution → API configuration. Enter the service URL and key, save, then select an available model and test the connection. The entry may vary by version')
 ];
 install.sections.find(s=>s.id==='related-tutorials').links.splice(1,0,link('查看 Claude Desktop 配置教程','Read the Claude Desktop setup guide','对应本批桌面工具视频，不与 Claude Code 混用','Matches the supplied desktop video; separate from Claude Code','/support/manual/claude-desktop'));
 install.sections.push(section('troubleshooting','遇到问题怎么排查','Troubleshooting','先记录所用版本、发生步骤与错误信息，再对照下面的检查顺序定位问题','Record the version, step and error message, then check the following',{
  faq:[step('配置后仍无法连接','The connection still fails','先核对服务地址、访问权限和模型选择；保存后重启客户端，再用一个简单文字任务测试','Check the service URL, permissions and selected model; save, restart and test with a simple text task'),step('文字正常但图片任务失败','Text works but image tasks fail','单独核对图像模型是否可用、参考图是否已导入，以及本轮任务所需权限和额度','Check image model availability, imported references, permissions and quota for the task'),step('安装或更新遇到系统提示','The system displays an installation warning','先确认安装包来源、发布者和适配版本；无法确认时联系支持，不按演示画面直接修改系统保护设置','Verify the installer source, publisher and version; contact support if uncertain instead of copying changes to system protection settings')]
 }));
 content['agent-basics'].sections=[
  section('first-project','创建项目与选择模型','Create a project and choose models','先建项目，再导入参考资料和说明目标，让后续对话与生成结果保持在同一个工作区','Create a project, import references and explain the goal so conversations and outputs stay together',{
   steps:[step('创建项目','Create a project','用项目名称区分空间或客户任务，导入平面图、现场图和风格参考','Name the project for the space or client task and import the plan, site photos and style references'),step('说明资料用途','Explain each reference','逐张说明哪张是空间底图，哪张是家具、材质或风格参考，并写出本轮目标','Identify the base space image and the furniture, material or style references; state the goal'),step('选择对应模型','Select models for the task','按任务分别确认文字模型和图像模型，使用当前菜单中已开通的选项','Choose text and image models for the task from the options enabled in your current client')]
  }),
  section('use-assets','维护与调用企业资产','Maintain and use company assets','在设计资产库管理家具、材质、品牌图片与商品资料；先补充信息，再用于项目任务','Manage furniture, materials, brand images and product information in the design asset library before using them in projects',{
   bullets:[c('按素材内容分类上传，批量上传后核对名称和分组','Upload by content category and check names and groups after a batch upload'),c('商品资料应包含可核对的型号、材质、价格来源和使用权限','Keep verifiable model numbers, materials, pricing sources and usage permissions with product references'),c('在对话中明确引用的素材及其用途，避免只上传图片而不说明目标','Explain which assets to use and why rather than uploading images without a goal')]
  }),
  section('generate','用多张参考图生成方案','Generate a proposal from references','基础教程用空间底图配合沙发、椅子和瓷砖参考图，说明家具与材质关系，再生成第一版空间方案','The basic tutorial combines a room image with sofa, chair and tile references to define furnishings and materials for the first proposal',{
   example:{title:c('可照着改的任务描述','Example task to adapt'),text:c('根据图1的毛坯房，使用图2的沙发、图3的椅子和图4的瓷砖，生成一版现代简约空间方案；保留原有门窗与墙体关系，补充必要家具，画面比例16:9','Use the unfinished room in image 1, sofa in image 2, chair in image 3 and tiles in image 4 to create a modern minimal proposal; preserve walls, doors and windows, add suitable furniture, and use a 16:9 frame')},
   bullets:[c('为每张参考图标清用途，先做小范围测试再增加素材','Label each reference and start with a small test before adding more'),c('不要把演示中的图片数量当作所有版本的固定上限，按当前界面提示操作','Follow the current interface limits; the number of images shown in a tutorial is not a universal limit')]
  }),
  section('revise','局部修改与多图融合','Local edits and image blending','继续围绕已有方案指出需要保留的部分、需要调整的对象和调整方向；修改后与上一版逐项对照','Identify what to preserve, what to change and how; compare the revision with the previous proposal',{
   example:{title:c('局部修改示例','Example local edit'),text:c('保留空间结构和其他家具，将右侧沙发移至左侧，并在沙发背景墙增加一幅竖向抽象画；保持家具尺度和整体配色一致','Preserve the room structure and other furniture, move the sofa from the right to the left, and add a vertical abstract painting behind it; keep furniture scale and the overall palette consistent')},
   bullets:[c('多图融合时说明每张图对应的人物、商品或背景，明确新场景和画幅比例','For image blending, identify the person, product or background in each image and state the new scene and aspect ratio'),c('发现商品过大或位置不对时，针对比例、位置或材质提出具体修正','If a product is too large or misplaced, specify the scale, position or material to correct')]
  }),
  section('render-drawing','从线稿形成空间表达','Create spatial visuals from drawings','导入线稿后说明建筑或室内类型、材质、色彩、环境和光线，并指出需要保留的轮廓与结构','Import a drawing and specify the building or interior, materials, colors, setting and lighting, including the structure to preserve',{
   image:{src:assets+'workspace-showcase/render.webp',alt:c('本批项目资料中的室内空间效果参考','Interior rendering from the supplied project materials'),caption:c('空间表达参考，结构与尺寸仍需结合原始资料核对','Spatial reference; verify structure and dimensions against the original documents')}
  }),
  section('documents','整理 PPT、HTML 和 Word 成果','Prepare PPT, HTML and Word outputs','方案沟通确定后，再说明文档用途、内容结构和输出形式，将已有图像和说明组织成汇报材料','Once the proposal is ready for discussion, specify the purpose, structure and output format to organize existing visuals and notes',{
   steps:[step('PPT 方案汇报','PPT presentation','说明页数、受众与章节，例如空间分析、设计故事、材质说明和总结；逐页检查内容与图文对应','State the slide count, audience and sections, such as spatial analysis, concept, materials and conclusions; review every slide'),step('HTML 展示','HTML showcase','说明浏览方式、图片顺序和文字层级，生成后检查页面布局与链接','Specify navigation, image order and text hierarchy; review the layout and links'),step('Word 设计说明','Word design brief','汇总设计理念、空间说明与参考图；涉及概算时附上来源和待确认项','Combine the design concept, spatial notes and references; include sources and pending items for any estimates')]
  }),
  section('review-delivery','三库表与报价草稿','Business catalogs and quotation drafts','先维护企业施工条目、商品资料与报价规则，再将项目方案用于识别、选配和报价整理','Maintain company work items, product information and pricing rules before using the proposal for identification, selection and quotation drafts',{
   steps:[step('补充企业业务目录','Maintain company catalogs','按自身施工、软装与采购业务补充三库表，不直接使用未核对的默认内容','Adapt the business catalogs to your construction, furnishing and purchasing work; verify default entries'),step('校正识别结果','Correct identified items','对照项目资料检查模型识别、条目映射和计量口径；同一任务尽量保持模型与目录口径一致','Check identified items, catalog mapping and measurement rules against project references; keep the model and catalog basis consistent'),step('人工复核后交付','Review before delivery','复核尺寸、工程量、价格、税费、库存和采购条件，再对外使用报价','Check dimensions, quantities, prices, taxes, stock and purchasing terms before sharing the quotation')]
  })
 ];
 content['claude-desktop']={path:'/support/manual/claude-desktop',title:c('Claude Desktop 安装配置教程','Claude Desktop installation and setup'),group:'工具安装配置',lead:c('对应本批桌面工具视频，按下载、配置与验证的顺序操作','Follow the supplied desktop tutorial through download, setup and verification'),sections:[
  section('desktop-prepare','先确认使用的工具','Identify the tool','本批视频演示 Claude Desktop 桌面应用及独立配置工具；本页与左侧的 Claude Code 终端工具教程分别维护','The supplied video demonstrates the Claude Desktop app and a separate configuration utility; this guide is separate from the Claude Code terminal guide',{
   links:[link('需要 Claude Code？','Looking for Claude Code?','查看终端工具的安装与认证说明','Read the terminal tool installation and authentication guide','/support/manual/claude')]
  }),
  section('desktop-download','下载并安装桌面应用','Download and install the desktop app','按电脑系统从 Claude 官方下载入口取得安装包，安装后先确认应用能够正常启动','Get the installer for your operating system from the official Claude download page and confirm the app starts',{
   video:{src:tutorial+'claude-desktop-download-202611.mp4',poster:tutorial+'claude-desktop-download-202611.webp',title:c('Claude Desktop 下载与安装演示节选','Claude Desktop download and installation excerpt'),caption:c('下载与打开安装包示意 · 13秒 · 无旁白','Download and opening the installer · 13 sec · no narration')}
  }),
  section('desktop-service','核对服务与配置目标','Check the service and configuration target','原资料使用独立工具管理服务配置，先确认选中的是 Claude Desktop 对应目标及其支持的接入方式，再填写本人获授权的配置','The source uses a separate utility to manage service settings; select the Claude Desktop target and a supported connection method before entering authorized settings',{
   bullets:[c('服务名称用于区分配置；服务地址、凭证和模型标识按当前接入说明填写','Use a service name to distinguish configurations; enter the URL, credential and model identifier from the current connection guide'),c('不要将 Desktop 的配置文件或字段直接套用到 Claude Code 或其他客户端','Do not copy Desktop configuration files or fields directly into Claude Code or other clients')]
  }),
  section('desktop-test','保存、重启并验证','Save, restart and verify','保存配置后完全退出桌面应用，再重新打开，用一句简单问候验证连接；随后用一个小任务检查实际模型、权限与结果','Save the settings, fully quit the desktop app and reopen it; test with a short greeting, then check the model, permissions and output with a small task',{
   faq:[step('重启后没有使用新配置','The new settings do not take effect','检查应用是否已完全退出，配置工具是否选中正确目标，以及当前工具是否支持所用服务方式','Check that the app fully quit, the configuration utility targets the correct app and the selected service method is supported')]
  })],link:{label:c('查看 Claude 官方下载入口','Open the official Claude download page'),href:'https://claude.com/download'}};
 content.codex.sections=[
  section('codex-choose','确认使用方式','Choose the interface','本批视频通过独立配置工具选择 Codex 目标并发起对话测试；安装前先确认使用的是桌面端、命令行还是编辑器扩展，按对应官方说明操作','The supplied video selects a Codex target in a separate configuration utility and tests a conversation; first identify whether you use the desktop app, CLI or editor extension and follow the matching official instructions'),
  section('codex-auth','安装与认证','Install and authenticate','完成所选 Codex 工具的安装后，再按其支持的方式登录或配置认证；工具账户与模型服务凭证分别管理','Install your chosen Codex interface and use its supported sign-in or authentication method; manage tool accounts separately from model service credentials'),
  section('codex-service','配置模型服务','Configure the model service','如需使用企业提供的模型服务，先取得匹配当前 Codex 工具的接入说明，再在支持的配置入口中填写服务参数','For a company model service, obtain instructions for your Codex interface and enter the service settings in a supported configuration location',{
   steps:[step('选择 Codex 配置目标','Select the Codex target','独立配置工具中可能包含多个产品目标，保存前确认当前目标为 Codex','A configuration utility may support multiple tools; confirm Codex is the selected target'),step('填写本人服务参数','Enter your service settings','按当前说明填写服务名称、地址、访问凭证和模型标识，检查保存是否成功','Enter the service name, URL, credential and model identifier from the current guide and confirm they were saved'),step('重新打开并确认','Reopen and check','重启所用工具，确认当前服务和模型；原教程中的旧界面名称仅作定位参考','Restart the tool and check the active service and model; older UI labels in the source are only a reference')]
  }),
  section('codex-test','完成最小测试','Run a small test','先发送一句简单问候确认连接，再在获授权的测试目录中执行一个范围明确的小任务，核对权限、结果和保存位置','Start with a greeting to check the connection, then run a small task in an authorized test directory and review permissions, outputs and storage',{
   example:{title:c('测试任务示例','Example test task'),text:c('请先查看这个测试文件夹的文件名，概括每个文件的用途；本轮先不要修改文件','List the filenames in this test folder and summarize their purpose; do not modify files during this test')},
   bullets:[c('连接失败时记录脱敏后的错误、工具版本和所选模型，再检查地址、权限与配置目标','If the connection fails, record the redacted error, tool version and model, then check the URL, permissions and configuration target')]
  })
 ];
}
