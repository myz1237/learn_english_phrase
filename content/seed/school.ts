/* Vocabulary topic · School & education — GENERIC topic shape (nouns).
   Authored content: common school nouns grouped by sub-topic (classroom items,
   people, studies). `register` pill shows countability; `when` carries usage
   notes; British/American variants go in `syn`. examples[*].hl highlights the
   noun as it appears. Connected story authored. */
import type { UnitSeed } from "./types.ts";

export const school: UnitSeed = {
  id: "school",
  num: "51",
  tag: "校园 · School",
  title: "School & education",
  titleZh: "学校与教育",
  intro:
    "一组<b>学校与教育</b>的常见名词:课堂用品、校园人物与学业词汇。小标签标的是<b>可数 / 不可数</b>(注意 homework 不可数),英美用词差异写在批注里。",
  story: {
    title: "故事 · The first day of term",
    text:
      "On the first day of term I packed my bag the night before. Into the new [[pencil case|pencil case]] went a fresh [[rubber|rubber]] and a wooden [[ruler|ruler]]; on top went the heavy maths [[textbook|textbook]] and the [[timetable|timetable]] our [[teacher|teacher]] had emailed us.\n\n" +
      "In the classroom my old [[classmate|classmate]] waved me over to the desk beside her. A nervous new [[pupil|pupil]] sat at the front, and the [[headteacher|headteacher]] came in to welcome everyone before writing the day's plan on the [[whiteboard|whiteboard]].\n\n" +
      "Then the real work began. Our first [[lesson|lesson]] was my favourite [[subject|subject]], history. The teacher set us some [[homework|homework]], reminded us that the big [[exam|exam]] was only a term away, and told us that working hard now was the first step towards a university [[degree|degree]]. After class my [[tutor|tutor]] went through my essay with me line by line."
  },
  phrases: [
    // ── 课堂用品 Classroom ──────────────────────────────
    {
      group: "课堂用品 · Classroom",
      head: "textbook",
      def: "a book that teaches a particular subject, used by students",
      zh: "教科书、课本",
      register: "可数",
      when: "<b>可数名词</b>,复数 textbooks。",
      examples: [
        { en: "Open your textbook to page 40.", zh: "把课本翻到第 40 页。", hl: "textbook" },
        { en: "She wrote a chemistry textbook.", zh: "她写了一本化学教科书。", hl: "textbook" },
        { en: "The textbooks are too heavy to carry.", zh: "这些课本太重,背不动。", hl: "textbooks" }
      ]
    },
    {
      group: "课堂用品 · Classroom",
      head: "rubber",
      def: "(BrE) a small object used to remove pencil marks from paper",
      zh: "(英式)橡皮擦",
      register: "可数",
      when: "<b>可数名词</b>。",
      syn: "英式 rubber;美式 eraser(rubber 在美式还指别的,慎用)",
      examples: [
        { en: "Can I borrow your rubber?", zh: "能借一下你的橡皮吗?", hl: "rubber" },
        { en: "She rubbed out the mistake with a rubber.", zh: "她用橡皮擦掉了错处。", hl: "rubber" },
        { en: "My rubber has gone missing.", zh: "我的橡皮不见了。", hl: "rubber" }
      ]
    },
    {
      group: "课堂用品 · Classroom",
      head: "ruler",
      def: "a long, flat object with straight edges, used to measure or draw straight lines",
      zh: "尺子、直尺",
      register: "可数",
      when: "<b>可数名词</b>,复数 rulers。",
      examples: [
        { en: "Draw the line with a ruler.", zh: "用尺子画这条线。", hl: "ruler" },
        { en: "He measured the page with a ruler.", zh: "他用尺子量了这页纸。", hl: "ruler" },
        { en: "The ruler is thirty centimetres long.", zh: "这把尺子长三十厘米。", hl: "ruler" }
      ]
    },
    {
      group: "课堂用品 · Classroom",
      head: "whiteboard",
      def: "a large white surface that teachers write on with special pens",
      zh: "白板",
      register: "可数",
      when: "<b>可数名词</b>。取代旧式黑板(blackboard)。",
      examples: [
        { en: "The teacher wrote the date on the whiteboard.", zh: "老师把日期写在白板上。", hl: "whiteboard" },
        { en: "Could you clean the whiteboard?", zh: "你能把白板擦一下吗?", hl: "whiteboard" },
        { en: "Each classroom has an interactive whiteboard.", zh: "每间教室都有一块交互式白板。", hl: "whiteboard" }
      ]
    },
    {
      group: "课堂用品 · Classroom",
      head: "timetable",
      def: "(BrE) a chart showing the times when lessons or events happen",
      zh: "(英式)课程表、时间表",
      register: "可数",
      when: "<b>可数名词</b>。",
      syn: "英式 timetable;美式常说 schedule",
      examples: [
        { en: "Check the timetable for your next lesson.", zh: "查一下课程表看下节课是什么。", hl: "timetable" },
        { en: "The new timetable starts on Monday.", zh: "新课程表从周一开始。", hl: "timetable" },
        { en: "Our timetables changed this term.", zh: "我们这学期的课表变了。", hl: "timetables" }
      ]
    },
    {
      group: "课堂用品 · Classroom",
      head: "pencil case",
      def: "a small bag or box for carrying pens and pencils",
      zh: "铅笔盒、文具袋",
      register: "可数",
      when: "<b>可数名词</b>,复数 pencil cases。",
      examples: [
        { en: "She keeps her pens in a pencil case.", zh: "她把笔放在文具袋里。", hl: "pencil case" },
        { en: "He forgot his pencil case at home.", zh: "他把铅笔盒忘在家里了。", hl: "pencil case" },
        { en: "The shop sells colourful pencil cases.", zh: "这家店卖各种花色的文具袋。", hl: "pencil cases" }
      ]
    },

    // ── 人物 People ──────────────────────────────
    {
      group: "人物 · People",
      head: "pupil",
      def: "(BrE) a child or young person at school",
      zh: "(英式)学生、小学生",
      register: "可数",
      when: "<b>可数名词</b>。多指中小学生。",
      syn: "英式 pupil;美式更常用 student",
      examples: [
        { en: "There are thirty pupils in the class.", zh: "班上有三十名学生。", hl: "pupils" },
        { en: "She was a bright pupil.", zh: "她是个聪明的学生。", hl: "pupil" },
        { en: "The pupils lined up in the playground.", zh: "学生们在操场上排好了队。", hl: "pupils" }
      ]
    },
    {
      group: "人物 · People",
      head: "teacher",
      def: "a person whose job is to teach, especially in a school",
      zh: "老师、教师",
      register: "可数",
      when: "<b>可数名词</b>。teach sb sth。",
      examples: [
        { en: "Our English teacher is very kind.", zh: "我们的英语老师人很好。", hl: "teacher" },
        { en: "He trained to be a teacher.", zh: "他受训当老师。", hl: "teacher" },
        { en: "The teachers met to discuss the timetable.", zh: "老师们开会讨论课程表。", hl: "teachers" }
      ]
    },
    {
      group: "人物 · People",
      head: "headteacher",
      def: "(BrE) the teacher in charge of a school",
      zh: "(英式)校长",
      register: "可数",
      when: "<b>可数名词</b>。",
      syn: "英式 headteacher / head;美式 principal",
      examples: [
        { en: "The headteacher gave a speech at assembly.", zh: "校长在晨会上做了讲话。", hl: "headteacher" },
        { en: "She was sent to the headteacher's office.", zh: "她被叫到了校长办公室。", hl: "headteacher" },
        { en: "A new headteacher took over last year.", zh: "去年来了位新校长。", hl: "headteacher" }
      ]
    },
    {
      group: "人物 · People",
      head: "classmate",
      def: "a person who is in the same class as you at school",
      zh: "同班同学",
      register: "可数",
      when: "<b>可数名词</b>,复数 classmates。",
      examples: [
        { en: "He invited his classmates to the party.", zh: "他邀请了同班同学来派对。", hl: "classmates" },
        { en: "A classmate lent me her notes.", zh: "一位同学把笔记借给了我。", hl: "classmate" },
        { en: "We were classmates at primary school.", zh: "我们是小学同班同学。", hl: "classmates" }
      ]
    },
    {
      group: "人物 · People",
      head: "tutor",
      def: "a teacher who works with one student or a small group, often privately",
      zh: "导师、家教",
      register: "可数",
      when: "<b>可数名词</b>。大学里指「指导老师」,校外指「家教」。",
      examples: [
        { en: "She has a private maths tutor.", zh: "她请了个数学家教。", hl: "tutor" },
        { en: "My tutor gave me detailed feedback.", zh: "我的导师给了我详细的反馈。", hl: "tutor" },
        { en: "He works as a tutor in the evenings.", zh: "他晚上做家教。", hl: "tutor" }
      ]
    },

    // ── 学业 Studies ──────────────────────────────
    {
      group: "学业 · Studies",
      head: "lesson",
      def: "a period of time in which a student is taught something",
      zh: "课、一节课",
      register: "可数",
      when: "<b>可数名词</b>。have a lesson;美式常用 class。",
      examples: [
        { en: "The history lesson lasts an hour.", zh: "历史课持续一小时。", hl: "lesson" },
        { en: "We had a piano lesson after school.", zh: "放学后我们上了节钢琴课。", hl: "lesson" },
        { en: "She prepares her lessons carefully.", zh: "她认真备课。", hl: "lessons" }
      ]
    },
    {
      group: "学业 · Studies",
      head: "subject",
      def: "an area of knowledge studied at school or university",
      zh: "科目、学科",
      register: "可数",
      when: "<b>可数名词</b>。如 maths、history 等。",
      examples: [
        { en: "Maths is my favourite subject.", zh: "数学是我最喜欢的科目。", hl: "subject" },
        { en: "She studies three subjects this year.", zh: "她今年学三门科目。", hl: "subjects" },
        { en: "Which subject do you find hardest?", zh: "你觉得哪一科最难?", hl: "subject" }
      ]
    },
    {
      group: "学业 · Studies",
      head: "homework",
      def: "work that a student is given to do at home",
      zh: "家庭作业",
      register: "不可数",
      when: "<b>不可数名词</b>:不说 a homework / homeworks;用 a piece of homework。do your homework。",
      examples: [
        { en: "Have you done your homework?", zh: "你作业做了吗?", hl: "homework" },
        { en: "There's a lot of homework tonight.", zh: "今晚作业很多。", hl: "homework" },
        { en: "She handed in her homework late.", zh: "她交作业交晚了。", hl: "homework" }
      ]
    },
    {
      group: "学业 · Studies",
      head: "exam",
      def: "a formal test of knowledge or ability",
      zh: "考试",
      register: "可数",
      when: "<b>可数名词</b>。全称 examination。take / sit an exam(参加考试),pass / fail(及格 / 不及格)。",
      examples: [
        { en: "She passed all her exams.", zh: "她所有考试都过了。", hl: "exams" },
        { en: "The exam lasts two hours.", zh: "考试持续两小时。", hl: "exam" },
        { en: "He's revising for his final exam.", zh: "他在为期末考试复习。", hl: "exam" }
      ]
    },
    {
      group: "学业 · Studies",
      head: "degree",
      def: "a qualification given by a university when you complete a course",
      zh: "学位",
      register: "可数",
      when: "<b>可数名词</b>。a degree in sth(某专业的学位)。",
      examples: [
        { en: "She has a degree in biology.", zh: "她有生物学学位。", hl: "degree" },
        { en: "He's studying for a law degree.", zh: "他在攻读法律学位。", hl: "degree" },
        { en: "Both degrees were awarded with honours.", zh: "这两个学位都是以优等成绩授予的。", hl: "degrees" }
      ]
    }
  ]
};
