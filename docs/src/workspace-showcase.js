export const workspaceShowcaseEnglish = {};
const copy = (chinese, english) => {
  workspaceShowcaseEnglish[chinese] = english;
  return chinese;
};

copy('创意构思、方案深化、成果交付', 'Creative concepts, design development and deliverables');
copy('WORKSPACE 让设计工作更高效', 'WORKSPACE Make design work more efficient');
copy('让设计工作', 'Make design work');
copy('更高效', 'more efficient');

export const workspaceShowcaseTabs = [
  {
    id: 'projects',
    label: copy('创意构思', 'Creative concepts'),
    eyebrow: copy("把图纸、现场照片、需求与参考方案放进同一项目，先明确空间条件和客户目标，让首版方案有资料可依。", "Bring drawings, site photos, briefs and references into one project. Clarify spatial conditions and client goals before preparing the first proposal."),
    title: copy("让项目资料", "Make project materials"),
    accent: copy("成为方案依据", "the basis for every proposal"),
    caption: copy("工作台示意 · 项目资料、多图参考与需求说明", "Workspace illustration \u00b7 project materials, image references and the brief"),
    features: [
      {icon: 'file', title: copy("参考资料生成初稿", "Draft from reference materials"), body: copy("把图纸、现场照片与需求文件汇入同一项目，结合空间条件和任务目标形成初稿，关键要求由项目人员确认。", "Bring drawings, site photos and briefs into one project. Draft from the spatial conditions and goals, with key requirements confirmed by the project team.")},
      {icon: 'grid', title: copy("多图参考辅助构思", "Develop ideas with references"), body: copy("将参考图与平面资料一起使用，把喜欢的配色、材质和家具关系带入当前空间，再逐轮调整。", "Use image references with the floor plan, bringing color, material and furniture ideas into the current space for further refinement.")},
      {icon: 'chat', title: copy("快速出图 对话精修", "Quick generation conversational refinement"), body: copy("用简单提示词描述空间、风格与想要的效果，生成首版图片，再通过多轮对话调整家具、材质和局部细节，逐步完善方案。", "Describe the space, style and desired result with a simple prompt to generate a first image. Refine furniture, materials and details through follow-up conversations.")},
    ],
  },
  {
    id: 'knowledge',
    label: copy('方案深化', 'Design development'),
    eyebrow: copy("以品牌规范、历史方案和企业商品资料作为项目参考，在画布中对照版本，围绕同一空间持续深化设计。", "Use brand standards, past proposals and company product information as project references. Compare versions on the canvas as the same space evolves."),
    title: copy("企业知识与素材", "Bring company knowledge"),
    accent: copy("参与方案深化", "into design development"),
    caption: copy("工作台示意 · 画布对照、连续编辑与企业素材应用", "Workspace illustration \u00b7 canvas comparison, continued editing and company assets"),
    features: [
      {icon: 'chat', title: copy("无限画布方案对照", "Compare designs on canvas"), body: copy("把参考图、当前方案和生成结果放在同一画布中建立关联，并排查看不同版本，便于团队讨论下一轮修改。", "Link references, the current proposal and generated results on one canvas. Compare versions side by side to discuss the next revision.")},
      {icon: 'screen', title: copy("连续编辑对比变化", "Edit and compare changes"), body: copy("围绕同一空间进行局部修改、扩图与多角度生成，保留前后结果供对照，让调整方向更清楚。", "Make local edits, expand images and generate alternate views of the same space. Compare earlier and later results to review the direction of change.")},
      {icon: 'grid', title: copy("企业素材辅助选品", "Select from company assets"), body: copy("把家具、材质和软装素材连同型号、规格与参考价格一起维护，在方案中引用企业资料，为后续选品提供依据。", "Maintain furniture, material and furnishing assets alongside models, specifications and reference prices. Use these company records in proposals and later selections.")},
    ],
  },
  {
    id: 'outputs',
    label: copy('成果交付', 'Deliverables'),
    eyebrow: copy("在同一项目中整理空间成果与汇报文件，引用企业商品和计价规则形成选品与报价草稿，交由业务人员复核。", "Organize spatial outputs and presentation files in one project. Use company product and pricing rules to prepare selection and quotation drafts for business review."),
    title: copy("从方案到交付", "From proposal to delivery"),
    accent: copy("成果可展示、可复核", "show the work, review the details"),
    caption: copy("工作台示意 · 空间成果、提案文件与选品报价草稿", "Workspace illustration \u00b7 spatial outputs, proposal files and selection and quotation drafts"),
    features: [
      {icon: 'screen', title: copy("效果视频直观呈现", "Present the space visually"), body: copy("结合效果图、空间展示视频与建模结果，辅助讨论布局、材质和尺度，供项目人员查看与确认。", "Bring renderings, spatial videos and model results together to discuss layout, materials and scale for project review.")},
      {icon: 'file', title: copy("提案文件有序整理", "Organize proposal files"), body: copy("围绕同一套方案整理 PPT 汇报、Word 设计说明与 HTML 展示页，让图片、分析与说明对应同一个项目。", "Prepare PPT presentations, Word design notes and HTML pages from the same proposal, keeping visuals, analysis and explanations together.")},
      {icon: 'grid', title: copy("选品报价规则支撑", "Apply selection and pricing rules"), body: copy("结合企业商品 SKU、施工条目与报价规则辅助形成清单和报价草稿，工程量、规格与价格由业务人员核对。", "Use company SKUs, work items and pricing rules to prepare selection lists and quotation drafts. Business staff review quantities, specifications and prices.")},
    ],
  }
];

export const workspaceHighlights = [
  {title: '项目工作区', body: '需求、参考与成果集中组织'},
  {title: '企业知识库', body: '复用品牌、产品与业务规则'},
  {title: '选品与报价', body: '结合商品 SKU 与报价依据'},
  {title: '成果文件', body: '整理汇报、清单与交付资料'},
];
