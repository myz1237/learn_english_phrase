# 内容录入指南 (CONTENT_GUIDE)

> 这份文档是给**未来录入新内容**用的——你截图学习内容后,启动 Claude Code,让它读这份指南 + 读截图,生成一个符合 schema 的单元文件并灌库。请保持本文件与 `content/seed/types.ts` 同步。

## 给 Claude 的一句话指令(可直接复制)
> 「读 `content/CONTENT_GUIDE.md`,然后读 `content/screenshots/` 里我新放的截图,按 schema 在 `content/seed/` 下新建一个单元文件并在 `content/seed/index.ts` 注册。**提取完先别急着入库**:跑 `npm run validate` 做结构校验,再对照截图逐条做 §7 的语义自检、把可疑处列出来给我看;都没问题再跑 `npm run seed`。」

---

## 1. 这个 App 的教学法 + 两种内容形态
仿《English Phrasal Verbs in Use (Advanced)》:**不是**「一个短语配五个意思」的孤立卡片,而是**按主题(topic)成组学习**,每个短语都配它的**地道例句**作为语境。一个**单元(unit)= 一个主题 + 一组短语**。

一个单元可以用两种形态之一(**默认用第一种**):

1. **通用 topic(默认,推荐)**:短语直接放在 `Unit.phrases[]`,用可选的 `group` 字段按书里的 A/B/C 小节分组。**不需要角色**。表格、文章、词表、任何「按主题列一组短语」的内容都用这种。前端会渲染成**卡片网格**,点卡片弹抽屉看释义/用法/例句。

2. **角色独白 passage(可选)**:提供 `Unit.personas[]`,每个角色一段第一人称独白,短语用 `[[marker]]` 内嵌其中(如原始 Unit 21)。**只有当内容本身就是几段独白时才用**,不要硬把表格/对话改写成虚构独白。

> 简言之:**默认就按 topic 把短语列出来(generic 形态)**;只有书里真的是角色自述时,才用 persona 形态。

## 2. 数据结构(schema)
权威定义见 `content/seed/types.ts`。字段含义:

### Unit(单元)
| 字段 | 说明 | 例 |
|---|---|---|
| `id` | **唯一**英文小写 id,作为入库去重键(再次 seed 会按它 upsert,不重复) | `"work"` |
| `num` | 单元号(书上的编号,字符串) | `"21"` |
| `tag` | 分类标签「中文 · English」 | `"职场 · Work"` |
| `title` | 英文标题 | `"Work"` |
| `titleZh` | 中文副标题(显示为衬线斜体) | `"工作百态"` |
| `intro` | 引导段;可含 `<b>...</b>` | `"一组用来谈<b>数量、规模与增减</b>的短语动词……"` |
| `phrases` | **通用形态(默认)**:该主题的短语数组,可用 `group` 分组 | — |
| `personas` | **可选**:角色独白数组,仅 passage 形态用 | — |

### Persona(角色)
| 字段 | 说明 | 例 |
|---|---|---|
| `role` | 英文角色名 | `"The boss"` |
| `roleZh` | 中文角色名 | `"老板"` |
| `avatar` | 头像圆圈里的字母(取英文名首字母,1–2 个字母) | `"B"` / `"Ad"` |
| `tint` | 头像主题色,见下方调色板 | `"#3f7d5b"` |
| `passage` | 第一人称独白,目标短语用 `[[marker]]` 标出 | `"I can [[farm out]] tasks..."` |
| `phrases` | 该角色的短语数组(每个 `[[marker]]` 对应一条) | — |

### Phrase(短语)
| 字段 | 说明 | 例 |
|---|---|---|
| `head` | 词典原形(lemma),卡片标题 / 抽屉大标题。可用 sb/sth | `"ease off"` / `"pass sb over"` |
| `group` | **(可选)** 小节标签,用于卡片分组(书里的 A/B/C);generic 形态用 | `"A · 增加与汇总"` |
| `marker` | **(可选,仅 passage 形态)** 与 passage 里 `[[...]]` 内文字逐字一致 | `"easing off"` |
| `def` | 英文释义 | `"start to work less..."` |
| `zh` | 中文释义 | `"放慢节奏、减少投入"` |
| `register` | 语体;**第一个词**会显示成小标签 | `"口语"` / `"中性 · 工会语境"` |
| `when` | 「什么时候用」说明,可含 `<b>...</b>` | `"<b>逐渐减少工作量</b>……"` |
| `syn` | 可选;近义 / 批注(放你的手写批注最合适) | `"buckle down(近义)"` |
| `note` | 可选;额外备注 | — |
| `examples` | 1–2 条例句 | — |

### Example(例句)
| 字段 | 说明 |
|---|---|
| `en` | 英文例句 |
| `zh` | 中文翻译 |
| `hl` | `en` 里要高亮的**子串**——必须是 `en` 中**实际出现的原文**(含变形),不是 lemma。例:`head` 是 `pass sb over`,但例句里是 "passed over",则 `hl: "passed over"`。 |

