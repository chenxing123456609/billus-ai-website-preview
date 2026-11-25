// Existing project visuals connect the four benefits without invented metrics.
export const homeWorkflowEnglish={};
const c=(zh,en)=>(homeWorkflowEnglish[zh]=en,zh);
const assets='/billus-ai-website-preview/assets/';
const project=assets+'workspace-showcase/';
c('让每一步工作','Keep every step');
c('接得起来','connected');
c('从需求与参考，到方案、选品和成果文件，让团队围绕同一个项目持续推进','From requirements and references to proposals, selections and deliverables, keep the team moving within one project');
c('项目推进的四个环节','Four connected stages of a project');
c('空间项目的连续工作流程','A continuous spatial project workflow');
c('示例项目','Example project');
export const workflowBenefits=[
 {id:'references',step:c('需求与资料','Requirements'),title:c('减少重复设计和资料核对','Reduce repeated design and checks'),
  description:c('企业标准、参考图与历史成果集中复用，让每次沟通都带着项目上下文','Reuse company standards, references and previous outputs so every discussion retains the project context'),
  image:project+'render.webp',alt:c('项目中的室内空间效果方案','Interior rendering from the example project'),
  attachment:assets+'home-workspace-plan.webp',attachmentLabel:c('参考平面','Reference plan'),attachmentAlt:c('同一示例项目的平面布局资料','Floor plan from the same example project'),attachmentType:'plan',
  caption:c('用已有资料，开启下一步方案','Start the next proposal with existing references')},
 {id:'revisions',step:c('方案与修改','Proposals'),title:c('加快方案响应','Respond to proposals sooner'),
  description:c('从上一轮方案继续调整材质、家具与细节，让需求和修改保持连续','Continue from the previous proposal to refine materials, furniture and details, keeping requirements and revisions connected'),
  image:project+'local-edit.webp',alt:c('局部软装调整后的空间效果方案','Spatial proposal with refined furnishings'),
  attachment:project+'render.webp',attachmentLabel:c('上一轮方案','Previous proposal'),attachmentAlt:c('本次局部修改所参考的空间方案','Spatial reference for the local revision'),attachmentType:'image',
  caption:c('围绕同一空间，把想法逐步说清','Refine ideas within the same space')},
 {id:'business',step:c('选品与报价','Selections'),title:c('连接设计与业务','Connect design with business'),
  description:c('把空间方案与商品、报价规则一起核对，整理选品与报价草稿，交由项目人员确认','Review the proposal with product references and pricing rules, then prepare selection and quotation drafts for the team to verify'),
  image:project+'render.webp',alt:c('用于选品与报价讨论的空间效果参考','Spatial reference for product and quotation discussions'),
  attachment:project+'deliverables/quote-preview.png',attachmentLabel:c('项目报价草稿','Quotation draft'),attachmentAlt:c('示例项目的报价草稿文件预览','Quotation draft preview from the example project'),attachmentType:'document',
  caption:c('让视觉方案，带上业务依据','Bring business references into the visual proposal')},
 {id:'knowledge',step:c('成果与沉淀','Deliverables'),title:c('复用企业知识','Reuse company knowledge'),
  description:c('将设计说明、项目成果与企业规范一并整理，留下下一次可以继续使用的积累','Organize design briefs, project outputs and company standards together as references for future work'),
  image:project+'render.webp',alt:c('与设计说明关联的空间效果方案','Spatial rendering associated with the design brief'),
  attachment:project+'deliverables/word-preview.webp',attachmentLabel:c('项目设计说明','Project design brief'),attachmentAlt:c('示例项目的Word设计说明预览','Word design brief preview from the example project'),attachmentType:'document',
  caption:c('把这一次成果，变成下一次起点','Make this project a starting point for the next')}
];
