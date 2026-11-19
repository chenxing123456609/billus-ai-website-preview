export const workspaceShowcaseTabs = [
  {
    id: 'projects', label: '项目工作台', labelEnglish: 'Workspace', visual: 'client',
    eyebrow: '需求、参考与成果，围绕同一项目',
    title: '一个工作区，', accent: '推进整个空间项目。',
    image: '/billus-ai-website-preview/assets/workspace-client-20261112.webp',
    alt: '毕鲁斯智能体真实客户端中的项目、对话与空间效果图界面',
    caption: '毕鲁斯智能体 · 真实客户端界面',
    features: [
      {icon: 'file', title: '项目资料，集中组织', body: '整理需求、参考图与历史成果，让每次沟通都有上下文。'},
      {icon: 'chat', title: '自然语言，连续修改', body: '从空间效果到材质、软装与局部调整，接着上一轮继续推进。'},
      {icon: 'grid', title: '选品报价与成果，一并整理', body: '结合企业商品和报价规则，汇总可供项目人员复核的文件。'},
    ],
  },
  {
    id: 'knowledge', label: '企业知识库', labelEnglish: 'Knowledge', visual: 'knowledge',
    eyebrow: '品牌、商品与规则，成为项目依据',
    title: '让企业自己的知识，', accent: '参与每一次工作。',
    caption: '企业知识接入示意 · 以实际配置为准',
    features: [
      {icon: 'file', title: '品牌与项目资料，持续复用', body: '归集品牌规范、历史方案和参考资料，减少反复整理。'},
      {icon: 'grid', title: '商品与材料，按企业维护', body: '维护产品 SKU、材质、参考价格等信息，用于具体项目。'},
      {icon: 'check', title: '报价有依据，结果可复核', body: '结合行业目录与报价规则，整理清单并交由项目人员确认。'},
    ],
  },
  {
    id: 'outputs', label: '方案与成果', labelEnglish: 'Outputs', visual: 'output',
    eyebrow: '从空间构想到可沟通的成果',
    title: '让方案逐步清晰，', accent: '让成果有序交付。',
    image: '/billus-ai-website-preview/assets/workspace-scene-render.webp',
    alt: '毕鲁斯智能体生成的客厅与卧室空间效果图',
    caption: '毕鲁斯智能体 · 客户端生成画面',
    features: [
      {icon: 'screen', title: '线稿与参考图，形成空间方案', body: '结合项目需求与参考素材，生成用于讨论的空间效果。'},
      {icon: 'chat', title: '材质、风格与细节，连续探索', body: '围绕同一空间调整家具、软装与局部内容，比较不同方向。'},
      {icon: 'file', title: '汇报、清单与文件，集中整理', body: '把方案说明、选品报价草稿和成果文件汇总到项目中。'},
    ],
  },
];

export const workspaceHighlights = [
  {title: '项目工作区', body: '需求、参考与成果集中组织'},
  {title: '企业知识库', body: '复用品牌、产品与业务规则'},
  {title: '选品与报价', body: '结合商品 SKU 与报价依据'},
  {title: '成果文件', body: '整理汇报、清单与交付资料'},
];
