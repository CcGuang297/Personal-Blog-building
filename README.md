# 个人博客

这是一个基于 Next.js、TypeScript、Tailwind CSS 和 Markdown 搭建的个人博客项目。

## 当前功能

- 支持 GitHub Pages 静态部署
- 首页
- 文章列表页
- 文章详情页
- 项目列表页
- 项目详情页
- 搜索页与搜索无结果页
- 关于页
- 404 页面
- 文章内容存放在 `content/posts`

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- Markdown

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 构建检查

```bash
npm run lint
npm run build
```

## 部署说明

项目已经包含 GitHub Pages 静态导出所需配置，可以继续通过 GitHub Actions 部署。
