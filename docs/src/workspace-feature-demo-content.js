export const featureDemoEnglish = {};

const copy = (chinese, english) => {
  featureDemoEnglish[chinese] = english;
  return chinese;
};

const assets = '/billus-ai-website-preview/assets/';
const furniture = assets + 'workspace-demo-furniture/';

copy('工作区', 'Workspace');
copy('我的项目', 'My projects');
copy('企业资料', 'Company data');
copy('空间方案深化工具演示', 'Spatial proposal development tools demonstration');
copy('空间方案深化', 'Spatial proposal development');
copy('图像工具示意', 'Image tools illustration');
copy('空间方案素材示例', 'Spatial proposal source image');
copy('请整理空间效果图、空间展示视频和3D 建模成果。', 'Prepare the spatial rendering, showcase video and 3D model.');
copy('3D 建模成果', '3D model');

export const featureDemoLabels = {
  project: copy('空间设计项目', 'Spatial design project'),
  localFiles: copy('本地文件', 'Local files'),
  furnitureFiles: copy('家具素材', 'Furniture references'),
  imageFiles: copy('参考图片', 'Reference images'),
  references: copy('项目资料', 'Project references'),
  conversation: copy('项目对话', 'Project conversation'),
  assets: copy('企业资产', 'Company assets'),
  canvas: copy('无限画布', 'Infinite canvas'),
  proposal: copy('方案工作台', 'Proposal workspace'),
  output: copy('成果文件', 'Project outputs'),
  drop: copy('拖入文件，开始设计', 'Drop files to start designing'),
  working: copy('正在整理项目成果', 'Preparing project outputs'),
  done: copy('成果已整理，可继续查看与复核', 'Outputs are ready for review'),
  assetsHint: copy('从窗口外拖入家具，在对话中引用素材', 'Bring furniture into the conversation from outside the window'),
  canvasHint: copy('从窗口外上传参考图，在画布上建立关联', 'Bring references onto the canvas from outside the window'),
  inputHint: copy('从窗口外拖入文件，在对话框中输入需求', 'Bring files into the conversation from outside the window'),
  outputHint: copy('从一次对话，整理出多种成果文件', 'Prepare different deliverables from one conversation'),
  pause: copy('暂停工作台动画', 'Pause workspace animation'),
  resume: copy('继续工作台动画', 'Resume workspace animation'),
  inputPrompt: copy('请结合项目资料，设计一版温暖自然的空间方案', 'Use these references to create a warm, natural spatial proposal'),
  furniturePrompt: copy('参考这些家具，完善当前空间的软装搭配', 'Use this furniture to refine the room furnishing proposal'),
  furnitureGreeting: copy('把家具素材拖进对话，一起完善空间搭配', 'Add furniture to the conversation to develop the proposal'),
  outputPrompt: copy('把方案整理成汇报文件，并生成选品与报价草稿', 'Prepare the presentation, design brief, selections and quotation draft'),
  greeting: copy('把资料放进来，一起梳理你的设计想法', 'Add references and develop your design ideas together'),
  connected: copy('两张参考图，关联到同一个方案', 'Two references connected to one proposal'),
  plan: copy('平面布局.jpg', 'Floor-plan.jpg'),
  inspiration: copy('风格参考.png', 'Style-reference.png'),
};

export const featureDemoDescriptions = {
  projects: copy('绿色鼠标将窗口外的PDF、Word、Excel和PPT文件拖入工作台对话输入框，随后输入设计需求', 'A green cursor drags PDF, Word, Excel and PPT files from outside the workspace window into its conversation input, then types the design request'),
  knowledge: copy('将窗口外的家具图片拖入工作台对话输入框，再将两张外部参考图上传到无限画布并连线', 'Furniture images are dragged from outside the workspace window into its conversation input, then two external references are uploaded and connected on the infinite canvas'),
  outputs: copy('工作台依次输出效果图、视频、PPT、Word、HTML和报价表文件卡片的动画', 'Animation showing rendering, video, PPT, Word, HTML and quotation file cards produced by the workspace'),
};

export const featureInputFiles = [
  { name: copy('项目需求.pdf', 'Project-brief.pdf'), size: '2.3M', type: 'pdf', glyph: 'P' },
  { name: copy('品牌规范.docx', 'Brand-guide.docx'), size: '1.4M', type: 'word', glyph: 'W' },
  { name: copy('产品与预算.xlsx', 'Products-budget.xlsx'), size: '156K', type: 'excel', glyph: 'X' },
  { name: copy('历史方案.pptx', 'Previous-proposal.pptx'), size: '4.8M', type: 'ppt', glyph: 'P' },
];

