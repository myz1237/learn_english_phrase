/* Unit 25 · Arranging things — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 25.
   English `def`/examples from the book; `zh` and `when` authored.
   Section A came from a students' dialogue; shown generically. */
import type { UnitSeed } from "./types.ts";

export const arrangingThings: UnitSeed = {
  id: "arranging-things",
  num: "25",
  tag: "整理安排 · Arranging",
  title: "Arranging things",
  titleZh: "整理与安排",
  intro:
    "一组关于<b>布置、整理与安排</b>的短语动词:摆放、归拢、分组、收拾,以及张罗各种事务。",
  // A connected story weaving in all 18 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · The library book sale",
    text:
      "Our little library [[ranks among|rank among]] the oldest in the county, and every June we hold a second-hand book sale [[geared towards|gear towards]] families. This year it was my turn to organise it, so I [[fixed up|fix up]] a planning meeting and [[rounded up|round up]] a dozen volunteers.\n\n" +
      "The storeroom was chaos. Donations had [[piled up|pile up]] all winter, and we spent the first morning just [[sifting through|sift through]] the boxes so we didn't throw away anything valuable. Old Mr Hale, it turned out, had [[hoarded away|hoard away]] hundreds of paperbacks \"for a rainy day\". We [[gathered up|gather up]] everything readable, [[separated out|separate out]] fiction, non-fiction and children's books, and [[separated off|separate off]] a few rare first editions to a locked cabinet. The rest we [[stacked up|stack up]] in tidy piles by the door.\n\n" +
      "On the morning of the sale we [[lined up|line up]] the tables along the hall and [[spaced them out|space out]] so that prams could get through. A sturdy crate [[doubled up as|double up as]] a step for the smaller children, and another one [[propped up|prop up]] the sagging poster board at the entrance. Halfway through setting up I realised we were short of space for the maps and had to [[see about|see about]] an extra table.\n\n" +
      "By five o'clock nearly everything had gone. We [[folded up|fold up]] the tablecloths, [[did up|do up]] the last parcel of unsold books with string for the charity van, and agreed — over tea and the three books I'd quietly bought myself — that next year we'd start sorting in May."
  },
  phrases: [
    // ── A · 布置与整理 ──────────────────────────────
    { group: "A · 布置与整理", head: "prop up", def: "support something by putting something underneath or against it", zh: "支起、垫稳", register: "中性",
      when: "<b>用东西垫着或撑着,使其稳住</b>。prop sth up。", examples: [
      { en: "We need something to prop up the video camera.", zh: "我们得找个东西把摄像机垫稳。", hl: "prop up" },
      { en: "He propped the ladder up against the garage wall.", zh: "他把梯子靠在车库墙上撑好。", hl: "propped the ladder up" },
      { en: "We propped the shelf up with a couple of bricks.", zh: "我们用几块砖把架子垫稳了。", hl: "propped the shelf up" }] },
    { group: "A · 布置与整理", head: "double up as", def: "also be used as something else", zh: "兼作、同时充当", register: "中性",
      when: "<b>一物两用、还能当…用</b>。sth doubles up as sth。", examples: [
      { en: "We could rest it on the bookcase. That could double up as a camera support.", zh: "我们可以把它架在书柜上,书柜还能兼作摄像机的支架。", hl: "double up as" },
      { en: "The sofa doubles up as a bed when friends stay over.", zh: "朋友来留宿时,沙发可以兼作床。", hl: "doubles up as" },
      { en: "Her studio doubles up as a classroom at weekends.", zh: "她的工作室周末还兼作教室。", hl: "doubles up as" }] },
    { group: "A · 布置与整理", head: "gather up", def: "collect several things together", zh: "把…收拢、归拢", register: "中性",
      when: "<b>把散落的东西聚拢到一起</b>。gather sth up。", examples: [
      { en: "Let's gather up all those brochures.", zh: "咱们把那些宣传册都收拢起来。", hl: "gather up" },
      { en: "She gathered up her papers and hurried out.", zh: "她收拢起文件,匆匆出了门。", hl: "gathered up" },
      { en: "Gather up the toys before the guests arrive.", zh: "客人来之前,把玩具都归拢好。", hl: "Gather up" }] },
    { group: "A · 布置与整理", head: "stack up", def: "arrange things in a neat pile", zh: "(整齐)堆叠起来", register: "中性",
      when: "<b>把东西摞成整齐的一摞</b>。stack sth up。", examples: [
      { en: "Let's gather up all those brochures and stack them up in one pile over here.", zh: "把那些宣传册收拢起来,整齐地摞在这边。", hl: "stack them up" },
      { en: "He stacked the chairs up at the back of the hall.", zh: "他把椅子整齐地摞在大厅后面。", hl: "stacked the chairs up" },
      { en: "Clean plates were stacked up neatly beside the sink.", zh: "洗净的盘子整齐地摞在水槽边。", hl: "stacked up" }] },
    { group: "A · 布置与整理", head: "see about", def: "deal with something, or arrange for something to be done", zh: "(去)张罗、安排", register: "中性",
      when: "<b>去处理或安排某事</b>。see about sth。", examples: [
      { en: "OK, then I'll have to see about an extra table; we've got too much stuff.", zh: "好吧,那我得去张罗张罗多摆一张桌子,东西太多了。", hl: "see about" },
      { en: "I must see about getting the boiler serviced before winter.", zh: "入冬前,我得去张罗一下锅炉保养的事。", hl: "see about" },
      { en: "Could you see about taxis for the airport run?", zh: "你能去安排一下去机场的出租车吗?", hl: "see about" }] },
    { group: "A · 布置与整理", head: "space out", def: "arrange things with gaps between them", zh: "(拉开间距)分散摆放", register: "中性",
      when: "<b>把东西之间留出间距、别挤在一起</b>。space sth out。", examples: [
      { en: "We need to space out the tables a bit; they're too close together at the moment.", zh: "我们得把桌子间距拉开一点,现在挨得太近了。", hl: "space out" },
      { en: "Space the seedlings out so they have room to grow.", zh: "把幼苗的间距拉开,让它们有空间生长。", hl: "Space the seedlings out" },
      { en: "The posts are spaced out at two-metre intervals.", zh: "立柱每隔两米分布,间距均匀。", hl: "spaced out" }] },
    { group: "A · 布置与整理", head: "line up", def: "arrange things or people in a row", zh: "(排成一排)排齐", register: "中性",
      when: "<b>把东西或人排成一行</b>。line sth up。", examples: [
      { en: "Yes, and we should line them up in a neat order so that it all looks neat.", zh: "对,我们还应该把它们排整齐,看起来才利落。", hl: "line them up" },
      { en: "The teacher lined the children up by the door.", zh: "老师让孩子们在门口排成一排。", hl: "lined the children up" },
      { en: "Bottles were lined up along the shelf in order of size.", zh: "瓶子按大小顺序在架子上排成一排。", hl: "lined up" }] },
    { group: "A · 布置与整理", head: "separate off", def: "divide one part from a larger group and keep it apart", zh: "(单独)分隔出来", register: "中性",
      when: "<b>把一部分单独隔开</b>。separate sth off。", examples: [
      { en: "Why don't we separate off all the student work displays and put them in the other room?", zh: "我们干脆把所有学生作品展单独分隔出来,放到另一个房间吧?", hl: "separate off" },
      { en: "A curtain separates off the sleeping area from the rest of the studio.", zh: "一道帘子把睡眠区从开间的其余部分单独隔了出来。", hl: "separates off" },
      { en: "We separated off the damaged stock so it wouldn't be sold.", zh: "我们把受损的货品单独隔开,免得被卖出去。", hl: "separated off" }] },
    { group: "A · 布置与整理", head: "round up", def: "find and gather together a group of people or things", zh: "召集、凑齐", register: "中性",
      when: "<b>把人或物找来聚到一起</b>。round sb / sth up。", note: "本单元 round up = 召集;Unit 26 的 round up = 向上取整,两义不同。", examples: [
      { en: "I'll round up some more helpers; it's going to be quite a big job.", zh: "我去多召集几个帮手,这活儿不小。", hl: "round up" },
      { en: "The guide rounded up the tourists for the bus.", zh: "导游把游客们召集起来上车。", hl: "rounded up" },
      { en: "Can you round up some volunteers for Saturday?", zh: "你能为周六凑齐几个志愿者吗?", hl: "round up" }] },
    { group: "A · 布置与整理", head: "separate out", def: "divide a group of things into smaller groups", zh: "(分门别类)分开", register: "中性",
      when: "<b>把一堆东西按类分开</b>。separate sth out。", examples: [
      { en: "Then separate out the first-year students' work, the second-year students' work, and the rest.", zh: "然后把一年级、二年级以及其余学生的作品分门别类地分开。", hl: "separate out" },
      { en: "Separate out the whites before you do the washing.", zh: "洗衣服之前,先把白色衣物分拣出来。", hl: "Separate out" },
      { en: "The machine separates out coins of different sizes.", zh: "这台机器能把不同大小的硬币分拣开。", hl: "separates out" }] },
    { group: "A · 布置与整理", head: "pile up", def: "make a heap of things", zh: "堆起来、堆放", register: "中性",
      when: "<b>把东西堆成一堆</b>(常指杂乱地堆)。pile sth up。", examples: [
      { en: "If you could pile up all your rubbish in the corner, I'll get someone to take it away.", zh: "你们要是把垃圾都堆到角落,我会找人一次清走。", hl: "pile up" },
      { en: "He piled the firewood up by the back door.", zh: "他把柴火堆在后门边。", hl: "piled the firewood up" },
      { en: "Magazines were piled up on every chair.", zh: "每把椅子上都堆着杂志。", hl: "piled up" }] },
    { group: "A · 布置与整理", head: "sift through", def: "examine a large collection of things, especially papers, to find what is important", zh: "(逐一)筛查、翻找", register: "中性",
      when: "<b>从一大堆(尤指文件)里仔细翻找、筛选</b>。sift through sth。", examples: [
      { en: "I think we should sift through everything before we throw it away, in case we throw away things we should keep.", zh: "我觉得在扔之前应该把所有东西都翻一遍,免得把该留的也扔了。", hl: "sift through" },
      { en: "She sifted through hundreds of applications in a week.", zh: "她一周内筛看了几百份申请。", hl: "sifted through" },
      { en: "Investigators are still sifting through the wreckage for clues.", zh: "调查人员仍在残骸中仔细翻查线索。", hl: "sifting through" }] },

    // ── B · 组织安排的其它动词 ──────────────────────────────
    { group: "B · 组织安排的其它动词", head: "hoard away", def: "store a supply of something in a safe place to use in the future", zh: "(囤起来)储藏", register: "中性",
      when: "<b>把东西囤积、藏起来备用</b>。hoard sth away。", examples: [
      { en: "We hoarded away dozens of bottles of water as we knew there would be a shortage in the hot weather.", zh: "我们囤了几十瓶水,因为知道天热时会闹水荒。", hl: "hoarded away" },
      { en: "She had hoarded away tins of food in the cellar.", zh: "她在地窖里囤了不少罐头食品。", hl: "hoarded away" },
      { en: "He hoards away every birthday card he's ever received.", zh: "他把收到过的每一张生日贺卡都收藏起来。", hl: "hoards away" }] },
    { group: "B · 组织安排的其它动词", head: "fix up", def: "(informal) arrange something such as a meeting or event", zh: "(口语)安排、张罗", register: "口语",
      when: "<b>(口语)安排好一次会面或活动</b>。fix sth up。", examples: [
      { en: "I've been trying to fix up a meeting with our local MP so we can get to know her better.", zh: "我一直在张罗和本地议员见个面,好多了解她一些。", hl: "fix up" },
      { en: "I've fixed up an interview for Thursday afternoon.", zh: "我已经把面试安排在周四下午了。", hl: "fixed up" },
      { en: "Can you fix up a call with the supplier this week?", zh: "这周你能安排一次和供应商的通话吗?", hl: "fix up" }] },
    { group: "B · 组织安排的其它动词", head: "fold up", def: "bend something flexible so one part covers another, making it smaller", zh: "折叠、叠起", register: "中性",
      when: "<b>把(布、纸等)叠起来</b>。fold sth up。", examples: [
      { en: "He folded up the scarf and wrapped it in gold paper, ready to give to his grandfather.", zh: "他把围巾叠好,用金色包装纸包起来,准备送给祖父。", hl: "folded up" },
      { en: "Fold up the map carefully or it will tear.", zh: "把地图小心叠好,不然会撕坏。", hl: "Fold up" },
      { en: "He folded the deckchairs up and put them in the shed.", zh: "他把折叠躺椅收好,放进了棚屋。", hl: "folded the deckchairs up" }] },
    { group: "B · 组织安排的其它动词", head: "do up", def: "fasten or tie something", zh: "系好、扎紧", register: "中性",
      when: "<b>系紧、扎好</b>(扣子、蝴蝶结等)。do sth up。", note: "do up 另义:把(房屋等)翻修一新。", examples: [
      { en: "He wrapped it in gold paper and did it up with a red bow.", zh: "他用金色纸把它包好,系上一个红蝴蝶结。", hl: "did it up" },
      { en: "Do up your coat — it's freezing outside.", zh: "把外套扣好,外面冷极了。", hl: "Do up" },
      { en: "She did up the parcel with brown paper and tape.", zh: "她用牛皮纸和胶带把包裹扎好。", hl: "did up" }] },
    { group: "B · 组织安排的其它动词", head: "gear towards", def: "design or organize something so it suits a particular purpose or group (also: gear to)", zh: "(使)面向、针对", register: "中性",
      when: "<b>使某物适合特定对象或目的</b>。gear sth towards / to sb。", examples: [
      { en: "The headteacher geared his speech more towards the parents than the pupils.", zh: "校长把讲话更多地面向家长,而非学生。", hl: "geared his speech more towards" },
      { en: "The course is geared towards complete beginners.", zh: "这门课是面向零基础学员设计的。", hl: "geared towards" },
      { en: "Most of the resort's activities are geared towards young families.", zh: "度假村的大部分活动都是针对年轻家庭设计的。", hl: "geared towards" }] },
    { group: "B · 组织安排的其它动词", head: "rank among", def: "have a particular position in a list arranged in order of quality", zh: "跻身、位列(…之中)", register: "中性",
      when: "<b>在某排名中处于某位置</b>。rank among the best。", examples: [
      { en: "Norton College ranks among the best in the country.", zh: "诺顿学院跻身全国最优之列。", hl: "ranks among" },
      { en: "The hotel ranks among the finest in the city.", zh: "这家酒店位列全市最好的酒店之列。", hl: "ranks among" },
      { en: "Her early albums rank among the best ever recorded.", zh: "她早期的专辑跻身史上最佳录音之列。", hl: "rank among" }] }
  ]
};
