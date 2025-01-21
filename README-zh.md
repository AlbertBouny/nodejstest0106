🌍 *[English](README.md) ∙ [简体中文](README-zh.md)*

<a href="https://gpt302.saaslink.net/Y3CmW1" target="_blank">
  <img src="./public/302banner1.jpg" alt="302.ai">
</a>

> [Sponsor - 赞助]  
> <a href="https://gpt302.saaslink.net/Y3CmW1" target="_blank">302.AI</a>是一个按需付费的一站式AI应用平台，开放平台，开源生态。
>
> 1.集合了最新最全的AI模型和品牌，包括但不限于语言模型、图像模型、声音模型、视频模型。  
> 2.在基础模型上进行深度应用开发，做到让小白用户都可以零门槛上手使用，无需学习成本。  
> 3.零月费，所有功能按需付费，全面开放，做到真正的门槛低，上限高。  
> 4.创新的使用模式，管理和使用分离，面向团队和中小企业，一人管理，多人使用。  
> 5.所有AI能力均提供API接入，所有应用开源支持自行定制（进行中）。  
> 6.强大的开发团队，每周推出2-3个新应用，平台功能每日更新。  
>
> 302.AI开源工具啦：<https://github.com/302ai>

# [SmartExcel.cc](https://www.smartExcel.cc/)

用AI在几秒钟内生成你想要的Excel公式。

[![生成Excel公式](./public/screenshot.png)](https://www.smartExcel.cc/)

## 工作原理

该项目使用[ChatGPT API](https://openai.com/api/)和具有流功能的[Vercel AI SDK](https://sdk.vercel.ai/docs)。它基于表单和用户输入构建提示，将其发送至ChatGPT API通过Vercel边缘函数，然后将响应流式传输回应用程序界面。

## 技术栈

SmartExcel构建于以下技术栈：

- Next.js – 前端/后端
- TailwindCSS – 样式
- Postgres和Prisma - 数据库和存储（[如何使用？](https://weijunext.com/article/061d8cd9-fcf3-4d9e-bd33-e257bc4f9989)）
- Next-auth - 认证（[如何使用？](https://weijunext.com/article/061d8cd9-fcf3-4d9e-bd33-e257bc4f9989)）
- Chat GPT - 生成Excel公式
- Upstash - Redis（[如何使用？](https://weijunext.com/article/6510121c-90da-4d20-85a1-72cbbdb3983b)）
- Lemon Squeezy - 支付（[如何使用？](https://weijunext.com/article/integrate-lemonsqueezy-api)）
- Google Analytics - 访问分析（[如何使用？](https://weijunext.com/article/979b9033-188c-4d88-bfff-6cf74d28420d)）
- Docker - 开发存储（[如何使用？](https://weijunext.com/article/b33a5545-fd26-47a6-8641-3c7467fb3910)）
- Vercel - 托管

如果您对某些技术栈不熟悉，请点击上面的"如何使用"链接，阅读我的中文博客。或者到我的另一个开源仓库学习 —— [Learn Next.js Stack](https://github.com/weijunext/nextjs-learn-demos)

## 本地运行

克隆仓库后，你需要复制`.env.example`文件来创建一个`.env`文件，并填写所需字段。

然后，在命令行运行应用程序，它将在`http://localhost:3000`上可用。

```bash
pnpm i

pnpm run dev
```

## 一键部署

使用[Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples)部署示例：

[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/weijunext/smart-excel-ai&project-name=&repository-name=smart-excel-ai&demo-title=SmartExcel&demo-description=Generate%20the%20Excel%20formulas%20you%20need%20in%20seconds%20using%20AI.&demo-url=https://smartexcel.cc&demo-image=https://smartexcel.cc/opengraph-image.png)

## 关于我

**Full-Stack Engineer, Open-Source Next.js Artist & AI Enthusiast.**

**全栈工程师，Next.js 开源手艺人，AI降临派。**

[博客](https://weijunext.com)  
[Github](https://github.com/weijunext)  
[Twitter/X](https://x.com/weijunext)  
[Medium](https://medium.com/@weijunext)  
[掘金](https://juejin.cn/user/26044008768029)  
[知乎](https://www.zhihu.com/people/mo-mo-mo-89-12-11)  
[微信交流群](https://weijunext.com/make-a-friend)  

如果这个项目对您有帮助，请给仓库点个star，能赞助一下就更好了👇

<a href="https://www.buymeacoffee.com/weijunextz" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="请我喝咖啡" style="height: 41px !important;width: 174px !important;" ></a>

<a href="https://afdian.net/a/weijunext" target="_blank"><img src="./public/afd.png" alt="在爱发电支持我" style="height: 50px !important"></a>

<img src="./public/zs.jpeg" alt="赞赏作者" style="height: 200px; width: 200px">

## Star 记录

![Star History Chart](https://api.star-history.com/svg?repos=weijunext/smart-excel-ai&type=Date)

# TaoismZen - 道教术法文化平台

一个致力于向全球受众传播道教智慧、术法和传统文化的现代网络平台。

[在线演示](https://taoismzen.com) | [English](./README.md)

## 项目概述

TaoismZen 是一个专门设计用于向国际受众介绍道教文化和术法的综合平台。该项目采用现代网络技术构建，为用户提供了解道教核心原则、占卜方法和自我修养技巧的便捷途径。

## 主要功能

### 内容与知识

- **道教基础**
  - 核心哲学概念
  - 历史背景与演变
  - 现代应用与意义

- **术法体系**
  - 八字（四柱命理）
  - 紫微斗数
  - 风水（堪舆）
  - 传统中国解梦
  - 星座起名
  - 姻缘测算

### 技术特性

- 🎨 基于 Next.js 13 构建的现代响应式界面
- 🌙 深色模式支持
- 🔍 全文搜索功能
- 🌐 国际化支持（主要为英文，次要为中文）
- 🔒 使用 NextAuth.js 的身份认证
- 💾 使用 Prisma 的数据库集成
- 📝 使用 Contentlayer 的内容管理
- 🎯 使用 TypeScript 确保类型安全

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+
- PostgreSQL 数据库

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/yourusername/taoismzen.git

# 安装依赖
pnpm install

# 设置环境变量
cp .env.example .env.local

# 运行数据库迁移
pnpm prisma migrate dev

# 启动开发服务器
pnpm dev
```

### 环境变量

创建 `.env.local` 文件并设置以下变量：

```env
# 应用 URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

# 数据库
POSTGRES_PRISMA_URL=你的数据库URL

# 认证
NEXTAUTH_SECRET=你的密钥
GITHUB_ID=你的GitHub ID
GITHUB_SECRET=你的GitHub Secret

# 可选：OAuth 提供商
GOOGLE_ID=你的Google ID
GOOGLE_SECRET=你的Google Secret
```

## 项目结构

```
├── app/                 # Next.js 13 应用目录
├── components/          # React 组件
├── config/             # 配置文件
├── content/            # Markdown/MDX 内容
├── lib/                # 工具函数
├── prisma/             # 数据库架构和迁移
├── public/             # 静态资源
└── styles/             # 全局样式
```

## 参与贡献

我们欢迎各种形式的贡献！详情请参阅 [贡献指南](CONTRIBUTING.md)。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 技术栈致谢

- 使用 [Next.js](https://nextjs.org/) 构建
- 使用 [Tailwind CSS](https://tailwindcss.com/) 样式
- 使用 [NextAuth.js](https://next-auth.js.org/) 认证
- 使用 [Prisma](https://www.prisma.io/) 数据库 ORM
- 使用 [Contentlayer](https://www.contentlayer.dev/) 内容管理