## 3. 关键约定(最容易出错的点)
1. **marker 三处一致**:`passage` 里的 `[[marker]]`、`phrases[].marker`,三者文字必须完全相同,否则点击无法弹窗。
2. **hl 必须是例句原文子串**:大小写不敏感、取第一个匹配。若 lemma 与例句里的形态不同,`hl` 用例句里的形态。
3. **head vs marker**:`head` 是原形(给学习者看的词条),`marker` 是文中出现的形态(可能变形)。两者可不同。
4. `<b>` 只用在 `intro` 和 `when`(会按 HTML 渲染);其它字段是纯文本。
5. 每个角色 3–4 个短语为宜(与原型一致),独白自然口语化。

## 4. Persona 头像调色板(tint)
按角色循环选用,避免相邻重复:
| 颜色 | hex |
|---|---|
| green | `#3f7d5b` |
| blue | `#2f6db0` |
| terracotta | `#c2603a` |
| violet | `#7a5cc4` |
| teal | `#2f8a7a` |
| gold | `#b08436` |

## 5. 录入步骤
1. 截图放进 `content/screenshots/`。
2. 新建 `content/seed/<id>.ts`,`export const <id>: UnitSeed = { ... }`(格式见 `work.ts` 范例)。
3. 在 `content/seed/index.ts` 里 `import` 并加入 `units` 数组。
4. **结构校验**:`npm run validate`——查 marker 一致、hl 是否在例句中、字段缺失、id 重复等硬错误。红了就先改,别入库。
5. **语义自检**:对照截图逐条过一遍 §7 清单(机器查不了的得 Claude 自己判断),把任何不确定/可能错的地方**列出来交给用户确认**,不要默默放过。
6. 通过后 `npm run seed`(幂等:按 `unit.id` upsert,不会产生重复)。
7. `npm run dev` 打开 `http://localhost:5173` 实地验证:进单元 → 点高亮 → 抽屉内容、例句高亮、朗读都正常。

## 6. 范例(摘自 `work.ts`,Unit 21)
```ts
import type { UnitSeed } from "./types.ts";

export const work: UnitSeed = {
  id: "work",
  num: "21",
  tag: "职场 · Work",
  title: "Work",
  titleZh: "工作百态",
  intro: "六个不同岗位的人……每段话里都<b>埋着地道的短语动词</b>……",
  personas: [
    {
      role: "The boss", roleZh: "老板", avatar: "B", tint: "#3f7d5b",
      passage: "I'll be retiring next year. I already find that I can [[farm out]] tasks I used to do myself.",
      phrases: [
        {
          marker: "farm out",          // 与 passage 中 [[farm out]] 一致
          head: "farm out",            // 词典原形
          def: "give work to other people instead of doing it yourself",
          zh: "把工作分派 / 外包给别人",
          register: "中性",
          when: "自己不亲自做、把任务<b>分派或外包</b>给别人时。",
          examples: [
            { en: "I already find that I can farm out tasks I used to do myself.",
              zh: "我发现以前自己做的任务,现在可以分派出去了。",
              hl: "farm out" }            // 例句里实际出现的子串
          ]
        }
      ]
    }
  ]
};
```
完整 **passage 形态**范例见 `content/seed/work.ts`(Unit 21,6 角色 20 短语)。
**通用 topic 形态**范例见 `content/seed/size_number.ts`(Unit 26,无角色,16 短语按 A/B/C 分组)——新内容默认照这个写。

---

## 7. 提取后自检清单(Claude 必做)
`npm run validate` 只能查结构性硬错误;**下面这些机器查不出来,必须 Claude 对照截图自己判断**。逐条核对,凡是「拿不准 / 截图看不清 / 自己改写过」的地方,**不要默默写进去——列成一张「待用户确认」清单**给用户。

**A. 忠实度(对照截图,最重要)**
- [ ] `head` / `def` / `register` 是否与截图里词条**逐字一致**?有没有被我「凭印象」改写或补全?
- [ ] 截图里的**手写批注 / 近义词**有没有遗漏?它们应进 `syn`(批注)而非编造。
- [ ] `passage` 若是我**自己改写**的角色独白(而非书上原文),要标记出来让用户知道这是生成的,不是原文。
- [ ] 中文 `zh` / `when` 是翻译还是我的发挥?意思有没有跑偏、有没有过度添油加醋?

**B. 一致性(机器只查存在性,语义靠你)**
- [ ] `head`(原形)与 `marker`(文中形态)是否对应同一个短语?例:`head: "pass sb over"` ↔ `marker: "get passed over"` 合理;若对不上是错的。
- [ ] 每条 `examples[].hl` 是否高亮了**真正的目标短语**(而不是恰好同形的其它词)?validate 只确认它是子串,不保证选对了词。
- [ ] 例句是否真的**例示了这个短语的用法**,而不是放了一句无关的话?

**C. 可疑信号(命中就停下来问)**
- [ ] 截图模糊 / 被遮挡 / 裁切,导致某字段是我**猜**的 → 标出来。
- [ ] 一个角色塞了 >4 个短语,或独白读起来不自然 → 可能拆分有误。
- [ ] 出现书里没有、是我「补充」的短语或例句 → 默认**不要**自行增补,先问用户。

**D. 收尾**
- [ ] 把上面所有「待确认项」连同**截图出处**一并汇报;用户拍板后再 `npm run seed`。
- [ ] 不确定就**宁可少录、问清楚**,也不要为了凑数而编。准确 > 数量。
