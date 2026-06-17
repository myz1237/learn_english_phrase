/* Unit 19 · Making progress — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 19.
   Section A is a table; Section B is a set of short speech bubbles
   answering "How's progress with your business?" — shown generically.
   English `def` and examples[0] are from the book; `zh` / `when` and the
   extra examples are authored. Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const makingProgress: UnitSeed = {
  id: "making-progress",
  num: "19",
  tag: "进展 · Making progress",
  title: "Making progress",
  titleZh: "谈进展",
  intro:
    "一组用来谈<b>事情如何开始、结束,以及如何推动或阻碍进展</b>的短语动词:冒出、兴起、收尾,以及助力、卡壳、坚持与消减。按「开始与结束 / 推动与阻碍」两组来记。",
  // A connected story weaving in all 16 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · The studio above the bakery",
    text:
      "When the new tech park [[opened up|open up]] on the edge of town, dozens of small companies [[sprang up|spring up]] almost overnight, and cafés [[sprouted up|sprout up]] to feed the workers. Our little design studio was one of them.\n\n" +
      "The first year was hard. Orders [[dried up|dry up]] over the winter, our savings had nearly [[run out|run out]], and for a while the whole business seemed to be [[falling apart|fall apart]]. Worse, a bigger rival kept [[whittling away at|whittle away at]] our client list, and the early excitement among the team had [[petered out|peter out]]. But we [[pressed on|press on]].\n\n" +
      "Slowly things turned. Sales [[bottomed out|bottom out]] in February and then began to climb. We [[got up to|get up to]] a comfortable level of work, hired a brilliant office manager who seemed to [[magic away|magic away]] every scheduling problem, and we were determined to [[hang on to|hang on to]] her. By summer we had [[finished with|finish with]] the cheap rented equipment and bought our own.\n\n" +
      "At the party that marked our first profitable year, I had to [[break up|break up]] the celebrations early to give a short speech, and I [[wound up|wind up]] by thanking everyone who had stayed through the lean months."
  },
  phrases: [
    // ── A · 开始与结束 ──────────────────────────────
    {
      group: "A · 开始与结束",
      head: "spring up",
      def: "suddenly appear or begin to exist",
      zh: "(突然)涌现、冒出来",
      register: "中性",
      when: "<b>(新事物)突然出现、纷纷冒出</b>。spring - sprang - sprung。",
      syn: "比 sprout up 更常用(手写批注)",
      examples: [
        { en: "At the turn of the century, new left-wing political movements sprang up.", zh: "世纪之交,新的左翼政治运动纷纷涌现。", hl: "sprang up" },
        { en: "Food stalls have sprung up all along the river.", zh: "沿河一带冒出了许多小吃摊。", hl: "sprung up" },
        { en: "New tech companies spring up in this area every year.", zh: "这一带每年都有新的科技公司冒出来。", hl: "spring up" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "sprout up",
      def: "suddenly appear or begin to exist",
      zh: "(突然)冒出、纷纷出现",
      register: "中性",
      when: "<b>(新事物)迅速冒出、纷纷出现</b>,意象来自植物发芽。",
      examples: [
        { en: "Pavement cafés have suddenly sprouted up all over the town.", zh: "露天咖啡馆一下子在全城各处冒了出来。", hl: "sprouted up" },
        { en: "New housing estates are sprouting up on the edge of the city.", zh: "城郊正不断冒出新的住宅区。", hl: "sprouting up" },
        { en: "Pop-up shops sprout up here every holiday season.", zh: "每到假期,这里就会冒出一批快闪店。", hl: "sprout up" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "open up",
      def: "make something possible, or become possible",
      zh: "(使)开启、带来(机会、可能)",
      register: "中性",
      when: "<b>开启新的机会或可能性</b>。open up opportunities / possibilities。",
      syn: "Open up and tell me what happened(敞开心扉,手写批注)",
      examples: [
        { en: "The new shopping centre will open up all sorts of job opportunities.", zh: "新的购物中心将带来各种各样的就业机会。", hl: "open up" },
        { en: "Learning English opened up a whole new world for her.", zh: "学英语为她打开了一个全新的世界。", hl: "opened up" },
        { en: "The merger opens up new markets in Asia.", zh: "这次合并开启了亚洲的新市场。", hl: "opens up" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "break up",
      def: "(of a meeting or party) end, with people starting to leave",
      zh: "(会议、聚会)散场、结束",
      register: "中性",
      when: "<b>会议或聚会结束、众人开始散去</b>。",
      note: "手写批注:interrupt;另 signal is breaking up(信号断断续续)。",
      examples: [
        { en: "I'm sorry to break up the party, but it's getting very late.", zh: "抱歉打断大家的兴致,可时间真的很晚了。", hl: "break up" },
        { en: "The meeting broke up just after noon.", zh: "会议在正午刚过时散了。", hl: "broke up" },
        { en: "The crowd began to break up once the music stopped.", zh: "音乐一停,人群就开始散去。", hl: "break up" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "finish with",
      def: "no longer need something",
      zh: "(用完后)不再需要",
      register: "中性",
      when: "<b>某物用完、不再需要了</b>。finish with sth。",
      examples: [
        { en: "Can you let me have the magazine when you've finished with it?", zh: "你看完那本杂志后能给我吗?", hl: "finished with" },
        { en: "Have you finished with the scissors?", zh: "剪刀你用完了吗?", hl: "finished with" },
        { en: "Put the salt back when you've finished with it.", zh: "盐用完了请放回去。", hl: "finished with" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "bottom out",
      def: "reach a low level and stay there before improving",
      zh: "(行情)触底、跌到谷底",
      register: "中性",
      when: "<b>(趋势、价格)降到最低后稳住</b>。常指随后回升。",
      examples: [
        { en: "The share price fell steadily last year but has now bottomed out.", zh: "去年股价一路下跌,如今已经触底。", hl: "bottomed out" },
        { en: "Economists think the recession has finally bottomed out.", zh: "经济学家认为衰退终于触底了。", hl: "bottomed out" },
        { en: "House prices seem to be bottoming out at last.", zh: "房价似乎终于要见底了。", hl: "bottoming out" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "peter out",
      def: "gradually become less strong and then stop completely",
      zh: "(渐渐)减弱、平息、消失",
      register: "中性",
      when: "<b>逐渐变弱,最后完全停止</b>。",
      note: "to peter 不能单独作动词使用(书页脚注)。手写批注:weaken。",
      examples: [
        { en: "The crowd started shouting and protesting, but the protests soon petered out when they saw the armed police.", zh: "人群开始呼喊抗议,但一看到武警,抗议很快就平息了。", hl: "petered out" },
        { en: "The conversation petered out into an awkward silence.", zh: "谈话渐渐淡了下来,陷入尴尬的沉默。", hl: "petered out" },
        { en: "Their enthusiasm petered out after a few weeks.", zh: "几周过后,他们的热情就消退了。", hl: "petered out" }
      ]
    },
    {
      group: "A · 开始与结束",
      head: "wind up",
      def: "bring something such as a business, interview or meeting to an end",
      zh: "结束、收尾(生意、会面等)",
      register: "中性",
      when: "<b>把生意、面谈或会议收尾、结束</b>。wind sth up。",
      note: "wind up 另义(口语):故意逗弄、惹恼某人,与此处不同。",
      examples: [
        { en: "Jack intends to wind up his business soon.", zh: "杰克打算很快把生意结束掉。", hl: "wind up" },
        { en: "Let's wind up the meeting — we've covered everything.", zh: "咱们把会开到这儿吧,该说的都说了。", hl: "wind up" },
        { en: "She wound up her speech with a word of thanks.", zh: "她用一句感谢结束了发言。", hl: "wound up" }
      ]
    },

    // ── B · 推动与阻碍进展 ──────────────────────────────
    {
      group: "B · 推动与阻碍进展",
      head: "dry up",
      def: "come to an end; stop being available",
      zh: "(来源)枯竭、断绝",
      register: "中性",
      when: "<b>(供应、资金、话题等)逐渐枯竭、断绝</b>。",
      syn: "conversation dries up(没共同话题、聊不下去,手写批注)",
      examples: [
        { en: "We couldn't continue when our cheap supply of materials dried up.", zh: "廉价原料一断,我们就没法继续了。", hl: "dried up" },
        { en: "Funding for the project gradually dried up.", zh: "这个项目的资金渐渐枯竭了。", hl: "dried up" },
        { en: "Orders dried up after the bad reviews.", zh: "差评出来后,订单就断了。", hl: "dried up" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "magic away",
      def: "make something disappear, as if by magic",
      zh: "(像变魔术般)使…消失、化解掉",
      register: "中性",
      when: "<b>轻松利落地把麻烦变没、化解掉</b>,像变魔术一样。magic sth away。",
      examples: [
        { en: "We had some staffing problems but the new HR person has magicked them away.", zh: "我们本来有些人手问题,新来的人事却轻轻松松就把它们化解了。", hl: "magicked them away" },
        { en: "A good editor can magic away all your clumsy sentences.", zh: "好的编辑能把你那些笨拙的句子变魔术般地抹平。", hl: "magic away" },
        { en: "She magicked away the stain in seconds.", zh: "她几秒钟就把污渍弄得无影无踪。", hl: "magicked away" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "fall apart",
      def: "stop working well; break down",
      zh: "(逐渐)垮掉、瓦解、运转不灵",
      register: "中性",
      when: "<b>(计划、组织、关系)开始崩坏、运转不下去</b>。",
      examples: [
        { en: "Things've been falling apart since the new manager arrived.", zh: "自从新经理来了之后,一切就开始乱套。", hl: "falling apart" },
        { en: "The deal fell apart at the last minute.", zh: "这笔交易在最后关头告吹了。", hl: "fell apart" },
        { en: "Without funding, the whole plan fell apart.", zh: "没了资金,整个计划就垮了。", hl: "fell apart" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "get up to",
      def: "reach a particular point or stage",
      zh: "(进展、到达)某个阶段 / 程度",
      register: "中性",
      when: "<b>进行到、到达某个阶段或程度</b>。get up to + 阶段 / 页码等。",
      syn: "reach and …(手写批注)",
      note: "get up to 另义(口语):干(坏事、调皮事),与此处不同。",
      examples: [
        { en: "We got up to the third stage of our plan but haven't made much progress since.", zh: "我们的计划推进到了第三阶段,但之后就没什么进展了。", hl: "got up to" },
        { en: "What page have you got up to?", zh: "你读到第几页了?", hl: "got up to" },
        { en: "By lunchtime we'd got up to question ten.", zh: "到午饭时我们已经做到第十题了。", hl: "got up to" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "run out",
      def: "be completely used up; come to an end",
      zh: "(被)用光、耗尽",
      register: "中性",
      when: "<b>(钱、时间、补给等)用完、耗尽</b>。run out (of sth)。",
      examples: [
        { en: "We can't do anything at the moment because the money's run out.", zh: "我们眼下什么也做不了,因为钱用完了。", hl: "run out" },
        { en: "We've run out of milk again.", zh: "牛奶又喝光了。", hl: "run out" },
        { en: "Time is running out — we need to decide now.", zh: "时间快不够了,我们得马上决定。", hl: "running out" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "hang on to",
      def: "keep something or someone; not lose or give it up",
      zh: "保住、留住、不放手",
      register: "中性",
      when: "<b>把某物或某人留住、不放手</b>。hang on to sth / sb。",
      examples: [
        { en: "My PA has really improved things recently, so I hope we can hang on to her.", zh: "我的助理最近把事情打理得很好,真希望能把她留住。", hl: "hang on to" },
        { en: "Hang on to that ticket — you'll need it later.", zh: "票留好,等会儿还要用。", hl: "Hang on to" },
        { en: "They managed to hang on to their lead until the final whistle.", zh: "他们一直把领先优势保持到了终场哨响。", hl: "hang on to" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "press on",
      def: "continue doing something in a determined way",
      zh: "坚持推进、继续干下去",
      register: "中性",
      when: "<b>下定决心继续做下去</b>,常指克服困难。press on (with sth)。",
      syn: "keep pressing on(手写批注)",
      examples: [
        { en: "We're pressing on though we've had lots of problems.", zh: "尽管遇到不少问题,我们仍在坚持推进。", hl: "pressing on" },
        { en: "Despite the rain, the team pressed on to the summit.", zh: "尽管下着雨,队伍仍坚持登顶。", hl: "pressed on" },
        { en: "Let's press on with the agenda.", zh: "我们接着把议程往下推吧。", hl: "press on" }
      ]
    },
    {
      group: "B · 推动与阻碍进展",
      head: "whittle away at",
      def: "gradually reduce something, especially over time",
      zh: "(一点点)削减、蚕食",
      register: "中性",
      when: "<b>逐渐削减、一点点蚕食</b>某物。whittle away at sth。",
      syn: "意象来自 wood whittling(削木头,手写批注)",
      examples: [
        { en: "The CEO is whittling away at the authority of middle managers.", zh: "首席执行官在一点点削弱中层管理者的权力。", hl: "whittling away at" },
        { en: "Inflation has been whittling away at their savings.", zh: "通胀一直在蚕食他们的积蓄。", hl: "whittling away at" },
        { en: "Late fees slowly whittled away at his wages.", zh: "滞纳金一点点啃掉了他的工资。", hl: "whittled away at" }
      ]
    }
  ]
};
