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
