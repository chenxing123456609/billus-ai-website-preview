// The archive distinguishes an independently checked public page from names
// mentioned only in historical Billus material. Links remain demo placeholders.
// Overview capabilities describe Billus's model/agent direction, not a promise
// that every archived model supports every operation.
export const modelCapabilities = [
  {icon: 'screen', title: '图文结合的空间表达', body: '结合自然语言、线稿与参考素材，形成可沟通的空间效果。'},
  {icon: 'grid', title: '面向行业的图像生成', body: '围绕建筑、室内与景观场景，探索风格、材质与空间氛围。'},
  {icon: 'file', title: '图像编辑与细节探索', body: '按对应模型与客户端版本，开展材质、软装与局部内容的调整。'},
  {icon: 'chat', title: '企业知识与智能体协同', body: '图像模型与智能体协作，连接企业资料、方案任务与成果文件。'},
];

export const modelArchive = [
  {
    slug: 'billus-04c',
    version: '0.4C',
    title: '毕鲁斯建筑室内景观大模型 0.4C',
    scope: '建筑 · 室内 · 景观',
    status: '公开页面已核对',
    note: '可在 LiblibAI 查看该版本的发布资料；下载方式和使用许可请以对应模型页为准。',
    checked: true
  },
  {
    slug: 'billus-055d',
    version: '0.55D',
    title: 'Billus Diffusion 0.55D',
    scope: '历史型号记录',
    status: '公开链接待核对',
    note: '该名称见于早期项目资料；公开发布页、下载方式和许可资料尚待补充。',
    checked: false
  },
  {
    slug: 'billus-057-edit',
    version: '0.57 EDIT',
    title: 'Billus Diffusion 0.57 EDIT',
    scope: '历史型号记录',
    status: '公开链接待核对',
    note: '该名称见于早期项目资料；公开发布页、下载方式和许可资料尚待补充。',
    checked: false
  }
];
