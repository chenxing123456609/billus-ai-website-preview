export const enterpriseEnglish={};
const c=(zh,en)=>(enterpriseEnglish[zh]=en,zh);
export const enterpriseLibraries=[
 {id:'catalog',name:c('施工报价库','Construction pricing'),label:'01 / CATALOG',
  summary:c('施工怎么做 每一项怎么计价','Define the work and how each item is priced'),
  description:c('维护施工项目、工艺、模块、计量单位和单价，建立企业自己的施工报价依据。','Maintain work items, methods, modules, measurement units and unit rates as your company’s pricing basis.'),
  fields:[c('项目与工艺','Work item and method'),c('单位与单价','Unit and unit rate'),c('币种与计价依据','Currency and pricing basis')],
  example:c('例如：墙面涂饰、吊顶安装、地面铺装','For example: wall finishes, ceilings and floor installation')},
 {id:'products',name:c('商品 SKU 库','Product SKU catalog'),label:'02 / PRODUCTS',
  summary:c('选什么商品 用哪一份参考价格','Specify the product and the price reference'),
  description:c('整理家具、材料和软装商品的品牌、型号、规格、参考价格与链接，让选品对应真实商品资料。','Organize brands, models, specifications, reference prices and links for furniture, materials and furnishings, connecting selections to actual product information.'),
  fields:[c('品牌与型号','Brand and model'),c('规格与计价单位','Specification and pricing unit'),c('价格与来源链接','Price and source link')],
  example:c('例如：地砖、沙发、灯具与定制家具','For example: tiles, sofas, lighting and custom furniture')},
 {id:'suppliers',name:c('供应平台','Supply channels'),label:'03 / SOURCES',
  summary:c('去哪查价 从哪里核对来源','Find price references and check the source'),
  description:c('维护采购搜索入口、平台域名、适用范围与优先级，为选品和价格核对提供可追溯的渠道。','Maintain purchasing search links, platform domains, scope and priority to provide traceable channels for product selection and price checks.'),
  fields:[c('平台与域名','Platform and domain'),c('搜索入口与适用范围','Search link and scope'),c('启用状态与优先级','Enabled status and priority')],
  example:c('采购搜索入口用于查找来源 不代表实时库存或自动下单','Search links help find sources; they do not establish live stock or automatic ordering')}
];
export const enterpriseImportSteps=[
 {title:c('填写维护表','Complete the workbook'),body:c('在客户端获取三库维护表，按施工报价、商品、供应平台分别填写企业资料。','Get the three-library workbook in the client and enter company information in the construction, product and supply-channel sheets.')},
 {title:c('上传并校验','Upload and validate'),body:c('选择维护表文件，检查必填字段、SKU 对应关系、价格与链接格式。','Select the workbook and check required fields, SKU references, prices and link formats.')},
 {title:c('预览确认替换','Preview and confirm'),body:c('先预览导入内容与异常，确认后再替换三库草稿，保留企业维护口径。','Preview imported data and issues before confirming the replacement of library drafts.')},
 {title:c('用于项目任务','Use in a project'),body:c('在项目中结合图纸、尺寸与需求调用三库，整理算量结果、报价草稿和采购资料。','Use the libraries with project drawings, dimensions and requirements to organize quantities, quotation drafts and purchasing references.')}
];
export const enterpriseQuoteBasis=[
 {title:c('算量有项目依据','Quantities backed by project inputs'),body:c('提供图纸、实测尺寸或数量资料，明确计量范围、单位和规则；无法核实的工程量标记为待确认。','Provide drawings, measured dimensions or quantity records. Define scope, units and measurement rules; flag unverified quantities for confirmation.')},
 {title:c('计价有企业数据','Pricing backed by company data'),body:c('将工程条目与施工单价、商品 SKU 和价格来源对应，核对规格、币种、税费与价格有效期。','Map work items to construction rates, product SKUs and price sources. Check specifications, currency, taxes and price validity.')},
 {title:c('交付可追溯可复核','Traceable deliverables for review'),body:c('保留工程量依据、商品来源及待确认项，整理报价表、采购清单和构成说明，交由项目人员复核。','Retain quantity evidence, product sources and pending items. Prepare quotations, purchasing lists and cost breakdowns for the project team to review.')}
];
export const enterpriseFaq=[
 {q:c('“三库一表”具体是什么？','What does “three libraries, one workbook” mean?'),a:c('三库是施工报价库、商品 SKU 库和供应平台；一表指统一填写和导入这三类资料的维护表。截图中的“三库数据状态”用于汇总数据量与异常，不是第四个数据库。','The three libraries hold construction pricing, product SKUs and supply channels. One maintenance workbook is used to enter and import these datasets. The status summary in the screenshot is not a fourth database.')},
 {q:c('上传一张效果图就能得到真实工程量吗？','Can one rendering establish verified quantities?'),a:c('效果图可以帮助讨论方案与识别对象，真实工程量仍需结合图纸、尺寸、计量规则或实测资料。缺少依据的数量和价格应保留为待确认，不能直接作为正式工程报价。','A rendering can support design discussions and identify objects. Verified quantities still require drawings, dimensions, measurement rules or survey records. Quantities and prices without evidence must remain pending before a formal quotation.')},
 {q:c('在这个网页上传资料还是在客户端操作？','Do I upload here or in the desktop client?'),a:c('这是一页企业功能介绍。三库维护表的下载、上传、校验预览和项目任务均在 WORKSPACE 客户端中完成，具体入口与支持的格式以所用版本为准。','This is a feature introduction page. Workbook download, upload, validation, preview and project tasks take place in the WORKSPACE desktop client. Available formats and controls depend on the version in use.')}
];
c('了解企业使用功能','Explore enterprise features');
c('WORKSPACE 企业使用功能','WORKSPACE enterprise features');
c('三库一表','Three libraries. One workbook.');
c('让算量报价有据可循','A clear basis for quantities and quotations');
c('把企业施工单价、商品资料和采购渠道放进同一套数据底座。上传维护表后，在项目中结合图纸与尺寸组织算量、选品和报价。','Bring construction rates, product information and purchasing channels into one data foundation. Import the maintenance workbook, then use drawings and dimensions to organize quantities, selections and quotations within a project.');
c('了解三库一表','Explore the data foundation');c('咨询企业接入','Discuss enterprise setup');
c('点击放大三库客户端截图','Enlarge the three-library client screenshot');
c('三库维护与报价数据底座的客户端界面','Desktop client showing the three libraries and quotation data foundation');
c('三库维护与报价数据底座','Library maintenance and quotation data');
c('客户端界面示例 图中数量仅为示例数据','Client interface example. Counts shown are sample data.');
c('三类业务数据 一张表统一维护','Three datasets maintained in one workbook');
c('先把企业资料整理清楚 再让智能体参与项目','Organize your company data before bringing the agent into project work');
c('一张维护表 连接三类资料','One maintenance workbook for three datasets');
c('下载维护表 填写企业数据 上传校验 确认后用于项目','Get the workbook, enter company data, upload and validate, then confirm it for project use');
c('在 WORKSPACE 中完成上传与维护','Upload and maintain data in WORKSPACE');
c('查看三库使用教程','Read the library guide');
c('算量有依据 报价可追溯','Quantities with evidence. Traceable quotations.');
c('从项目资料到报价清单 把每个环节的依据保留下来','Retain the basis for every step, from project information to the quotation');
c('工程量 × 对应单价','Quantity × applicable unit rate');
c('逐项核对工程范围、计量单位及价格来源','Check the work scope, measurement unit and price source for each line item');
c('示例项目报价草稿','Example project quotation draft');
c('点击放大报价草稿','Enlarge the quotation draft');
c('带上企业数据 开始第一个项目','Bring your company data into your first project');
c('先从一份目录、一组商品和一个明确的项目开始','Start with a catalog, a set of products and a clearly defined project');
c('返回产品介绍','Back to product overview');c('关闭图片预览','Close image preview');
c('企业使用常见问题','Enterprise feature questions');
c('浅色工作台与三库一表交互演示','Light workspace and business-library interaction demo');
c('让企业资料参与每个项目','Bring company knowledge into every project');
c('从三库一表开始 建立自己的报价依据','Start with your own data and pricing basis');
c('进入工作台','Enter workspace');c('施工报价','Construction rates');c('商品 SKU','Product SKUs');c('供应渠道','Supply channels');
c('企业项目','COMPANY PROJECTS');c('空间设计项目','Spatial project');c('项目工作台','Workspace');c('企业工作空间','Company workspace');c('交互示意','Interactive demo');
c('把企业资料 变成项目依据','Put company data to work');c('先维护施工、商品与采购资料 再推进算量与报价','Organize construction, products and sourcing before preparing quantities and quotations');
c('为这个项目整理选品与报价资料','Prepare selections and quotation references for this project');
c('施工报价 · 商品 SKU · 供应渠道','Construction · Products · Sources');c('企业自己的施工、商品与采购依据','Your construction, product and sourcing references');c('资料维护','Company data');
c('工艺 · 单位 · 单价','Methods · Units · Rates');c('品牌 · 规格 · 价格','Brands · Specs · Prices');c('入口 · 范围 · 来源','Links · Scope · Sources');
c('三库维护表','Library workbook');c('示例文件','Sample file');c('校验中…','Validating…');c('示例校验完成','Demo validated');c('演示导入','Try import');c('上传维护表','Upload workbook');c('校验预览','Validate & preview');c('确认三库草稿','Confirm drafts');
c('资料结构示例','Sample structure');c('项目内容','Item');c('单位','Unit');c('企业维护','Company reference');
c('墙面涂饰','Wall finishes');c('吊顶施工','Ceiling work');c('地面铺装','Floor installation');c('工艺与单价','Method & rate');
c('家具与软装','Furniture');c('材料与饰面','Materials');c('照明与灯具','Lighting');c('品牌与参考价格','Brand & price');c('规格与参考价格','Specification & price');c('型号与参考价格','Model & price');
c('采购搜索入口','Purchasing search');c('渠道','Source');c('适用范围','Scope');c('供应平台域名','Platform domain');c('来源与优先级','Source & priority');c('商品查询链接','Product search link');c('采购参考','Purchasing reference');
c('交互示意 实际操作在客户端完成','Interactive demo · Use the desktop client for actual tasks');c('暂停','Pause');c('重播演示','Replay demo');
