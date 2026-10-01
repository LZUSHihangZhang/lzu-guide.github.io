# 兰州大学飞升指南

一个由兰大学生共同维护的经验分享站，重点收录升学申请、就业、海外交流与专项经验。

## 为什么叫 `lzu-guide`

- 短，容易记忆和输入
- 能概括升学申请、就业与相关专项经验，又不会被某一种去向限制
- 对应的 GitHub Pages 地址清晰：`https://lzu-guide.github.io/`

## 本地预览

需要 Node.js 20 或更高版本。

```bash
npm install
npm run docs:dev
```

构建正式版本：

```bash
npm run docs:build
npm run docs:preview
```

## 内容目录

```text
docs/
├── future/         保研、考研、留学与就业
├── research/       科研等专项经验
├── experience/     按学院整理的个人申请经验
├── contribute/     投稿与共建说明
└── .vitepress/     站点导航、主题和样式
```

编辑内容时，直接修改对应目录中的 Markdown 文件即可。新增页面后，需要在 `docs/.vitepress/config.mts` 的侧边栏中补上入口。

## 发布到 GitHub Pages

仓库创建并推送后，在 GitHub 仓库的 **Settings → Pages** 中将 Source 设为 **GitHub Actions**。此后推送到 `main` 分支会自动构建并发布。

当前站点作为组织主页发布，仓库名为 `lzu-guide.github.io`，因此 `docs/.vitepress/config.mts` 中的 `base` 保持为 `/`。

## 内容原则

- 事实信息尽量注明申请年份、适用对象与更新时间
- 经验文章区分个人经历与普遍规则
- 不公开个人隐私、内部账号、未授权材料或可识别他人的敏感信息
- 对政策、培养方案等易变化内容，优先链接学校官方来源

## 许可

站点代码采用 MIT License。投稿内容的授权约定会在正式征稿前进一步完善。
