/* Unit 24 · Understanding and having ideas — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 24.
   English `def` and example sentences are from the book; `zh` and `when`
   are authored. Uncertain readings flagged in `note`. */
import type { UnitSeed } from "./types.ts";

export const understandingIdeas: UnitSeed = {
  id: "understanding-ideas",
  num: "24",
  tag: "理解想法 · Understanding & ideas",
  title: "Understanding and having ideas",
  titleZh: "理解与产生想法",
  intro:
    "一组关于<b>理解、产生与讨论想法</b>的短语动词:从「听懂、领会」,到「灵光一现想出点子」,再到「把想法谈透」。",
  // A connected story weaving in all 20 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · How I survived statistics",
    text:
      "Statistics nearly finished me in my first year. Some classmates seemed to [[pick up|pick up]] each new method the moment it was mentioned, while I took weeks to [[catch on|catch on]]. I [[grappled with|grapple with]] probability for an entire term; the lectures moved too fast for me to [[keep up|keep up]], and however hard I listened, nothing seemed to [[go in|go in]]. What saved me was a patient tutor who could [[break a topic down|break down]] into small, bite-sized steps and then let me [[piece it together|piece together]] again at my own speed. By spring, even the slowest of us had finally [[cottoned on|cotton on]].\n\n" +
      "Then came the group project. Lying awake one night, it [[occurred to|occur to sb]] me that we could model the queues at the campus café. I [[played with|play with]] the idea for a few days without telling anyone, then [[roughed out|rough out]] a one-page plan and brought it to the team. When we printed the first chart, one pattern simply [[leapt out at|leap out at sb]] us: the queue doubled every day it rained.\n\n" +
      "The next two weeks were the best of the year. We sat in the library [[batting ideas around|bat around]], [[bouncing them off|bounce ideas off sb]] each other until something stuck. Lena always [[came at|come at]] the problem from a slightly different angle, and whenever we disagreed we stayed until we had [[thrashed it out|thrash out]]. After we [[talked the whole design through|talk through]] with our tutor, Dev [[hit on|hit on]] the simplest fix of all — count cups, not customers.\n\n" +
      "Writing it up gave me time to [[reflect on|reflect on]] how far I'd come since that first miserable term. The only thing left was to [[think up|think up]] a decent title."
  },
  phrases: [
    // ── A · 理解 ──────────────────────────────
    { group: "A · 理解", head: "pick up", def: "(informal) understand or learn something quickly", zh: "(很快)学会、领会", register: "口语",
      when: "<b>很快学会或领会</b>新东西(口语)。", examples: [
      { en: "Some pupils pick up every new topic very quickly.", zh: "有些学生很快就掌握每个新课题。", hl: "pick up" },
      { en: "Children pick up new languages remarkably fast.", zh: "孩子学新语言快得惊人。", hl: "pick up" },
      { en: "I picked up a few chords just by watching him play.", zh: "光看他弹,我就学会了几个和弦。", hl: "picked up" }] },
    { group: "A · 理解", head: "catch on", def: "begin to understand or realize something", zh: "(逐渐)领会、明白过来", register: "口语",
      when: "<b>开始明白、反应过来</b>(口语)。", examples: [
      { en: "Some pupils pick up topics quickly, while others take longer to catch on.", zh: "有些学生学得快,另一些则要花更久才反应过来。", hl: "catch on" },
      { en: "It took me a while to catch on to how the scoring worked.", zh: "我过了一阵子才弄明白计分规则。", hl: "catch on" },
      { en: "He finally caught on when everyone started laughing.", zh: "大家笑起来时,他才反应过来。", hl: "caught on" }] },
    { group: "A · 理解", head: "grapple with", def: "try hard to deal with or understand something difficult", zh: "努力钻研、应付(难题)", register: "中性",
      when: "<b>费劲地琢磨、应付一个难题</b>,比一般理解更吃力。", examples: [
      { en: "Some have to grapple with the topic for a long time but eventually understand it very well.", zh: "有些人得跟这个课题较劲很久,但最终学得很透。", hl: "grapple with" },
      { en: "Philosophers have grappled with this question for centuries.", zh: "几个世纪以来,哲学家们一直在钻研这个问题。", hl: "grappled with" },
      { en: "She spent the summer grappling with quantum mechanics.", zh: "她整个夏天都在啃量子力学。", hl: "grappling with" }] },
    { group: "A · 理解", head: "go in", def: "(informal) be understood or absorbed", zh: "(知识)被吸收、听进去", register: "口语",
      when: "<b>(口语)内容被理解、记进脑子里</b>。it goes in。", examples: [
      { en: "Some find it goes in better if they are presented with the whole picture from the beginning.", zh: "有些人觉得,一开始就看到全貌,知识更容易听进去。", hl: "goes in" },
      { en: "I read the chapter three times, but nothing went in.", zh: "那一章我读了三遍,什么也没记进去。", hl: "went in" },
      { en: "Facts go in better when they're tied to a story.", zh: "知识点和故事联系起来,才更容易听进去。", hl: "go in" }] },
    { group: "A · 理解", head: "break down", def: "divide something into smaller parts", zh: "(把内容)拆解成小块", register: "中性",
      when: "<b>把复杂内容拆成小块</b>便于理解。break sth down。", examples: [
      { en: "Others like me to break a topic down into small bite-sized chunks.", zh: "另一些人喜欢老师把课题拆成一小块一小块。", hl: "break a topic down" },
      { en: "The coach broke the routine down into five simple moves.", zh: "教练把整套动作拆成五个简单步骤。", hl: "broke the routine down" },
      { en: "Try breaking the problem down before you panic.", zh: "先把问题拆开来看,别急着慌。", hl: "breaking the problem down" }] },
    { group: "A · 理解", head: "piece together", def: "gradually understand something by combining separate pieces of information", zh: "(逐块)拼凑理解", register: "中性",
      when: "<b>把零散信息一块块拼起来弄懂</b>。piece sth together。", examples: [
      { en: "Then they gradually piece it all together for themselves.", zh: "然后他们自己慢慢把它们拼凑起来理解。", hl: "piece it all together" },
      { en: "Detectives pieced together the events of that night from witness accounts.", zh: "侦探根据证人的叙述,拼出了当晚事件的全貌。", hl: "pieced together" },
      { en: "From old letters she pieced together her grandmother's story.", zh: "她从旧信件里拼凑出了祖母的往事。", hl: "pieced together" }] },
    { group: "A · 理解", head: "keep up", def: "manage to stay level with something presented quickly; not fall behind", zh: "跟上(进度)", register: "中性",
      when: "<b>跟上讲解或进度、不掉队</b>。keep up with sth。", examples: [
      { en: "Some find it harder than others to keep up with what I tell them.", zh: "有些人比别人更难跟上我讲的内容。", hl: "keep up" },
      { en: "He speaks so fast that I can't keep up.", zh: "他说得太快,我根本跟不上。", hl: "keep up" },
      { en: "She reads journals every week to keep up with new research.", zh: "她每周读期刊,以跟上最新研究。", hl: "keep up" }] },
    { group: "A · 理解", head: "cotton on", def: "(informal) begin to understand or realize something", zh: "(口语)恍然领会、开窍", register: "口语",
      when: "<b>(口语)终于明白过来、开窍</b>。", examples: [
      { en: "Although some find it harder than others, everyone usually cottons on in the end.", zh: "尽管有人觉得更难,但大家通常最后都会开窍。", hl: "cottons on" },
      { en: "It was ages before I cottoned on to what the joke meant.", zh: "我过了好久才琢磨明白那个笑话的意思。", hl: "cottoned on" },
      { en: "Once the students cotton on to the pattern, the exercise is easy.", zh: "学生们一旦看出规律,这个练习就简单了。", hl: "cotton on" }] },

    // ── B · 产生想法 ──────────────────────────────
    { group: "B · 产生想法", head: "occur to sb", def: "come into your mind", zh: "(突然)想到、浮现脑海", register: "中性",
      when: "<b>某个念头突然出现在脑海里</b>。sth occurs to sb。", examples: [
      { en: "It suddenly occurred to me that he hadn't told me his name.", zh: "我突然想到他还没告诉我他的名字。", hl: "occurred to" },
      { en: "Didn't it occur to you to phone first?", zh: "你就没想到先打个电话吗?", hl: "occur to" },
      { en: "It never occurred to me that she might be nervous too.", zh: "我从没想到,她可能也紧张。", hl: "occurred to" }] },
    { group: "B · 产生想法", head: "hit on", def: "have a good idea, especially one that solves a problem", zh: "(忽然)想出(好点子)", register: "中性",
      when: "<b>灵光一现、想到一个好主意</b>。hit on / hit upon an idea。", examples: [
      { en: "We weren't sure how to celebrate our anniversary until James hit on the idea of spending the weekend in Paris.", zh: "我们本来不知道怎么庆祝周年,后来詹姆斯想到去巴黎过周末。", hl: "hit on" },
      { en: "After months of failures, they hit on the right formula.", zh: "失败了几个月后,他们终于想出了正确的配方。", hl: "hit on" },
      { en: "She hit on a clever way to reuse the packaging.", zh: "她想到了一个重复利用包装的妙法。", hl: "hit on" }] },
    { group: "B · 产生想法", head: "rough out", def: "write or draw the outline of an idea without going into details", zh: "草拟、勾勒(大致轮廓)", register: "中性",
      when: "<b>粗略地拟出框架</b>,先不抠细节。rough sth out。", examples: [
      { en: "The novelist said he always roughs out several plots before he decides which one to use.", zh: "这位小说家说,他总是先草拟好几个情节,再决定用哪一个。", hl: "roughs out" },
      { en: "The architect roughed out a floor plan on a napkin.", zh: "建筑师在餐巾纸上勾出了平面图的草稿。", hl: "roughed out" },
      { en: "Rough out your argument first, then fill in the evidence.", zh: "先把论点的框架草拟出来,再补充论据。", hl: "Rough out" }] },
    { group: "B · 产生想法", head: "reflect on", def: "(slightly formal) think very hard about something", zh: "认真思考、反思", register: "中性",
      when: "<b>(略正式)就某事深入思考、反省</b>。", examples: [
      { en: "Can you give me some time to reflect on what happened?", zh: "能给我点时间好好想想发生的事吗?", hl: "reflect on" },
      { en: "The retreat gave us a quiet weekend to reflect on the year.", zh: "这次静修给了我们一个安静的周末来回顾这一年。", hl: "reflect on" },
      { en: "He paused to reflect on what the decision would mean for his family.", zh: "他停下来,认真思考这个决定对家人意味着什么。", hl: "reflect on" }] },
    { group: "B · 产生想法", head: "think up", def: "invent or create an idea using your imagination", zh: "想出、构思(点子)", register: "中性",
      when: "<b>动脑筋构思出一个主意</b>。think sth up。", note: "书页该格标签略含糊(think over / think up),按例句取 think up,待确认。", examples: [
      { en: "Can you help me think up an idea for my presentation?", zh: "你能帮我想一个演讲的点子吗?", hl: "think up" },
      { en: "We need to think up a better excuse than that.", zh: "我们得想个比这更像样的借口。", hl: "think up" },
      { en: "She's brilliant at thinking up games for the kids.", zh: "她特别会给孩子们想出新游戏。", hl: "thinking up" }] },
    { group: "B · 产生想法", head: "play with", def: "consider an idea but usually not act on it; not be serious about it", zh: "(只是)琢磨、玩味(想法)", register: "中性",
      when: "<b>把某个想法拿来想想,但未必当真去做</b>。play with an idea。", examples: [
      { en: "The headteacher played with the idea of introducing compulsory lessons in good manners.", zh: "校长曾琢磨过开设礼仪必修课的想法(但没真去做)。", hl: "played with" },
      { en: "I'm playing with the idea of cycling to work.", zh: "我在琢磨要不要骑车上班(还没定)。", hl: "playing with" },
      { en: "For years he played with the idea of opening a café, but never did.", zh: "多年来他一直玩味着开咖啡馆的念头,却从未付诸行动。", hl: "played with" }] },
    { group: "B · 产生想法", head: "leap out at sb", def: "be immediately obvious", zh: "(一下子)显而易见、跳出来", register: "中性",
      when: "<b>答案或特点一下子映入眼帘</b>。leap / leapt out at sb。", examples: [
      { en: "I couldn't solve the crossword clue last night, but this morning the answer leapt out at me.", zh: "昨晚我没解出那个填字线索,今早答案却一下子蹦了出来。", hl: "leapt out at" },
      { en: "One typo leapt out at me as soon as I opened the page.", zh: "一打开页面,一个错字就跳进了我的眼里。", hl: "leapt out at" },
      { en: "Her name leapt out at him from the list of winners.", zh: "获奖名单上,她的名字一下子映入他的眼帘。", hl: "leapt out at" }] },

    // ── C · 讨论想法 ──────────────────────────────
    { group: "C · 讨论想法", head: "talk through", def: "discuss something thoroughly in order to understand it better", zh: "把…谈透、捋一遍", register: "中性",
      when: "<b>把一件事彻底谈一遍以便理清</b>。talk sth through。", examples: [
      { en: "Whenever I have a problem at work, I talk it through with my supervisor.", zh: "每次工作上遇到问题,我都会和主管把它捋一遍。", hl: "talk it through" },
      { en: "Let's talk the proposal through before we send it.", zh: "发出去之前,咱们把提案捋一遍。", hl: "talk the proposal through" },
      { en: "We talked everything through and felt much better afterwards.", zh: "我们把所有事都谈开了,之后心里舒服多了。", hl: "talked everything through" }] },
    { group: "C · 讨论想法", head: "come at", def: "approach a problem in a particular way", zh: "(从某角度)切入、应对(问题)", register: "中性",
      when: "<b>从某个角度去看待、处理问题</b>。come at sth from an angle。", examples: [
      { en: "She always comes at problems from a slightly different angle.", zh: "她总能从一个略有不同的角度切入问题。", hl: "comes at" },
      { en: "Let's come at the problem from the customer's point of view.", zh: "我们从客户的角度来切入这个问题吧。", hl: "come at" },
      { en: "The book comes at familiar history from an unusual angle.", zh: "这本书从一个不寻常的角度切入大家熟悉的历史。", hl: "comes at" }] },
    { group: "C · 讨论想法", head: "thrash out", def: "discuss something thoroughly in order to find a solution", zh: "(经讨论)弄清、敲定", register: "中性",
      when: "<b>通过反复讨论把问题谈出个结果</b>。thrash sth out。", examples: [
      { en: "Thrashing an issue out with her helps me to see the problem more clearly.", zh: "和她把问题反复讨论一番,能帮我更清楚地看清问题。", hl: "thrashing an issue out" },
      { en: "The roommates sat down to thrash out a cleaning rota.", zh: "室友们坐下来,把值日表的事讨论出了个结果。", hl: "thrash out" },
      { en: "Differences over money were thrashed out at the family meeting.", zh: "钱上的分歧,在家庭会议上被掰扯清楚了。", hl: "thrashed out" }] },
    { group: "C · 讨论想法", head: "bounce ideas off sb", def: "(informal) tell someone about an idea to find out what they think of it", zh: "(向人)抛想法征求意见", register: "口语",
      when: "<b>把点子说给别人听,看对方反应</b>。bounce ideas off sb。", examples: [
      { en: "We bounce our ideas off each other until we find something that we all like.", zh: "我们互相抛想法,直到找到大家都满意的为止。", hl: "bounce our ideas off" },
      { en: "I like working in a team because I can bounce ideas off my colleagues.", zh: "我喜欢团队工作,因为可以向同事抛想法、听反馈。", hl: "bounce ideas off" },
      { en: "Can I bounce a couple of ideas off you over coffee?", zh: "喝咖啡的时候,我能跟你说几个想法、听听你的意见吗?", hl: "bounce a couple of ideas off" }] },
    { group: "C · 讨论想法", head: "bat around", def: "(slightly informal) discuss different ways of dealing with something", zh: "(你一言我一语)讨论、碰想法", register: "口语",
      when: "<b>大家七嘴八舌地讨论各种办法</b>。bat ideas around。", examples: [
      { en: "We find that batting our ideas around like this is really productive and results in great campaigns.", zh: "像这样你一言我一语地碰想法很有成效,能促成很棒的方案。", hl: "batting our ideas around" },
      { en: "We batted around a few names for the puppy before choosing Biscuit.", zh: "给小狗起名前,我们七嘴八舌讨论了好几个名字,最后选了 Biscuit。", hl: "batted around" },
      { en: "The writers spent the afternoon batting story ideas around.", zh: "编剧们花了一下午,互相碰故事点子。", hl: "batting story ideas around" }] }
  ]
};
