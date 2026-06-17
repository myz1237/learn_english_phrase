/* Unit 14 · Out — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 14.
   English `def` and examples[0] are from the book (Section A is prose,
   Section B is a table); `zh` / `when` and the extra examples are authored.
   Connected story is authored (not from the book).
   Learner's handwritten annotations are kept in `syn` / `note`. */
import type { UnitSeed } from "./types.ts";

export const out: UnitSeed = {
  id: "out",
  num: "14",
  tag: "小品词 · Out",
  title: "Out",
  titleZh: "小品词 out 的用法",
  intro:
    "围绕小品词 <b>out</b> 的一组短语动词。out 最常见的意思是 in 的反义(离开 / 出去),也能表示<b>伸出、分开、分发</b>,以及一批各自固定的引申义。按「基本义 / 其它义」两组来记。",
  // A connected story weaving in all 15 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · A start-up's rough year",
    text:
      "When our little software start-up began, the five of us [[picked out|pick out]] a cheap office above a bakery, with a crooked sign that [[jutted out|jut out]] over the street. Money was tight, so we [[shared out|share out]] every task between us and [[spread out|spread out]] the long hours across the week.\n\n" +
      "Our first product wasn't ready, but we decided to [[test out|test sth out]] an early version on a handful of real users anyway. The feedback was brutal. One investor [[lashed out|lash out]] at us in a meeting, [[yelled out|yell sth out]] that we were wasting his money, and threatened to [[kick out|kick sb out]] anyone who couldn't pay the rent. That night, exhausted, one of the founders said he [[wanted out|want out]] — and a second quietly [[dropped out|drop out]] a week later. \"If this is going to drag on forever, [[count me out|count sb out]],\" he said.\n\n" +
      "The three of us who stayed had to [[sort out|sort sth out]] the mess. We were nearly [[cleaned out|clean sb out]]: the bank balance had all but [[gone out|go out]] like a dying fire. Rather than [[draw out|draw sth out]] the agony, we fixed the product in two focused weeks — and by spring the same investor who had walked away came back."
  },
  phrases: [
    // ── A · out 的基本含义 ──────────────────────────────
    {
      group: "A · out 的基本含义",
      head: "kick sb out",
      def: "(informal) force someone to leave a place, job or organization",
      zh: "(不客气地)把…赶走、撵出",
      register: "口语",
      when: "<b>把某人赶出</b>某地、某职位或组织,语气直接。kick sb out (of)。",
      examples: [
        { en: "I don't want to leave my job but I suppose they will kick me out.", zh: "我并不想离开这份工作,但我猜他们会把我撵走。", hl: "kick me out" },
        { en: "The landlord kicked them out for not paying the rent.", zh: "房东因为他们不付房租把他们赶了出去。", hl: "kicked them out" },
        { en: "He was kicked out of school for fighting.", zh: "他因为打架被学校开除了。", hl: "kicked out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "want out",
      def: "(informal) want to leave a situation, job or relationship",
      zh: "想退出、想抽身离开",
      register: "口语",
      when: "<b>想从某处境、工作或关系里抽身</b>。want out (of)。",
      examples: [
        { en: "I've had enough of working for such a difficult organisation and I want out.", zh: "我受够了在这么难搞的机构里工作,我想退出。", hl: "want out" },
        { en: "She wanted out of the deal as soon as she saw the risks.", zh: "一看清风险,她就想退出这笔交易。", hl: "wanted out" },
        { en: "If you want out, now is the time to say so.", zh: "你要是想退出,现在就说。", hl: "want out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "count sb out",
      def: "not include someone in an activity or plan (opposite: count sb in)",
      zh: "不把…算上、把…排除在外",
      register: "口语",
      when: "<b>不把某人算进</b>某活动或计划。反义 count sb in。",
      note: "本单元 count out = 不算上;与「数数」无关。",
      examples: [
        { en: "Count me out! I'm far too tired to join the skiing trip today.", zh: "别算我!我太累了,今天不去滑雪了。", hl: "Count me out" },
        { en: "If you're planning a midnight hike, count me out.", zh: "你们要是打算半夜去爬山,别算我一个。", hl: "count me out" },
        { en: "He counted himself out of the weekend trip.", zh: "他把自己从周末出行里排除了出去。", hl: "counted himself out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "jut out",
      def: "stick out further than the surrounding surface or area",
      zh: "突出、伸出",
      register: "中性",
      when: "<b>(某物)伸出、突出</b>于周围表面或边缘之外。jut out (over / into)。",
      examples: [
        { en: "The chalet roof juts out over its walls to help prevent snow from blocking the doors.", zh: "小木屋的屋顶伸出墙外,以防积雪堵住门。", hl: "juts out" },
        { en: "The rocky peninsula juts out into the bay.", zh: "那道礁石半岛伸进了海湾里。", hl: "juts out" },
        { en: "A rusty nail was jutting out from the old fence.", zh: "一颗锈钉从旧栅栏上突了出来。", hl: "jutting out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "pick out",
      def: "choose one thing or person from a larger group",
      zh: "(从一堆里)挑出、选出",
      register: "中性",
      when: "<b>从一大群里挑出</b>某一个。pick sth / sb out。",
      examples: [
        { en: "The woman picked out a kitten to take home.", zh: "那位女士挑了一只小猫带回家。", hl: "picked out" },
        { en: "Can you pick out your suitcase from all these?", zh: "你能从这一堆里认出自己的行李箱吗?", hl: "pick out" },
        { en: "She picked out a blue dress for the party.", zh: "她为派对挑了一条蓝裙子。", hl: "picked out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "spread out",
      def: "open something out, or arrange things over a wide area; (of people) move apart",
      zh: "摊开、铺开;(人)散开",
      register: "中性",
      when: "<b>把东西摊开铺在大片地方</b>;也指人散开到更大范围。spread sth out。",
      syn: "散开搜寻:spread out, let's search in a wider area(手写批注)",
      examples: [
        { en: "We spread our wet clothes out on the grass so they could dry in the sunshine.", zh: "我们把湿衣服摊在草地上,好让太阳晒干。", hl: "spread our wet clothes out" },
        { en: "He spread the map out on the table.", zh: "他把地图在桌上摊开。", hl: "spread the map out" },
        { en: "The search party spread out across the field.", zh: "搜救队在田野里散开搜寻。", hl: "spread out" }
      ]
    },
    {
      group: "A · out 的基本含义",
      head: "share out",
      def: "divide something and give a part to each person in a group",
      zh: "(把…)分给大家",
      register: "中性",
      when: "<b>把东西分发给每个人</b>。share sth out among / between。",
      syn: "近义:hand out / give out(分发)",
      examples: [
        { en: "Don't eat all the sweets yourself, Ollie. Share them out among all the children.", zh: "奥利,别一个人把糖都吃了,分给所有孩子。", hl: "Share them out" },
        { en: "The profits were shared out equally among the partners.", zh: "利润在合伙人之间平均分配。", hl: "shared out" },
        { en: "She shared out the last of the cake.", zh: "她把最后的蛋糕分给了大家。", hl: "shared out" }
      ]
    },

    // ── B · out 的其它含义 ──────────────────────────────
    {
      group: "B · out 的其它含义",
      head: "go out",
      def: "(of a fire or light) stop burning or shining",
      zh: "(火、灯)熄灭",
      register: "中性",
      when: "<b>火或灯熄灭</b>。",
      note: "手写批注:burn out / I am burnt out(精疲力竭),与本义不同。",
      examples: [
        { en: "When we woke up in the morning, the campfire still hadn't gone out.", zh: "早上我们醒来时,营火还没熄。", hl: "gone out" },
        { en: "The candle went out in the draught.", zh: "蜡烛被穿堂风吹灭了。", hl: "went out" },
        { en: "All the lights suddenly went out.", zh: "所有的灯突然都熄了。", hl: "went out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "clean sb out",
      def: "(informal) steal or take everything someone has",
      zh: "把…洗劫一空、掏空",
      register: "口语",
      when: "<b>把某人的钱财席卷一空</b>。clean sb out。",
      note: "另义:clean sth out = 把(房间、橱柜)彻底清理干净。",
      examples: [
        { en: "The burglars completely cleaned us out.", zh: "窃贼把我们洗劫一空。", hl: "cleaned us out" },
        { en: "That casino weekend cleaned me out.", zh: "那个赌场周末把我口袋掏空了。", hl: "cleaned me out" },
        { en: "Buying the car cleaned out their savings.", zh: "买这辆车花光了他们的积蓄。", hl: "cleaned out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "test sth out",
      def: "try something in a real situation to see how it works or what people think",
      zh: "(在实际中)试用、检验",
      register: "中性",
      when: "<b>把某物放到真实环境里试一试</b>,看效果或反应。test sth out。",
      examples: [
        { en: "We need to test the product out in the market before launching it.", zh: "正式推出前,我们得先把产品拿到市场上试试。", hl: "test the product out" },
        { en: "Let's test the idea out on a few customers first.", zh: "咱们先在几个客户身上试试这个想法。", hl: "test the idea out" },
        { en: "He tested out the new software on a small team.", zh: "他在一个小团队里试用了新软件。", hl: "tested out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "drop out",
      def: "stop doing something before it is finished, or leave a course or activity",
      zh: "中途退出;辍学",
      register: "中性",
      when: "<b>中途退出</b>某活动,或<b>辍学</b>。drop out of。",
      note: "手写批注:drop out from the school(退学)。",
      examples: [
        { en: "The runner dropped out halfway through the marathon.", zh: "那名跑者在马拉松途中退赛了。", hl: "dropped out" },
        { en: "She dropped out of college after one year.", zh: "她读了一年大学就退学了。", hl: "dropped out" },
        { en: "Two teams dropped out of the competition.", zh: "有两支队伍退出了比赛。", hl: "dropped out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "lash out",
      def: "suddenly criticise or attack someone angrily (often + at)",
      zh: "(突然)猛烈抨击、发火",
      register: "中性",
      when: "<b>突然愤怒地抨击或攻击</b>某人。lash out at sb。",
      examples: [
        { en: "Sofia lashed out at me yesterday for wasting her time.", zh: "索菲娅昨天冲我发火,说我浪费了她的时间。", hl: "lashed out at" },
        { en: "He lashed out at the referee after the match.", zh: "赛后他对裁判破口大骂。", hl: "lashed out at" },
        { en: "Tired and stressed, she lashed out at the nearest person.", zh: "又累又紧张的她,冲着离得最近的人就发了火。", hl: "lashed out at" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "yell sth out",
      def: "suddenly shout something loudly, especially to get attention",
      zh: "(大声)喊出、嚷出",
      register: "口语",
      when: "<b>突然大声喊出某句话</b>(常为引起注意)。yell sth out / yell out。",
      examples: [
        { en: "As I walked past the room, I heard someone yell out.", zh: "我经过那个房间时,听见有人大喊了一声。", hl: "yell out" },
        { en: "She yelled out his name across the platform.", zh: "她在站台那头喊出了他的名字。", hl: "yelled out" },
        { en: "Someone yelled out a warning just in time.", zh: "有人及时喊出了一声警告。", hl: "yelled out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "draw sth out",
      def: "make something last longer than is usual or necessary",
      zh: "(故意)拖长、拉长",
      register: "中性",
      when: "<b>把某事拖得比平常或必要的更久</b>。draw sth out。",
      note: "手写批注:The war is drawn out(战事被拖长)。",
      examples: [
        { en: "I wish Thomas wouldn't always draw meetings out by talking so much.", zh: "真希望托马斯别老是话多,把会议拖得没完没了。", hl: "draw meetings out" },
        { en: "Don't draw out the goodbye — just go.", zh: "别把道别拖得那么长——走就是了。", hl: "draw out" },
        { en: "The negotiations were drawn out over several months.", zh: "谈判被拖了好几个月。", hl: "drawn out" }
      ]
    },
    {
      group: "B · out 的其它含义",
      head: "sort sth out",
      def: "solve a problem, or put something disordered into order",
      zh: "解决、整理、搞定",
      register: "中性",
      when: "<b>解决问题,或把乱的东西理顺</b>。sort sth out。",
      syn: "近义:fix · figure out(手写批注)",
      examples: [
        { en: "A management consultant was hired to sort out the personnel problems in the company.", zh: "公司请了管理顾问来解决人事问题。", hl: "sort out" },
        { en: "Give me a day to sort out the paperwork.", zh: "给我一天时间把这些文书理清。", hl: "sort out" },
        { en: "They finally sorted out their differences.", zh: "他们最终化解了分歧。", hl: "sorted out" }
      ]
    }
  ]
};
