# 个人博客

这是一个使用 Next.js、TypeScript、Tailwind CSS 和 Markdown 搭建的个人博客骨架项目。

## 当前功能

- 支持 GitHub Pages 静态部署
- 首页
- 文章列表页
- 文章详情页
- 关于我页面
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
npm run build
npm run lint
```

## 部署说明

项目已经包含 GitHub Actions 工作流，可以用于部署到 GitHub Pages。
"Trigger Pages build $(date)" 
"# Trigger build $(date)" 
