/* Vocabulary topic · More vegetables — GENERIC topic shape (nouns). Extends the
   "vegetables" unit with root vegetables and other common vegetables not
   covered there. `register` pill shows countability; `when` carries usage notes;
   British/American variants go in `syn`. examples[*].hl highlights the noun as
   it appears (incl. plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const moreVegetables: UnitSeed = {
  id: "more-vegetables",
  num: "55",
  tag: "蔬菜 2 · More vegetables",
  title: "More vegetables",
  titleZh: "更多蔬菜",
  intro:
    "第二组<b>常见蔬菜名词</b>:根茎类与其它蔬菜。小标签标的是<b>可数 / 不可数</b>(叶菜、芦笋等多为不可数),英美用词差异写在批注里。",
  story: {
    title: "故事 · Autumn harvest",
    text:
      "Autumn is harvest time in our vegetable garden. I dug up a basket of muddy [[potatoes|potato]], a few orange [[sweet potatoes|sweet potato]], some dark red [[beetroot|beetroot]], a bunch of peppery [[radishes|radish]], a knobbly [[turnip|turnip]] and one long [[parsnip|parsnip]].\n\n" +
      "From the raised beds I picked the last of the summer crops: ripe [[tomatoes|tomato]], a cob of [[sweetcorn|sweetcorn]], crisp stalks of [[celery|celery]] and thin green [[asparagus|asparagus]]. In the corner a huge [[pumpkin|pumpkin]] and a pale [[butternut squash|butternut squash]] had swelled all season.\n\n" +
      "For dinner I chopped a [[spring onion|spring onion]] into the salad, steamed a handful of [[kale|kale]], roasted a dozen [[Brussels sprouts|Brussels sprout]], and fried some [[okra|okra]] with spices."
  },
  phrases: [
    // ── 根茎类 Root vegetables ──────────────────────────────
    {
      group: "根茎类 · Root vegetables",
      head: "potato",
      def: "a round vegetable with brown or red skin that grows underground",
      zh: "土豆、马铃薯",
      register: "可数",
      when: "<b>可数名词</b>,复数 potatoes(注意 -es);作食材泥状时也可不可数(mashed potato)。",
      examples: [
        { en: "She peeled the potatoes for dinner.", zh: "她削了土豆准备做晚饭。", hl: "potatoes" },
        { en: "Bake the potato for an hour.", zh: "把土豆烤一个小时。", hl: "potato" },
        { en: "We grow our own potatoes.", zh: "我们自己种土豆。", hl: "potatoes" }
      ]
    },
    {
      group: "根茎类 · Root vegetables",
      head: "sweet potato",
      def: "a root vegetable with orange flesh and a sweet taste",
      zh: "红薯、番薯",
      register: "可数",
      when: "<b>可数名词</b>,复数 sweet potatoes。与普通土豆不同科,味甜。",
      examples: [
        { en: "Roasted sweet potatoes are delicious.", zh: "烤红薯很好吃。", hl: "sweet potatoes" },
        { en: "She made a sweet potato mash.", zh: "她做了红薯泥。", hl: "sweet potato" },
        { en: "Sweet potatoes are rich in fibre.", zh: "红薯富含纤维。", hl: "Sweet potatoes" }
      ]
    },
    {
      group: "根茎类 · Root vegetables",
      head: "beetroot",
      def: "a round, dark red root vegetable, eaten cooked or pickled",
      zh: "甜菜根、红菜头",
      register: "可数",
      when: "整个时可数(a beetroot);作食材时常不可数(some beetroot)。",
      syn: "英式 beetroot;美式 beet",
      examples: [
        { en: "She grated beetroot into the salad.", zh: "她把甜菜根擦丝加进沙拉。", hl: "beetroot" },
        { en: "Beetroot stains everything red.", zh: "甜菜根会把一切都染红。", hl: "Beetroot" },
        { en: "We pickled some beetroot from the garden.", zh: "我们把园子里的甜菜根腌了一些。", hl: "beetroot" }
      ]
    },
    {
      group: "根茎类 · Root vegetables",
      head: "radish",
      def: "a small, round or long root vegetable with a hot taste, eaten raw",
      zh: "小萝卜、樱桃萝卜",
      register: "可数",
      when: "<b>可数名词</b>,复数 radishes。口感辛辣,常生吃。",
      examples: [
        { en: "Add sliced radishes to the salad.", zh: "往沙拉里加些萝卜片。", hl: "radishes" },
        { en: "A radish has a peppery bite.", zh: "小萝卜有股辛辣味。", hl: "radish" },
        { en: "The radishes grew quickly.", zh: "这些小萝卜长得很快。", hl: "radishes" }
      ]
    },
    {
      group: "根茎类 · Root vegetables",
      head: "turnip",
      def: "a round, white and purple root vegetable, eaten cooked",
      zh: "芜菁、白萝卜(圆)",
      register: "可数",
      when: "<b>可数名词</b>,复数 turnips。",
      examples: [
        { en: "She added a turnip to the stew.", zh: "她往炖菜里加了个芜菁。", hl: "turnip" },
        { en: "Turnips are a hardy winter vegetable.", zh: "芜菁是耐寒的冬季蔬菜。", hl: "Turnips" },
        { en: "Mash the turnip with a little butter.", zh: "把芜菁加点黄油捣成泥。", hl: "turnip" }
      ]
    },
    {
      group: "根茎类 · Root vegetables",
      head: "parsnip",
      def: "a long, pale cream-coloured root vegetable with a sweet taste",
      zh: "欧防风、防风草根",
      register: "可数",
      when: "<b>可数名词</b>,复数 parsnips。样子像白胡萝卜,烤后回甜。",
      examples: [
        { en: "Roast parsnips are a Sunday favourite.", zh: "烤欧防风是周日大餐的最爱。", hl: "parsnips" },
        { en: "She peeled a parsnip for the soup.", zh: "她削了根欧防风煮汤。", hl: "parsnip" },
        { en: "Parsnips taste sweeter after a frost.", zh: "欧防风经霜后更甜。", hl: "Parsnips" }
      ]
    },

    // ── 其它蔬菜 Other vegetables ──────────────────────────────
    {
      group: "其它蔬菜 · Other vegetables",
      head: "tomato",
      def: "a soft, round, red fruit eaten as a vegetable, raw or cooked",
      zh: "番茄、西红柿",
      register: "可数",
      when: "<b>可数名词</b>,复数 tomatoes(注意 -es);做酱时可不可数。植物学是水果,烹饪当蔬菜。",
      examples: [
        { en: "Slice the tomatoes for the salad.", zh: "把番茄切片做沙拉。", hl: "tomatoes" },
        { en: "This sauce is made from fresh tomatoes.", zh: "这酱是用新鲜番茄做的。", hl: "tomatoes" },
        { en: "He grows tomatoes in the greenhouse.", zh: "他在温室里种番茄。", hl: "tomatoes" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "sweetcorn",
      def: "(BrE) the sweet yellow seeds of the maize plant, eaten as a vegetable",
      zh: "(英式)甜玉米",
      register: "不可数",
      when: "<b>不可数名词</b>。整根带芯的叫 corn on the cob。",
      syn: "英式 sweetcorn;美式 corn",
      examples: [
        { en: "Add a tin of sweetcorn to the salad.", zh: "往沙拉里加一罐甜玉米。", hl: "sweetcorn" },
        { en: "The children love sweetcorn.", zh: "孩子们爱吃甜玉米。", hl: "sweetcorn" },
        { en: "She boiled some sweetcorn for dinner.", zh: "她煮了些甜玉米做晚饭。", hl: "sweetcorn" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "celery",
      def: "a vegetable with long, pale green crunchy stalks, eaten raw or cooked",
      zh: "芹菜、西芹",
      register: "不可数",
      when: "<b>不可数名词</b>:a stick/stalk of celery(一根芹菜)。",
      examples: [
        { en: "She dipped celery into the hummus.", zh: "她用芹菜蘸鹰嘴豆泥吃。", hl: "celery" },
        { en: "Chop some celery for the soup.", zh: "切点芹菜煮汤。", hl: "celery" },
        { en: "Celery is very low in calories.", zh: "芹菜热量很低。", hl: "Celery" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "asparagus",
      def: "a vegetable with long, thin green stems, eaten cooked",
      zh: "芦笋",
      register: "不可数",
      when: "<b>不可数名词</b>:a spear of asparagus(一根芦笋)。",
      examples: [
        { en: "We had grilled asparagus with butter.", zh: "我们吃了配黄油的烤芦笋。", hl: "asparagus" },
        { en: "Asparagus is best in spring.", zh: "芦笋春天最好吃。", hl: "Asparagus" },
        { en: "Steam the asparagus for a few minutes.", zh: "把芦笋蒸几分钟。", hl: "asparagus" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "pumpkin",
      def: "a very large, round, orange vegetable with a thick skin",
      zh: "南瓜",
      register: "可数",
      when: "整个时可数(a pumpkin);作果肉食材时不可数。万圣节雕成 jack-o'-lantern。",
      examples: [
        { en: "They carved a pumpkin for Halloween.", zh: "他们为万圣节雕了个南瓜。", hl: "pumpkin" },
        { en: "She made pumpkin soup.", zh: "她做了南瓜汤。", hl: "pumpkin" },
        { en: "The pumpkins grew enormous this year.", zh: "今年南瓜长得特别大。", hl: "pumpkins" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "butternut squash",
      def: "a large, pale orange vegetable shaped like a bell, with sweet flesh",
      zh: "奶油南瓜、胡桃南瓜",
      register: "可数",
      when: "整个时可数;作果肉食材时不可数。squash 泛指各种南瓜类。",
      examples: [
        { en: "Roast the butternut squash with herbs.", zh: "把奶油南瓜配香草烤一烤。", hl: "butternut squash" },
        { en: "She blended a butternut squash into soup.", zh: "她把一个奶油南瓜打成了汤。", hl: "butternut squash" },
        { en: "Butternut squash has a sweet, nutty flavour.", zh: "奶油南瓜有股香甜的坚果味。", hl: "Butternut squash" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "spring onion",
      def: "(BrE) a small, thin onion with a long green stem, eaten raw or cooked",
      zh: "(英式)葱、小葱",
      register: "可数",
      when: "<b>可数名词</b>,复数 spring onions。",
      syn: "英式 spring onion;美式 scallion / green onion",
      examples: [
        { en: "Sprinkle chopped spring onions over the noodles.", zh: "在面条上撒些葱花。", hl: "spring onions" },
        { en: "Add a spring onion to the stir-fry.", zh: "往炒菜里加一根小葱。", hl: "spring onion" },
        { en: "Spring onions have a mild, fresh taste.", zh: "小葱味道清淡爽口。", hl: "Spring onions" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "kale",
      def: "a green vegetable with dark, curly leaves that do not form a head",
      zh: "羽衣甘蓝",
      register: "不可数",
      when: "<b>不可数名词</b>:a handful of kale。被视为「超级食物」。",
      examples: [
        { en: "She added kale to the smoothie.", zh: "她往果昔里加了羽衣甘蓝。", hl: "kale" },
        { en: "Kale is packed with nutrients.", zh: "羽衣甘蓝营养丰富。", hl: "Kale" },
        { en: "Fry the kale with a little garlic.", zh: "用点蒜炒羽衣甘蓝。", hl: "kale" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "Brussels sprout",
      def: "a small, round, green vegetable that looks like a tiny cabbage",
      zh: "抱子甘蓝、球芽甘蓝",
      register: "可数",
      when: "<b>可数名词</b>,几乎总用复数 Brussels sprouts。英国圣诞大餐常见。",
      examples: [
        { en: "Nobody wanted the Brussels sprouts.", zh: "没人想吃抱子甘蓝。", hl: "Brussels sprouts" },
        { en: "Roast the Brussels sprouts with bacon.", zh: "把抱子甘蓝配培根烤一烤。", hl: "Brussels sprouts" },
        { en: "She ate one Brussels sprout to be polite.", zh: "她出于礼貌吃了一颗抱子甘蓝。", hl: "Brussels sprout" }
      ]
    },
    {
      group: "其它蔬菜 · Other vegetables",
      head: "okra",
      def: "a green seed pod eaten as a vegetable, used especially in Indian and African cooking",
      zh: "秋葵",
      register: "不可数",
      when: "<b>不可数名词</b>。加热后会产生黏液,常用于炖菜。",
      syn: "在部分地区也叫 lady's fingers",
      examples: [
        { en: "She fried the okra with spices.", zh: "她把秋葵加香料炒了。", hl: "okra" },
        { en: "Okra thickens the stew.", zh: "秋葵能使炖菜变稠。", hl: "Okra" },
        { en: "Add some okra to the curry.", zh: "往咖喱里加些秋葵。", hl: "okra" }
      ]
    }
  ]
};
