/* Vocabulary topic · Meat, fish & seafood — GENERIC topic shape (nouns, not
   phrasal verbs). Authored content (not from the phrasal-verbs book): common
   meat / fish / seafood nouns grouped by sub-topic. For nouns the `register`
   pill is repurposed to show countability (可数 / 不可数) — the single most
   useful quick fact for a Chinese learner; British/American variants and
   synonyms are noted in `syn`. `when` carries usage / collocation notes;
   examples[*].hl highlights the noun as it appears (incl. plural). Connected
   story is authored. */
import type { UnitSeed } from "./types.ts";

export const meatSeafood: UnitSeed = {
  id: "meat-seafood",
  num: "44",
  tag: "肉与海鲜 · Meat & seafood",
  title: "Meat, fish & seafood",
  titleZh: "肉、鱼与海鲜",
  intro:
    "一组<b>常见的肉、鱼与海鲜名词</b>:从牛羊猪肉到鳕鱼、龙虾与生蚝。小标签标的是<b>可数 / 不可数</b>(作食材时多为不可数,而贝类海鲜多为可数),细微差别写在批注里。",
  // A connected scene weaving in all 16 nouns of the unit (authored).
  story: {
    title: "故事 · The butcher, the fishmonger and the barbecue",
    text:
      "On Saturday morning I went to the butcher first. He had a fine cut of [[beef|beef]] for roasting, some thinly sliced [[pork|pork]] for the stir-fry, and a leg of [[lamb|lamb]] my mother had ordered. I also grabbed a whole [[chicken|chicken]] for Sunday and, because the season was near, a small [[turkey|turkey]] to practise on.\n\n" +
      "At the till the butcher threw in a few rashers of [[bacon|bacon]] and a string of homemade [[sausage|sausage]]. \"For the barbecue tonight,\" I said, so he cut me a thick [[steak|steak]] as well.\n\n" +
      "Next door at the fishmonger the ice glittered with the morning's catch. I chose a fillet of [[cod|cod]] for the children, a tin-free slab of fresh [[tuna|tuna]], and a speckled [[trout|trout]] for myself. Along the counter sat baskets of shellfish: glossy black [[mussels|mussel]], a snapping [[crab|crab]], one enormous [[lobster|lobster]] eyeing the queue, a tray of [[oysters|oyster]] on crushed ice, and rings of cleaned [[squid|squid]] ready for the pan.\n\n" +
      "By evening the garden smelled of charcoal, the grill was crowded, and not a single thing I had bought made it back to the fridge."
  },
  phrases: [
    // ── 肉类 Meat ──────────────────────────────
    {
      group: "肉类 · Meat",
      head: "beef",
      def: "meat from a cow, eaten cooked",
      zh: "牛肉",
      register: "不可数",
      when: "<b>不可数名词</b>:some beef / a piece of beef,不说 a beef。常见搭配 roast beef(烤牛肉)、minced beef(牛肉末)。",
      examples: [
        { en: "We had roast beef for Sunday lunch.", zh: "我们周日午餐吃了烤牛肉。", hl: "beef" },
        { en: "This beef is wonderfully tender.", zh: "这牛肉嫩极了。", hl: "beef" },
        { en: "She browned some beef for the stew.", zh: "她把一些牛肉煸至变色做炖菜。", hl: "beef" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "pork",
      def: "meat from a pig, eaten cooked",
      zh: "猪肉",
      register: "不可数",
      when: "<b>不可数名词</b>:some pork / a slice of pork。注意活猪叫 pig,肉才叫 pork。",
      examples: [
        { en: "Roast pork is served with apple sauce.", zh: "烤猪肉配苹果酱一起吃。", hl: "pork" },
        { en: "I bought half a kilo of pork.", zh: "我买了半公斤猪肉。", hl: "pork" },
        { en: "The pork was cooked all the way through.", zh: "这猪肉完全熟透了。", hl: "pork" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "lamb",
      def: "meat from a young sheep, eaten cooked",
      zh: "羊肉(羔羊肉)",
      register: "不可数",
      when: "<b>作肉时不可数</b>(some lamb / a leg of lamb);指「小羊羔」这种动物时可数(a lamb)。",
      examples: [
        { en: "We slow-roasted a leg of lamb.", zh: "我们慢烤了一条羊腿。", hl: "lamb" },
        { en: "Lamb goes well with rosemary and garlic.", zh: "羊肉配迷迭香和大蒜很搭。", hl: "Lamb" },
        { en: "He ordered the lamb with mint sauce.", zh: "他点了配薄荷酱的羊肉。", hl: "lamb" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "chicken",
      def: "meat from a chicken; also the bird itself",
      zh: "鸡肉;鸡",
      register: "不可数",
      when: "<b>作肉时不可数</b>(some chicken / a piece of chicken);<b>指整只鸟时可数</b>(a chicken / two chickens)。",
      examples: [
        { en: "I'll have grilled chicken with rice.", zh: "我要烤鸡肉配米饭。", hl: "chicken" },
        { en: "She roasted a whole chicken for dinner.", zh: "她烤了一整只鸡做晚餐。", hl: "chicken" },
        { en: "There's some cold chicken in the fridge.", zh: "冰箱里有些冷鸡肉。", hl: "chicken" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "turkey",
      def: "meat from a large bird often eaten at Christmas; also the bird itself",
      zh: "火鸡肉;火鸡",
      register: "不可数",
      when: "<b>作肉时不可数</b>(some turkey / a slice of turkey);<b>指整只鸟时可数</b>(a turkey)。圣诞、感恩节常见。",
      examples: [
        { en: "We always eat turkey at Christmas.", zh: "我们圣诞节总是吃火鸡肉。", hl: "turkey" },
        { en: "She carved the turkey at the table.", zh: "她在餐桌上切开火鸡。", hl: "turkey" },
        { en: "I made sandwiches with the leftover turkey.", zh: "我用剩下的火鸡肉做了三明治。", hl: "turkey" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "bacon",
      def: "salted or smoked meat from the back or sides of a pig",
      zh: "培根、咸肉",
      register: "不可数",
      when: "<b>不可数名词</b>:some bacon / a rasher of bacon(一片培根)。常与 eggs 搭配:bacon and eggs。",
      examples: [
        { en: "I fried some bacon for breakfast.", zh: "我煎了些培根当早餐。", hl: "bacon" },
        { en: "She likes her bacon crispy.", zh: "她喜欢把培根煎得脆脆的。", hl: "bacon" },
        { en: "Add two rashers of bacon to the pan.", zh: "往锅里加两片培根。", hl: "bacon" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "sausage",
      def: "minced meat in a thin skin, cooked and eaten whole",
      zh: "香肠",
      register: "可数",
      when: "<b>可数名词</b>,复数 sausages;指做香肠的肉糜时偶作不可数(some sausage meat)。",
      examples: [
        { en: "We grilled some sausages on the barbecue.", zh: "我们在烧烤架上烤了些香肠。", hl: "sausages" },
        { en: "He ate a sausage in a bun.", zh: "他吃了个夹在面包里的香肠。", hl: "sausage" },
        { en: "These pork sausages are full of flavour.", zh: "这些猪肉香肠味道十足。", hl: "sausages" }
      ]
    },
    {
      group: "肉类 · Meat",
      head: "steak",
      def: "a thick, flat piece of good-quality beef (or sometimes fish)",
      zh: "牛排(厚切肉块)",
      register: "可数",
      when: "<b>可数名词</b>,复数 steaks;指牛排肉这种食材时也可不可数(some steak)。常说几分熟:rare / medium / well done。",
      examples: [
        { en: "He likes his steak medium rare.", zh: "他喜欢三分熟的牛排。", hl: "steak" },
        { en: "We ordered two steaks and a salad.", zh: "我们点了两份牛排和一份沙拉。", hl: "steaks" },
        { en: "She grilled a thick steak for dinner.", zh: "她烤了一块厚牛排做晚餐。", hl: "steak" }
      ]
    },

    // ── 鱼与海鲜 Fish & seafood ──────────────────────────────
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "cod",
      def: "a large sea fish with white flesh, often eaten as food",
      zh: "鳕鱼",
      register: "不可数",
      when: "<b>作食材时不可数</b>(some cod / a fillet of cod);<b>单复数同形</b>,数尾鱼时 one cod / two cod。",
      examples: [
        { en: "We had cod and chips by the sea.", zh: "我们在海边吃了炸鳕鱼配薯条。", hl: "cod" },
        { en: "She baked a fillet of cod with lemon.", zh: "她用柠檬烤了一块鳕鱼柳。", hl: "cod" },
        { en: "Cod is a popular fish in Britain.", zh: "鳕鱼在英国很受欢迎。", hl: "Cod" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "tuna",
      def: "a large sea fish with firm pink flesh, often sold tinned",
      zh: "金枪鱼、吞拿鱼",
      register: "不可数",
      when: "<b>作食材时不可数</b>(some tuna / a tin of tuna);<b>单复数同形</b>,指整条鱼时 one tuna / two tuna。",
      examples: [
        { en: "I made a tuna sandwich for lunch.", zh: "我午餐做了个金枪鱼三明治。", hl: "tuna" },
        { en: "Open a tin of tuna for the salad.", zh: "开一罐金枪鱼做沙拉。", hl: "tuna" },
        { en: "Fresh tuna is delicious seared.", zh: "新鲜金枪鱼煎一下很好吃。", hl: "tuna" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "trout",
      def: "a freshwater fish related to salmon, with speckled skin",
      zh: "鳟鱼",
      register: "不可数",
      when: "<b>单复数同形</b>(one trout / two trout);作鱼肉这种食材时不可数(some trout)。",
      examples: [
        { en: "He caught a trout in the river.", zh: "他在河里钓到一条鳟鱼。", hl: "trout" },
        { en: "We had grilled trout with almonds.", zh: "我们吃了配杏仁的烤鳟鱼。", hl: "trout" },
        { en: "Trout has a delicate, mild flavour.", zh: "鳟鱼味道清淡细腻。", hl: "Trout" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "mussel",
      def: "a small sea creature with a black shell, eaten cooked",
      zh: "贻贝、青口",
      register: "可数",
      when: "<b>可数名词</b>,几乎总用复数 mussels;常搭配 a bowl of mussels、moules(法式做法)。",
      examples: [
        { en: "We ordered a big pot of mussels.", zh: "我们点了一大锅贻贝。", hl: "mussels" },
        { en: "Steam the mussels in white wine.", zh: "用白葡萄酒蒸贻贝。", hl: "mussels" },
        { en: "Throw away any mussel that stays open.", zh: "把任何一直张着口的贻贝扔掉。", hl: "mussel" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "crab",
      def: "a sea creature with a hard shell and ten legs, eaten cooked",
      zh: "螃蟹",
      register: "可数",
      when: "<b>可数名词</b>,复数 crabs;指蟹肉这种食材时不可数(crab meat / some crab)。",
      examples: [
        { en: "We caught a crab in the rock pool.", zh: "我们在礁石水洼里抓到一只螃蟹。", hl: "crab" },
        { en: "She made sandwiches with fresh crab.", zh: "她用新鲜蟹肉做了三明治。", hl: "crab" },
        { en: "The fishermen sell live crabs at the harbour.", zh: "渔民在港口卖活螃蟹。", hl: "crabs" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "lobster",
      def: "a large sea creature with a shell and large claws, eaten cooked",
      zh: "龙虾",
      register: "可数",
      when: "<b>可数名词</b>,复数 lobsters;指龙虾肉这种食材时不可数(some lobster)。",
      examples: [
        { en: "We shared a whole lobster at the restaurant.", zh: "我们在餐厅分吃了一整只龙虾。", hl: "lobster" },
        { en: "Lobsters turn bright red when cooked.", zh: "龙虾煮熟后会变成鲜红色。", hl: "Lobsters" },
        { en: "The lobster was served with melted butter.", zh: "这龙虾配着融化的黄油上桌。", hl: "lobster" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "oyster",
      def: "a flat sea creature with a rough shell, often eaten raw",
      zh: "牡蛎、生蚝",
      register: "可数",
      when: "<b>可数名词</b>,复数 oysters;常生吃:a dozen oysters(一打生蚝)。",
      examples: [
        { en: "He ordered a dozen oysters on ice.", zh: "他点了一打冰镇生蚝。", hl: "oysters" },
        { en: "She had never tried a raw oyster before.", zh: "她以前从没尝过生牡蛎。", hl: "oyster" },
        { en: "Fresh oysters taste of the sea.", zh: "新鲜生蚝有股海水的味道。", hl: "oysters" }
      ]
    },
    {
      group: "鱼与海鲜 · Fish & seafood",
      head: "squid",
      def: "a soft sea creature with ten arms, eaten cooked",
      zh: "鱿鱼",
      register: "不可数",
      when: "<b>作食材时不可数</b>(some squid);<b>单复数同形</b>,指整只时 one squid / two squid。油炸的叫 calamari。",
      syn: "油炸圈状鱿鱼在菜单上常写作 calamari",
      examples: [
        { en: "We had fried squid as a starter.", zh: "我们点了炸鱿鱼当头盘。", hl: "squid" },
        { en: "Grilled squid is tender if not overcooked.", zh: "烤鱿鱼只要不煮过头就很嫩。", hl: "squid" },
        { en: "The chef sliced the squid into rings.", zh: "厨师把鱿鱼切成圈。", hl: "squid" }
      ]
    }
  ]
};