export const featureOutputFiles = [
  { name: copy('空间效果.png', 'Spatial-render.png'), size: '2.4M', type: 'image', glyph: '▧' },
  { name: copy('空间展示.mp4', 'Spatial-tour.mp4'), size: '18.6M', type: 'video', glyph: '▶' },
  { name: copy('方案汇报.pptx', 'Proposal.pptx'), size: '3.8M', type: 'ppt', glyph: 'P' },
  { name: copy('设计说明.docx', 'Design-brief.docx'), size: '1.4M', type: 'word', glyph: 'W' },
  { name: copy('方案展示.html', 'Project-showcase.html'), size: '186K', type: 'html', glyph: '‹›' },
  { name: copy('选品报价.xlsx', 'Selection-estimate.xlsx'), size: '42K', type: 'excel', glyph: 'X' },
];

export const featureFurniture = [
  { name: copy('休闲单椅', 'Lounge chair'), image: furniture + 'lounge-chair.webp' },
  { name: copy('云朵沙发', 'Cloud chair'), image: furniture + 'cloud-chair.webp' },
  { name: copy('花器边几', 'Vase side table'), image: furniture + 'vase-table.webp' },
  { name: copy('组合茶几', 'Coffee tables'), image: furniture + 'coffee-tables.webp' },
];

export const featureCanvasImages = [
  { name: featureDemoLabels.plan, image: assets + 'home-workspace-plan.webp' },
  { name: featureDemoLabels.inspiration, image: assets + 'workspace-showcase/render.webp' },
];

// Existing website assets illustrate input roles, rather than a recorded generation run.
export const featureReferenceGeneration = {
  inputs: [
    {name: featureDemoLabels.inspiration, role: copy('风格与配色参考', 'Style and color reference'), image: assets + 'workspace-showcase/render.webp', type: 'reference'},
    {name: copy('材质参考.jpg', 'Material-reference.jpg'), role: copy('材质搭配参考', 'Material combination reference'), image: assets + 'workspace-showcase/color-material.webp', type: 'material'},
    {name: copy('搭配参考.jpg', 'Furnishing-reference.jpg'), role: copy('家具与软装参考', 'Furniture and furnishing reference'), image: assets + 'workspace-showcase/furnishing.webp', type: 'furnishing'},
  ],
  prompt: copy('结合这些参考图片中的风格、配色、材质与家具搭配，生成一版空间方案。', 'Create a spatial proposal using the style, colors, materials and furnishing ideas in these reference images.'),
  placeholder: copy('上传多张参考图片，描述想要的设计方向…', 'Upload multiple references and describe your design direction…'),
  loading: copy('正在结合多张参考图片生成方案…', 'Generating a proposal from the reference images…'),
  ready: copy('已参考这些图片生成方案，可继续对话调整。', 'A proposal based on these references is ready to refine in conversation.'),
  resultLabel: copy('多图参考生成示例', 'Multi-image reference generation example'),
  resultImage: assets + 'workspace-showcase/local-edit.webp',
  continue: copy('继续描述需要调整的布局、风格或材质…', 'Describe further changes to the layout, style or materials…'),
};

export const featureImageCreationMedia = {
  source: assets + 'workspace-showcase/render.webp',
  views: assets + 'workspace-image-tools/alternate-views-20261127.webp',
  sourceAlt: copy('空间方案与图像操作选区示例', 'Spatial proposal with an image tool selection'),
  viewsAlt: copy('用户提供的六宫格空间视角图', 'User-provided contact sheet of six spatial views'),
};

copy('原图', 'Original');
copy('扩展范围', 'Extended canvas');

export const featureImageCreationTools = [
  {id:'edit',label:copy('局部修改','Local editing'),description:copy('在已有方案上调整指定区域的家具、材质或装饰。','Adjust furniture, materials or decor in a selected area of the proposal.')},
  {id:'expand',label:copy('扩图','Outpainting'),description:copy('为现有画面延展边缘内容，探索更完整的空间构图。','Extend the edges of an image to explore a wider spatial composition.')},
  {id:'enlarge',label:copy('图片放大','Image enlargement'),description:copy('保持完整构图与比例，放大整张图片。','Enlarge the entire image while preserving its composition and aspect ratio.')},
  {id:'crop',label:copy('剪裁','Cropping'),description:copy('调整画面范围与比例，聚焦需要展示的空间内容。','Adjust framing and proportions to focus on the spatial content to present.')},
  {id:'views',label:copy('多角度生成','Alternate views'),description:copy('围绕同一空间生成不同角度的视觉表达。','Generate visual expressions of the same space from different viewpoints.')},
];
