# Billus AI 官网预览

此仓库通过 GitHub Pages 展示毕鲁斯官网的交互预览。页面包含中英文切换、响应式两级导航、产品介绍、自研模型能力、功能手册、模型档案与滚动动效。

智能体安装包、补丁包和 API 模型广场真实地址尚未接入；模型档案的跳转为演示入口，销售表单仅在浏览器本地演示。

GitHub Pages 发布源：main 分支的 /docs 文件夹。

官网根路径默认进入 `/home` 的网站首页，点击顶部 Logo 也返回首页。毕鲁斯智能体产品页继续通过 `/products/workspace` 访问，其他独立页面地址保持可用。

## 本地预览

安装 Node.js 后，在仓库目录运行：

```sh
npm run dev
```

浏览器访问 `http://127.0.0.1:4173/billus-ai-website-preview/`。无需安装额外 npm 依赖；预览服务只监听本机。

页面结构和内容位于 `docs/src/`，图片与字体位于 `docs/assets/`。共享样式约定见 `references/shared-spec/website-ui.md`。
