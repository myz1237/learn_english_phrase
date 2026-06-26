/* Vocabulary topic · Desserts & sweets — GENERIC topic shape (nouns, not
   phrasal verbs). Authored content: common dessert / sweet nouns grouped by
   sub-topic. For nouns the `register` pill shows countability (可数 / 不可数 /
   复数); British/American variants and synonyms go in `syn`. `when` carries
   usage / collocation notes; examples[*].hl highlights the noun as it appears.
   Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const desserts: UnitSeed = {
  id: "desserts",
  num: "47",
  tag: "甜点 · Desserts & sweets",
  title: "Desserts & sweets",
  titleZh: "甜点与糖果",
  intro:
    "一组<b>甜点与糖果零食</b>的常见名词:从蛋糕、派、慕斯到巧克力、软糖、薯片。小标签标的是<b>可数 / 不可数</b>,英美用词差异(如 sweets / candy、crisps / chips)写在批注里。",
  story: {
    title: "故事 · The birthday party",
    text:
      "My niece's birthday party was a sugar lover's dream. In the middle of the table sat an enormous chocolate [[cake|cake]], and around it the grown-ups had laid out a homemade apple [[pie|pie]], a row of little jam [[tarts|tart]], and a warm sticky toffee [[pudding|pudding]] with a jug of [[custard|custard]] beside it.\n\n" +
      "From the freezer came tubs of vanilla [[ice cream|ice cream]] and a sharp lemon [[sorbet|sorbet]], plus a tray of chocolate [[mousse|mousse]], a plate of fudgy [[brownies|brownie]], and a box of jam [[doughnuts|doughnut]].\n\n" +
      "For the party bags we filled little boxes with squares of [[chocolate|chocolate]], a few colourful [[sweets|sweet]], a chunk of vanilla [[fudge|fudge]], and a wobbly green [[jelly|jelly]] for each child. And of course, no party is complete without bowls of salty [[crisps|crisps]] and freshly made [[popcorn|popcorn]] for the film at the end."
  },
  phrases: [
    // ── 甜点 Desserts ──────────────────────────────
    {
      group: "甜点 · Desserts",
      head: "cake",
      def: "a sweet baked food made from flour, sugar, eggs and fat",
      zh: "蛋糕",
      register: "可数",
      when: "整个时可数(a cake);切块作食材时不可数(some cake)。",
      examples: [
        { en: "She baked a chocolate cake.", zh: "她烤了个巧克力蛋糕。", hl: "cake" },
        { en: "Would you like a slice of cake?", zh: "你要来块蛋糕吗?", hl: "cake" },
        { en: "There were cakes of every kind in the window.", zh: "橱窗里摆着各式各样的蛋糕。", hl: "cakes" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "pie",
      def: "a baked dish of fruit or meat covered with pastry",
      zh: "派、馅饼",
      register: "可数",
      when: "<b>可数名词</b>,复数 pies。甜咸皆可(apple pie / meat pie)。",
      examples: [
        { en: "We had apple pie for pudding.", zh: "我们甜点吃了苹果派。", hl: "pie" },
        { en: "She baked two pies for the fair.", zh: "她为集市烤了两个派。", hl: "pies" },
        { en: "There's a slice of pie left.", zh: "还剩一块派。", hl: "pie" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "tart",
      def: "an open pastry case filled with fruit, jam or custard",
      zh: "(无盖)果馅饼、塔",
      register: "可数",
      when: "<b>可数名词</b>,复数 tarts。与 pie 不同,tart 通常无上层酥皮。",
      examples: [
        { en: "He bought a jam tart from the bakery.", zh: "他从面包房买了个果酱塔。", hl: "tart" },
        { en: "These little tarts are filled with custard.", zh: "这些小塔里填的是蛋奶酱。", hl: "tarts" },
        { en: "She made a strawberry tart.", zh: "她做了个草莓塔。", hl: "tart" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "pudding",
      def: "(BrE) a sweet dish eaten at the end of a meal; also dessert in general",
      zh: "(英式)布丁;饭后甜点",
      register: "可数",
      when: "英式 pudding 既指具体「布丁」(可数),也泛指饭后<b>甜点</b>(What's for pudding?)。",
      syn: "英式口语里 pudding ≈ dessert(饭后甜点)",
      examples: [
        { en: "What's for pudding tonight?", zh: "今晚甜点吃什么?", hl: "pudding" },
        { en: "She made a sticky toffee pudding.", zh: "她做了个太妃糖布丁。", hl: "pudding" },
        { en: "Christmas puddings are full of dried fruit.", zh: "圣诞布丁里满是果干。", hl: "puddings" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "custard",
      def: "a sweet yellow sauce made from milk, eggs and sugar",
      zh: "蛋奶酱、卡仕达",
      register: "不可数",
      when: "<b>不可数名词</b>。英式常配甜点热食(pie and custard)。",
      examples: [
        { en: "Pour custard over the apple pie.", zh: "把蛋奶酱浇在苹果派上。", hl: "custard" },
        { en: "The custard was thick and creamy.", zh: "这蛋奶酱浓稠绵滑。", hl: "custard" },
        { en: "She likes hot custard with her pudding.", zh: "她喜欢布丁配热蛋奶酱。", hl: "custard" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "ice cream",
      def: "a sweet frozen food made from milk or cream",
      zh: "冰淇淋",
      register: "不可数",
      when: "通常<b>不可数</b>;指「一份/一个甜筒」时可数(two ice creams)。",
      examples: [
        { en: "The children wanted chocolate ice cream.", zh: "孩子们想吃巧克力冰淇淋。", hl: "ice cream" },
        { en: "We bought two ice creams at the beach.", zh: "我们在海滩买了两个冰淇淋。", hl: "ice creams" },
        { en: "There's some ice cream in the freezer.", zh: "冰柜里有些冰淇淋。", hl: "ice cream" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "sorbet",
      def: "a frozen dessert made from fruit juice and sugar, without milk",
      zh: "雪葩、果汁冰糕",
      register: "不可数",
      when: "通常<b>不可数</b>;不含奶,比冰淇淋清爽。",
      examples: [
        { en: "She ordered a lemon sorbet.", zh: "她点了份柠檬雪葩。", hl: "sorbet" },
        { en: "Sorbet is lighter than ice cream.", zh: "雪葩比冰淇淋清爽。", hl: "Sorbet" },
        { en: "They serve three fruit sorbets.", zh: "他们供应三种水果雪葩。", hl: "sorbets" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "mousse",
      def: "a soft, light food made from cream or eggs, often flavoured with chocolate or fruit",
      zh: "慕斯",
      register: "不可数",
      when: "通常<b>不可数</b>。口感轻盈绵软(chocolate mousse)。",
      examples: [
        { en: "He made a rich chocolate mousse.", zh: "他做了款浓郁的巧克力慕斯。", hl: "mousse" },
        { en: "The mousse melted on the tongue.", zh: "这慕斯入口即化。", hl: "mousse" },
        { en: "We had lemon and chocolate mousses.", zh: "我们吃了柠檬和巧克力两种慕斯。", hl: "mousses" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "brownie",
      def: "a small, flat, soft chocolate cake, often containing nuts",
      zh: "布朗尼",
      register: "可数",
      when: "<b>可数名词</b>,复数 brownies。",
      examples: [
        { en: "She baked a tray of brownies.", zh: "她烤了一盘布朗尼。", hl: "brownies" },
        { en: "Can I have another brownie?", zh: "我能再来一块布朗尼吗?", hl: "brownie" },
        { en: "These brownies are wonderfully gooey.", zh: "这些布朗尼软糯黏密,好吃极了。", hl: "brownies" }
      ]
    },
    {
      group: "甜点 · Desserts",
      head: "doughnut",
      def: "a small, round, sweet fried cake, sometimes with a hole or a filling",
      zh: "甜甜圈",
      register: "可数",
      when: "<b>可数名词</b>,复数 doughnuts。",
      syn: "美式也拼作 donut",
      examples: [
        { en: "He ate a jam doughnut.", zh: "他吃了个果酱甜甜圈。", hl: "doughnut" },
        { en: "A box of doughnuts arrived at the office.", zh: "办公室收到一盒甜甜圈。", hl: "doughnuts" },
        { en: "She licked the sugar off her doughnut.", zh: "她把甜甜圈上的糖舔掉了。", hl: "doughnut" }
      ]
    },

    // ── 糖果零食 Sweets & snacks ──────────────────────────────
    {
      group: "糖果零食 · Sweets & snacks",
      head: "chocolate",
      def: "a sweet brown food made from cocoa, eaten as a sweet or used in cooking",
      zh: "巧克力",
      register: "不可数",
      when: "作材料/整块时<b>不可数</b>(some chocolate);指「一颗夹心巧克力」时可数(chocolates)。",
      examples: [
        { en: "She gave me a bar of chocolate.", zh: "她给了我一块巧克力。", hl: "chocolate" },
        { en: "He ate a whole box of chocolates.", zh: "他吃了一整盒夹心巧克力。", hl: "chocolates" },
        { en: "This cake is covered in chocolate.", zh: "这蛋糕裹满了巧克力。", hl: "chocolate" }
      ]
    },
    {
      group: "糖果零食 · Sweets & snacks",
      head: "sweet",
      def: "(BrE) a small piece of sweet food made of sugar",
      zh: "(英式)糖果",
      register: "可数",
      when: "<b>可数名词</b>,复数 sweets。",
      syn: "英式 sweets;美式 candy(不可数)",
      examples: [
        { en: "The children were given a bag of sweets.", zh: "孩子们得到了一袋糖果。", hl: "sweets" },
        { en: "He offered me a sweet.", zh: "他给了我一颗糖。", hl: "sweet" },
        { en: "Too many sweets are bad for your teeth.", zh: "糖吃太多对牙齿不好。", hl: "sweets" }
      ]
    },
    {
      group: "糖果零食 · Sweets & snacks",
      head: "fudge",
      def: "a soft sweet made from sugar, butter and milk",
      zh: "乳脂软糖",
      register: "不可数",
      when: "<b>不可数名词</b>:a piece of fudge。",
      examples: [
        { en: "We bought some vanilla fudge at the seaside.", zh: "我们在海边买了些香草软糖。", hl: "fudge" },
        { en: "This fudge is rich and crumbly.", zh: "这软糖香浓酥松。", hl: "fudge" },
        { en: "She makes fudge every Christmas.", zh: "她每年圣诞都做软糖。", hl: "fudge" }
      ]
    },
    {
      group: "糖果零食 · Sweets & snacks",
      head: "jelly",
      def: "(BrE) a soft, wobbly sweet food made with fruit juice and gelatine",
      zh: "(英式)果冻",
      register: "不可数",
      when: "<b>不可数名词</b>。",
      syn: "英式 jelly(果冻)= 美式 Jell-O / gelatin;美式 jelly 反指果酱",
      examples: [
        { en: "The children had jelly and ice cream.", zh: "孩子们吃了果冻配冰淇淋。", hl: "jelly" },
        { en: "She made a green jelly in a mould.", zh: "她用模具做了个绿色果冻。", hl: "jelly" },
        { en: "The jelly wobbled on the plate.", zh: "果冻在盘子上颤巍巍的。", hl: "jelly" }
      ]
    },
    {
      group: "糖果零食 · Sweets & snacks",
      head: "crisps",
      def: "(BrE) thin, crisp, fried slices of potato, sold in packets",
      zh: "(英式)薯片",
      register: "复数",
      when: "英式常用<b>复数</b> crisps。",
      syn: "英式 crisps = 美式 (potato) chips;英式 chips 反指薯条",
      examples: [
        { en: "He opened a packet of crisps.", zh: "他打开一包薯片。", hl: "crisps" },
        { en: "We ran out of crisps at the party.", zh: "派对上薯片吃光了。", hl: "crisps" },
        { en: "Salt and vinegar crisps are my favourite.", zh: "盐醋味薯片是我的最爱。", hl: "crisps" }
      ]
    },
    {
      group: "糖果零食 · Sweets & snacks",
      head: "popcorn",
      def: "corn that is heated until it bursts open, eaten as a snack",
      zh: "爆米花",
      register: "不可数",
      when: "<b>不可数名词</b>:a tub of popcorn。甜的 sweet,咸的 salted。",
      examples: [
        { en: "We shared a big tub of popcorn at the cinema.", zh: "我们在电影院分吃了一大桶爆米花。", hl: "popcorn" },
        { en: "Sweet or salted popcorn?", zh: "要甜的还是咸的爆米花?", hl: "popcorn" },
        { en: "The smell of popcorn filled the room.", zh: "爆米花的香味弥漫了整个房间。", hl: "popcorn" }
      ]
    }
  ]
};
