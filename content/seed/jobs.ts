/* Vocabulary topic · Jobs & professions — GENERIC topic shape (nouns).
   Authored content: common job nouns grouped by sector. For nouns the
   `register` pill shows countability (these are all 可数); `when` carries
   where they work / what they do. British/American variants go in `syn`.
   examples[*].hl highlights the noun as it appears. Connected story authored. */
import type { UnitSeed } from "./types.ts";

export const jobs: UnitSeed = {
  id: "jobs",
  num: "49",
  tag: "职业 · Jobs",
  title: "Jobs & professions",
  titleZh: "职业与行当",
  intro:
    "一组<b>常见职业名词</b>:急救医疗、技术工种、专业与办公。都是<b>可数名词</b>,小标签里写清楚他们<b>在哪儿工作、做什么</b>。",
  story: {
    title: "故事 · The street after the storm",
    text:
      "When a bad storm hit our street, it took half the town's workforce to put things right. The emergency services came first: a [[paramedic|paramedic]] treated a neighbour who had fallen, two [[firefighters|firefighter]] cleared a fallen tree, and at the hospital a [[surgeon|surgeon]] set the old man's broken arm while a [[nurse|nurse]] stayed with him. Even the local [[vet|vet]] was called out to a frightened dog trapped in a shed.\n\n" +
      "Repairs came next. A [[plumber|plumber]] fixed the burst pipes, an [[electrician|electrician]] restored the power, a [[mechanic|mechanic]] towed away a flooded car, a [[carpenter|carpenter]] rebuilt the broken fences, and a [[builder|builder]] patched the damaged roofs.\n\n" +
      "Sorting out the paperwork took longer. We saw a [[lawyer|lawyer]] about the insurance, an [[accountant|accountant]] about the costs, and an [[architect|architect]] who drew up plans for a stronger porch. A young [[journalist|journalist]] wrote the whole story up for the local paper, an [[engineer|engineer]] inspected the bridge, and back at the council offices a friendly [[receptionist|receptionist]] booked all our appointments."
  },
  phrases: [
    // ── 医疗与急救 Health & emergency ──────────────────────────────
    {
      group: "医疗与急救 · Health & emergency",
      head: "surgeon",
      def: "a doctor who is trained to perform operations",
      zh: "外科医生",
      register: "可数",
      when: "<b>可数名词</b>。在医院做手术(operate / perform surgery)。",
      examples: [
        { en: "The surgeon operated for six hours.", zh: "这位外科医生做了六个小时手术。", hl: "surgeon" },
        { en: "She trained as a heart surgeon.", zh: "她受训成为心脏外科医生。", hl: "surgeon" },
        { en: "A team of surgeons saved his life.", zh: "一组外科医生救了他的命。", hl: "surgeons" }
      ]
    },
    {
      group: "医疗与急救 · Health & emergency",
      head: "nurse",
      def: "a person trained to care for sick or injured people, usually in a hospital",
      zh: "护士",
      register: "可数",
      when: "<b>可数名词</b>。在医院或诊所照护病人。",
      examples: [
        { en: "The nurse took my temperature.", zh: "护士给我量了体温。", hl: "nurse" },
        { en: "She works as a nurse on the children's ward.", zh: "她在儿科病房当护士。", hl: "nurse" },
        { en: "The nurses work long shifts.", zh: "护士们要上很长的班。", hl: "nurses" }
      ]
    },
    {
      group: "医疗与急救 · Health & emergency",
      head: "paramedic",
      def: "a person trained to give medical help, especially in an ambulance",
      zh: "急救员、护理人员",
      register: "可数",
      when: "<b>可数名词</b>。随救护车(ambulance)出诊,做现场急救。",
      examples: [
        { en: "The paramedic treated her at the scene.", zh: "急救员在现场为她做了处理。", hl: "paramedic" },
        { en: "Two paramedics lifted him onto the stretcher.", zh: "两名急救员把他抬上了担架。", hl: "paramedics" },
        { en: "Call a paramedic — he's not breathing.", zh: "快叫急救员——他没呼吸了。", hl: "paramedic" }
      ]
    },
    {
      group: "医疗与急救 · Health & emergency",
      head: "firefighter",
      def: "a person whose job is to put out fires and help in emergencies",
      zh: "消防员",
      register: "可数",
      when: "<b>可数名词</b>。灭火、救援。中性说法,取代旧词 fireman。",
      examples: [
        { en: "The firefighter carried the child to safety.", zh: "消防员把孩子抱到了安全的地方。", hl: "firefighter" },
        { en: "Firefighters battled the blaze all night.", zh: "消防员们整夜与大火搏斗。", hl: "Firefighters" },
        { en: "She always wanted to be a firefighter.", zh: "她一直想当消防员。", hl: "firefighter" }
      ]
    },
    {
      group: "医疗与急救 · Health & emergency",
      head: "vet",
      def: "a doctor who treats sick or injured animals",
      zh: "兽医",
      register: "可数",
      when: "<b>可数名词</b>。全称 veterinary surgeon / veterinarian。",
      examples: [
        { en: "We took the cat to the vet.", zh: "我们把猫带去看兽医。", hl: "vet" },
        { en: "The vet gave the dog an injection.", zh: "兽医给狗打了一针。", hl: "vet" },
        { en: "She's a vet at a small animal clinic.", zh: "她在一家小动物诊所当兽医。", hl: "vet" }
      ]
    },

    // ── 技术工种 Skilled trades ──────────────────────────────
    {
      group: "技术工种 · Skilled trades",
      head: "plumber",
      def: "a person who fits and repairs water pipes, taps and toilets",
      zh: "水管工",
      register: "可数",
      when: "<b>可数名词</b>。修水管、龙头、马桶。",
      examples: [
        { en: "We called a plumber to fix the leak.", zh: "我们叫了水管工来修漏水。", hl: "plumber" },
        { en: "The plumber replaced the old pipes.", zh: "水管工换掉了旧水管。", hl: "plumber" },
        { en: "A good plumber is hard to find.", zh: "好的水管工很难找。", hl: "plumber" }
      ]
    },
    {
      group: "技术工种 · Skilled trades",
      head: "electrician",
      def: "a person whose job is to fit and repair electrical equipment and wiring",
      zh: "电工",
      register: "可数",
      when: "<b>可数名词</b>。接线路、修电器。",
      examples: [
        { en: "The electrician rewired the whole house.", zh: "电工把整栋房子重新布了线。", hl: "electrician" },
        { en: "Don't touch it — wait for the electrician.", zh: "别碰它——等电工来。", hl: "electrician" },
        { en: "Qualified electricians are in demand.", zh: "持证电工很抢手。", hl: "electricians" }
      ]
    },
    {
      group: "技术工种 · Skilled trades",
      head: "mechanic",
      def: "a person whose job is to repair machines and engines, especially car engines",
      zh: "机修工、汽车修理工",
      register: "可数",
      when: "<b>可数名词</b>。在车库(garage)修车、修机器。",
      examples: [
        { en: "The mechanic said the brakes needed replacing.", zh: "修理工说刹车得换了。", hl: "mechanic" },
        { en: "She's the best mechanic in town.", zh: "她是镇上最好的修车工。", hl: "mechanic" },
        { en: "The mechanics fixed the engine quickly.", zh: "修理工们很快修好了发动机。", hl: "mechanics" }
      ]
    },
    {
      group: "技术工种 · Skilled trades",
      head: "carpenter",
      def: "a person who makes and repairs wooden objects and structures",
      zh: "木匠",
      register: "可数",
      when: "<b>可数名词</b>。用木头做家具、门窗、楼梯等。",
      examples: [
        { en: "The carpenter built us a new staircase.", zh: "木匠给我们做了一段新楼梯。", hl: "carpenter" },
        { en: "A skilled carpenter made the table by hand.", zh: "一位熟练的木匠手工做了这张桌子。", hl: "carpenter" },
        { en: "Carpenters fitted the kitchen cabinets.", zh: "木匠们装好了厨房橱柜。", hl: "Carpenters" }
      ]
    },
    {
      group: "技术工种 · Skilled trades",
      head: "builder",
      def: "a person whose job is to build or repair houses and other structures",
      zh: "建筑工、营造商",
      register: "可数",
      when: "<b>可数名词</b>。盖房、砌墙、修缮。",
      examples: [
        { en: "The builders started work on the extension.", zh: "建筑工开始动工建加盖部分。", hl: "builders" },
        { en: "We hired a local builder.", zh: "我们雇了一位本地的建筑工。", hl: "builder" },
        { en: "The builder gave us a quote.", zh: "营造商给了我们一份报价。", hl: "builder" }
      ]
    },

    // ── 专业与办公 Professional & office ──────────────────────────────
    {
      group: "专业与办公 · Professional & office",
      head: "accountant",
      def: "a person whose job is to keep or check financial accounts",
      zh: "会计师",
      register: "可数",
      when: "<b>可数名词</b>。管账、报税、做财务。",
      examples: [
        { en: "Our accountant does the company's tax returns.", zh: "我们的会计师负责公司的报税。", hl: "accountant" },
        { en: "She works as an accountant for a small firm.", zh: "她在一家小公司当会计师。", hl: "accountant" },
        { en: "Ask your accountant before you sign.", zh: "签字前先问问你的会计师。", hl: "accountant" }
      ]
    },
    {
      group: "专业与办公 · Professional & office",
      head: "lawyer",
      def: "a person who is trained to advise people about the law and represent them in court",
      zh: "律师",
      register: "可数",
      when: "<b>可数名词</b>。提供法律建议、出庭代理。英式细分 solicitor / barrister。",
      examples: [
        { en: "You should speak to a lawyer about the contract.", zh: "合同的事你该找律师谈谈。", hl: "lawyer" },
        { en: "Her lawyer advised her to settle.", zh: "她的律师建议她和解。", hl: "lawyer" },
        { en: "He's training to become a lawyer.", zh: "他正在受训成为律师。", hl: "lawyer" }
      ]
    },
    {
      group: "专业与办公 · Professional & office",
      head: "architect",
      def: "a person whose job is to design buildings",
      zh: "建筑师",
      register: "可数",
      when: "<b>可数名词</b>。设计建筑、画图纸(注意与施工的 builder 不同)。",
      examples: [
        { en: "The architect designed a glass extension.", zh: "建筑师设计了一处玻璃加盖。", hl: "architect" },
        { en: "She's a well-known architect.", zh: "她是位知名建筑师。", hl: "architect" },
        { en: "The architects presented three designs.", zh: "建筑师们提交了三套设计。", hl: "architects" }
      ]
    },
    {
      group: "专业与办公 · Professional & office",
      head: "journalist",
      def: "a person who writes news reports for newspapers, magazines, TV or radio",
      zh: "记者、新闻工作者",
      register: "可数",
      when: "<b>可数名词</b>。采访、写报道。",
      examples: [
        { en: "The journalist interviewed several witnesses.", zh: "这位记者采访了几名目击者。", hl: "journalist" },
        { en: "She works as a journalist for a national paper.", zh: "她在一家全国性报纸当记者。", hl: "journalist" },
        { en: "Journalists gathered outside the court.", zh: "记者们聚集在法院外。", hl: "Journalists" }
      ]
    },
    {
      group: "专业与办公 · Professional & office",
      head: "receptionist",
      def: "a person whose job is to greet and help people arriving at an office, hotel or clinic",
      zh: "前台接待",
      register: "可数",
      when: "<b>可数名词</b>。在前台(reception)接待访客、接电话、安排预约。",
      examples: [
        { en: "The receptionist booked my appointment.", zh: "前台帮我预约了时间。", hl: "receptionist" },
        { en: "Ask the receptionist for a room key.", zh: "向前台要房间钥匙。", hl: "receptionist" },
        { en: "She's a receptionist at a dental clinic.", zh: "她在牙科诊所当前台。", hl: "receptionist" }
      ]
    },
    {
      group: "专业与办公 · Professional & office",
      head: "engineer",
      def: "a person who designs, builds or maintains machines, structures or systems",
      zh: "工程师",
      register: "可数",
      when: "<b>可数名词</b>。如 civil / software / mechanical engineer。",
      examples: [
        { en: "The engineer inspected the bridge.", zh: "工程师检查了那座桥。", hl: "engineer" },
        { en: "She's a software engineer.", zh: "她是软件工程师。", hl: "engineer" },
        { en: "Engineers designed the new tunnel.", zh: "工程师们设计了这条新隧道。", hl: "Engineers" }
      ]
    }
  ]
};
