/* Vocabulary topic · Food — GENERIC topic shape (nouns, not phrasal verbs).
   Authored content (not from the phrasal-verbs book): common food nouns
   grouped by sub-topic. For nouns the `register` pill is repurposed to show
   countability (可数 / 不可数) — the single most useful quick fact for a
   Chinese learner; British/American variants are noted in `note`.
   `when` carries usage / collocation notes; examples[*].hl highlights the
   noun as it appears (incl. plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const food: UnitSeed = {
  id: "food",
  num: "41",
  tag: "饮食 · Food",
  title: "Food",
  titleZh: "常见食物名词",
  intro:
    "一组<b>日常食物名词</b>:水果、蔬菜、肉类海鲜与主食。小标签标的是<b>可数 / 不可数</b>(英文名词最容易出错的地方),英美用词差异写在批注里。",
  // A connected scene weaving in all 16 nouns of the unit (authored).
  story: {
    title: "故事 · Saturday at the market",
    text:
      "Every Saturday I walk to the market with an empty basket. The first stall is piled high with fruit: I always pick up a punnet of [[strawberries|strawberry]], a bunch of [[grapes|grape]], and a few ripe [[peaches|peach]] for breakfast.\n\n" +
      "Next come the vegetables. This week I needed an [[aubergine|aubergine]] and a [[courgette|courgette]] for a curry, half a [[cabbage|cabbage]] for a salad, and a big bag of [[spinach|spinach]] to cook with garlic.\n\n" +
      "At the fishmonger I bought some fresh [[prawns|prawn]] and a fillet of [[salmon|salmon]]; at the butcher, a little [[mince|mince]] for the sauce and some sliced [[ham|ham]] for the children's sandwiches.\n\n" +
      "On the way home I stopped at the baker for a warm [[loaf|loaf]]. Back in the kitchen I still had [[flour|flour]] for a cake, [[cereal|cereal]] for tomorrow's breakfast, a bowl of [[dough|dough]] rising on the counter, and enough [[dairy|dairy]] — milk, butter and cheese — to last the week."
  },
  phrases: [
    // ── 水果 Fruit ──────────────────────────────
    {
      group: "水果 · Fruit",
      head: "strawberry",
      def: "a small, soft red fruit with tiny seeds on its surface",
      zh: "草莓",
      register: "可数",
      when: "<b>可数名词</b>,复数 strawberries。常搭配 a punnet of strawberries(一盒草莓)。",
      examples: [
        { en: "We picked a basket of strawberries at the farm.", zh: "我们在农场摘了一篮草莓。", hl: "strawberries" },
        { en: "She topped the cake with fresh strawberries and cream.", zh: "她在蛋糕上铺了新鲜草莓和奶油。", hl: "strawberries" },
        { en: "Would you like a strawberry?", zh: "你要来颗草莓吗?", hl: "strawberry" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "grape",
      def: "a small, round green or purple fruit that grows in bunches",
      zh: "葡萄",
      register: "可数",
      when: "<b>可数名词</b>,常以 a bunch of grapes(一串葡萄)出现;酿酒用葡萄也是 grapes。",
      examples: [
        { en: "A bunch of grapes sat in the bowl.", zh: "碗里放着一串葡萄。", hl: "grapes" },
        { en: "These grapes are wonderfully sweet.", zh: "这些葡萄甜极了。", hl: "grapes" },
        { en: "He popped a grape into his mouth.", zh: "他把一颗葡萄丢进嘴里。", hl: "grape" }
      ]
    },
    {
      group: "水果 · Fruit",
      head: "peach",
      def: "a round fruit with soft yellow-orange skin and a large stone in the middle",
      zh: "桃子",
      register: "可数",
      when: "<b>可数名词</b>,复数 peaches。中间的核叫 stone(英)/ pit(美)。",
      examples: [
        { en: "The peaches were ripe and juicy.", zh: "这些桃子熟透了,多汁。", hl: "peaches" },
        { en: "I had a peach for breakfast.", zh: "我早餐吃了个桃子。", hl: "peach" },
        { en: "She bought a kilo of peaches at the market.", zh: "她在市场买了一公斤桃子。", hl: "peaches" }
      ]
    },

    // ── 蔬菜 Vegetables ──────────────────────────────
    {
      group: "蔬菜 · Vegetables",
      head: "aubergine",
      def: "a large purple vegetable that is white inside, eaten cooked",
      zh: "茄子",
      register: "可数",
      when: "<b>可数名词</b>。指食材整体时也可作不可数。",
      syn: "英式 aubergine;美式 eggplant",
      examples: [
        { en: "She sliced two aubergines for the curry.", zh: "她切了两个茄子做咖喱。", hl: "aubergines" },
        { en: "Aubergine is delicious when roasted.", zh: "茄子烤着吃很美味。", hl: "Aubergine" },
        { en: "In the US, an aubergine is called an eggplant.", zh: "在美国,aubergine 叫作 eggplant。", hl: "aubergine" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "courgette",
      def: "a long green vegetable similar to a small marrow",
      zh: "西葫芦",
      register: "可数",
      when: "<b>可数名词</b>。常切片煎、炒或烤。",
      syn: "英式 courgette;美式 zucchini",
      examples: [
        { en: "I fried some courgettes in olive oil.", zh: "我用橄榄油煎了些西葫芦。", hl: "courgettes" },
        { en: "Add a sliced courgette to the soup.", zh: "往汤里加一根切好的西葫芦。", hl: "courgette" },
        { en: "Courgettes grow quickly in summer.", zh: "西葫芦在夏天长得很快。", hl: "Courgettes" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "cabbage",
      def: "a large round vegetable with thick green or white leaves",
      zh: "卷心菜、洋白菜",
      register: "可数",
      when: "<b>可数 / 不可数皆可</b>:整颗时可数(a cabbage),作食材时常不可数(some cabbage)。",
      examples: [
        { en: "She shredded half a cabbage for the salad.", zh: "她切碎了半棵卷心菜做沙拉。", hl: "cabbage" },
        { en: "We grow cabbages in the garden.", zh: "我们在园子里种卷心菜。", hl: "cabbages" },
        { en: "There's some boiled cabbage left.", zh: "还剩了点煮卷心菜。", hl: "cabbage" }
      ]
    },
    {
      group: "蔬菜 · Vegetables",
      head: "spinach",
      def: "a vegetable with dark green leaves, eaten cooked or raw",
      zh: "菠菜",
      register: "不可数",
      when: "<b>不可数名词</b>:a handful of spinach(一把菠菜),不说 a spinach。",
      examples: [
        { en: "Spinach is rich in iron.", zh: "菠菜富含铁。", hl: "Spinach" },
        { en: "He added a handful of spinach to the smoothie.", zh: "他往果昔里加了一把菠菜。", hl: "spinach" },
        { en: "I sautéed some spinach with garlic.", zh: "我用蒜炒了点菠菜。", hl: "spinach" }
      ]
    },

    // ── 肉类与海鲜 Meat & seafood ──────────────────────────────
    {
      group: "肉类与海鲜 · Meat & seafood",
      head: "prawn",
      def: "a small sea creature with a shell that turns pink when cooked",
      zh: "对虾、明虾",
      register: "可数",
      when: "<b>可数名词</b>,复数 prawns。",
      syn: "英式 prawn;美式多用 shrimp 统称各种虾",
      examples: [
        { en: "We had a plate of grilled prawns.", zh: "我们吃了一盘烤虾。", hl: "prawns" },
        { en: "Add the prawns and cook for two minutes.", zh: "下虾,煮两分钟。", hl: "prawns" },
        { en: "There was one last prawn on the plate.", zh: "盘子里还剩最后一只虾。", hl: "prawn" }
      ]
    },
    {
      group: "肉类与海鲜 · Meat & seafood",
      head: "salmon",
      def: "a large fish with pink flesh, eaten fresh or smoked",
      zh: "三文鱼、鲑鱼",
      register: "可数",
      when: "<b>单复数同形</b>(one salmon / two salmon);指鱼肉时作不可数。",
      examples: [
        { en: "We had smoked salmon for brunch.", zh: "我们早午餐吃了烟熏三文鱼。", hl: "salmon" },
        { en: "She baked a fillet of salmon.", zh: "她烤了一块三文鱼柳。", hl: "salmon" },
        { en: "Salmon swim upstream to lay their eggs.", zh: "三文鱼逆流而上去产卵。", hl: "Salmon" }
      ]
    },
    {
      group: "肉类与海鲜 · Meat & seafood",
      head: "mince",
      def: "meat, usually beef, cut into very small pieces by a machine",
      zh: "肉末、绞肉",
      register: "不可数",
      when: "<b>不可数名词</b>:some mince / beef mince。",
      syn: "英式 mince;美式 ground meat / ground beef",
      examples: [
        { en: "Brown the mince in a hot pan.", zh: "把肉末在热锅里煸至变色。", hl: "mince" },
        { en: "She made the sauce with beef mince.", zh: "她用牛肉末做了酱汁。", hl: "mince" },
        { en: "Add the mince and stir until cooked.", zh: "下肉末,翻炒至熟。", hl: "mince" }
      ]
    },
    {
      group: "肉类与海鲜 · Meat & seafood",
      head: "ham",
      def: "meat from a pig's leg, often eaten cold in slices",
      zh: "火腿",
      register: "不可数",
      when: "<b>通常不可数</b>(some ham / a slice of ham);指「一整只火腿」时可数(a ham)。",
      examples: [
        { en: "I made a ham sandwich.", zh: "我做了个火腿三明治。", hl: "ham" },
        { en: "There's some sliced ham in the fridge.", zh: "冰箱里有些火腿片。", hl: "ham" },
        { en: "We bought a whole ham for Christmas.", zh: "圣诞节我们买了一整只火腿。", hl: "ham" }
      ]
    },

    // ── 主食与其它 Staples & others ──────────────────────────────
    {
      group: "主食与其它 · Staples",
      head: "loaf",
      def: "bread that has been shaped and baked in one piece",
      zh: "(一条 / 一个)面包",
      register: "可数",
      when: "<b>可数名词</b>,复数 loaves。a loaf of bread = 一条面包。",
      examples: [
        { en: "I bought a loaf of bread on the way home.", zh: "我回家路上买了一条面包。", hl: "loaf" },
        { en: "Two loaves were left on the shelf.", zh: "架子上还剩两条面包。", hl: "loaves" },
        { en: "She baked a fresh loaf this morning.", zh: "她今早烤了一条新鲜面包。", hl: "loaf" }
      ]
    },
    {
      group: "主食与其它 · Staples",
      head: "flour",
      def: "a fine powder made from grain, used to make bread, cakes, etc.",
      zh: "面粉",
      register: "不可数",
      when: "<b>不可数名词</b>。注意与 flower(花)同音异义。",
      examples: [
        { en: "Sift the flour into a bowl.", zh: "把面粉过筛到碗里。", hl: "flour" },
        { en: "We've run out of flour.", zh: "我们的面粉用完了。", hl: "flour" },
        { en: "Dust the surface with a little flour.", zh: "在台面上撒一点面粉。", hl: "flour" }
      ]
    },
    {
      group: "主食与其它 · Staples",
      head: "cereal",
      def: "a breakfast food made from grain, eaten with milk; also a grain crop",
      zh: "麦片;谷物",
      register: "不可数",
      when: "<b>作早餐麦片时不可数</b>;指「谷类作物 / 麦片种类」时可数(cereals)。",
      examples: [
        { en: "He has a bowl of cereal every morning.", zh: "他每天早上吃一碗麦片。", hl: "cereal" },
        { en: "The supermarket sells dozens of breakfast cereals.", zh: "超市卖几十种早餐麦片。", hl: "cereals" },
        { en: "Wheat and maize are important cereals.", zh: "小麦和玉米是重要的谷类作物。", hl: "cereals" }
      ]
    },
    {
      group: "主食与其它 · Staples",
      head: "dough",
      def: "a thick mixture of flour and water used to make bread or pastry",
      zh: "生面团",
      register: "不可数",
      when: "<b>不可数名词</b>:knead the dough(揉面团)、let the dough rise(让面团发起来)。",
      examples: [
        { en: "Knead the dough for ten minutes.", zh: "把面团揉十分钟。", hl: "dough" },
        { en: "Leave the dough to rise in a warm place.", zh: "把面团放在温暖处发起来。", hl: "dough" },
        { en: "Her hands were covered in sticky dough.", zh: "她满手都是黏糊糊的面团。", hl: "dough" }
      ]
    },
    {
      group: "主食与其它 · Staples",
      head: "dairy",
      def: "milk and food made from milk, such as cheese, butter and yoghurt",
      zh: "乳制品",
      register: "不可数",
      when: "<b>不可数名词</b>,也常作形容词:dairy products(乳制品)、dairy farm(奶牛场)。",
      examples: [
        { en: "She avoids dairy because she's lactose intolerant.", zh: "她乳糖不耐受,所以不吃乳制品。", hl: "dairy" },
        { en: "Cheese, butter and yoghurt are all dairy.", zh: "奶酪、黄油和酸奶都属于乳制品。", hl: "dairy" },
        { en: "The shop has a good selection of dairy products.", zh: "这家店的乳制品种类很齐全。", hl: "dairy" }
      ]
    }
  ]
};
