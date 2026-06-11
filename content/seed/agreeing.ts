/* Unit 23 · Agreeing — GENERIC topic shape.
   Source: "English Phrasal Verbs in Use (Advanced)", Unit 23.
   English `def`/examples from the book; `zh` and `when` authored.
   Section A came from a meeting dialogue; shown generically. */
import type { UnitSeed } from "./types.ts";

export const agreeing: UnitSeed = {
  id: "agreeing",
  num: "23",
  tag: "达成一致 · Agreeing",
  title: "Agreeing",
  titleZh: "达成一致",
  intro:
    "一组关于<b>达成共识</b>的短语动词:从敲定细节、表示同意,到分歧之后如何被说服、让步、回心转意。",
  // A connected story weaving in all 18 phrases of the unit (authored, not from the book).
  story: {
    title: "故事 · The anniversary dinner",
    text:
      "Organising our department's tenth-anniversary dinner sounded easy — until we tried to [[nail down|nail down]] the details. The budget request [[went through|go through]] without a murmur, and management even [[agreed to|agree to]] giving everyone the next morning off. That, it turned out, was the last easy decision of the month.\n\n" +
      "Priya wanted a rooftop restaurant, but one look at the prices made us [[rule it out|rule out]]. Marco was desperate for karaoke, and half the team spent a week trying to [[talk him out of|talk out of]] it. We couldn't [[come to|come to]] a decision on anything, and for a while it looked as if we would have to [[settle for|settle for]] sandwiches in the big meeting room. Tom announced he wasn't coming at all — though Priya gradually [[talked him round|talk round]], and the promise of a free bar [[won round|win round]] the last few sceptics.\n\n" +
      "The boss was the final obstacle. She hated the idea of live music, but after three of us made the case she slowly [[came round to|come round to]] it; faced with a petition signed by the whole floor, she [[backed down|back down]] over the dress code too, and finally [[bowed to|bow to]] pressure on the date. Even Marco [[gave in|give in]] about the karaoke — on condition he could choose the playlist.\n\n" +
      "In the end we [[hammered out|hammer out]] a compromise everyone could live with and [[settled on|settle on]] the riverside café. When two colleagues fell out over the seating plan, Ana quietly [[smoothed things over|smooth over]] before anyone else noticed. \"So — dinner on the 14th,\" she emailed me. \"Can I [[count you in|count in]]?\" I was happy to [[go along with|go along with]] that."
  },
  phrases: [
    // ── A · 达成一致 ──────────────────────────────
    { group: "A · 达成一致", head: "nail down", def: "make a decision about all the details of something", zh: "敲定、定下(细节)", register: "中性",
      when: "<b>把所有细节定死、敲定</b>。nail sth down。", examples: [
      { en: "So the first thing on the agenda today is nailing down the plan for next month's launch party.", zh: "今天议程的第一项,就是把下月发布派对的方案敲定下来。", hl: "nailing down" },
      { en: "We still need to nail down the exact dates for the trip.", zh: "我们还得把旅行的具体日期敲定下来。", hl: "nail down" },
      { en: "Lawyers spent a week nailing down the terms of the contract.", zh: "律师们花了一周时间敲定合同条款。", hl: "nailing down" }] },
    { group: "A · 达成一致", head: "go through", def: "be officially accepted or approved", zh: "(提案)获批通过", register: "中性",
      when: "<b>(提案、预算等)正式获得批准</b>。", note: "另义:go through = 经历 / 仔细查看;此处指获批。", examples: [
      { en: "Did our budget request go through?", zh: "我们的预算申请通过了吗?", hl: "go through" },
      { en: "The new parking regulations went through without any objections.", zh: "新的停车规定没遇到任何反对就通过了。", hl: "went through" },
      { en: "If the merger goes through, the two offices will combine next year.", zh: "如果合并获批,两处办公室明年就会合并。", hl: "goes through" }] },
    { group: "A · 达成一致", head: "agree to", def: "say yes to a proposal or suggestion", zh: "同意、答应(提议)", register: "中性",
      when: "<b>同意某个提议</b>。agree to sth(对比 agree with sb 赞同某人)。", examples: [
      { en: "A couple of them didn't want to agree to it at first.", zh: "他们当中有几个人起初不愿意答应。", hl: "agree to" },
      { en: "The landlord agreed to a small reduction in the rent.", zh: "房东答应小幅减租。", hl: "agreed to" },
      { en: "I'd never agree to such a tight deadline.", zh: "这么紧的期限我绝不会答应。", hl: "agree to" }] },
    { group: "A · 达成一致", head: "hammer out", def: "reach an agreement after a long, difficult discussion", zh: "(费力)谈拢、敲定", register: "中性",
      when: "<b>经过艰难讨论达成协议</b>。hammer out a deal。", examples: [
      { en: "Jon and I have already hammered out a deal with a venue just down the road.", zh: "乔恩和我已经和路那头的一处场地谈拢了。", hl: "hammered out" },
      { en: "The two sides finally hammered out a ceasefire agreement.", zh: "双方最终艰难谈成了停火协议。", hl: "hammered out" },
      { en: "It took three late-night sessions to hammer out the budget.", zh: "开了三次深夜会议,才把预算敲定下来。", hl: "hammer out" }] },
    { group: "A · 达成一致", head: "rule out", def: "decide that something is not a possibility; exclude it", zh: "排除、否决(可能性)", register: "中性",
      when: "<b>把某个选项排除掉</b>。rule sth out。", examples: [
      { en: "I don't think you should rule it out until you see it.", zh: "我觉得你没亲眼看到之前,先别把它排除掉。", hl: "rule it out" },
      { en: "The doctor ruled out anything serious.", zh: "医生排除了严重疾病的可能。", hl: "ruled out" },
      { en: "We haven't ruled out moving abroad completely.", zh: "我们还没有完全排除移居国外的可能。", hl: "ruled out" }] },
    { group: "A · 达成一致", head: "settle on", def: "decide on or choose something after consideration", zh: "选定、定下", register: "中性",
      when: "<b>(权衡后)选定某个方案</b>。settle on sth。", examples: [
      { en: "We don't have to settle on the venue right now.", zh: "我们不必现在就把场地定下来。", hl: "settle on" },
      { en: "After much discussion, they settled on a name for the company.", zh: "讨论许久后,他们定下了公司的名字。", hl: "settled on" },
      { en: "We finally settled on pale green for the kitchen.", zh: "厨房的颜色,我们最终选定了淡绿色。", hl: "settled on" }] },
    { group: "A · 达成一致", head: "come to", def: "reach a decision or agreement", zh: "达成(协议 / 决定)", register: "中性",
      when: "<b>达成一致或作出决定</b>。come to an agreement / decision。", examples: [
      { en: "We just need to come to an agreement by the end of the week.", zh: "我们只需在本周末前达成一致就行。", hl: "come to an agreement" },
      { en: "The jury took two days to come to a verdict.", zh: "陪审团用了两天才达成裁决。", hl: "come to a verdict" },
      { en: "I hope we can come to some arrangement about the shared driveway.", zh: "希望我们能就共用车道达成某种安排。", hl: "come to some arrangement" }] },
    { group: "A · 达成一致", head: "count in", def: "include someone in an activity or plan (opposite: count out)", zh: "把…算上、算我一个", register: "口语",
      when: "<b>把某人算进某活动</b>。count sb in。反义 count sb out。", examples: [
      { en: "Magda, can I count you in?", zh: "玛格达,算你一个行吗?", hl: "count you in" },
      { en: "If you're organising a beach trip, count me in!", zh: "你们要是组织去海边,算我一个!", hl: "count me in" },
      { en: "Don't count her in for dinner — she's working late.", zh: "晚饭别把她算上,她要加班。", hl: "count her in" }] },
    { group: "A · 达成一致", head: "go along with", def: "agree with someone's idea or opinion", zh: "赞同、配合", register: "中性",
      when: "<b>同意并配合某人的想法</b>。go along with sth / sb。", examples: [
      { en: "Nigel was very keen on having a DJ. Do we all want to go along with that?", zh: "奈杰尔很想请个 DJ,我们都同意这么做吗?", hl: "go along with" },
      { en: "I don't love the plan, but I'll go along with it for now.", zh: "这计划我说不上喜欢,但暂时可以配合。", hl: "go along with" },
      { en: "She tends to go along with whatever her sister suggests.", zh: "她姐姐提什么,她多半都附和。", hl: "go along with" }] },

    // ── B · 分歧后达成一致 ──────────────────────────────
    { group: "B · 分歧后达成一致", head: "win round", def: "persuade someone to agree with you or support you (also: win over)", zh: "(说服)把…争取过来", register: "中性",
      when: "<b>把原本不同意的人说服、争取过来</b>。win sb round / over。", examples: [
      { en: "At first only Tania and I liked the blue design, but we gradually won the others round.", zh: "起初只有塔尼娅和我喜欢蓝色方案,但我们慢慢把其他人争取过来了。", hl: "won the others round" },
      { en: "A tour of the new building won round most of the doubters.", zh: "参观了一趟新楼,大多数怀疑者就被争取过来了。", hl: "won round" },
      { en: "It took months to win her round to the idea of moving.", zh: "花了好几个月,才说服她接受搬家的想法。", hl: "win her round" }] },
    { group: "B · 分歧后达成一致", head: "talk round", def: "persuade someone to change their mind by talking to them", zh: "(劝说)把…说服", register: "中性",
      when: "<b>通过劝说让人改变主意</b>。talk sb round。", examples: [
      { en: "Ben wasn't sure about joining the team at first, but I managed to talk him round in the end.", zh: "本起初对加入团队犹豫不决,但我最终把他说服了。", hl: "talk him round" },
      { en: "He was against the trip until we talked him round.", zh: "他本来反对这次出行,后来被我们说服了。", hl: "talked him round" },
      { en: "See if you can talk your father round before the weekend.", zh: "看你能不能在周末前把你父亲说通。", hl: "talk your father round" }] },
    { group: "B · 分歧后达成一致", head: "give in", def: "finally agree to something after initially refusing", zh: "让步、屈服", register: "中性",
      when: "<b>起初拒绝、最后让步</b>。", examples: [
      { en: "It took a while to persuade my line manager, but she gave in eventually.", zh: "费了一番口舌才说动我的直属经理,她最终让步了。", hl: "gave in" },
      { en: "The children pestered so long that I finally gave in.", zh: "孩子们缠了那么久,我最后还是让步了。", hl: "gave in" },
      { en: "Don't give in just because the negotiation gets uncomfortable.", zh: "别因为谈判一不顺就让步。", hl: "give in" }] },
    { group: "B · 分歧后达成一致", head: "come round to", def: "change your mind and start to agree with something", zh: "(回心转意)开始接受", register: "中性",
      when: "<b>逐渐改变看法、开始认同</b>。come round to sth。", examples: [
      { en: "When we first moved to an open-plan office, I didn't like it. But I've come round to it now.", zh: "刚搬进开放式办公室时我并不喜欢,但现在我已经接受它了。", hl: "come round to" },
      { en: "Dad is slowly coming round to the idea of electric cars.", zh: "爸爸正慢慢接受电动车这个想法。", hl: "coming round to" },
      { en: "Give her time — she'll come round to our way of thinking.", zh: "给她点时间,她会转而认同我们的想法的。", hl: "come round to" }] },
    { group: "B · 分歧后达成一致", head: "back down", def: "admit that you were wrong and abandon a position or claim", zh: "(认错)让步、收回", register: "中性",
      when: "<b>承认错误、放弃原先的主张</b>。back down over / on sth。", examples: [
      { en: "The Board have finally backed down over their proposals to restructure the department.", zh: "董事会终于放弃了重组该部门的提案。", hl: "backed down" },
      { en: "Neither driver would back down, and the row blocked the street.", zh: "两个司机谁也不肯让步,争吵把整条街都堵住了。", hl: "back down" },
      { en: "The company backed down on its plan to cut overtime pay.", zh: "公司收回了削减加班费的计划。", hl: "backed down" }] },
    { group: "B · 分歧后达成一致", head: "bow to", def: "do something you don't want to do because of pressure (also: bend to)", zh: "屈从(于压力)", register: "中性",
      when: "<b>迫于压力做不情愿的事</b>。bow to pressure。也作 bend to。", examples: [
      { en: "The management had to bow to pressure from the unions and gave the pay rise they promised.", zh: "管理层不得不屈从于工会的压力,兑现了承诺的加薪。", hl: "bow to" },
      { en: "The minister bowed to public opinion and resigned.", zh: "部长屈从于舆论,辞了职。", hl: "bowed to" },
      { en: "We won't bow to threats from anyone.", zh: "我们不会向任何人的威胁低头。", hl: "bow to" }] },
    { group: "B · 分歧后达成一致", head: "settle for", def: "accept something that is not your first choice", zh: "(将就)接受、退而求其次", register: "中性",
      when: "<b>接受不那么理想的选择</b>。settle for sth。", examples: [
      { en: "She wanted to work in London originally, but in the end she had to settle for the regional office.", zh: "她原本想在伦敦工作,但最后只能退而求其次去了地方分部。", hl: "settle for" },
      { en: "There were no window seats left, so we settled for the aisle.", zh: "靠窗的座位没了,我们只好将就坐过道。", hl: "settled for" },
      { en: "Don't settle for the first offer they make you.", zh: "别对方一开价你就接受。", hl: "settle for" }] },
    { group: "B · 分歧后达成一致", head: "smooth over", def: "make a disagreement or problem less serious", zh: "(把矛盾)抹平、缓和", register: "中性",
      when: "<b>化解、缓和分歧</b>。smooth things over。", examples: [
      { en: "Two of the team weren't talking for days, but they seem to have smoothed things over this morning.", zh: "团队里有两人好几天没说话,但今早似乎把矛盾缓和下来了。", hl: "smoothed things over" },
      { en: "A quick apology smoothed over the awkwardness.", zh: "一句及时的道歉化解了尴尬。", hl: "smoothed over" },
      { en: "She's good at smoothing over disagreements between clients.", zh: "她很擅长调和客户之间的分歧。", hl: "smoothing over" }] },
    { group: "B · 分歧后达成一致", head: "talk out of", def: "persuade someone not to do something", zh: "劝阻、劝退", register: "中性",
      when: "<b>劝某人不要做某事</b>。talk sb out of sth(反义 talk sb into)。", examples: [
      { en: "He wanted to have a party while his parents were away, but I talked him out of it.", zh: "他想趁父母不在家办派对,但我把他劝住了。", hl: "talked him out of" },
      { en: "I nearly bought the sports car, but my wife talked me out of it.", zh: "我差点买了那辆跑车,被妻子劝住了。", hl: "talked me out of" },
      { en: "Nobody could talk her out of quitting.", zh: "谁也劝不住她辞职。", hl: "talk her out of" }] }
  ]
};
