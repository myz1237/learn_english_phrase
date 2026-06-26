/* Vocabulary topic · Drinks — GENERIC topic shape (nouns, not phrasal verbs).
   Authored content: common drink nouns grouped by sub-topic. For nouns the
   `register` pill shows countability (可数 / 不可数 / 复数); British/American
   variants and synonyms go in `syn`. `when` carries usage / collocation notes;
   examples[*].hl highlights the noun as it appears. Connected story is
   authored. */
import type { UnitSeed } from "./types.ts";

export const drinks: UnitSeed = {
  id: "drinks",
  num: "46",
  tag: "饮品 · Drinks",
  title: "Drinks",
  titleZh: "常见饮品名词",
  intro:
    "一组<b>常见饮品名词</b>:软饮、热饮与酒类。小标签标的是<b>可数 / 不可数</b>——许多饮品作物质时不可数,点单论「杯」时可数。",
  story: {
    title: "故事 · The hottest day at the café",
    text:
      "It was the hottest day of the year, so our little café was busy from the moment it opened. The children wanted cold drinks: a tall glass of [[water|water]] with ice, fresh orange [[juice|juice]], some blackcurrant [[squash|squash]], home-made [[lemonade|lemonade]], a berry [[smoothie|smoothie]], and a thick chocolate [[milkshake|milkshake]].\n\n" +
      "The older customers preferred something hot. My grandmother always orders a pot of [[tea|tea]]; my father can't start the day without strong [[coffee|coffee]]; the little ones share a mug of warm [[cocoa|cocoa]]; and one regular swears by a cup of [[herbal tea|herbal tea]] every afternoon.\n\n" +
      "In the evening the café turns into a quiet bar. We pour pints of [[beer|beer]], glasses of red and white [[wine|wine]], a dry local [[cider|cider]], and the odd measure of [[spirits|spirits]]. The two beers on tap are a dark [[ale|ale]] and a crisp golden [[lager|lager]]."
  },
  phrases: [
    // ── 软饮 Soft drinks ──────────────────────────────
    {
      group: "软饮 · Soft drinks",
      head: "water",
      def: "the clear liquid, with no colour, taste or smell, that we drink",
      zh: "水",
      register: "不可数",
      when: "<b>不可数名词</b>:a glass of water。气泡水 sparkling water,无气泡 still water。",
      examples: [
        { en: "Can I have a glass of water?", zh: "能给我一杯水吗?", hl: "water" },
        { en: "She drinks plenty of water during the day.", zh: "她白天喝很多水。", hl: "water" },
        { en: "Still or sparkling water?", zh: "要无气泡还是气泡水?", hl: "water" }
      ]
    },
    {
      group: "软饮 · Soft drinks",
      head: "juice",
      def: "the liquid that comes from fruit or vegetables",
      zh: "果汁、蔬果汁",
      register: "不可数",
      when: "通常<b>不可数</b>;指「几份/几种」时可数(two juices)。",
      examples: [
        { en: "I'd like some orange juice.", zh: "我想要点橙汁。", hl: "juice" },
        { en: "She squeezed the juice from a lemon.", zh: "她从柠檬里挤出汁。", hl: "juice" },
        { en: "A carton of apple juice, please.", zh: "请来一盒苹果汁。", hl: "juice" }
      ]
    },
    {
      group: "软饮 · Soft drinks",
      head: "squash",
      def: "(BrE) a sweet drink made from fruit juice and sugar, mixed with water",
      zh: "(英式)浓缩果汁饮料",
      register: "不可数",
      when: "<b>不可数名词</b>。英式特有:浓缩果汁兑水喝。",
      syn: "英式 squash;近似美式 cordial / diluted juice",
      examples: [
        { en: "The children had orange squash at the party.", zh: "孩子们在派对上喝了橙味浓缩饮料。", hl: "squash" },
        { en: "Dilute the squash with cold water.", zh: "用凉水把浓缩饮料兑开。", hl: "squash" },
        { en: "Would you like some squash or juice?", zh: "你要浓缩饮料还是果汁?", hl: "squash" }
      ]
    },
    {
      group: "软饮 · Soft drinks",
      head: "lemonade",
      def: "a sweet drink made from or tasting of lemons; often fizzy in British English",
      zh: "柠檬水、柠檬汽水",
      register: "不可数",
      when: "<b>不可数名词</b>。英式常指柠檬味汽水,美式多指现榨柠檬水。",
      examples: [
        { en: "She made a jug of fresh lemonade.", zh: "她做了一壶鲜柠檬水。", hl: "lemonade" },
        { en: "Can I have a glass of lemonade?", zh: "能给我一杯柠檬水吗?", hl: "lemonade" },
        { en: "The lemonade was cold and fizzy.", zh: "这柠檬汽水冰凉带气。", hl: "lemonade" }
      ]
    },
    {
      group: "软饮 · Soft drinks",
      head: "smoothie",
      def: "a thick, cold drink made from fruit blended with milk or yoghurt",
      zh: "冰沙、果昔",
      register: "可数",
      when: "<b>可数名词</b>,复数 smoothies。",
      examples: [
        { en: "I made a banana smoothie for breakfast.", zh: "我早餐打了杯香蕉果昔。", hl: "smoothie" },
        { en: "They sell green smoothies at the gym.", zh: "健身房卖绿色果昔。", hl: "smoothies" },
        { en: "This smoothie is full of berries.", zh: "这杯果昔里全是莓果。", hl: "smoothie" }
      ]
    },
    {
      group: "软饮 · Soft drinks",
      head: "milkshake",
      def: "a cold drink made from milk, ice cream and a flavour, mixed together",
      zh: "奶昔",
      register: "可数",
      when: "<b>可数名词</b>,复数 milkshakes。",
      examples: [
        { en: "He ordered a strawberry milkshake.", zh: "他点了杯草莓奶昔。", hl: "milkshake" },
        { en: "The diner is famous for its milkshakes.", zh: "这家餐馆以奶昔闻名。", hl: "milkshakes" },
        { en: "She slurped the last of her milkshake.", zh: "她把奶昔最后一口吸光了。", hl: "milkshake" }
      ]
    },

    // ── 热饮 Hot drinks ──────────────────────────────
    {
      group: "热饮 · Hot drinks",
      head: "tea",
      def: "a hot drink made by pouring boiling water onto dried tea leaves",
      zh: "茶",
      register: "不可数",
      when: "通常<b>不可数</b>;点单时可数(two teas = 两杯茶)。",
      examples: [
        { en: "Would you like a cup of tea?", zh: "你要来杯茶吗?", hl: "tea" },
        { en: "She drinks tea with milk and sugar.", zh: "她喝茶加奶加糖。", hl: "tea" },
        { en: "Two teas, please.", zh: "请来两杯茶。", hl: "teas" }
      ]
    },
    {
      group: "热饮 · Hot drinks",
      head: "coffee",
      def: "a hot drink made from the roasted, ground seeds of the coffee plant",
      zh: "咖啡",
      register: "不可数",
      when: "通常<b>不可数</b>;点单时可数(two coffees)。",
      examples: [
        { en: "I can't function without my morning coffee.", zh: "没有早上那杯咖啡我就没法运转。", hl: "coffee" },
        { en: "He takes his coffee black.", zh: "他喝咖啡不加奶。", hl: "coffee" },
        { en: "Two coffees to go, please.", zh: "请来两杯咖啡外带。", hl: "coffees" }
      ]
    },
    {
      group: "热饮 · Hot drinks",
      head: "cocoa",
      def: "a hot chocolate drink, or the brown powder it is made from",
      zh: "可可、热巧克力",
      register: "不可数",
      when: "<b>不可数名词</b>。这种热饮也叫 hot chocolate。",
      examples: [
        { en: "She made the children a mug of cocoa.", zh: "她给孩子们冲了杯可可。", hl: "cocoa" },
        { en: "Stir the cocoa into warm milk.", zh: "把可可粉搅进温牛奶里。", hl: "cocoa" },
        { en: "A cup of cocoa before bed helps me sleep.", zh: "睡前一杯可可帮我入睡。", hl: "cocoa" }
      ]
    },
    {
      group: "热饮 · Hot drinks",
      head: "herbal tea",
      def: "a hot drink made from herbs or flowers rather than tea leaves",
      zh: "花草茶、草本茶",
      register: "不可数",
      when: "通常<b>不可数</b>(指种类时可数 herbal teas)。一般不含咖啡因。",
      examples: [
        { en: "She prefers herbal tea in the evening.", zh: "她晚上更爱喝花草茶。", hl: "herbal tea" },
        { en: "Peppermint is a popular herbal tea.", zh: "薄荷是很受欢迎的花草茶。", hl: "herbal tea" },
        { en: "Would you like a herbal tea?", zh: "你要来杯花草茶吗?", hl: "herbal tea" }
      ]
    },

    // ── 酒类 Alcohol ──────────────────────────────
    {
      group: "酒类 · Alcohol",
      head: "beer",
      def: "an alcoholic drink made from grain",
      zh: "啤酒",
      register: "不可数",
      when: "通常<b>不可数</b>;指种类或「一杯」时可数(two beers)。",
      examples: [
        { en: "He ordered a pint of beer.", zh: "他点了一品脱啤酒。", hl: "beer" },
        { en: "There's cold beer in the fridge.", zh: "冰箱里有冰啤酒。", hl: "beer" },
        { en: "They sampled several local beers.", zh: "他们品尝了几种本地啤酒。", hl: "beers" }
      ]
    },
    {
      group: "酒类 · Alcohol",
      head: "wine",
      def: "an alcoholic drink made from grapes",
      zh: "葡萄酒",
      register: "不可数",
      when: "通常<b>不可数</b>;指种类时可数(fine wines)。red / white / rosé wine。",
      examples: [
        { en: "Would you like red or white wine?", zh: "你要红葡萄酒还是白葡萄酒?", hl: "wine" },
        { en: "She poured everyone a glass of wine.", zh: "她给每个人倒了杯葡萄酒。", hl: "wine" },
        { en: "This region produces excellent wines.", zh: "这个产区出产上佳的葡萄酒。", hl: "wines" }
      ]
    },
    {
      group: "酒类 · Alcohol",
      head: "cider",
      def: "(BrE) an alcoholic drink made from apples",
      zh: "(英式)苹果酒",
      register: "不可数",
      when: "通常<b>不可数</b>;指种类时可数(ciders)。",
      syn: "英式 cider 含酒精;美式 cider 多指无酒精鲜苹果汁(hard cider 才含酒精)",
      examples: [
        { en: "A pint of dry cider, please.", zh: "请来一品脱干苹果酒。", hl: "cider" },
        { en: "This farm makes its own cider.", zh: "这家农场自酿苹果酒。", hl: "cider" },
        { en: "We tasted three different ciders.", zh: "我们尝了三种不同的苹果酒。", hl: "ciders" }
      ]
    },
    {
      group: "酒类 · Alcohol",
      head: "spirits",
      def: "strong alcoholic drinks such as whisky, gin or vodka",
      zh: "烈酒",
      register: "复数",
      when: "作「烈酒」总称时常用<b>复数</b> spirits。",
      examples: [
        { en: "The bar serves wine, beer and spirits.", zh: "这家酒吧供应葡萄酒、啤酒和烈酒。", hl: "spirits" },
        { en: "She rarely drinks spirits.", zh: "她很少喝烈酒。", hl: "spirits" },
        { en: "Whisky and gin are both spirits.", zh: "威士忌和金酒都属于烈酒。", hl: "spirits" }
      ]
    },
    {
      group: "酒类 · Alcohol",
      head: "ale",
      def: "a type of beer, often dark and with a bitter taste",
      zh: "麦芽啤酒、艾尔",
      register: "不可数",
      when: "通常<b>不可数</b>;指种类时可数(ales)。英国传统的 real ale 很有名。",
      examples: [
        { en: "He prefers a traditional ale.", zh: "他更喜欢传统的艾尔啤酒。", hl: "ale" },
        { en: "The pub serves real ale.", zh: "这家酒馆供应桶装传统艾尔。", hl: "ale" },
        { en: "They brew their own ales.", zh: "他们自酿艾尔啤酒。", hl: "ales" }
      ]
    },
    {
      group: "酒类 · Alcohol",
      head: "lager",
      def: "a light, golden type of beer",
      zh: "拉格啤酒、淡啤",
      register: "不可数",
      when: "通常<b>不可数</b>;点单时可数(two lagers)。一般冰镇饮用。",
      examples: [
        { en: "A pint of lager, please.", zh: "请来一品脱拉格啤酒。", hl: "lager" },
        { en: "Lager is usually served cold.", zh: "拉格啤酒一般冰着喝。", hl: "Lager" },
        { en: "They have two lagers on tap.", zh: "他们有两种拉格生啤。", hl: "lagers" }
      ]
    }
  ]
};
