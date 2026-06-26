/* Vocabulary topic · Vegetables & herbs — GENERIC topic shape (nouns, not
   phrasal verbs). Authored content: common vegetable & herb nouns grouped by
   sub-topic. For nouns the `register` pill shows countability (可数 / 不可数);
   British/American variants and synonyms go in `syn`. `when` carries usage /
   collocation notes; examples[*].hl highlights the noun as it appears (incl.
   plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const vegetables: UnitSeed = {
  id: "vegetables",
  num: "43",
  tag: "蔬菜香草 · Vegetables & herbs",
  title: "Vegetables & herbs",
  titleZh: "蔬菜与香草",
  intro:
    "一组<b>常见的蔬菜与香草名词</b>:从甜椒、洋葱、西兰花到欧芹、香菜、罗勒。小标签标的是<b>可数 / 不可数</b>——叶菜和香草多为不可数。",
  story: {
    title: "故事 · Sunday stir-fry",
    text:
      "On Sunday I cooked a big vegetable feast. First I chopped a red [[pepper|pepper]], a [[cucumber|cucumber]] for the side salad, and a whole [[lettuce|lettuce]] to go with it. Then I peeled a [[carrot|carrot]], an [[onion|onion]] and a few cloves of [[garlic|garlic]], and trimmed a single [[leek|leek]].\n\n" +
      "Into the steamer went some [[broccoli|broccoli]] and half a [[cauliflower|cauliflower]]; into the frying pan, a handful of [[mushrooms|mushroom]], a scoop of [[peas|pea]] and a tin of [[beans|bean]].\n\n" +
      "Right at the end I reached for the herbs on the windowsill. I scattered chopped [[parsley|parsley]] over the potatoes, fresh [[coriander|coriander]] over the curry, torn [[basil|basil]] over the tomatoes, and dropped a sprig of [[mint|mint]] into the jug of iced water."
  },
  phrases: [
    // ── 蔬菜 Vegetables ──────────────────────────────
    {
      group: "蔬菜 · Vegetables",
      head: "pepper",
      def: "a hollow green, red or yellow vegetable, eaten raw or cooked",
      zh: "甜椒、灯笼椒",
      register: "可数",
      when: "<b>可数名词</b>(指蔬菜甜椒)。注意另一义 pepper = 胡椒(调味料,不可数)。",
      syn: "也叫 bell pepper(美式常用)/ sweet pepper",
      examples: [
        { en: "She stuffed the peppers with rice.", zh: "她在甜椒里塞了米饭。", hl: "peppers" },
        { en: "Add a chopped red pepper to the pan.", zh: "往锅里加一个切碎的红甜椒。", hl: "pepper" },
        { en: "Peppers add colour to a salad.", zh: "甜椒给沙拉添了色彩。", hl: "Peppers" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "cucumber",
      def: "a long, green vegetable with watery flesh, usually eaten raw",
      zh: "黄瓜",
      register: "可数",
      when: "<b>可数名词</b>,复数 cucumbers;切片作食材时也可不可数。",
      examples: [
        { en: "She sliced a cucumber for the salad.", zh: "她切了根黄瓜做沙拉。", hl: "cucumber" },
        { en: "Cucumber sandwiches are very English.", zh: "黄瓜三明治很有英式风味。", hl: "Cucumber" },
        { en: "We grow cucumbers in the greenhouse.", zh: "我们在温室里种黄瓜。", hl: "cucumbers" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "lettuce",
      def: "a vegetable with large green leaves, eaten raw in salads",
      zh: "生菜",
      register: "可数",
      when: "整棵时可数(a lettuce);作菜叶食材时不可数(some lettuce)。",
      examples: [
        { en: "I bought a lettuce for the salad.", zh: "我买了棵生菜做沙拉。", hl: "lettuce" },
        { en: "Wash the lettuce leaves thoroughly.", zh: "把生菜叶彻底洗干净。", hl: "lettuce" },
        { en: "There are two lettuces in the fridge.", zh: "冰箱里有两棵生菜。", hl: "lettuces" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "carrot",
      def: "a long, pointed orange root vegetable",
      zh: "胡萝卜",
      register: "可数",
      when: "<b>可数名词</b>,复数 carrots。",
      examples: [
        { en: "Grate a carrot into the salad.", zh: "往沙拉里擦一根胡萝卜丝。", hl: "carrot" },
        { en: "Rabbits love carrots.", zh: "兔子爱吃胡萝卜。", hl: "carrots" },
        { en: "She peeled three carrots for the soup.", zh: "她削了三根胡萝卜煮汤。", hl: "carrots" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "onion",
      def: "a round vegetable with a strong smell and taste, made of layers",
      zh: "洋葱",
      register: "可数",
      when: "<b>可数名词</b>,复数 onions。切洋葱常让人流泪。",
      examples: [
        { en: "Chopping onions makes me cry.", zh: "切洋葱总让我流眼泪。", hl: "onions" },
        { en: "Fry the onion until soft.", zh: "把洋葱煎到变软。", hl: "onion" },
        { en: "Add two sliced onions to the pan.", zh: "往锅里加两个切好的洋葱。", hl: "onions" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "garlic",
      def: "a vegetable like a small onion with a very strong taste, used in cooking",
      zh: "大蒜",
      register: "不可数",
      when: "<b>不可数名词</b>:a clove of garlic(一瓣蒜)、a bulb of garlic(一头蒜)。",
      examples: [
        { en: "Crush two cloves of garlic.", zh: "压碎两瓣大蒜。", hl: "garlic" },
        { en: "This sauce has too much garlic.", zh: "这酱里蒜放太多了。", hl: "garlic" },
        { en: "Garlic gives the dish a lovely flavour.", zh: "大蒜给这道菜增添了好味道。", hl: "Garlic" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "leek",
      def: "a long vegetable of the onion family, white at the bottom and green at the top",
      zh: "韭葱、大葱",
      register: "可数",
      when: "<b>可数名词</b>,复数 leeks。威尔士的象征;leek and potato soup 很常见。",
      examples: [
        { en: "Wash the leeks carefully to remove any grit.", zh: "把韭葱仔细洗净,去掉泥沙。", hl: "leeks" },
        { en: "Leek and potato soup is a winter favourite.", zh: "韭葱土豆汤是冬天的最爱。", hl: "Leek" },
        { en: "Slice one leek into thin rings.", zh: "把一根韭葱切成细圈。", hl: "leek" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "broccoli",
      def: "a green vegetable with a thick stem and a tree-like top",
      zh: "西兰花、西蓝花",
      register: "不可数",
      when: "<b>不可数名词</b>:some broccoli / a head of broccoli。",
      examples: [
        { en: "Steam the broccoli for a few minutes.", zh: "把西兰花蒸几分钟。", hl: "broccoli" },
        { en: "Broccoli is full of vitamins.", zh: "西兰花富含维生素。", hl: "Broccoli" },
        { en: "He pushed the broccoli to the side of his plate.", zh: "他把西兰花拨到了盘子边上。", hl: "broccoli" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "cauliflower",
      def: "a vegetable with a hard white head surrounded by green leaves",
      zh: "花椰菜、菜花",
      register: "可数",
      when: "整棵时可数(a cauliflower);作食材时不可数(some cauliflower)。",
      examples: [
        { en: "She roasted a whole cauliflower.", zh: "她烤了一整棵花椰菜。", hl: "cauliflower" },
        { en: "Cauliflower cheese is a classic side dish.", zh: "芝士焗花椰菜是经典配菜。", hl: "Cauliflower" },
        { en: "Break the cauliflower into florets.", zh: "把花椰菜掰成小朵。", hl: "cauliflower" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "mushroom",
      def: "a fungus with a stem and a round top, eaten as a vegetable",
      zh: "蘑菇",
      register: "可数",
      when: "<b>可数名词</b>,复数 mushrooms。",
      examples: [
        { en: "Fry the mushrooms in butter.", zh: "用黄油煎蘑菇。", hl: "mushrooms" },
        { en: "He doesn't like mushrooms on his pizza.", zh: "他不喜欢披萨上放蘑菇。", hl: "mushrooms" },
        { en: "She found a wild mushroom in the woods.", zh: "她在林子里发现了一朵野蘑菇。", hl: "mushroom" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "pea",
      def: "a small, round, green seed eaten as a vegetable, growing in a pod",
      zh: "豌豆",
      register: "可数",
      when: "<b>可数名词</b>,几乎总用复数 peas;长在 pod(豆荚)里。",
      examples: [
        { en: "The children left their peas on the plate.", zh: "孩子们把豌豆剩在了盘子里。", hl: "peas" },
        { en: "Add a handful of frozen peas.", zh: "加一把冷冻豌豆。", hl: "peas" },
        { en: "Not one pea was left.", zh: "一颗豌豆都没剩。", hl: "pea" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "bean",
      def: "a seed, or the long green case it grows in, eaten as a vegetable",
      zh: "豆子、豆荚",
      register: "可数",
      when: "<b>可数名词</b>,常用复数 beans。如 runner beans(红花菜豆)、baked beans(焗豆)。",
      examples: [
        { en: "We grow runner beans in the garden.", zh: "我们在园子里种红花菜豆。", hl: "beans" },
        { en: "She soaked the beans overnight.", zh: "她把豆子泡了一夜。", hl: "beans" },
        { en: "There's a single bean left in the tin.", zh: "罐头里只剩一颗豆子了。", hl: "bean" }
      ]
    },

    // ── 香草 Herbs ──────────────────────────────
    {
      group: "香草 · Herbs",
      head: "parsley",
      def: "a herb with curly or flat green leaves, used in cooking",
      zh: "欧芹、洋香菜",
      register: "不可数",
      when: "<b>不可数名词</b>:a sprig of parsley(一小枝欧芹)。常作装饰(garnish)。",
      examples: [
        { en: "Sprinkle chopped parsley over the potatoes.", zh: "在土豆上撒些切碎的欧芹。", hl: "parsley" },
        { en: "Parsley adds a fresh, green note.", zh: "欧芹带来一抹清新的草香。", hl: "Parsley" },
        { en: "Garnish the soup with a little parsley.", zh: "用少许欧芹给汤点缀。", hl: "parsley" }
      ]
    },
    {
      group: "香草 · Herbs",
      head: "coriander",
      def: "a herb whose fresh leaves and dried seeds are used in cooking",
      zh: "芫荽、香菜",
      register: "不可数",
      when: "<b>不可数名词</b>。叶子和籽(coriander seeds)都叫 coriander。",
      syn: "英式 coriander;美式 cilantro(指叶子)",
      examples: [
        { en: "Many curries are finished with fresh coriander.", zh: "许多咖喱最后会撒上新鲜香菜。", hl: "coriander" },
        { en: "She can't stand the taste of coriander.", zh: "她受不了香菜的味道。", hl: "coriander" },
        { en: "Toast the coriander seeds before grinding.", zh: "把芫荽籽炒香后再磨。", hl: "coriander" }
      ]
    },
    {
      group: "香草 · Herbs",
      head: "basil",
      def: "a herb with sweet-smelling leaves, used especially in Italian cooking",
      zh: "罗勒、九层塔",
      register: "不可数",
      when: "<b>不可数名词</b>:a few leaves of basil。与番茄绝配。",
      examples: [
        { en: "Tear some fresh basil over the pizza.", zh: "在披萨上撕些新鲜罗勒。", hl: "basil" },
        { en: "Tomato and basil is a perfect pairing.", zh: "番茄配罗勒是绝佳组合。", hl: "basil" },
        { en: "She grows basil on the windowsill.", zh: "她在窗台上种罗勒。", hl: "basil" }
      ]
    },
    {
      group: "香草 · Herbs",
      head: "mint",
      def: "a herb with a fresh, strong taste, used in cooking and drinks",
      zh: "薄荷",
      register: "不可数",
      when: "<b>作香草时不可数</b>:a sprig of mint。指「薄荷糖」时可数(a mint)。",
      examples: [
        { en: "Add a sprig of mint to the lemonade.", zh: "往柠檬水里加一小枝薄荷。", hl: "mint" },
        { en: "Lamb is often served with mint sauce.", zh: "羊肉常配薄荷酱一起吃。", hl: "mint" },
        { en: "Fresh mint smells wonderful.", zh: "新鲜薄荷闻起来很香。", hl: "mint" }
      ]
    }
  ]
};
