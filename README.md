# Phrasebook — 地道短语 · 例句学习

一个本地优先的个人英语学习应用,面向**中高级英语学习者**,按《English Phrasal Verbs in Use (Advanced)》的方法学短语动词:**不背"一个短语五个意思"的孤立卡片,而是把短语放回它生长的句子里**——按主题成单元,在角色独白或地道例句的语境中学习。

## 功能

- **单元学习** — 每个单元一个主题(职场、达成一致、数量规模……)。两种形态:角色独白(短语内嵌在第一人称叙述中)或主题短语组(按书中 A/B/C 小节分组)
- **点击即学** — 点任意高亮短语,右侧抽屉展示英文释义、中文释义、"什么时候用"、语体标签、近义批注,以及 **3 条地道例句**(书上原句 + 练习句),每条可朗读(TTS)
- **串联故事** — 每个单元末尾有一篇把全部短语织进同一场景的英文小故事,故事里的短语同样可点击
- **复习闪卡** — 主动回忆练习:例句挖空,先想再翻面验证
- **收藏夹** — 收藏待复习的短语,随处可标记
- **学习进度** — 已学标记(✓)、单元进度环、连续学习天数(streak);每个单元可一键重置进度(带确认弹窗)

## 技术栈

前端 **Vite + React + TypeScript** · 后端 **Express + TypeScript** · 存储 **SQLite(内置,零配置)或 MongoDB**,通过统一 Storage Adapter 切换。

## 快速开始

### 方式一:完全本地模式(推荐)

只需要 **Node ≥ 22.5**(SQLite 用的是 Node 内置模块,无须安装任何数据库):

```bash
npm run install:all   # 安装依赖(仅首次)
npm run dev:local     # 启动后端 :3001 + 前端 :5173
```

打开 http://localhost:5173 即可使用。

数据存在 `server/data/phrasebook.sqlite`(已 gitignore):首次运行自动建库并从 `content/seed/` 灌入全部内容;之后复用现有文件;若文件损坏会自动备份为 `.corrupt-<时间戳>` 并重建。

### 方式二:MongoDB 模式

需要本地(或远端)MongoDB,以及项目根目录的 `.env`(直接从模板复制):

```bash
cp .env.example .env  # 然后按需修改 MONGO_URL
```

```env
MONGO_URL=mongodb://localhost:27017
# 可选
MONGO_DB=phrasebook   # 默认 phrasebook
PORT=3001             # 后端端口,默认 3001
```

```bash
npm run install:all   # 仅首次
npm run seed          # 灌入内容(幂等,可反复运行)
npm run dev           # 启动后端 :3001 + 前端 :5173
```

启动时会做连接检查(4 秒超时),连不上会给出明确报错并提示可改用 `npm run dev:local`。

> 后端选择逻辑:`DB_DRIVER=sqlite|mongo` 显式指定;未指定时有 `MONGO_URL` 走 Mongo,否则自动落到 SQLite。两种模式的数据互相独立。

## 常用脚本

| 命令 | 作用 |
|---|---|
| `npm run dev:local` | SQLite 模式启动(零配置) |
| `npm run dev` | MongoDB 模式启动 |
| `npm run seed` / `npm run seed:local` | 把 `content/seed/` 的内容灌入对应数据库(幂等 upsert) |
| `npm run validate` | 内容结构校验(marker 一致性、例句高亮子串等),改内容后入库前必跑 |
| `npm run build` | 构建前端产物 |

## 项目结构

```
client/             前端(Vite + React + TS)
  src/views/        五个页面:今日 / 场景库 / 单元 / 收藏 / 复习
  src/components/   短语抽屉、角色气泡、故事区块、确认弹窗等
server/             后端(Express + TS)
  src/store/        Storage Adapter:types(接口)+ sqlite + mongo 两实现
  src/routes/       /api/units 内容 · /api/progress 进度
  data/             本地 SQLite 数据文件(自动生成,不入库)
content/            内容层
  seed/             每个单元一个 .ts 文件 + index.ts 注册表
  CONTENT_GUIDE.md  内容录入指南(含给 Claude 的提取/自检流程)
  screenshots/      书页截图(录入新内容的原始素材)
design_reference/   原始设计原型与交接文档(只作参考,不参与构建)
```

## 添加新内容

1. 把书页截图放进 `content/screenshots/`
2. 按 `content/CONTENT_GUIDE.md` 的 schema 新建 `content/seed/<id>.ts` 并在 `content/seed/index.ts` 注册(推荐直接让 Claude Code 读指南 + 截图生成)
3. `npm run validate` 通过后,`npm run seed`(或 `seed:local`)入库

## 说明

- 单用户应用,无账号体系;进度存在服务端数据库(一条固定文档),换浏览器不丢
- API:`GET /api/units` · `GET /api/units/:id` · `GET /api/progress` · `PUT /api/progress/saved|learned|reset-unit`
- 朗读使用浏览器 SpeechSynthesis(en-US),无需联网服务
