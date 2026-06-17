/* Unit 16 · Time — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 16.
   Section A is a dialogue (Diana / Paul); Section B is a monologue (a
   teacher before exams). Per the topic model both are shown generically.
   English `def` and examples[0] are from the book; `zh` / `when` and the
   extra examples are authored. Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const time: UnitSeed = {
  id: "time",
  num: "16",
  tag: "时间 · Time",
  title: "Time",
  titleZh: "谈时间",
  intro:
    "一组用来谈<b>时间流逝与安排利用时间</b>的短语动词:时间如何到来、溜走、临近,以及如何留出、腾出、推迟或虚度时间。按「时间流逝 / 安排利用」两组来记。",
  // A connected story weaving in all 17 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · The exam term",
    text:
      "Exam season seemed to [[come around|come around]] faster than ever this year. One moment the term was just beginning; the next, half of it had quietly [[slipped away|slip away]] and the big history paper was suddenly [[coming up|come up]]. I'm ashamed to say the warnings had completely [[passed me by|pass sb by]] — I'd [[frittered away|fritter away]] the early weeks on games and late nights.\n\n" +
      "So I decided to [[pull my socks up|pull your socks up]]. I sat down and [[set aside|set aside]] two solid hours every evening for revision, and I tried to [[free up|free up]] my weekends by [[holding over|hold sth over]] anything that wasn't urgent. I even [[put back|put sth back]] a friend's birthday trip so it wouldn't [[set back|set sth back]] my plans — though I still managed to [[fit in|fit sth in]] a short run each day to [[break up|break sth up]] the studying.\n\n" +
      "My tutor helped to [[hurry along|hurry sth along]] my essay plan in the weeks [[leading up to|lead up to]] the exam. \"Don't [[spin out|spin sth out]] your answers,\" she warned, \"just say what matters.\" By the night before, time was really [[getting on|get on]], but for once I was ready."
  },
  phrases: [
    // ── A · 时间如何流逝 ──────────────────────────────
    {
      group: "A · 时间如何流逝",
      head: "come around",
      def: "(of a regular event) happen at its usual time",
      zh: "(周期性事件)又到来、又轮到",
      register: "中性",
      when: "<b>定期发生的事按时到来</b>。也作 come round。",
      examples: [
        { en: "The sales conference will be coming around soon.", zh: "销售大会很快又要到了。", hl: "coming around" },
        { en: "Payday always seems to come around slowly.", zh: "发薪日好像总是来得很慢。", hl: "come around" },
        { en: "Before we knew it, Christmas had come around again.", zh: "不知不觉,圣诞又转眼到了。", hl: "come around" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "hurry sth along",
      def: "make something happen or progress more quickly",
      zh: "催促、加快(某事)",
      register: "中性",
      when: "<b>催着让某事进展得更快</b>。hurry sb / sth along。",
      examples: [
        { en: "We'd better start hurrying those sales reports along.", zh: "我们最好开始催一催那些销售报告了。", hl: "hurrying those sales reports along" },
        { en: "I tried to hurry things along, but the queue barely moved.", zh: "我想催快一点,可队伍几乎没动。", hl: "hurry things along" },
        { en: "A small bribe hurried the paperwork along.", zh: "一点小贿赂让手续办得快了起来。", hl: "hurried the paperwork along" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "come up",
      def: "be going to happen soon",
      zh: "(事件)即将到来",
      register: "中性",
      when: "<b>某事即将发生</b>。",
      note: "come up 另义:(问题、话题)被提出 / 出现,与此处不同。",
      examples: [
        { en: "I can't believe that the conference is coming up again already.", zh: "真不敢相信,大会这么快又要到了。", hl: "coming up" },
        { en: "With exams coming up, she stopped going out.", zh: "考试临近,她就不再出门了。", hl: "coming up" },
        { en: "There's a long weekend coming up next month.", zh: "下个月有个三天小长假。", hl: "coming up" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "slip away",
      def: "(of time) pass quickly, often without being noticed",
      zh: "(时间)悄悄溜走、飞快流逝",
      register: "中性",
      when: "<b>时间不知不觉飞快流逝</b>。",
      examples: [
        { en: "This last year seems to have slipped away!", zh: "这一年好像一下子就溜走了!", hl: "slipped away" },
        { en: "The afternoon slipped away while we were chatting.", zh: "我们聊着聊着,一个下午就过去了。", hl: "slipped away" },
        { en: "Don't let this chance slip away.", zh: "别让这个机会白白溜走。", hl: "slip away" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "lead up to",
      def: "happen during the period before an event",
      zh: "(在…之前的)前期、临近阶段",
      register: "中性",
      when: "<b>某事件之前的那段时间或铺垫</b>。the period leading up to sth。",
      syn: "用法接近 before(手写批注)",
      examples: [
        { en: "There's an awful lot to do leading up to the conference.", zh: "大会之前有一大堆事要做。", hl: "leading up to" },
        { en: "Tension grew in the days leading up to the election.", zh: "临近大选的那几天,气氛越来越紧张。", hl: "leading up to" },
        { en: "In the weeks leading up to the wedding, she barely slept.", zh: "婚礼前的那几周,她几乎没睡好。", hl: "leading up to" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "break sth up",
      def: "make a period of time more interesting by being different from the rest",
      zh: "(用变化)打破单调、调剂",
      register: "中性",
      when: "<b>用不同的活动给一段时间增添变化</b>、打破单调。break sth up。",
      note: "与 Unit 19 的 break up(散会、人群散去)含义不同。",
      examples: [
        { en: "Oh well, at least it breaks things up and makes life a bit more interesting.", zh: "也好,至少能换换花样,让生活有点意思。", hl: "breaks things up" },
        { en: "A short walk at lunchtime helps to break up the day.", zh: "午间散散步,能把一天调剂一下。", hl: "break up the day" },
        { en: "We broke the long drive up with a stop by the sea.", zh: "我们在海边停了一下,把漫长的车程调剂了一番。", hl: "broke the long drive up" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "pass sb by",
      def: "happen without you noticing it or being affected by it",
      zh: "(机会、时光)与…擦肩而过",
      register: "中性",
      when: "<b>某事发生了,你却毫无觉察或未受影响</b>。sth passes sb by。",
      syn: "Promotion / Life passed me by(手写批注)",
      examples: [
        { en: "Oh, that completely passed me by. It didn't really affect me in my department.", zh: "哦,那件事我压根没注意到,对我们部门也没什么影响。", hl: "passed me by" },
        { en: "She felt that life was passing her by.", zh: "她觉得生活正在与自己擦肩而过。", hl: "passing her by" },
        { en: "The whole trend rather passed me by.", zh: "这整股潮流基本上与我无关、我没赶上。", hl: "passed me by" }
      ]
    },
    {
      group: "A · 时间如何流逝",
      head: "get on",
      def: "(informal, mainly British/Australian) (of time) become late",
      zh: "(时间)不早了、晚了",
      register: "口语",
      when: "<b>时间不早了</b>(英澳口语)。time is getting on。",
      note: "get on 另义:进展(得…)/ 与人相处融洽,与此处不同。",
      examples: [
        { en: "Time's getting on a bit now. I need to head home.", zh: "时间不早了,我得回家了。", hl: "getting on" },
        { en: "It's getting on for midnight — we should go.", zh: "快到午夜了,我们该走了。", hl: "getting on" },
        { en: "The evening was getting on and the guests began to leave.", zh: "夜深了,客人们开始陆续离开。", hl: "getting on" }
      ]
    },

    // ── B · 安排与利用时间 ──────────────────────────────
    {
      group: "B · 安排与利用时间",
      head: "spin sth out",
      def: "make something last longer than necessary",
      zh: "(刻意)拖长、拉长(时间)",
      register: "中性",
      when: "<b>把某事拖得比需要的更久</b>。spin sth out。",
      examples: [
        { en: "Right, I'm not going to spin this out. I just have one thing to say.", zh: "好,我就不啰嗦了,只说一件事。", hl: "spin this out" },
        { en: "He spun out his speech to fill the whole hour.", zh: "他把发言硬撑满了整整一小时。", hl: "spun out" },
        { en: "We spun the money out until the end of the month.", zh: "我们把这点钱撑到了月底。", hl: "spun the money out" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "pull your socks up",
      def: "(idiom) make an effort to improve",
      zh: "(习语)振作起来、加把劲",
      register: "口语",
      when: "<b>振作精神、加把劲把事情做得更好</b>(习语)。",
      note: "这是用短语动词构成的习语(参见 Unit 8 习语)。",
      examples: [
        { en: "You only have two weeks now till the exams start and you're going to have to pull your socks up if you want to pass.", zh: "离考试只剩两周了,想及格你就得加把劲。", hl: "pull your socks up" },
        { en: "The coach told the team to pull their socks up after a poor first half.", zh: "上半场踢得很差,教练让全队振作起来。", hl: "pull their socks up" },
        { en: "If I don't pull my socks up, I'll miss the deadline.", zh: "我要是不抓紧,就要错过截止日期了。", hl: "pull my socks up" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "set aside",
      def: "use time for one purpose and no other",
      zh: "(专门)留出、拨出(时间)",
      register: "中性",
      when: "<b>专门留出一段时间只做某件事</b>。set aside time for sth。",
      examples: [
        { en: "We're going to set aside the next fortnight just for revision.", zh: "我们打算把接下来两周专门留出来复习。", hl: "set aside" },
        { en: "Try to set aside half an hour a day for reading.", zh: "试着每天留出半小时来读书。", hl: "set aside" },
        { en: "She sets aside every Sunday for her family.", zh: "她把每个周日都留给家人。", hl: "sets aside" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "free up",
      def: "make time or money available by not using it another way",
      zh: "腾出、空出(时间 / 钱)",
      register: "中性",
      when: "<b>通过不做别的事,腾出时间或金钱</b>。free up time / money。",
      note: "本词既可用于时间,也可用于钱(书页 Tip)。",
      examples: [
        { en: "We're going to free up some time by cancelling all non-exam lessons like sport.", zh: "我们打算取消体育等非考试课程,腾出一些时间。", hl: "free up" },
        { en: "Automating the reports freed up a whole afternoon.", zh: "把报告自动化后,腾出了一整个下午。", hl: "freed up" },
        { en: "Selling the second car freed up some cash.", zh: "卖掉第二辆车,腾出了一笔现金。", hl: "freed up" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "hold sth over",
      def: "delay something and arrange it for a later date",
      zh: "推迟、延后(到以后)",
      register: "中性",
      when: "<b>把某事延到以后再办</b>。hold sth over。",
      examples: [
        { en: "All school sports matches will be held over until the exams are finished.", zh: "所有校内体育比赛都将推迟到考试结束之后。", hl: "held over" },
        { en: "The committee held the decision over to the next meeting.", zh: "委员会把这项决定延到了下次会议。", hl: "held the decision over" },
        { en: "Can we hold this item over until next week?", zh: "这一项我们能不能延到下周?", hl: "hold this item over" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "fit sth in",
      def: "manage to do something between other activities",
      zh: "(在忙碌中)挤出时间做",
      register: "中性",
      when: "<b>在别的事情之间挤出时间做某事</b>。fit sth in。",
      examples: [
        { en: "We felt that would be better than trying to fit revision in around sport commitments.", zh: "我们觉得这样比在体育安排的夹缝里挤时间复习要好。", hl: "fit revision in" },
        { en: "The doctor can fit you in at four o'clock.", zh: "医生能把你安排在四点。", hl: "fit you in" },
        { en: "I'll try to fit in a workout before dinner.", zh: "我尽量在晚饭前挤出时间锻炼。", hl: "fit in" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "put sth back",
      def: "cause something to happen later than planned",
      zh: "推迟、延期",
      register: "中性",
      when: "<b>使某事比原计划更晚发生</b>。put sth back。",
      examples: [
        { en: "The sports staff agree that putting back these matches won't cause any major problems.", zh: "体育组同意,把这些比赛推迟不会造成什么大问题。", hl: "putting back" },
        { en: "They put the launch back by a month.", zh: "他们把发布推迟了一个月。", hl: "put the launch back" },
        { en: "The meeting's been put back to Friday.", zh: "会议被推迟到了周五。", hl: "put back" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "set sth back",
      def: "make something happen more slowly, or later than it should",
      zh: "拖慢、延误",
      register: "中性",
      when: "<b>使某事进展更慢或更晚</b>。set sth back。",
      note: "set back 另义:set sb back = 花掉某人(多少钱),与此处不同。",
      examples: [
        { en: "We mustn't set schedules back by more than two weeks.", zh: "我们不能把日程拖后两周以上。", hl: "set schedules back" },
        { en: "Bad weather set the building work back by a month.", zh: "恶劣天气把工程拖延了一个月。", hl: "set the building work back" },
        { en: "The injury set his training back considerably.", zh: "这次受伤让他的训练大大延误了。", hl: "set his training back" }
      ]
    },
    {
      group: "B · 安排与利用时间",
      head: "fritter away",
      def: "waste time or money on small, unimportant things",
      zh: "(一点点)浪费、虚度",
      register: "中性",
      when: "<b>把时间或钱零零碎碎地浪费掉</b>。fritter sth away。",
      note: "本词既可用于时间,也可用于钱(书页 Tip)。",
      examples: [
        { en: "No more frittering time away – get down to some serious work.", zh: "别再虚度光阴了——开始踏实干活吧。", hl: "frittering time away" },
        { en: "He frittered away his savings on gadgets he never used.", zh: "他把积蓄一点点浪费在了从不用的小玩意上。", hl: "frittered away" },
        { en: "Don't fritter the whole afternoon away.", zh: "别把一下午都白白耗掉。", hl: "fritter the whole afternoon away" }
      ]
    }
  ]
};
