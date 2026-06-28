# Web 前端知识问答与刷题助手

Web 前端课程设计项目，一个基于 Vue3 的前端知识点刷题工具。

## 功能

- 📚 **分类筛选** — HTML 基础 / CSS 与 Flex / TypeScript / Vue3 四类知识点
- 🔍 **关键字搜索** — 实时过滤题目
- ✍️ **在线刷题** — 12 道选择题，点击选项即可作答
- 📊 **成绩统计** — 答对数 / 答错数 / 正确率，全对时特别鼓励
- ❌ **错题回顾** — 逐题展示错误选项 vs 正确答案，附带解析
- 🎨 **深色主题** — 暗黑风格 UI，金色主色调

## 技术栈

Vue3 (Composition API) + TypeScript + Vue Router + Vite

## 项目结构

```
src/
├── types/          # TypeScript 接口定义
├── data/           # 题库数据 & 答案共享模块
├── router/         # Vue Router 路由配置
├── components/     # 可复用组件
│   ├── QuizProgress.vue    # 分类标签 + 答题进度
│   ├── QuestionCard.vue    # 题目卡片（选项渲染）
│   └── ResultSummary.vue   # 成绩统计面板
├── views/          # 页面组件
│   ├── WelcomeView.vue     # 欢迎首页
│   ├── QuizView.vue        # 刷题页
│   └── ResultView.vue      # 成绩结算页
└── App.vue         # 根组件
```

## 项目启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```
