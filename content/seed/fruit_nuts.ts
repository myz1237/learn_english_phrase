/* Vocabulary topic · Fruit & nuts — GENERIC topic shape (nouns, not phrasal
   verbs). Authored content: common fruit & nut nouns grouped by sub-topic.
   For nouns the `register` pill shows countability (可数 / 不可数);
   British/American variants and synonyms go in `syn`. `when` carries usage /
   collocation notes; examples[*].hl highlights the noun as it appears (incl.
   plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const fruitNuts: UnitSeed = {
  id: "fruit-nuts",
  num: "42",
  tag: "水果坚果 · Fruit & nuts",
  title: "Fruit & nuts",
  titleZh: "水果与坚果",
  intro:
    "一组<b>常见的水果与坚果名词</b>:从梨、樱桃、芒果到杏仁、核桃、栗子。小标签标的是<b>可数 / 不可数</b>,大多数水果坚果都可数。",
  story: {
    title: "故事 · Late-summer market",
    text:
      "In late summer the fruit stall is the best in the market. I filled my bag with a ripe [[pear|pear]], a few dark [[plums|plum]], a punnet of [[cherries|cherry]], and two punnets of soft berries — [[raspberries|raspberry]] and [[blueberries|blueberry]]. For something tropical I added a spiky [[pineapple|pineapple]] and a sweet-smelling [[mango|mango]].\n\n" +
      "To make a fruit salad at home I cut up a whole [[melon|melon]] and squeezed over the juice of one [[lemon|lemon]] and one [[lime|lime]] to keep everything fresh.\n\n" +
      "While the salad chilled, I put out a bowl of nuts for our guests: [[almonds|almond]], [[walnuts|walnut]], a scoop of salted [[peanuts|peanut]], some buttery [[cashews|cashew]], a few roasted [[chestnuts|chestnut]] left over from winter, and a handful of [[hazelnuts|hazelnut]] for the chocolate cake."
  },
  phrases: [
    // ── 水果 Fruit ──────────────────────────────
    {
      group: "水果 · Fruit",
      head: "pear",
      def: "a sweet, juicy fruit that is narrow at the top and wide at the bottom",
      zh: "梨",
      register: "可数",
      when: "<b>可数名词</b>,复数 pears。",
      examples: [
        { en: "I ate a ripe pear after lunch.", zh: "午饭后我吃了个熟梨。", hl: "pear" },
        { en: "The pears aren't quite ripe yet.", zh: "这些梨还没完全熟。", hl: "pears" },
        { en: "She poached some pears in red wine.", zh: "她用红酒煮了些梨。", hl: "pears" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "plum",
      def: "a small, round fruit with smooth red or purple skin and a stone",
      zh: "李子、梅子",
      register: "可数",
      when: "<b>可数名词</b>,复数 plums。中间有 stone(果核)。",
      examples: [
        { en: "These plums are sweet and juicy.", zh: "这些李子又甜又多汁。", hl: "plums" },
        { en: "He picked a plum from the tree.", zh: "他从树上摘了个李子。", hl: "plum" },
        { en: "She made jam from the plums.", zh: "她用这些李子做了果酱。", hl: "plums" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "cherry",
      def: "a small, round, red or dark fruit with a stone in the middle",
      zh: "樱桃",
      register: "可数",
      when: "<b>可数名词</b>,复数 cherries。",
      examples: [
        { en: "The cherries were a deep, glossy red.", zh: "这些樱桃是深沉发亮的红色。", hl: "cherries" },
        { en: "There's a cherry on top of the cake.", zh: "蛋糕顶上有一颗樱桃。", hl: "cherry" },
        { en: "We picked a bowl of cherries.", zh: "我们摘了一碗樱桃。", hl: "cherries" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "raspberry",
      def: "a soft red fruit made up of many tiny round parts",
      zh: "树莓、覆盆子",
      register: "可数",
      when: "<b>可数名词</b>,复数 raspberries。",
      examples: [
        { en: "She scattered raspberries over the dessert.", zh: "她在甜点上撒了些树莓。", hl: "raspberries" },
        { en: "Each raspberry was perfectly ripe.", zh: "每颗树莓都熟得恰到好处。", hl: "raspberry" },
        { en: "We grow raspberries along the fence.", zh: "我们沿着篱笆种树莓。", hl: "raspberries" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "blueberry",
      def: "a small, dark blue fruit that grows on a bush",
      zh: "蓝莓",
      register: "可数",
      when: "<b>可数名词</b>,复数 blueberries。",
      examples: [
        { en: "I added blueberries to my porridge.", zh: "我往麦片粥里加了些蓝莓。", hl: "blueberries" },
        { en: "A handful of blueberries makes a healthy snack.", zh: "一把蓝莓是健康的零食。", hl: "blueberries" },
        { en: "Each blueberry burst with juice.", zh: "每颗蓝莓都汁水四溢。", hl: "blueberry" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "pineapple",
      def: "a large tropical fruit with thick brown skin and sweet yellow flesh",
      zh: "菠萝、凤梨",
      register: "可数",
      when: "<b>可数名词</b>,复数 pineapples;指果肉这种食材时也可不可数。",
      examples: [
        { en: "We cut up a whole pineapple.", zh: "我们切了一整个菠萝。", hl: "pineapple" },
        { en: "Fresh pineapple is wonderfully sweet.", zh: "新鲜菠萝甜极了。", hl: "pineapple" },
        { en: "Pineapples grow in warm climates.", zh: "菠萝生长在温暖的气候里。", hl: "Pineapples" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "mango",
      def: "a tropical fruit with sweet orange flesh and a large flat stone",
      zh: "芒果",
      register: "可数",
      when: "<b>可数名词</b>,复数 mangoes(也作 mangos)。",
      examples: [
        { en: "She sliced a ripe mango for dessert.", zh: "她切了个熟芒果做甜点。", hl: "mango" },
        { en: "Mangoes are best when they're soft.", zh: "芒果软的时候最好吃。", hl: "Mangoes" },
        { en: "This mango is perfectly ripe.", zh: "这个芒果熟得正好。", hl: "mango" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "melon",
      def: "a large, round fruit with sweet flesh and many seeds inside",
      zh: "瓜、甜瓜",
      register: "可数",
      when: "<b>可数名词</b>,复数 melons;切块作食材时也可不可数。常见 watermelon(西瓜)。",
      examples: [
        { en: "We shared a slice of melon.", zh: "我们分吃了一块甜瓜。", hl: "melon" },
        { en: "The melon was cool and refreshing.", zh: "这甜瓜清凉爽口。", hl: "melon" },
        { en: "She scooped out the melon seeds.", zh: "她把甜瓜的籽挖了出来。", hl: "melon" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "lemon",
      def: "a yellow citrus fruit with sour juice",
      zh: "柠檬",
      register: "可数",
      when: "<b>可数名词</b>,复数 lemons。a slice/wedge of lemon(一片柠檬)。",
      examples: [
        { en: "Add a squeeze of lemon to the fish.", zh: "在鱼上挤点柠檬汁。", hl: "lemon" },
        { en: "She cut the lemon into wedges.", zh: "她把柠檬切成角。", hl: "lemon" },
        { en: "The lemons were bright and fragrant.", zh: "这些柠檬鲜亮又芳香。", hl: "lemons" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "lime",
      def: "a small green citrus fruit with sour juice",
      zh: "青柠、酸橙",
      register: "可数",
      when: "<b>可数名词</b>,复数 limes。比 lemon 更小、更绿、更酸。",
      examples: [
        { en: "Squeeze some lime over the tacos.", zh: "在玉米卷上挤些青柠汁。", hl: "lime" },
        { en: "The cocktail needs a slice of lime.", zh: "这杯鸡尾酒得加一片青柠。", hl: "lime" },
        { en: "Limes are smaller and greener than lemons.", zh: "青柠比柠檬更小更绿。", hl: "Limes" }
      ]
    },

    // ── 坚果 Nuts ──────────────────────────────
    {
      group: "坚果 · Nuts",
      head: "almond",
      def: "a flat, oval nut with a mild, slightly sweet flavour",
      zh: "杏仁",
      register: "可数",
      when: "<b>可数名词</b>,复数 almonds;磨成粉叫 ground almonds。",
      examples: [
        { en: "She sprinkled flaked almonds on the cake.", zh: "她在蛋糕上撒了些杏仁片。", hl: "almonds" },
        { en: "I keep a bag of almonds for snacking.", zh: "我备了一袋杏仁当零食。", hl: "almonds" },
        { en: "Crush one almond and add it to the paste.", zh: "把一颗杏仁压碎,加进酱里。", hl: "almond" }
      ]
    },
    {
      group: "坚果 · Nuts",
      head: "walnut",
      def: "a nut with a wrinkled surface and a hard, round shell",
      zh: "核桃",
      register: "可数",
      when: "<b>可数名词</b>,复数 walnuts。用 nutcracker(核桃夹)敲开。",
      examples: [
        { en: "He cracked a walnut with the nutcracker.", zh: "他用核桃夹敲开了一个核桃。", hl: "walnut" },
        { en: "Add chopped walnuts to the salad.", zh: "往沙拉里加些切碎的核桃。", hl: "walnuts" },
        { en: "Walnuts are said to be good for the brain.", zh: "据说核桃对大脑有益。", hl: "Walnuts" }
      ]
    },
    {
      group: "坚果 · Nuts",
      head: "peanut",
      def: "a small nut that grows underground, often roasted and salted",
      zh: "花生",
      register: "可数",
      when: "<b>可数名词</b>,复数 peanuts。植物学上属豆类,常作坚果食用;过敏原 peanut allergy。",
      examples: [
        { en: "He opened a packet of salted peanuts.", zh: "他打开一包咸花生。", hl: "peanuts" },
        { en: "She's allergic to peanuts.", zh: "她对花生过敏。", hl: "peanuts" },
        { en: "Not a single peanut was left in the bowl.", zh: "碗里一颗花生也没剩。", hl: "peanut" }
      ]
    },
    {
      group: "坚果 · Nuts",
      head: "cashew",
      def: "a curved, kidney-shaped nut with a soft, buttery taste",
      zh: "腰果",
      register: "可数",
      when: "<b>可数名词</b>,复数 cashews;也说 cashew nuts。",
      examples: [
        { en: "I stir-fried the chicken with cashews.", zh: "我用腰果炒了鸡肉。", hl: "cashews" },
        { en: "A handful of cashews makes a good snack.", zh: "一把腰果是不错的零食。", hl: "cashews" },
        { en: "She picked out every cashew from the mix.", zh: "她把混合坚果里的腰果都挑了出来。", hl: "cashew" }
      ]
    },
    {
      group: "坚果 · Nuts",
      head: "chestnut",
      def: "a smooth, reddish-brown nut that is often roasted before eating",
      zh: "栗子",
      register: "可数",
      when: "<b>可数名词</b>,复数 chestnuts。常烤着吃:roasted chestnuts。",
      examples: [
        { en: "We roasted chestnuts over the fire.", zh: "我们在火上烤栗子。", hl: "chestnuts" },
        { en: "The smell of roasting chestnuts filled the street.", zh: "烤栗子的香味弥漫了整条街。", hl: "chestnuts" },
        { en: "He peeled a hot chestnut carefully.", zh: "他小心地剥开一颗热栗子。", hl: "chestnut" }
      ]
    },
    {
      group: "坚果 · Nuts",
      head: "hazelnut",
      def: "a small, round nut with a smooth brown shell",
      zh: "榛子",
      register: "可数",
      when: "<b>可数名词</b>,复数 hazelnuts。常与巧克力搭配。",
      examples: [
        { en: "Chocolate and hazelnut is a classic pairing.", zh: "巧克力配榛子是经典组合。", hl: "hazelnut" },
        { en: "She toasted some hazelnuts for the cake.", zh: "她烤了些榛子做蛋糕。", hl: "hazelnuts" },
        { en: "Each hazelnut was perfectly round.", zh: "每颗榛子都圆圆的。", hl: "hazelnut" }
      ]
    }
  ]
};
