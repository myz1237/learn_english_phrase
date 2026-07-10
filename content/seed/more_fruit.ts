/* Vocabulary topic · More fruit — GENERIC topic shape (nouns). Extends the
   "fruit-nuts" unit with everyday, tropical and berry fruits not covered there.
   `register` pill shows countability (all 可数); `when` carries usage notes;
   British/American variants go in `syn`. examples[*].hl highlights the noun as
   it appears (incl. plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const moreFruit: UnitSeed = {
  id: "more-fruit",
  num: "54",
  tag: "水果 2 · More fruit",
  title: "More fruit",
  titleZh: "更多水果",
  intro:
    "第二组<b>常见水果名词</b>:日常水果、热带水果与浆果。都是<b>可数名词</b>,英美用词差异写在批注里。",
  story: {
    title: "故事 · The fruit bowl and the holiday market",
    text:
      "Our fruit bowl is never empty. In the morning I grab an [[apple|apple]] to eat on the way out, peel a [[banana|banana]] for the children, and squeeze an [[orange|orange]] for juice. My daughter prefers a small [[tangerine|tangerine]], my husband halves a pink [[grapefruit|grapefruit]], and I mash a ripe [[avocado|avocado]] onto my toast.\n\n" +
      "On holiday last summer we discovered a whole new range of fruit. A street seller cut open a chilled [[watermelon|watermelon]] and a furry green [[kiwi|kiwi]]; nearby, baskets held soft [[apricots|apricot]] and blushing [[nectarines|nectarine]], purple [[figs|fig]] and a single heavy [[pomegranate|pomegranate]].\n\n" +
      "Best of all was the tropical stall at the end of the market. The owner cracked a [[coconut|coconut]] for its milk, handed the kids a punnet of [[blackberries|blackberry]], sliced a sweet [[papaya|papaya]], and let us taste the wrinkled shell of a [[passion fruit|passion fruit]]."
  },
  phrases: [
    // ── 日常水果 Everyday fruit ──────────────────────────────
    {
      group: "日常水果 · Everyday fruit",
      head: "apple",
      def: "a round fruit with firm flesh and red, green or yellow skin",
      zh: "苹果",
      register: "可数",
      when: "<b>可数名词</b>,复数 apples。",
      examples: [
        { en: "She packed an apple in his lunchbox.", zh: "她在他的午餐盒里放了个苹果。", hl: "apple" },
        { en: "These apples are crisp and sweet.", zh: "这些苹果又脆又甜。", hl: "apples" },
        { en: "He bit into a juicy apple.", zh: "他咬了口多汁的苹果。", hl: "apple" }
      ]
    },
    {
      group: "日常水果 · Everyday fruit",
      head: "banana",
      def: "a long, curved fruit with a yellow skin",
      zh: "香蕉",
      register: "可数",
      when: "<b>可数名词</b>,复数 bananas;一串叫 a bunch of bananas。",
      examples: [
        { en: "Peel a banana for the baby.", zh: "给宝宝剥根香蕉。", hl: "banana" },
        { en: "The bananas are still a bit green.", zh: "这些香蕉还有点生。", hl: "bananas" },
        { en: "I added a banana to my smoothie.", zh: "我往果昔里加了根香蕉。", hl: "banana" }
      ]
    },
    {
      group: "日常水果 · Everyday fruit",
      head: "orange",
      def: "a round citrus fruit with a thick skin and sweet, juicy flesh",
      zh: "橙子",
      register: "可数",
      when: "<b>可数名词</b>,复数 oranges;也指橙色。",
      examples: [
        { en: "She squeezed two oranges for juice.", zh: "她榨了两个橙子做汁。", hl: "oranges" },
        { en: "Peel the orange and share it out.", zh: "把橙子剥了分着吃。", hl: "orange" },
        { en: "An orange makes a healthy snack.", zh: "一个橙子是健康的零食。", hl: "orange" }
      ]
    },
    {
      group: "日常水果 · Everyday fruit",
      head: "tangerine",
      def: "a small, sweet citrus fruit with a loose skin that is easy to peel",
      zh: "橘子、柑橘",
      register: "可数",
      when: "<b>可数名词</b>,复数 tangerines。类似的还有 clementine、mandarin。",
      syn: "近义:clementine、mandarin(都是易剥的小柑橘)",
      examples: [
        { en: "He peeled a tangerine in one piece.", zh: "他把橘子皮完整地剥了下来。", hl: "tangerine" },
        { en: "Tangerines are in season around Christmas.", zh: "橘子在圣诞前后当季。", hl: "Tangerines" },
        { en: "She put a tangerine in each stocking.", zh: "她在每只圣诞袜里放了个橘子。", hl: "tangerine" }
      ]
    },
    {
      group: "日常水果 · Everyday fruit",
      head: "grapefruit",
      def: "a large, round citrus fruit with a sharp, slightly bitter taste",
      zh: "西柚、葡萄柚",
      register: "可数",
      when: "<b>可数名词</b>,单复数常同形(two grapefruit / grapefruits)。果肉有粉红和黄色。",
      examples: [
        { en: "She had half a grapefruit for breakfast.", zh: "她早餐吃了半个西柚。", hl: "grapefruit" },
        { en: "Pink grapefruit is sweeter than yellow.", zh: "粉红西柚比黄的甜。", hl: "grapefruit" },
        { en: "Grapefruit can interfere with some medicines.", zh: "西柚会影响某些药物。", hl: "Grapefruit" }
      ]
    },
    {
      group: "日常水果 · Everyday fruit",
      head: "avocado",
      def: "a pear-shaped fruit with green flesh and a large stone, eaten as a vegetable",
      zh: "牛油果、鳄梨",
      register: "可数",
      when: "<b>可数名词</b>,复数 avocados。虽是水果,常当蔬菜吃(如做 guacamole)。",
      examples: [
        { en: "She mashed an avocado onto her toast.", zh: "她把牛油果压碎抹在吐司上。", hl: "avocado" },
        { en: "The avocados aren't ripe yet.", zh: "这些牛油果还没熟。", hl: "avocados" },
        { en: "Add half an avocado to the salad.", zh: "往沙拉里加半个牛油果。", hl: "avocado" }
      ]
    },

    // ── 热带与浆果 Tropical & berries ──────────────────────────────
    {
      group: "热带与浆果 · Tropical & berries",
      head: "watermelon",
      def: "a very large, round fruit with green skin, red juicy flesh and black seeds",
      zh: "西瓜",
      register: "可数",
      when: "<b>可数名词</b>;切块作食材时也可不可数。",
      examples: [
        { en: "We shared a slice of watermelon.", zh: "我们分吃了一块西瓜。", hl: "watermelon" },
        { en: "A cold watermelon is perfect in summer.", zh: "冰镇西瓜是夏日绝配。", hl: "watermelon" },
        { en: "She spat out the watermelon seeds.", zh: "她把西瓜籽吐了出来。", hl: "watermelon" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "kiwi",
      def: "a small fruit with brown furry skin and green flesh with tiny black seeds",
      zh: "猕猴桃、奇异果",
      register: "可数",
      when: "<b>可数名词</b>,复数 kiwis。全称 kiwi fruit。",
      examples: [
        { en: "Slice a kiwi over the yoghurt.", zh: "把猕猴桃切片放在酸奶上。", hl: "kiwi" },
        { en: "Kiwis are full of vitamin C.", zh: "猕猴桃富含维C。", hl: "Kiwis" },
        { en: "She scooped out the kiwi with a spoon.", zh: "她用勺子把猕猴桃挖着吃。", hl: "kiwi" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "apricot",
      def: "a small, soft, orange fruit with a stone, similar to a peach",
      zh: "杏子",
      register: "可数",
      when: "<b>可数名词</b>,复数 apricots。晒干的叫 dried apricots。",
      examples: [
        { en: "The apricots were soft and sweet.", zh: "这些杏子软而甜。", hl: "apricots" },
        { en: "She added dried apricots to the cake.", zh: "她往蛋糕里加了杏干。", hl: "apricots" },
        { en: "He picked an apricot from the tree.", zh: "他从树上摘了个杏子。", hl: "apricot" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "nectarine",
      def: "a fruit like a peach but with smooth skin",
      zh: "油桃",
      register: "可数",
      when: "<b>可数名词</b>,复数 nectarines。与桃子的区别是表皮光滑无毛。",
      examples: [
        { en: "Nectarines have smooth skin, unlike peaches.", zh: "油桃表皮光滑,不像桃子有毛。", hl: "Nectarines" },
        { en: "She sliced a ripe nectarine.", zh: "她切了个熟油桃。", hl: "nectarine" },
        { en: "The nectarines were perfectly ripe.", zh: "这些油桃熟得正好。", hl: "nectarines" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "fig",
      def: "a soft, sweet fruit full of small seeds, often eaten dried",
      zh: "无花果",
      register: "可数",
      when: "<b>可数名词</b>,复数 figs。鲜食或制成 dried figs。",
      examples: [
        { en: "Fresh figs go well with cheese.", zh: "新鲜无花果配奶酪很搭。", hl: "figs" },
        { en: "She stuffed a fig with soft cheese.", zh: "她在无花果里塞了软奶酪。", hl: "fig" },
        { en: "Dried figs are very sweet.", zh: "无花果干很甜。", hl: "figs" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "pomegranate",
      def: "a round fruit with thick reddish skin and many seeds in a juicy red pulp",
      zh: "石榴",
      register: "可数",
      when: "<b>可数名词</b>,复数 pomegranates。里面的红籽叫 seeds / arils。",
      examples: [
        { en: "She scattered pomegranate seeds over the salad.", zh: "她在沙拉上撒了些石榴籽。", hl: "pomegranate" },
        { en: "Cutting a pomegranate can be messy.", zh: "切石榴可能弄得一团糟。", hl: "pomegranate" },
        { en: "Pomegranates are in season in autumn.", zh: "石榴在秋天当季。", hl: "Pomegranates" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "coconut",
      def: "a large tropical nut with a hard, hairy shell, white flesh and milk inside",
      zh: "椰子",
      register: "可数",
      when: "<b>可数名词</b>;椰肉磨碎作食材时不可数(desiccated coconut)。",
      examples: [
        { en: "They cracked open a coconut on the beach.", zh: "他们在海滩上敲开了一个椰子。", hl: "coconut" },
        { en: "The cake was topped with grated coconut.", zh: "蛋糕上撒了椰蓉。", hl: "coconut" },
        { en: "Fresh coconuts are sold by the road.", zh: "路边有卖新鲜椰子的。", hl: "coconuts" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "blackberry",
      def: "a small, soft, dark purple fruit that grows on a thorny bush",
      zh: "黑莓",
      register: "可数",
      when: "<b>可数名词</b>,复数 blackberries。野外常见,可采摘(go blackberrying)。",
      examples: [
        { en: "We picked blackberries from the hedge.", zh: "我们从树篱上采了黑莓。", hl: "blackberries" },
        { en: "She made a blackberry and apple pie.", zh: "她做了个黑莓苹果派。", hl: "blackberry" },
        { en: "Each blackberry stained our fingers purple.", zh: "每颗黑莓都把我们的手指染成了紫色。", hl: "blackberry" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "papaya",
      def: "a large tropical fruit with orange flesh and small black seeds",
      zh: "木瓜",
      register: "可数",
      when: "<b>可数名词</b>,复数 papayas;切块作食材时也可不可数。",
      syn: "在部分英联邦地区也叫 pawpaw",
      examples: [
        { en: "He sliced a ripe papaya for dessert.", zh: "他切了个熟木瓜做甜点。", hl: "papaya" },
        { en: "Papaya is often eaten with a squeeze of lime.", zh: "木瓜常挤点青柠一起吃。", hl: "Papaya" },
        { en: "The papayas were sold at the tropical stall.", zh: "热带水果摊上卖木瓜。", hl: "papayas" }
      ]
    },
    {
      group: "热带与浆果 · Tropical & berries",
      head: "passion fruit",
      def: "a small tropical fruit with a wrinkled purple skin and sweet, seedy pulp",
      zh: "百香果、西番莲果",
      register: "可数",
      when: "<b>可数名词</b>,单复数常同形。挖出果肉(pulp)连籽一起吃。",
      examples: [
        { en: "Scoop the pulp from a passion fruit.", zh: "把百香果的果肉挖出来。", hl: "passion fruit" },
        { en: "Passion fruit has a sharp, sweet flavour.", zh: "百香果酸甜可口。", hl: "Passion fruit" },
        { en: "She drizzled passion fruit over the cheesecake.", zh: "她把百香果淋在芝士蛋糕上。", hl: "passion fruit" }
      ]
    }
  ]
};
