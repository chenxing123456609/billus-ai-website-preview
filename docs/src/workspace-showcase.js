export const workspaceShowcaseEnglish = {};
const copy = (chinese, english) => {
  workspaceShowcaseEnglish[chinese] = english;
  return chinese;
};

copy('资料导入、知识协同与成果交付', 'Project references, company knowledge and deliverables');

export const workspaceShowcaseTabs = [
  {
    id: 'projects',
    label: copy("资料导入", "References"),
    labelEnglish: 'References',
    eyebrow: copy("把项目资料、设计要求和修改记录放在一起，接着已有方案继续做。", "Keep project references, requirements and revisions together and build on the current proposal."),
    title: copy("资料不用到处找", "Stop searching across files"),
    accent: copy("需求不用反复讲", "Stop repeating the brief"),
    caption: copy("工作台示意 · 导入资料、明确需求、引用历史方案", "Workspace illustration \u00b7 import references, clarify the brief and reuse previous work"),
    features: [
      {icon: 'file', title: copy("找张图纸，要翻聊天记录和文件夹", "Finding a drawing means searching chats and folders"), body: copy("把图纸、参考图和 PDF、Word 等资料放进同一个项目，做方案时直接查看，不用来回翻找。", "Keep drawings, reference images, PDFs and documents in one project, so you can refer to them without searching chats and folders.")},
      {icon: 'chat', title: copy("每改一次方案，都要重新讲一遍需求", "Every revision means repeating the brief"), body: copy("把风格、预算和不能改的地方留在项目里，后续修改接着聊，不用从头交代。", "Keep the style, budget and what must stay unchanged with the project. Continue revisions without explaining everything again.")},
      {icon: 'grid', title: copy("做过类似方案，这次还是得从头做", "A similar project still starts from scratch"), body: copy("旧方案、客户反馈和修改记录留在项目里。遇到相似需求，直接找出来参考和修改。", "Keep earlier proposals, client feedback and revision notes in the project. Refer to them and make changes when similar requirements come up.")},
    ],
  },
  {
    id: 'knowledge',
    label: copy("知识协同", "Knowledge"),
    labelEnglish: 'Knowledge',
    eyebrow: copy("把品牌要求、案例和商品资料整理成可在项目中引用的企业资产。", "Organize brand rules, cases and product references as reusable company assets."),
    title: copy("企业标准能引用", "Reuse company standards"),
    accent: copy("家具材料能复用", "Reuse furniture and materials"),
    caption: copy("工作台示意 · 企业规范引用、家具资产入库与画布生成", "Workspace illustration \u00b7 company references, furniture assets and canvas generation"),
    features: [
      {icon: 'file', title: copy("品牌标准靠口头说，换人就要重新交代", "Brand standards depend on repeated handovers"), body: copy("将品牌规范、设计标准和历史案例导入企业知识库，项目任务可引用已有要求与经验。", "Import brand guidelines, design standards and previous cases for project tasks to reference.")},
      {icon: 'grid', title: copy("家具图片有了，型号和价格却找不到", "Furniture images lack product details"), body: copy("在资产库中一起维护家具图片、型号、规格和参考价格，方便后续选品与报价整理。", "Maintain furniture images, models, specifications and reference prices together for selections and estimates.")},
      {icon: 'chat', title: copy("参考图和生成结果分开，修改时对不上", "References and results are disconnected"), body: copy("在无限画布中连接平面图、参考图与生成结果，保留方案之间的关联，方便对照和继续修改。", "Connect plans, references and results on the canvas for comparison and continued refinement.")},
    ],
  },
  {
    id: 'outputs',
    label: copy("成果交付", "Deliverables"),
    labelEnglish: 'Deliverables',
    eyebrow: copy("从方案展示到文件整理，在同一个项目中推进交付。", "Develop presentations and prepare deliverables within the same project."),
    title: copy("效果、模型、汇报和报价", "Visuals, models, presentations and estimates"),
    accent: copy("接着方案一起整理", "Prepared from the same proposal"),
    caption: copy("工作台示意 · 在对话中整理图像、视频、3D 建模、汇报文件与报价草稿", "Workspace illustration \u00b7 prepare visuals, videos, 3D models, presentation files and quotation drafts in conversation"),
    features: [
      {icon: 'screen', title: copy("只有效果图，客户看不清空间关系", "A rendering does not explain every spatial relationship"), body: copy("结合效果图、空间展示视频与3D 建模，辅助查看布局、尺度和材质，方便沟通与复核。", "Use renderings, spatial videos and 3D modeling to review and discuss layout, scale and materials.")},
      {icon: 'file', title: copy("做完方案，还要重复整理汇报文件", "Presentations require repeated preparation"), body: copy("根据已有方案整理 PPT 汇报、Word 说明和 HTML 展示页，减少手动复制与重复排版。", "Prepare PPT, Word and HTML outputs from the existing proposal with less repeated copying and formatting.")},
      {icon: 'grid', title: copy("方案、选品清单和报价，需要分开重做", "Selections and estimates are prepared separately"), body: copy("结合企业商品资料与报价规则，辅助生成选品清单和报价草稿，数量、规格与价格由项目人员复核。", "Prepare selection lists and quotation drafts using company product data and rules, with details reviewed by the project team.")},
    ],
  }
];

export const workspaceHighlights = [
  {title: '项目工作区', body: '需求、参考与成果集中组织'},
  {title: '企业知识库', body: '复用品牌、产品与业务规则'},
  {title: '选品与报价', body: '结合商品 SKU 与报价依据'},
  {title: '成果文件', body: '整理汇报、清单与交付资料'},
];
