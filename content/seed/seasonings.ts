/* Vocabulary topic · Spices & condiments — GENERIC topic shape (nouns, not
   phrasal verbs). Authored content: common spice / condiment nouns grouped by
   sub-topic. (Fresh herbs like parsley / coriander / basil / mint live in the
   "vegetables" unit.) For nouns the `register` pill shows countability
   (可数 / 不可数); British/American variants and synonyms go in `syn`. `when`
   carries usage / collocation notes; examples[*].hl highlights the noun as it
   appears. Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const seasonings: UnitSeed = {
  id: "seasonings",
  num: "48",
  tag: "调味 · Spices & condiments",
  title: "Spices & condiments",
  titleZh: "香料与调味品",
  intro:
    "一组<b>香料与调味品</b>的常见名词:从黑胡椒、肉桂、孜然到盐、醋、酱油与高汤。大多是<b>不可数名词</b>,小标签标的就是可数性。",
  story: {
    title: "故事 · The spice rack",
    text:
      "My kitchen would be useless without its little jars and bottles. When I cook a curry I reach first for the spices: a twist of [[black pepper|black pepper]], a pinch of [[cinnamon|cinnamon]], some grated [[ginger|ginger]], a little [[nutmeg|nutmeg]], a spoon of ground [[cumin|cumin]], a fiery red [[chilli|chilli]], and a dusting of smoky [[paprika|paprika]].\n\n" +
      "To balance the flavours I keep the basics close: a pot of [[salt|salt]], a bottle of [[vinegar|vinegar]], a jar of English [[mustard|mustard]], creamy [[mayonnaise|mayonnaise]], a squeeze of [[ketchup|ketchup]] for the children, and a splash of dark [[soy sauce|soy sauce]].\n\n" +
      "When everything is ready I heat a little [[oil|oil]] in the pan, make a rich [[gravy|gravy]] for the roast, and stir in a ladle of homemade [[stock|stock]] to deepen the sauce."
  },
  phrases: [
    // ── 香料 Spices ──────────────────────────────
    {
      group: "香料 · Spices",
      head: "black pepper",
      def: "a hot-tasting spice made from dried berries, used to season food",
      zh: "黑胡椒",
      register: "不可数",
      when: "<b>不可数名词</b>。注意 pepper 另指蔬菜甜椒(可数)。",
      examples: [
        { en: "Season the steak with salt and black pepper.", zh: "用盐和黑胡椒给牛排调味。", hl: "black pepper" },
        { en: "She added a twist of black pepper.", zh: "她现磨撒了点黑胡椒。", hl: "black pepper" },
        { en: "There's freshly ground black pepper on the table.", zh: "桌上有现磨的黑胡椒。", hl: "black pepper" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "cinnamon",
      def: "a sweet brown spice made from tree bark, used in cooking",
      zh: "肉桂",
      register: "不可数",
      when: "<b>不可数名词</b>。条状的叫 a cinnamon stick(肉桂棒)。",
      examples: [
        { en: "Sprinkle cinnamon over the porridge.", zh: "在燕麦粥上撒点肉桂。", hl: "cinnamon" },
        { en: "This cake is flavoured with cinnamon.", zh: "这蛋糕带有肉桂香。", hl: "cinnamon" },
        { en: "She loves cinnamon in her coffee.", zh: "她喜欢在咖啡里加肉桂。", hl: "cinnamon" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "ginger",
      def: "a pale brown root with a hot, fresh taste, used in cooking",
      zh: "姜",
      register: "不可数",
      when: "<b>不可数名词</b>:a piece of ginger、ground ginger(姜粉)。",
      examples: [
        { en: "Grate some fresh ginger into the stir-fry.", zh: "往炒菜里擦点新鲜姜末。", hl: "ginger" },
        { en: "Ginger gives the dish a warm kick.", zh: "姜给这道菜添了股温热的辛香。", hl: "Ginger" },
        { en: "She made a tea with lemon and ginger.", zh: "她泡了杯柠檬姜茶。", hl: "ginger" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "nutmeg",
      def: "a hard seed that is grated to make a warm, sweet spice",
      zh: "肉豆蔻",
      register: "不可数",
      when: "<b>作香料时不可数</b>;整颗时可数(a whole nutmeg)。",
      examples: [
        { en: "Grate a little nutmeg over the sauce.", zh: "在酱汁上擦一点肉豆蔻。", hl: "nutmeg" },
        { en: "Nutmeg is lovely in rice pudding.", zh: "米布丁里加肉豆蔻很香。", hl: "Nutmeg" },
        { en: "Just a pinch of nutmeg is enough.", zh: "一小撮肉豆蔻就够了。", hl: "nutmeg" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "cumin",
      def: "a spice with a strong, warm flavour, used especially in curries",
      zh: "孜然",
      register: "不可数",
      when: "<b>不可数名词</b>。籽叫 cumin seeds,粉叫 ground cumin。",
      examples: [
        { en: "Toast the cumin seeds before grinding.", zh: "把孜然籽炒香后再磨。", hl: "cumin" },
        { en: "Cumin gives chilli its earthy flavour.", zh: "孜然给辣味菜带来质朴的香气。", hl: "Cumin" },
        { en: "Add a teaspoon of ground cumin.", zh: "加一茶匙孜然粉。", hl: "cumin" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "chilli",
      def: "a small, thin red or green vegetable with a very hot taste; also the spice from it",
      zh: "辣椒",
      register: "可数",
      when: "指整颗辣椒时可数(复数 chillies);作辣椒粉等调料时不可数(chilli powder)。",
      syn: "英式 chilli;美式 chili / chile",
      examples: [
        { en: "She chopped a red chilli into the sauce.", zh: "她把一个红辣椒切进酱里。", hl: "chilli" },
        { en: "These chillies are extremely hot.", zh: "这些辣椒辣得要命。", hl: "chillies" },
        { en: "Add a pinch of chilli powder.", zh: "加一小撮辣椒粉。", hl: "chilli" }
      ]
    },
    {
      group: "香料 · Spices",
      head: "paprika",
      def: "a red spice made from dried sweet peppers",
      zh: "红椒粉、匈牙利红椒粉",
      register: "不可数",
      when: "<b>不可数名词</b>。烟熏味的叫 smoked paprika。",
      examples: [
        { en: "Dust the chicken with paprika.", zh: "在鸡肉上撒点红椒粉。", hl: "paprika" },
        { en: "Paprika adds colour and a mild warmth.", zh: "红椒粉能添色,并带来温和的辛香。", hl: "Paprika" },
        { en: "Smoked paprika is wonderful in stews.", zh: "烟熏红椒粉用在炖菜里特别香。", hl: "paprika" }
      ]
    },

    // ── 调味品 Condiments ──────────────────────────────
    {
      group: "调味品 · Condiments",
      head: "salt",
      def: "a white substance used to flavour and preserve food",
      zh: "盐",
      register: "不可数",
      when: "<b>不可数名词</b>:a pinch of salt(一撮盐)。",
      examples: [
        { en: "Add a pinch of salt to the water.", zh: "往水里加一撮盐。", hl: "salt" },
        { en: "This soup needs more salt.", zh: "这汤还得再加点盐。", hl: "salt" },
        { en: "She sprinkled salt on the chips.", zh: "她在薯条上撒了盐。", hl: "salt" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "vinegar",
      def: "a sour liquid used to flavour or preserve food",
      zh: "醋",
      register: "不可数",
      when: "<b>不可数名词</b>。常见 balsamic vinegar(意大利香醋)。",
      examples: [
        { en: "Add a splash of vinegar to the dressing.", zh: "往沙拉酱里加一点醋。", hl: "vinegar" },
        { en: "He likes salt and vinegar on his chips.", zh: "他喜欢薯条上加盐和醋。", hl: "vinegar" },
        { en: "Balsamic vinegar is dark and sweet.", zh: "意大利香醋色深味甜。", hl: "vinegar" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "mustard",
      def: "a thick, yellow or brown sauce with a hot taste, eaten with meat",
      zh: "芥末酱",
      register: "不可数",
      when: "<b>不可数名词</b>。English mustard 很冲,Dijon mustard 较柔和。",
      examples: [
        { en: "He spread mustard on his sandwich.", zh: "他在三明治上抹了芥末酱。", hl: "mustard" },
        { en: "English mustard is very strong.", zh: "英式芥末酱非常冲。", hl: "mustard" },
        { en: "Would you like mustard with your sausage?", zh: "你的香肠要配芥末酱吗?", hl: "mustard" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "mayonnaise",
      def: "a thick, cold, pale sauce made from eggs and oil",
      zh: "蛋黄酱、美乃滋",
      register: "不可数",
      when: "<b>不可数名词</b>。口语常缩写为 mayo。",
      syn: "口语缩写 mayo",
      examples: [
        { en: "She added mayonnaise to the salad.", zh: "她往沙拉里加了蛋黄酱。", hl: "mayonnaise" },
        { en: "I'd like some mayonnaise on my sandwich.", zh: "我的三明治想加点蛋黄酱。", hl: "mayonnaise" },
        { en: "Homemade mayonnaise tastes much better.", zh: "自制蛋黄酱味道好得多。", hl: "mayonnaise" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "ketchup",
      def: "a thick, cold red sauce made from tomatoes",
      zh: "番茄酱",
      register: "不可数",
      when: "<b>不可数名词</b>。全称 tomato ketchup;美式也写 catsup。",
      examples: [
        { en: "The children put ketchup on everything.", zh: "孩子们什么都要蘸番茄酱。", hl: "ketchup" },
        { en: "Pass me the ketchup, please.", zh: "请把番茄酱递给我。", hl: "ketchup" },
        { en: "He squeezed ketchup onto his chips.", zh: "他往薯条上挤了番茄酱。", hl: "ketchup" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "soy sauce",
      def: "a thin, dark, salty sauce made from soya beans, used in Asian cooking",
      zh: "酱油",
      register: "不可数",
      when: "<b>不可数名词</b>。英式也拼作 soya sauce。",
      examples: [
        { en: "Add a splash of soy sauce to the noodles.", zh: "往面条里加点酱油。", hl: "soy sauce" },
        { en: "This soy sauce is quite salty.", zh: "这酱油挺咸的。", hl: "soy sauce" },
        { en: "Dip the dumplings in soy sauce.", zh: "饺子蘸酱油吃。", hl: "soy sauce" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "oil",
      def: "a thick liquid from plants or animals, used in cooking",
      zh: "食用油",
      register: "不可数",
      when: "<b>不可数名词</b>;指种类时可数(vegetable oils)。如 olive oil(橄榄油)。",
      examples: [
        { en: "Heat a little oil in the pan.", zh: "在锅里热一点油。", hl: "oil" },
        { en: "She fries everything in olive oil.", zh: "她什么都用橄榄油煎。", hl: "oil" },
        { en: "Add a tablespoon of oil.", zh: "加一汤匙油。", hl: "oil" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "gravy",
      def: "a hot brown sauce made from meat juices, served with meat and vegetables",
      zh: "肉汁、肉汁酱",
      register: "不可数",
      when: "<b>不可数名词</b>。英式烤肉(roast)的标配。",
      examples: [
        { en: "Pour gravy over the roast potatoes.", zh: "把肉汁浇在烤土豆上。", hl: "gravy" },
        { en: "The gravy was rich and meaty.", zh: "这肉汁浓郁醇厚。", hl: "gravy" },
        { en: "She made gravy from the turkey juices.", zh: "她用火鸡的汤汁做了肉汁酱。", hl: "gravy" }
      ]
    },
    {
      group: "调味品 · Condiments",
      head: "stock",
      def: "a liquid made by boiling meat, fish or vegetables, used as a base for soups and sauces",
      zh: "高汤、原汤",
      register: "不可数",
      when: "<b>不可数名词</b>,也叫 broth。注意 stock 另有「库存 / 股票」之义。",
      examples: [
        { en: "Add a litre of chicken stock to the pot.", zh: "往锅里加一升鸡高汤。", hl: "stock" },
        { en: "She makes her own vegetable stock.", zh: "她自己熬蔬菜高汤。", hl: "stock" },
        { en: "The risotto is cooked slowly in stock.", zh: "这意式烩饭是用高汤慢慢煨的。", hl: "stock" }
      ]
    }
  ]
};
