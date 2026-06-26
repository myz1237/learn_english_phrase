/* Vocabulary topic · Money & shopping — GENERIC topic shape (nouns).
   Authored content: common money & shopping nouns grouped by sub-topic.
   `register` pill shows countability (note cash/change are 不可数, savings is
   复数); `when` carries usage notes; British/American variants go in `syn`.
   examples[*].hl highlights the noun as it appears. Connected story authored. */
import type { UnitSeed } from "./types.ts";

export const moneyShopping: UnitSeed = {
  id: "money-shopping",
  num: "52",
  tag: "金钱购物 · Money & shopping",
  title: "Money & shopping",
  titleZh: "金钱与购物",
  intro:
    "一组<b>金钱与购物</b>的常见名词:现金、零钱、收据、折扣、退款……小标签标的是<b>可数 / 不可数</b>(cash、change 不可数,savings 用复数),英美用词差异写在批注里。",
  story: {
    title: "故事 · A trip to the supermarket",
    text:
      "On Saturday I worked out a [[budget|budget]] before heading to the shops — my [[salary|salary]] doesn't stretch far, and my [[savings|savings]] are precious. At the door I grabbed a [[trolley|trolley]], though for a few items I'd have used a [[basket|basket]] instead.\n\n" +
      "Inside, everything was a [[bargain|bargain]]: a big yellow [[discount|discount]] sticker on the bread, and a money-off [[voucher|voucher]] I'd cut from the paper for the coffee. I joined a long [[queue|queue]] at the till.\n\n" +
      "I paid with [[cash|cash]] this time. I handed over a twenty-pound [[note|note]], dropped the [[change|change]] — a handful of every [[coin|coin]] — into my [[wallet|wallet]], and took the [[receipt|receipt]]. Back home I noticed the milk was sour, so on Monday I went back for a [[refund|refund]]."
  },
  phrases: [
    // ── 钱 Money ──────────────────────────────
    {
      group: "钱 · Money",
      head: "cash",
      def: "money in the form of coins and notes, rather than cards or cheques",
      zh: "现金",
      register: "不可数",
      when: "<b>不可数名词</b>:pay in cash(付现金)。",
      examples: [
        { en: "Do you have any cash on you?", zh: "你身上带现金了吗?", hl: "cash" },
        { en: "I'd rather pay in cash.", zh: "我宁愿付现金。", hl: "cash" },
        { en: "The shop only takes cash.", zh: "这家店只收现金。", hl: "cash" }
      ]
    },
    {
      group: "钱 · Money",
      head: "coin",
      def: "a small, round piece of metal used as money",
      zh: "硬币",
      register: "可数",
      when: "<b>可数名词</b>,复数 coins。",
      examples: [
        { en: "She dropped a coin into the machine.", zh: "她往机器里投了一枚硬币。", hl: "coin" },
        { en: "He emptied the coins from his pocket.", zh: "他把口袋里的硬币都倒了出来。", hl: "coins" },
        { en: "I haven't got the right coin for the trolley.", zh: "我没有合适面值的硬币去解购物车。", hl: "coin" }
      ]
    },
    {
      group: "钱 · Money",
      head: "note",
      def: "(BrE) a piece of paper money",
      zh: "(英式)纸币、钞票",
      register: "可数",
      when: "<b>可数名词</b>,复数 notes。",
      syn: "英式 note;美式 bill。全称 banknote",
      examples: [
        { en: "She paid with a ten-pound note.", zh: "她用一张十英镑的钞票付了款。", hl: "note" },
        { en: "Do you have anything smaller than a fifty-pound note?", zh: "你有比五十英镑更小面额的钞票吗?", hl: "note" },
        { en: "The cashier checked the notes carefully.", zh: "收银员仔细检查了那些钞票。", hl: "notes" }
      ]
    },
    {
      group: "钱 · Money",
      head: "wallet",
      def: "a small flat case for carrying money and cards, usually in a pocket",
      zh: "钱包(扁平式)",
      register: "可数",
      when: "<b>可数名词</b>。女士手拿包 / 钱夹也可叫 purse(英式 purse 多指零钱包)。",
      examples: [
        { en: "He keeps his cards in his wallet.", zh: "他把卡都放在钱包里。", hl: "wallet" },
        { en: "My wallet was stolen on the train.", zh: "我的钱包在火车上被偷了。", hl: "wallet" },
        { en: "She took a photo out of her wallet.", zh: "她从钱包里拿出一张照片。", hl: "wallet" }
      ]
    },
    {
      group: "钱 · Money",
      head: "change",
      def: "the money you get back when you pay more than something costs; also coins",
      zh: "找零;零钱",
      register: "不可数",
      when: "<b>不可数名词</b>:keep the change(不用找了)、small change(零钱)。",
      examples: [
        { en: "Here's your change.", zh: "这是找您的零钱。", hl: "change" },
        { en: "Keep the change.", zh: "零钱不用找了。", hl: "change" },
        { en: "I never carry much change.", zh: "我从不带很多零钱。", hl: "change" }
      ]
    },
    {
      group: "钱 · Money",
      head: "savings",
      def: "money that you have saved, especially in a bank",
      zh: "积蓄、存款",
      register: "复数",
      when: "作「积蓄」时用<b>复数</b> savings。a savings account = 储蓄账户。",
      examples: [
        { en: "She spent all her savings on the trip.", zh: "她把所有积蓄都花在了这趟旅行上。", hl: "savings" },
        { en: "We're putting our savings towards a house.", zh: "我们把积蓄攒着买房。", hl: "savings" },
        { en: "His savings are in a high-interest account.", zh: "他的存款放在一个高息账户里。", hl: "savings" }
      ]
    },
    {
      group: "钱 · Money",
      head: "salary",
      def: "a fixed amount of money paid to an employee, usually every month",
      zh: "薪水、薪金",
      register: "可数",
      when: "<b>可数名词</b>。通常按月发的固定工资;按时计酬的叫 wage(s)。",
      examples: [
        { en: "She earns a good salary.", zh: "她薪水不错。", hl: "salary" },
        { en: "My salary is paid on the last day of the month.", zh: "我的薪水在每月最后一天发。", hl: "salary" },
        { en: "They offered him a higher salary.", zh: "他们给他开了更高的薪水。", hl: "salary" }
      ]
    },
    {
      group: "钱 · Money",
      head: "budget",
      def: "a plan of how much money you have and how you will spend it",
      zh: "预算",
      register: "可数",
      when: "<b>可数名词</b>。on a tight budget(预算紧张)、stick to a budget(守住预算)。",
      examples: [
        { en: "We're on a tight budget this month.", zh: "我们这个月预算很紧。", hl: "budget" },
        { en: "The trip went over budget.", zh: "这趟旅行超了预算。", hl: "budget" },
        { en: "She drew up a monthly budget.", zh: "她制定了一份月度预算。", hl: "budget" }
      ]
    },

    // ── 购物 Shopping ──────────────────────────────
    {
      group: "购物 · Shopping",
      head: "receipt",
      def: "a piece of paper showing that you have paid for something",
      zh: "收据、小票",
      register: "可数",
      when: "<b>可数名词</b>。注意 p 不发音;退换货常需 keep the receipt。",
      examples: [
        { en: "Keep the receipt in case you want to return it.", zh: "把收据留好,以防你想退货。", hl: "receipt" },
        { en: "Can I have a receipt, please?", zh: "能给我开张收据吗?", hl: "receipt" },
        { en: "She lost the receipt for the shoes.", zh: "她把鞋子的收据弄丢了。", hl: "receipt" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "bargain",
      def: "something bought for much less than its usual price",
      zh: "便宜货、划算的买卖",
      register: "可数",
      when: "<b>可数名词</b>。a real bargain = 特别划算。",
      examples: [
        { en: "These shoes were a real bargain.", zh: "这双鞋买得太划算了。", hl: "bargain" },
        { en: "The sale is full of bargains.", zh: "这次促销满是便宜货。", hl: "bargains" },
        { en: "At that price, it's a bargain.", zh: "这个价钱,真是划算。", hl: "bargain" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "refund",
      def: "money that is given back to you, e.g. for goods you return",
      zh: "退款",
      register: "可数",
      when: "<b>可数名词</b>。get / give a refund;动词也作 refund。",
      examples: [
        { en: "I got a full refund for the faulty kettle.", zh: "那把坏水壶我拿到了全额退款。", hl: "refund" },
        { en: "They refused to give me a refund.", zh: "他们拒绝给我退款。", hl: "refund" },
        { en: "You're entitled to a refund.", zh: "你有权要求退款。", hl: "refund" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "trolley",
      def: "(BrE) a large metal basket on wheels, used for carrying shopping",
      zh: "(英式)购物车",
      register: "可数",
      when: "<b>可数名词</b>。",
      syn: "英式 trolley;美式 (shopping) cart",
      examples: [
        { en: "She pushed the trolley round the supermarket.", zh: "她推着购物车在超市里转。", hl: "trolley" },
        { en: "The trolley was full to the top.", zh: "购物车装得满满当当。", hl: "trolley" },
        { en: "He left the trolley in the car park.", zh: "他把购物车留在了停车场。", hl: "trolley" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "queue",
      def: "(BrE) a line of people waiting for something",
      zh: "(英式)排队的队伍",
      register: "可数",
      when: "<b>可数名词</b>。动词 queue (up) = 排队。",
      syn: "英式 queue;美式 line(排队 stand in line)",
      examples: [
        { en: "There was a long queue at the till.", zh: "收银台前排着长队。", hl: "queue" },
        { en: "We waited in the queue for twenty minutes.", zh: "我们在队里等了二十分钟。", hl: "queue" },
        { en: "Please join the back of the queue.", zh: "请到队尾排队。", hl: "queue" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "discount",
      def: "an amount taken off the usual price of something",
      zh: "折扣、减价",
      register: "可数",
      when: "<b>可数名词</b>。a 10% discount;at a discount = 打折地。",
      examples: [
        { en: "Students get a 10% discount.", zh: "学生可享九折优惠。", hl: "discount" },
        { en: "They offered a discount for paying early.", zh: "他们对提前付款给予折扣。", hl: "discount" },
        { en: "I bought it at a discount.", zh: "我打折买的。", hl: "discount" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "basket",
      def: "a container, often carried by hand, for holding shopping or goods",
      zh: "购物篮、篮子",
      register: "可数",
      when: "<b>可数名词</b>。买得少时用篮子;网购的「购物车」也叫 basket(英)。",
      examples: [
        { en: "She filled her basket with fruit.", zh: "她把篮子装满了水果。", hl: "basket" },
        { en: "Take a basket if you only need a few things.", zh: "只买几样东西就拿个篮子。", hl: "basket" },
        { en: "Your basket is empty.", zh: "你的购物篮是空的。", hl: "basket" }
      ]
    },
    {
      group: "购物 · Shopping",
      head: "voucher",
      def: "a printed paper that can be exchanged for goods or used to get a discount",
      zh: "代金券、优惠券",
      register: "可数",
      when: "<b>可数名词</b>。a gift voucher = 礼券;a money-off voucher = 减价券。",
      syn: "美式常用 coupon",
      examples: [
        { en: "She used a voucher to get money off.", zh: "她用优惠券减了价。", hl: "voucher" },
        { en: "I was given a gift voucher for my birthday.", zh: "我生日时收到了一张礼券。", hl: "voucher" },
        { en: "The vouchers expire at the end of the month.", zh: "这些券月底过期。", hl: "vouchers" }
      ]
    }
  ]
};
