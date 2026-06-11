/* Phrasebook — UNITS (persona-passage method, faithful to
   "English Phrasal Verbs in Use Advanced", Unit 21: Work).
   A unit has personas; each persona has a `passage` with [[markers]]
   that link to entries in `phrases` (keyed by the exact in-text marker).
   Each phrase: { head(lemma), def(EN gloss), zh, register, when, syn?,
                  examples:[{en,zh,hl}], note? } */
window.UNITS = [
  {
    id: "work",
    num: "21",
    tag: "职场 · Work",
    title: "Work",
    titleZh: "工作百态",
    intro: "六个不同岗位的人,各自讲述对自己工作的感受。每段话里都<b>埋着地道的短语动词</b> —— 点开任意高亮处,看它的意思、什么时候用、以及更多例句。",
    personas: [
      {
        role: "The boss",
        roleZh: "老板",
        avatar: "B", tint: "#3f7d5b",
        passage: "I'll be retiring next year. I already find that I can [[farm out]] tasks I used to do myself. I'm slowly [[easing off]] now so that I can [[step aside]] next year knowing I've left everything in good hands.",
        phrases: {
          "farm out": {
            head: "farm out", def: "give work to other people instead of doing it yourself",
            zh: "把工作分派 / 外包给别人", register: "中性",
            when: "自己不亲自做、把任务<b>分派或外包</b>给别人时,常见于管理者下放工作。",
            examples: [
              { en: "I already find that I can farm out tasks I used to do myself.", zh: "我发现以前自己做的任务,现在可以分派出去了。", hl: "farm out" },
              { en: "We farm out the design work to a small studio.", zh: "我们把设计工作外包给一家小工作室。", hl: "farm out" }
            ]
          },
          "easing off": {
            head: "ease off", def: "start to work less or do things with less energy",
            zh: "放慢节奏、减少投入", register: "中性",
            when: "<b>逐渐减少工作量或强度</b>、放慢节奏时。也可指雨势、疼痛等减弱。",
            examples: [
              { en: "I'm slowly easing off now so that I can step aside next year.", zh: "我正慢慢放慢节奏,好在明年退下来。", hl: "easing off" },
              { en: "The doctor told him to ease off a bit and take more breaks.", zh: "医生让他悠着点、多休息。", hl: "ease off" }
            ]
          },
          "step aside": {
            head: "step aside", def: "leave a job or position, especially so that someone else can do it",
            zh: "让位、退下", register: "中性",
            when: "<b>主动让出职位</b>给他人接手时,带有体面交接的意味。",
            examples: [
              { en: "...so that I can step aside next year knowing I've left everything in good hands.", zh: "……好让我明年放心退下,把一切交到可靠的人手里。", hl: "step aside" },
              { en: "The CEO agreed to step aside for a younger successor.", zh: "CEO 同意让位给更年轻的接班人。", hl: "step aside" }
            ]
          }
        }
      },
      {
        role: "The union representative",
        roleZh: "工会代表",
        avatar: "U", tint: "#2f6db0",
        passage: "We never like to [[call people out]] on strike, but when we do, we have to be determined to [[see it through]] to the end. We have to keep talking constructively and try not to get [[bogged down]] in lengthy negotiations which only prolong the strike.",
        phrases: {
          "call people out": {
            head: "call sb out", def: "order workers to strike",
            zh: "号召(工人)罢工", register: "中性 · 工会语境",
            when: "工会<b>号召工人罢工</b>的专门说法。",
            examples: [
              { en: "We never like to call people out on strike, but sometimes we must.", zh: "我们从不愿号召工人罢工,但有时不得不为。", hl: "call people out" },
              { en: "The union called its members out for two days.", zh: "工会号召会员罢工两天。", hl: "called its members out" }
            ]
          },
          "see it through": {
            head: "see sth through", def: "continue doing a job until it is finished, especially when it is difficult",
            zh: "把(难事)坚持做完", register: "中性",
            when: "<b>把一件(尤其困难的)事坚持到底</b>、善始善终。",
            examples: [
              { en: "When we do, we have to be determined to see it through to the end.", zh: "一旦行动,就得下决心把它坚持到底。", hl: "see it through" },
              { en: "It's a tough project, but I want to see it through.", zh: "这项目很难,但我想把它做完。", hl: "see it through" }
            ]
          },
          "bogged down": {
            head: "get bogged down", def: "(informal) become so involved in the details of something that you cannot achieve anything",
            zh: "陷入细节、动弹不得", register: "口语",
            when: "<b>陷在细节或泥潭里、推进不下去</b>。常搭配 get / be bogged down in。",
            syn: "stuck in · get bogged down in the job",
            examples: [
              { en: "...try not to get bogged down in lengthy negotiations.", zh: "……尽量不要陷在冗长的谈判里。", hl: "bogged down" },
              { en: "Let's not get bogged down in tiny details.", zh: "咱们别纠缠在细枝末节里。", hl: "bogged down" }
            ]
          }
        }
      },
      {
        role: "The assembly-line worker",
        roleZh: "流水线工人",
        avatar: "A", tint: "#c2603a",
        passage: "My job is monotonous. I just [[slog away]] day after day. People like me [[get passed over]] for promotion, so we're not motivated. I often feel like [[packing this job in]] and finding something else. One day I'll just [[hand in]] my notice and go.",
        phrases: {
          "slog away": {
            head: "slog away", def: "(informal) keep working very hard, usually for a long time",
            zh: "长时间埋头苦干", register: "口语",
            when: "<b>长时间、辛苦地埋头干活</b>,带点疲惫无奈。",
            examples: [
              { en: "I just slog away day after day.", zh: "我就这么日复一日地埋头苦干。", hl: "slog away" },
              { en: "She's been slogging away at her thesis for months.", zh: "她埋头写论文好几个月了。", hl: "slogging away" }
            ]
          },
          "get passed over": {
            head: "pass sb over", def: "are not given a higher position because it is given to someone else",
            zh: "(晋升)被跳过、没轮到", register: "中性",
            when: "<b>晋升时被忽略</b>、机会给了别人。常用被动 be / get passed over for。",
            examples: [
              { en: "People like me get passed over for promotion.", zh: "像我这样的人,晋升总是轮不到。", hl: "get passed over" },
              { en: "He was passed over for the manager role again.", zh: "经理这个职位他又一次落了空。", hl: "passed over" }
            ]
          },
          "packing this job in": {
            head: "pack sth in", def: "(informal) stopping doing something, especially a job",
            zh: "不干了、放弃(尤指工作)", register: "口语 · 语气较强",
            when: "<b>干脆放弃某事(尤其辞职)</b>,口语、语气直接。",
            syn: "正式场合改用 hand in your notice",
            examples: [
              { en: "I often feel like packing this job in and finding something else.", zh: "我常想干脆把这工作辞了,另谋出路。", hl: "packing this job in" },
              { en: "He packed in his job to travel.", zh: "他辞了工作去旅行。", hl: "packed in" }
            ]
          },
          "hand in": {
            head: "hand sth in", def: "formally give in your written notice that you are leaving a job; submit",
            zh: "递交(辞呈 / 作业)", register: "中性",
            when: "<b>正式递交</b>辞呈、作业、报告等。hand in your notice = 提交辞呈。",
            examples: [
              { en: "One day I'll just hand in my notice and go.", zh: "总有一天我会递上辞呈,走人。", hl: "hand in my notice" },
              { en: "Please hand in your report by Friday.", zh: "请在周五前交报告。", hl: "hand in" }
            ]
          }
        }
      },
      {
        role: "The administrative assistant",
        roleZh: "行政助理",
        avatar: "Ad", tint: "#7a5cc4",
        passage: "In this job you just have to [[fling yourself into]] your work and [[beaver away]] to get things done each day. I spend a lot of time [[running round]] helping other people. It's not a bad job, and sometimes I'm allowed to [[get off]] early if I've stayed late the day before.",
        phrases: {
          "fling yourself into": {
            head: "fling yourself into", def: "start to spend a lot of your time and energy doing something",
            zh: "全身心投入", register: "中性",
            when: "<b>一头扎进、全力投入</b>某事。",
            syn: "throw / dive yourself into · get into",
            examples: [
              { en: "In this job you just have to fling yourself into your work.", zh: "做这工作就得一头扎进去。", hl: "fling yourself into" },
              { en: "After the breakup she flung herself into her studies.", zh: "分手后她全身心投入学习。", hl: "flung herself into" }
            ]
          },
          "beaver away": {
            head: "beaver away", def: "(informal) work hard at something for a long time, especially something you are writing",
            zh: "(尤指写东西)埋头苦干", register: "口语",
            when: "<b>长时间埋头苦干</b>,尤其写东西。像海狸一样不停忙活。",
            examples: [
              { en: "...and beaver away to get things done each day.", zh: "……每天埋头苦干把事情做完。", hl: "beaver away" },
              { en: "He's been beavering away at the report all morning.", zh: "他整个上午都在埋头写报告。", hl: "beavering away" }
            ]
          },
          "running round": {
            head: "run round / around", def: "be very busy doing many things, especially helping others",
            zh: "团团转地忙活", register: "口语",
            when: "<b>忙得团团转</b>,尤其为别人跑前跑后。",
            examples: [
              { en: "I spend a lot of time running round helping other people.", zh: "我花很多时间跑前跑后帮别人。", hl: "running round" },
              { en: "I've been running around all day sorting things out.", zh: "我一整天都在到处奔忙处理事情。", hl: "running around" }
            ]
          },
          "get off": {
            head: "get off", def: "leave the place where you work, usually at the end of the day",
            zh: "下班离开", register: "口语",
            when: "<b>下班离开公司</b>。也可指出发、脱身。",
            examples: [
              { en: "Sometimes I'm allowed to get off early if I've stayed late the day before.", zh: "如果前一天加了班,有时我能早点下班。", hl: "get off" },
              { en: "What time do you get off work?", zh: "你几点下班?", hl: "get off" }
            ]
          }
        }
      },
      {
        role: "The scientist",
        roleZh: "科研人员",
        avatar: "S", tint: "#2f8a7a",
        passage: "I decided to [[go in to]] research, as I wanted to do something exciting. I don't think I'm [[cut out for]] teaching. University was fun, but now I've got to [[knuckle down]] and build my career.",
        phrases: {
          "go in to": {
            head: "go into", def: "start to work in a particular type of job or area",
            zh: "进入(某行业 / 领域)", register: "中性",
            when: "<b>进入某个行业或领域</b>工作。go into + 职业 / 领域。",
            examples: [
              { en: "I decided to go into research, as I wanted to do something exciting.", zh: "我决定进入科研,因为想做点令人兴奋的事。", hl: "go into research" },
              { en: "She went into teaching after college.", zh: "她大学毕业后进了教育行业。", hl: "went into teaching" }
            ]
          },
          "cut out for": {
            head: "be cut out for", def: "have the right qualities for something, especially a job",
            zh: "天生适合(某工作)", register: "中性",
            when: "<b>天生适合、有做某事的素质</b>。常用否定:not cut out for。",
            examples: [
              { en: "I don't think I'm cut out for teaching.", zh: "我觉得我不是当老师的料。", hl: "cut out for" },
              { en: "He's just not cut out for office life.", zh: "他天生就不适合坐办公室。", hl: "cut out for" }
            ]
          },
          "knuckle down": {
            head: "knuckle down", def: "start to work or study hard, especially if you have not been working very hard before",
            zh: "收心、开始认真努力", register: "中性",
            when: "<b>收心、开始认真努力</b>(之前没怎么用功)。",
            syn: "buckle down(近义)",
            examples: [
              { en: "Now I've got to knuckle down and build my career.", zh: "现在我得沉下心来,好好发展事业。", hl: "knuckle down" },
              { en: "You'll need to knuckle down if you want to pass.", zh: "想及格你就得开始用功了。", hl: "knuckle down" }
            ]
          }
        }
      },
      {
        role: "The office worker",
        roleZh: "普通职员",
        avatar: "O", tint: "#b08436",
        passage: "Well, in this job you just [[plug away]] and hope the day will pass quickly. If I have to write a report, I do what I can to [[cobble something together]], but I don't ever feel that I achieve anything worthwhile. Most people in my position just [[coast along]] and dream of the summer holidays.",
        phrases: {
          "plug away": {
            head: "plug away", def: "(informal) work hard at something for a long time",
            zh: "坚持闷头干", register: "口语",
            when: "<b>不声不响、坚持不懈地干</b>(常指枯燥的活)。",
            syn: "slog away(近义)",
            examples: [
              { en: "In this job you just plug away and hope the day will pass quickly.", zh: "这工作就是闷头干,盼着一天快点过去。", hl: "plug away" },
              { en: "Keep plugging away — you'll get there.", zh: "继续坚持,你会做到的。", hl: "plugging away" }
            ]
          },
          "cobble something together": {
            head: "cobble sth together", def: "make something quickly and not very carefully",
            zh: "草草拼凑", register: "口语",
            when: "<b>匆忙、粗糙地拼凑</b>出某物(报告、方案等),略带贬义。",
            examples: [
              { en: "I do what I can to cobble something together.", zh: "我尽量草草拼凑一份出来。", hl: "cobble something together" },
              { en: "We cobbled together a presentation in an hour.", zh: "我们一小时内赶拼出一份演示。", hl: "cobbled together" }
            ]
          },
          "coast along": {
            head: "coast along", def: "do only the things that you have to do without trying to go faster or be more successful",
            zh: "得过且过、不思进取", register: "口语",
            when: "<b>只做分内最低限度、不求上进</b>地混日子。",
            examples: [
              { en: "Most people in my position just coast along and dream of the summer holidays.", zh: "和我同岗的大多数人都在混日子,盼着暑假。", hl: "coast along" },
              { en: "He's been coasting along at work for years.", zh: "他在工作上得过且过好多年了。", hl: "coasting along" }
            ]
          }
        }
      }
    ]
  }
];

/* Flatten helpers shared by views */
window.unitPhrases = function (u) {
  const out = [];
  if (u.personas) u.personas.forEach(p => Object.entries(p.phrases).forEach(([mark, ph]) => out.push({ ...ph, mark, key: ph.head, role: p.role })));
  return out;
};
window.allPhrases = function () {
  const out = [];
  (window.UNITS || []).forEach(u => out.push(...window.unitPhrases(u)));
  return out;
};
