# Phrasebook — 本地运行

全栈个人学习应用:Vite + React + TS(前端) · Express + TS(后端)。
存储通过 Storage Adapter 支持两种后端:**MongoDB**(默认)或**本地 SQLite 单文件**(完全本地、零配置)。

## 方式一:完全本地模式(SQLite,推荐上手)
```bash
npm run install:all      # 安装 根 + server + client 依赖(仅首次)
npm run dev:local        # 同时起后端(:3001)和前端(:5173)
```
- 需要 Node ≥ 22.5(用的是 Node 内置 sqlite,无额外依赖)。
- 数据存在 `server/data/phrasebook.sqlite`(已 gitignore):本地已有就直接用;没有或文件损坏会自动新建(坏文件会备份为 `.corrupt-<时间戳>`),首次自动从 `content/seed/` 灌入全部内容,无需手动 seed。
- 改了内容想重灌:`npm run seed:local`。

## 方式二:MongoDB 模式
- 前置:本地 MongoDB 正在运行;`cp .env.example .env` 后填好 `MONGO_URL`(放项目根目录;`server/.env` 也会被识别)。可选:`MONGO_DB`(默认 `phrasebook`)、`PORT`(后端默认 3001)。
- 启动时会先做连接检查,连不上会快速报错(4 秒超时)并提示可改用 `npm run dev:local`。

```bash
npm run install:all      # 仅首次
npm run seed             # 灌入内容(幂等 upsert,可反复运行)
npm run dev              # 同时起后端(:3001)和前端(:5173)
```

> 后端选择逻辑:`DB_DRIVER=sqlite|mongo` 显式指定(`dev:local`/`seed:local` 已设好);未指定时,有 `MONGO_URL` 走 Mongo,没有则自动落到 SQLite。两种模式数据互相独立。

浏览器打开 http://localhost:5173

## 加新内容
见 `content/CONTENT_GUIDE.md`——截图放 `content/screenshots/`,让 Claude Code 读图生成 `content/seed/<id>.ts` 并注册,再 `npm run seed`。

## 目录
- `client/` 前端 · `server/` 后端 · `content/` 内容种子与录入指南
- `design_reference/` 原始设计原型(参考,不参与构建)
