/* Unit 26 · Talking about size and number — GENERIC topic shape (no personas).
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 26.
   examples[0] of each phrase is from the book; the remaining example
   sentences (and all `zh` / `when`) are authored for extra practice.
   Uncertain readings are flagged in `note`.
   See the report alongside this file for items awaiting your confirmation. */
import type { UnitSeed } from "./types.ts";

export const sizeNumber: UnitSeed = {
  id: "size-number",
  num: "26",
  tag: "数量规模 · Size & number",
  title: "Talking about size and number",
  titleZh: "谈数量与规模",
  intro:
    "一组用来谈<b>数量、规模与增减</b>的短语动词:让某物变大、变小,或维持不变。按「增加 / 减少 / 持平」三组来记。",
  // A connected scenario weaving in every phrase of the unit. English only.
  // Each [[display|head]] links to the phrase below it.
  story: {
    title: "故事 · A year at the harbour café",
    text:
      "When Mara took over the little harbour café, she spent the first spring just trying to [[build up|build up]] a steady crowd of regulars. Word of mouth did the work, and through the summer the lunchtime numbers really [[pushed up|push up]] — some Saturdays the queue [[amounted to|amount to]] thirty people before noon. The festival weekend was the peak; after that the holiday traffic slowly [[thinned out|thin out]], and as autumn came the sales began to [[tail off|tail off]].\n\n" +
      "She watched the books closely. Flour, butter, electricity, wages — every small expense [[added up|add up]], and she found that her monthly costs [[averaged out at|average out at]] far more than she had guessed. To stay afloat she [[bumped up|bump up]] the price of the speciality cakes, [[rounding up|round up]] every figure to the nearest pound to keep the till simple. When a supplier quoted too much for the packaging, she haggled until they [[knocked the price down|knock down]] a little.\n\n" +
      "Even so, by winter the profit had clearly [[fallen off|fall off]]. Mara decided to [[slim down|slim down]] the menu, dropping the dishes nobody ordered, and the savings she had [[built up|build up]] over the summer carried her through the quiet months. Tasting her own cakes all day had not helped either — she had [[put on|put on]] a few kilos, and joked that the scales were the one number going the wrong way.\n\n" +
      "By the following spring things finally began to [[level off|level off]]: customers steady, costs predictable. The wild swings of her first year had [[flattened out|flatten out]], and the busy and quiet stretches more or less [[balanced out|balance out]] across the calendar. \"You can't make every number only go up,\" she told a new member of staff, \"but you can learn to read them.\""
  },
  phrases: [
    // ── A · 增加与汇总 ──────────────────────────────
    {
      group: "A · 增加与汇总",
      head: "build up",
      def: "increase in amount, size or strength, or make something increase",
      zh: "(使)增强、积累、壮大",
      register: "中性",
      when: "<b>逐步增大数量、规模或强度</b>,或使某物增长。体力、信心、人脉、库存都可用。",
      examples: [
        { en: "Paula has been doing a lot of long-distance running to try to build up her stamina.", zh: "宝拉一直在跑长距离,想增强自己的耐力。", hl: "build up" },
        { en: "It took years to build up a loyal customer base, but it was worth the effort.", zh: "积累一批忠实顾客花了好几年,但这份努力很值得。", hl: "build up" },
        { en: "Tension had been building up between the two departments for months.", zh: "两个部门之间的紧张关系已经积累了好几个月。", hl: "building up" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "bump up",
      def: "(informal) increase the size or amount of something, e.g. price, by a large amount",
      zh: "大幅抬高(价格 / 数额)",
      register: "口语",
      when: "<b>把价格、数额等大幅往上抬</b>,常带「趁机涨价」的意味。",
      examples: [
        { en: "Hotels in this town always bump their prices up when the film festival is on.", zh: "电影节期间,这镇上的酒店总会大幅抬价。", hl: "bump their prices up" },
        { en: "The airline bumped up the fares as soon as the school holidays began.", zh: "学校一放假,航空公司就把票价抬了上去。", hl: "bumped up" },
        { en: "If we bump up the budget a little, we can afford a proper sound system.", zh: "要是我们把预算稍微往上提一点,就买得起一套像样的音响了。", hl: "bump up" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "round up",
      def: "increase to the nearest whole number",
      zh: "向上取整到整数",
      register: "中性",
      when: "<b>把数目往上凑成整数</b>。反义 round down(向下取整)。",
      examples: [
        { en: "The taxi fare came to £29.25, but we rounded it up and gave the driver £30.", zh: "出租车费是 29.25 英镑,我们凑整给了司机 30 英镑。", hl: "rounded it up" },
        { en: "For a quick estimate, just round up each price to the nearest pound.", zh: "想快速估算的话,把每个价格往上凑到整英镑就行。", hl: "round up" },
        { en: "The charity rounded the total up to a clean £5,000 for the press release.", zh: "为了发新闻稿,慈善机构把总额凑成了整整 5000 英镑。", hl: "rounded the total up" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "push up",
      def: "increase the amount, number or value of something",
      zh: "推高、抬升(数量 / 价值)",
      register: "中性",
      when: "<b>把数量、价格或价值往上推</b>,多指外部因素导致的上升。",
      examples: [
        { en: "The TV series about Caitlin Cliff's pottery pushed up the value of her work.", zh: "那部讲凯特琳·克利夫陶艺的电视剧,推高了她作品的价值。", hl: "pushed up" },
        { en: "A poor harvest this year has pushed up the price of coffee worldwide.", zh: "今年收成不好,推高了全球的咖啡价格。", hl: "pushed up" },
        { en: "New transport links tend to push up house prices in the surrounding villages.", zh: "新的交通线路往往会推高周边村庄的房价。", hl: "push up" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "put on",
      def: "if a person or animal puts on weight, they become heavier",
      zh: "增加(体重)、长胖",
      register: "中性",
      when: "<b>体重增加、变重</b>。put on weight / put on + 重量。",
      note: "另义:put on = 假装(某种情绪或姿态),与本义不同(书页边注)。",
      examples: [
        { en: "Bobby's put on six kilos since he stopped playing football.", zh: "自从不踢球后,博比胖了六公斤。", hl: "put on" },
        { en: "Many people put on a little weight over the winter holidays.", zh: "很多人在寒假期间都会胖一点。", hl: "put on" },
        { en: "The vet warned us that the dog had put on too much weight and needed more exercise.", zh: "兽医提醒我们,这只狗长胖太多了,需要多运动。", hl: "put on" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "amount to",
      def: "become a particular amount",
      zh: "总计达到、合计为",
      register: "中性",
      when: "<b>加起来达到某个数目</b>。amount to + 金额 / 数量。",
      examples: [
        { en: "When we added living costs to the fees, the cost of the course amounted to £34,000.", zh: "把生活费加进学费后,这门课的花费合计达到 3.4 万英镑。", hl: "amounted to" },
        { en: "Her savings amounted to little more than a few hundred pounds.", zh: "她的积蓄合计也就几百英镑而已。", hl: "amounted to" },
        { en: "Once you include tax and delivery, the bill amounts to nearly £200.", zh: "把税费和运费算进去,这笔账合计近 200 英镑。", hl: "amounts to" }
      ]
    },
    {
      group: "A · 增加与汇总",
      head: "add up",
      def: "(informal) increase and become a larger number or amount",
      zh: "(累积)越积越多",
      register: "口语",
      when: "<b>零零总总加起来变成一大笔</b>。也说 it doesn't add up = 说不通 / 对不上(书页边注)。",
      examples: [
        { en: "Bringing up children is an expensive business. Clothes, shoes, food, toys – it all adds up!", zh: "养孩子很烧钱,衣服、鞋子、食物、玩具——加起来可不少!", hl: "adds up" },
        { en: "A few pounds here and there might seem trivial, but over a year it really adds up.", zh: "这里几英镑那里几英镑看似不起眼,但攒上一年真不是小数。", hl: "adds up" },
        { en: "All those late-night taxi fares soon added up to a small fortune.", zh: "那些深夜打车费很快就积成了一大笔钱。", hl: "added up" }
      ]
    },

    // ── B · 减少 ──────────────────────────────
    {
      group: "B · 减少",
      head: "tail off",
      def: "decrease in amount",
      zh: "逐渐减少、变弱",
      register: "中性",
      when: "<b>数量、程度慢慢下降、减弱</b>,常指随时间逐渐减少。",
      examples: [
        { en: "Ice cream sales are high in summer but tail off as winter approaches.", zh: "冰淇淋夏天卖得火,临近冬天就渐渐少了。", hl: "tail off" },
        { en: "Donations were generous at first but tailed off once the news coverage stopped.", zh: "起初捐款很慷慨,但新闻报道一停就渐渐少了。", hl: "tailed off" },
        { en: "His enthusiasm for the project began to tail off after the first few weeks.", zh: "头几周过后,他对这个项目的热情就开始减退了。", hl: "tail off" }
      ]
    },
    {
      group: "B · 减少",
      head: "fall off",
      def: "become smaller or lower",
      zh: "下降、变差",
      register: "中性",
      when: "<b>数量减少或质量变差、走下坡</b>。",
      examples: [
        { en: "Since they employed a new chef, the quality of the food has really fallen off.", zh: "换了新厨师后,菜的质量明显下滑了。", hl: "fallen off" },
        { en: "Attendance at the evening classes has fallen off sharply this term.", zh: "这学期晚间课程的出勤率大幅下降。", hl: "fallen off" },
        { en: "Orders tend to fall off in January once the holiday rush is over.", zh: "假日旺季一过,一月份的订单往往就会减少。", hl: "fall off" }
      ]
    },
    {
      group: "B · 减少",
      head: "thin out",
      def: "become fewer in number",
      zh: "(数量)变稀少",
      register: "中性",
      when: "<b>人或物的数量变少、变稀疏</b>。",
      note: "例句中 “get into the car park” 一处原文略模糊,按上下文复原,待确认。",
      examples: [
        { en: "We'll never be able to get into the car park now. Let's wait till the football crowds thin out a bit.", zh: "现在根本进不去停车场,等看球的人散一点再说吧。", hl: "thin out" },
        { en: "As we climbed higher, the forest began to thin out and the views opened up.", zh: "我们越往上爬,森林就越稀疏,视野也开阔起来。", hl: "thin out" },
        { en: "By midnight the crowd had thinned out and we could finally get to the bar.", zh: "到了午夜人群散去,我们总算能挤到吧台了。", hl: "thinned out" }
      ]
    },
    {
      group: "B · 减少",
      head: "knock down",
      def: "(informal) reduce a price",
      zh: "压低、杀价",
      register: "口语",
      when: "<b>把价格压低</b>。knock the price down / knock sth down。",
      examples: [
        { en: "Laura was so keen to get rid of her old car that I was able to get her to knock the price down a bit.", zh: "劳拉急着把旧车出手,我趁机让她把价压低了一点。", hl: "knock the price down" },
        { en: "If you pay in cash, the dealer might knock the price down by a few hundred.", zh: "要是付现金,经销商也许会再降个几百块。", hl: "knock the price down" },
        { en: "We managed to knock him down to half of what he was originally asking.", zh: "我们成功把他的要价砍到了原来的一半。", hl: "knock him down" }
      ]
    },
    {
      group: "B · 减少",
      head: "slim down",
      def: "make something smaller in size, often by employing fewer people",
      zh: "精简、缩编",
      register: "中性",
      when: "<b>缩小规模</b>,常指裁员、精简机构。slim sth down。",
      examples: [
        { en: "I'm afraid we have no choice but to slim the business down and some redundancies will be announced next week.", zh: "恐怕我们只能精简业务了,下周会公布部分裁员。", hl: "slim the business down" },
        { en: "The new manager slimmed down the team from twenty people to just eight.", zh: "新经理把团队从二十人精简到了只剩八人。", hl: "slimmed down" },
        { en: "We need to slim down the report; forty pages is far too long.", zh: "这份报告得精简一下,四十页实在太长了。", hl: "slim down" }
      ]
    },

    // ── C · 持平 ──────────────────────────────
    {
      group: "C · 持平",
      head: "level off",
      def: "stop increasing or decreasing and stay at the same level (also: level out)",
      zh: "趋于平稳、拉平",
      register: "中性",
      when: "<b>停止增减、趋于稳定</b>(也指差距缩小)。也作 level out。",
      examples: [
        { en: "The differences in grades between the sexes now seem to be levelling off by the time pupils reach 18.", zh: "到学生 18 岁时,两性成绩的差距似乎趋于拉平。", hl: "levelling off" },
        { en: "After climbing steeply for a decade, house prices have finally levelled off.", zh: "经过十年的陡升,房价终于趋于平稳了。", hl: "levelled off" },
        { en: "The plane climbed to 35,000 feet and then levelled off.", zh: "飞机爬升到三万五千英尺,随后保持平飞。", hl: "levelled off" }
      ]
    },
    {
      group: "C · 持平",
      head: "average out at",
      def: "result in a particular average amount or level",
      zh: "平均下来为",
      register: "中性",
      when: "<b>平均下来达到某个水平 / 数值</b>。average out at + 数值。",
      note: "书页脚注把 average out 与 flatten out 标了同一个编号,释义归属略含糊,此处按常用义给出,待确认。",
      examples: [
        { en: "At 18, boys' results now average out at 66% per exam.", zh: "到 18 岁,男生每场考试的成绩平均下来是 66%。", hl: "average out at" },
        { en: "Over the whole year, our electricity bill averages out at about £80 a month.", zh: "算下来全年的电费平均每月约 80 英镑。", hl: "averages out at" },
        { en: "Some weeks are busier than others, but the hours average out at around forty.", zh: "有些周忙些有些周闲些,但工时平均下来在四十小时左右。", hl: "average out at" }
      ]
    },
    {
      group: "C · 持平",
      head: "flatten out",
      def: "stop increasing or decreasing and begin to stay at the same level",
      zh: "趋平、不再变化",
      register: "中性",
      when: "<b>停止上升或下降,稳定在同一水平</b>。",
      examples: [
        { en: "Several years ago there was concern at the rapidly rising rate of academic success among girls, but this rate has clearly now flattened out.", zh: "几年前,女生学业成功率快速上升曾引发担忧,但这一速率如今显然已趋平。", hl: "flattened out" },
        { en: "Infection rates rose quickly in spring but have flattened out since the summer.", zh: "感染率春天迅速上升,但入夏以来已趋于平稳。", hl: "flattened out" },
        { en: "The road climbs for a mile and then flattens out near the top of the hill.", zh: "这条路爬升一英里,到接近山顶处就变平缓了。", hl: "flattens out" }
      ]
    },
    {
      group: "C · 持平",
      head: "balance out",
      def: "make things equal",
      zh: "使均衡、扯平",
      register: "中性",
      when: "<b>使各方变得相等、相互抵消</b>。balance things out。",
      examples: [
        { en: "Greater use of technology in the classroom is helping to balance things out.", zh: "课堂上更多地使用技术,正帮助把局面拉平。", hl: "balance things out" },
        { en: "A bad month for sales was balanced out by a very strong December.", zh: "销售低迷的一个月,被表现强劲的十二月扯平了。", hl: "balanced out" },
        { en: "The extra cost of the insurance is balanced out by the peace of mind it brings.", zh: "保险多花的钱,被它带来的安心抵消掉了。", hl: "balanced out" }
      ]
    }
  ]
};
