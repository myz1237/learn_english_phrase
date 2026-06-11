/* Unit 22 · Supporting and opposing people or views — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 22.
   English `def`/examples from the book; `zh` and `when` authored.
   Section A came from an interview (MP/interviewer); per the topic model
   it's shown generically. Uncertain readings flagged in `note`. */
import type { UnitSeed } from "./types.ts";

export const supportingOpposing: UnitSeed = {
  id: "supporting-opposing",
  num: "22",
  tag: "立场态度 · Support & oppose",
  title: "Supporting and opposing people or views",
  titleZh: "支持与反对",
  intro:
    "一组用来表达<b>支持、反对与改变立场</b>的短语动词:站队、表态、让步、倒戈,以及为某人某事撑腰。",
  // A connected story weaving in all 16 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · The battle for the village green",
    text:
      "When the council announced plans to turn the village green into a car park, the whole town suddenly had to decide what it [[stood for|stand for]]. The local paper [[came out against|come out against]] the scheme within a week. Old Mrs Price, who [[swore by|swear by]] her morning walk across the grass, declared she [[wouldn't hear of|hear of]] losing it and chained her bicycle to the noticeboard in protest.\n\n" +
      "Opinion split fast. The shopkeepers [[sided with|side with]] the council — more parking meant more customers — while the school and the cricket club [[sided against|side against]] it. The mayor refused to commit, saying only that he would [[defer to|defer to]] the planning experts and [[go with|go with]] whatever they recommended. One young councillor who had quietly been [[leaning towards|lean towards]] the scheme was spotted at the protest camp a month later, [[egged on|egg on]] by his teenage daughters; by spring he had [[crossed over|cross over]] to the campaign completely.\n\n" +
      "At the final public meeting the hall was packed. The crowd [[cheered on|cheer on]] every speaker who [[stuck up for|stick up for]] the green, and a surprise donation from a retired farmer [[buoyed up|buoy up]] the campaigners just when their funds were running dry. The council [[stuck by|stick by]] its proposal for one more stubborn month — and then, facing a petition with two thousand names, quietly [[caved in|cave in]]. The green stayed."
  },
  phrases: [
    // ── A · 表态与立场(访谈) ──────────────────────────────
    { group: "A · 表态与立场", head: "come out against", def: "state publicly that you oppose an issue", zh: "公开表示反对", register: "中性",
      when: "<b>公开表明反对某事</b>。反义 come out in favour of(公开支持)。", examples: [
      { en: "Recently you seem to have come out against those in your party who want stronger anti-terrorist laws.", zh: "近来你似乎公开反对了党内主张加强反恐法的人。", hl: "come out against" },
      { en: "Several senior doctors have come out against the new health bill.", zh: "几位资深医生公开表示反对新的医疗法案。", hl: "come out against" },
      { en: "The mayor finally came out against the airport expansion.", zh: "市长最终公开表态反对机场扩建。", hl: "came out against" }] },
    { group: "A · 表态与立场", head: "side with", def: "support one person or group in an argument", zh: "站在…一边、支持", register: "中性",
      when: "<b>在争论中站在某方</b>。side with sb。反义 side against。", examples: [
      { en: "Those who side with the terrorists or support them in any way must be opposed.", zh: "凡是站在恐怖分子一边、或以任何方式支持他们的人,都必须反对。", hl: "side with" },
      { en: "Whenever we argue, my mother always sides with my brother.", zh: "每次争吵,母亲总是站在我弟弟那边。", hl: "sides with" },
      { en: "The court sided with the employees in the end.", zh: "法庭最终站在了员工一边。", hl: "sided with" }] },
    { group: "A · 表态与立场", head: "stick by", def: "support a person or group, or hold to a position, especially in difficulty", zh: "坚定支持、坚持(立场)", register: "中性",
      when: "<b>在困难或争论中坚定支持某人,或坚持自己的立场</b>。", examples: [
      { en: "I haven't changed my position at all, and I stick by what I've always said.", zh: "我的立场丝毫未变,我坚持我一贯的说法。", hl: "stick by" },
      { en: "Her friends stuck by her throughout the scandal.", zh: "丑闻期间,朋友们始终坚定地支持她。", hl: "stuck by" },
      { en: "I stick by every word of my original statement.", zh: "我最初声明里的每一个字,我都坚持。", hl: "stick by" }] },
    { group: "A · 表态与立场", head: "cave in", def: "finally agree to something you were against, after pressure", zh: "(顶不住压力)让步、屈服", register: "中性",
      when: "<b>在压力下最终妥协、屈服</b>。", examples: [
      { en: "You said you were determined to reduce higher fuel charges, but you seem to have caved in.", zh: "你曾说决心要降低较高的燃油费,可你似乎已经让步了。", hl: "caved in" },
      { en: "After weeks of protests, the management caved in to the strikers' demands.", zh: "抗议数周后,管理层向罢工者的要求屈服了。", hl: "caved in" },
      { en: "Dad caved in and let us keep the puppy.", zh: "爸爸顶不住,让了步,同意我们留下小狗。", hl: "caved in" }] },
    { group: "A · 表态与立场", head: "defer to", def: "accept someone's opinion or decision because you respect it", zh: "(出于尊重)听从、遵从", register: "中性",
      when: "<b>尊重并采纳他人(权威)的意见</b>。defer to sb / sth。", examples: [
      { en: "We are a listening party and we always defer to expert opinion.", zh: "我们是善于倾听的政党,一向尊重并采纳专家意见。", hl: "defer to" },
      { en: "On legal questions I always defer to my colleague's judgement.", zh: "在法律问题上,我一向听从同事的判断。", hl: "defer to" },
      { en: "The committee deferred to the engineers on all technical matters.", zh: "在所有技术问题上,委员会都遵从工程师的意见。", hl: "deferred to" }] },
    { group: "A · 表态与立场", head: "go with", def: "accept or choose an idea or plan", zh: "采纳、按…来", register: "中性",
      when: "<b>采用某个意见或方案</b>。go with sth。", examples: [
      { en: "We were advised it would have a negative effect, so we have decided to go with that advice.", zh: "有人提醒说这会有负面影响,所以我们决定采纳这个意见。", hl: "go with" },
      { en: "Let's go with the cheaper option and review it next year.", zh: "我们就按便宜的方案来,明年再评估。", hl: "go with" },
      { en: "In the end they went with my suggestion of an outdoor venue.", zh: "最后他们采纳了我办在户外的建议。", hl: "went with" }] },
    { group: "A · 表态与立场", head: "lean towards", def: "support or begin to support a particular set of ideas or party", zh: "(立场)倾向于", register: "中性",
      when: "<b>逐渐倾向于某种主张或党派</b>。lean towards sth。", examples: [
      { en: "You seem to be leaning increasingly towards more conservative policies.", zh: "你似乎越来越倾向于更保守的政策。", hl: "leaning increasingly towards" },
      { en: "I'm leaning towards accepting the job in Manchester.", zh: "我倾向于接受曼彻斯特的那份工作。", hl: "leaning towards" },
      { en: "Voters in this region have always leant towards the smaller parties.", zh: "这个地区的选民一向倾向于小党派。", hl: "leant towards" }] },
    { group: "A · 表态与立场", head: "cross over", def: "start to support a different, often opposing, person or group", zh: "(立场)倒戈、转投", register: "中性",
      when: "<b>转而支持对立的一方</b>。cross over to。", examples: [
      { en: "Is there any truth in the rumour that you are about to cross over to the Conservative Party?", zh: "传言说你即将转投保守党,这有几分真?", hl: "cross over" },
      { en: "Two MPs crossed over to the opposition during the crisis.", zh: "危机期间,两名议员倒戈到了反对党。", hl: "crossed over" },
      { en: "She crossed over to the rival firm after the takeover.", zh: "收购之后,她转投了竞争对手公司。", hl: "crossed over" }] },
    { group: "A · 表态与立场", head: "stand for", def: "support a particular set of values or ideas", zh: "代表、主张(价值观)", register: "中性",
      when: "<b>代表、坚持某种价值观</b>。stand for sth。", examples: [
      { en: "The values I stand for are liberal values.", zh: "我所秉持的是自由主义的价值观。", hl: "stand for" },
      { en: "Our charity stands for fairness and openness.", zh: "我们的慈善机构主张公平与公开。", hl: "stands for" },
      { en: "He asked what the party actually stood for these days.", zh: "他问这个党如今究竟主张什么。", hl: "stood for" }] },
    { group: "A · 表态与立场", head: "side against", def: "oppose a person or group in an argument", zh: "站在…对立面、反对", register: "中性",
      when: "<b>在争论中与某方作对</b>。side against sb。反义 side with。", examples: [
      { en: "I see no point in siding against the Conservative Party on those issues where I agree with them.", zh: "在我与保守党意见一致的问题上,我看不出反对他们有什么意义。", hl: "siding against" },
      { en: "The other directors sided against her at the board meeting.", zh: "董事会上,其他董事都站在了她的对立面。", hl: "sided against" },
      { en: "Don't side against me in front of the children.", zh: "别当着孩子们的面跟我作对。", hl: "side against" }] },

    // ── B · 报道里的支持与反对 ──────────────────────────────
    { group: "B · 报道里的支持与反对", head: "egg on", def: "encourage someone to do something, especially something foolish", zh: "怂恿、撺掇", register: "中性",
      when: "<b>怂恿某人去做某事(常指傻事)</b>。egg sb on。", syn: "近义:instigate(教唆)", examples: [
      { en: "A 17-year-old boy claims he was egged on by his friends to steal cars.", zh: "一名 17 岁男孩声称,他是被朋友怂恿去偷车的。", hl: "egged on" },
      { en: "Egged on by the crowd, he climbed onto the statue.", zh: "在人群的怂恿下,他爬上了雕像。", hl: "Egged on" },
      { en: "His classmates egged him on to ask the question.", zh: "同学们撺掇他去提那个问题。", hl: "egged him on" }] },
    { group: "B · 报道里的支持与反对", head: "cheer on", def: "shout encouragement to someone in a competition", zh: "(呐喊)为…加油", register: "中性",
      when: "<b>为参赛者呐喊助威</b>。cheer sb on。", examples: [
      { en: "Cheered on by her supporters, Sadie Hinds beat the world record.", zh: "在支持者的助威声中,萨迪·欣兹打破了世界纪录。", hl: "Cheered on" },
      { en: "Thousands lined the streets to cheer the runners on.", zh: "数千人沿街为跑者加油助威。", hl: "cheer the runners on" },
      { en: "We went along to cheer on the school team.", zh: "我们专程去为校队呐喊助威。", hl: "cheer on" }] },
    { group: "B · 报道里的支持与反对", head: "swear by", def: "believe that something is very effective and reliable", zh: "笃信、极力推崇", register: "中性",
      when: "<b>对某物深信不疑、极力推荐</b>(觉得特别管用)。swear by sth。", note: "注意 swear at = 咒骂,与 swear by 含义不同(书页边注)。", examples: [
      { en: "She swears by a glass of hot milk with a little sugar every night before bed.", zh: "她笃信每晚睡前喝一杯加少许糖的热牛奶。", hl: "swears by" },
      { en: "My grandfather swears by ginger tea for a cold.", zh: "我祖父笃信姜茶能治感冒。", hl: "swears by" },
      { en: "She swears by this old sewing machine — she'd never replace it.", zh: "她对这台旧缝纫机推崇备至,绝不肯换。", hl: "swears by" }] },
    { group: "B · 报道里的支持与反对", head: "hear of", def: "allow something to happen (used in the negative: not hear of)", zh: "(否定)不允许、不答应", register: "中性",
      when: "<b>常用否定 won't hear of,表示坚决不允许</b>。", examples: [
      { en: "Mr West said the club would not hear of letting children attend the event.", zh: "韦斯特先生说,俱乐部决不允许让孩子参加这次活动。", hl: "not hear of" },
      { en: "I offered to pay for the meal, but she wouldn't hear of it.", zh: "我提出请客,她却坚决不答应。", hl: "hear of" },
      { en: "His parents wouldn't hear of him leaving school at sixteen.", zh: "他父母决不允许他十六岁就辍学。", hl: "hear of" }] },
    { group: "B · 报道里的支持与反对", head: "buoy up", def: "make someone feel more cheerful or confident; support and keep going", zh: "提振、鼓舞;支撑", register: "中性",
      when: "<b>给人打气、提振士气</b>;也指资金等的支撑。buoy sb / sth up。", examples: [
      { en: "The peace campaign was buoyed up recently by a donation of €1,000,000.", zh: "这场和平运动近来因一笔 100 万欧元的捐款而备受鼓舞。", hl: "buoyed up" },
      { en: "The team was buoyed up by their win in the first match.", zh: "首场比赛的胜利让全队士气大振。", hl: "buoyed up" },
      { en: "Letters from listeners buoyed her up during the difficult months.", zh: "在那段艰难的日子里,听众的来信给了她支撑和鼓舞。", hl: "buoyed her up" }] },
    { group: "B · 报道里的支持与反对", head: "stick up for", def: "(informal) defend or support someone or something important", zh: "(口语)为…挺身辩护", register: "口语",
      when: "<b>(口语)替某人或某事撑腰、辩护</b>。stick up for sb / sth。", examples: [
      { en: "He was someone who always stuck up for the rights of the poor and the homeless.", zh: "他总是为穷人和无家可归者的权利挺身而出。", hl: "stuck up for" },
      { en: "Thanks for sticking up for me in the meeting today.", zh: "谢谢你今天在会上为我说话。", hl: "sticking up for" },
      { en: "You have to learn to stick up for yourself at school.", zh: "在学校,你得学会为自己挺身而出。", hl: "stick up for" }] }
  ]
};
