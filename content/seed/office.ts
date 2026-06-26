/* Vocabulary topic · The office — GENERIC topic shape (nouns).
   Authored content: common office nouns grouped by sub-topic (stationery,
   equipment, work life). `register` pill shows countability; `when` carries
   usage notes; British/American variants go in `syn`. examples[*].hl
   highlights the noun as it appears. Connected story authored. */
import type { UnitSeed } from "./types.ts";

export const office: UnitSeed = {
  id: "office",
  num: "50",
  tag: "办公室 · The office",
  title: "The office",
  titleZh: "办公室词汇",
  intro:
    "一组<b>办公室常见名词</b>:文具、办公设备,以及会议、截止日期等工作场景词。小标签标的是<b>可数 / 不可数</b>。",
  story: {
    title: "故事 · A Monday at the office",
    text:
      "Monday mornings in our office always start the same way. I sit down at my desk, switch on the [[monitor|monitor]], pull the [[keyboard|keyboard]] towards me, and open the [[notebook|notebook]] where I keep my to-do list. A [[colleague|colleague]] drops a thick [[folder|folder]] on my desk, held together with a single bent [[paperclip|paperclip]].\n\n" +
      "By nine o'clock the machines are busy: the [[printer|printer]] is spitting out reports, someone is jamming the [[photocopier|photocopier]] again, and the [[scanner|scanner]] hums in the corner. I staple three pages together, run out of staples, and borrow a [[stapler|stapler]] from the next desk. I mark the important lines with a yellow [[highlighter|highlighter]] and seal a contract in a brown [[envelope|envelope]].\n\n" +
      "The afternoon is all about the calendar. There's a long [[meeting|meeting]] at two, a tight [[deadline|deadline]] on Friday, and a packed [[schedule|schedule]] for the rest of the week. The first item on the [[agenda|agenda]] is, of course, how to fit everything in."
  },
  phrases: [
    // ── 文具 Stationery ──────────────────────────────
    {
      group: "文具 · Stationery",
      head: "stapler",
      def: "a device for fastening sheets of paper together with small metal pins",
      zh: "订书机",
      register: "可数",
      when: "<b>可数名词</b>。里面的钉子叫 staples;动词 staple = 用订书机钉。",
      examples: [
        { en: "Can I borrow your stapler?", zh: "能借一下你的订书机吗?", hl: "stapler" },
        { en: "The stapler has run out of staples.", zh: "订书机里的钉子用完了。", hl: "stapler" },
        { en: "She keeps a stapler in the top drawer.", zh: "她把订书机放在最上层抽屉里。", hl: "stapler" }
      ]
    },
    {
      group: "文具 · Stationery",
      head: "paperclip",
      def: "a small bent piece of wire used to hold sheets of paper together",
      zh: "回形针",
      register: "可数",
      when: "<b>可数名词</b>,复数 paperclips。也写作 paper clip。",
      examples: [
        { en: "She fastened the pages with a paperclip.", zh: "她用回形针把这几页夹在一起。", hl: "paperclip" },
        { en: "There's a box of paperclips in the drawer.", zh: "抽屉里有一盒回形针。", hl: "paperclips" },
        { en: "He bent a paperclip out of boredom.", zh: "他无聊地把一枚回形针掰直了。", hl: "paperclip" }
      ]
    },
    {
      group: "文具 · Stationery",
      head: "envelope",
      def: "a flat paper container used to send a letter or document by post",
      zh: "信封",
      register: "可数",
      when: "<b>可数名词</b>,复数 envelopes。seal an envelope = 封口。",
      examples: [
        { en: "She sealed the letter in an envelope.", zh: "她把信封好放进信封。", hl: "envelope" },
        { en: "Write the address on the envelope.", zh: "把地址写在信封上。", hl: "envelope" },
        { en: "A pile of envelopes waited to be posted.", zh: "一摞信封等着寄出。", hl: "envelopes" }
      ]
    },
    {
      group: "文具 · Stationery",
      head: "folder",
      def: "a cover for keeping loose papers together, or a place to store files on a computer",
      zh: "文件夹",
      register: "可数",
      when: "<b>可数名词</b>。既指纸质文件夹,也指电脑里的文件夹。",
      examples: [
        { en: "He filed the report in a blue folder.", zh: "他把报告归进一个蓝色文件夹。", hl: "folder" },
        { en: "Save the document in this folder.", zh: "把文档存到这个文件夹里。", hl: "folder" },
        { en: "The folders are arranged alphabetically.", zh: "这些文件夹按字母顺序排列。", hl: "folders" }
      ]
    },
    {
      group: "文具 · Stationery",
      head: "notebook",
      def: "a small book of blank pages for writing notes in; also a small laptop computer",
      zh: "笔记本",
      register: "可数",
      when: "<b>可数名词</b>。主要指纸质笔记本;也可指小型笔记本电脑。",
      examples: [
        { en: "She jotted the idea down in her notebook.", zh: "她把这个想法记在了笔记本上。", hl: "notebook" },
        { en: "I keep a notebook by the phone.", zh: "我在电话旁放了个笔记本。", hl: "notebook" },
        { en: "His notebooks are full of sketches.", zh: "他的笔记本里满是速写。", hl: "notebooks" }
      ]
    },
    {
      group: "文具 · Stationery",
      head: "highlighter",
      def: "a brightly coloured pen used to mark important words in a text",
      zh: "荧光笔、记号笔",
      register: "可数",
      when: "<b>可数名词</b>,复数 highlighters。",
      examples: [
        { en: "She marked the key points with a highlighter.", zh: "她用荧光笔标出了要点。", hl: "highlighter" },
        { en: "Pass me the yellow highlighter.", zh: "把黄色荧光笔递给我。", hl: "highlighter" },
        { en: "He uses different highlighters for each subject.", zh: "他给每个科目用不同颜色的荧光笔。", hl: "highlighters" }
      ]
    },

    // ── 设备 Equipment ──────────────────────────────
    {
      group: "设备 · Equipment",
      head: "printer",
      def: "a machine that prints documents from a computer onto paper",
      zh: "打印机",
      register: "可数",
      when: "<b>可数名词</b>。out of ink / paper jam 是常见故障。",
      examples: [
        { en: "The printer is out of ink again.", zh: "打印机又没墨了。", hl: "printer" },
        { en: "Send the file to the office printer.", zh: "把文件发到办公室打印机。", hl: "printer" },
        { en: "Both printers are broken.", zh: "两台打印机都坏了。", hl: "printers" }
      ]
    },
    {
      group: "设备 · Equipment",
      head: "photocopier",
      def: "a machine that makes copies of documents",
      zh: "复印机",
      register: "可数",
      when: "<b>可数名词</b>。口语常简称 copier;复印动词 photocopy。",
      examples: [
        { en: "The photocopier has jammed.", zh: "复印机卡纸了。", hl: "photocopier" },
        { en: "Make ten copies on the photocopier.", zh: "用复印机印十份。", hl: "photocopier" },
        { en: "Both photocopiers are in use.", zh: "两台复印机都在用。", hl: "photocopiers" }
      ]
    },
    {
      group: "设备 · Equipment",
      head: "keyboard",
      def: "the set of keys you press to type on a computer",
      zh: "键盘",
      register: "可数",
      when: "<b>可数名词</b>。也指乐器键盘。",
      examples: [
        { en: "She spilled coffee on the keyboard.", zh: "她把咖啡洒在了键盘上。", hl: "keyboard" },
        { en: "This keyboard is wireless.", zh: "这个键盘是无线的。", hl: "keyboard" },
        { en: "He prefers a mechanical keyboard.", zh: "他更喜欢机械键盘。", hl: "keyboard" }
      ]
    },
    {
      group: "设备 · Equipment",
      head: "monitor",
      def: "a screen that shows information from a computer",
      zh: "显示器",
      register: "可数",
      when: "<b>可数名词</b>。也指监视屏。",
      examples: [
        { en: "He works with two monitors.", zh: "他用两台显示器工作。", hl: "monitors" },
        { en: "Turn the monitor off when you leave.", zh: "走的时候把显示器关掉。", hl: "monitor" },
        { en: "The monitor went black suddenly.", zh: "显示器突然黑屏了。", hl: "monitor" }
      ]
    },
    {
      group: "设备 · Equipment",
      head: "scanner",
      def: "a device that copies a document or picture into a computer",
      zh: "扫描仪",
      register: "可数",
      when: "<b>可数名词</b>。动词 scan = 扫描。",
      examples: [
        { en: "Use the scanner to copy your passport.", zh: "用扫描仪扫一下你的护照。", hl: "scanner" },
        { en: "The scanner isn't connected.", zh: "扫描仪没连上。", hl: "scanner" },
        { en: "Modern printers include a scanner.", zh: "现在的打印机都带扫描仪。", hl: "scanner" }
      ]
    },

    // ── 办公场景 At work ──────────────────────────────
    {
      group: "办公场景 · At work",
      head: "meeting",
      def: "an event at which people come together to discuss something",
      zh: "会议",
      register: "可数",
      when: "<b>可数名词</b>。have / hold / attend a meeting。",
      examples: [
        { en: "The meeting starts at ten.", zh: "会议十点开始。", hl: "meeting" },
        { en: "She's stuck in a meeting all morning.", zh: "她整个上午都困在会议里。", hl: "meeting" },
        { en: "We have back-to-back meetings today.", zh: "我们今天的会一个接一个。", hl: "meetings" }
      ]
    },
    {
      group: "办公场景 · At work",
      head: "deadline",
      def: "the time or date by which something must be finished",
      zh: "截止日期、最后期限",
      register: "可数",
      when: "<b>可数名词</b>。meet a deadline(按期完成)/ miss a deadline(误期)。",
      examples: [
        { en: "We're working hard to meet the deadline.", zh: "我们正加紧赶在截止日期前完成。", hl: "deadline" },
        { en: "The deadline is this Friday.", zh: "截止日期是这周五。", hl: "deadline" },
        { en: "He always misses his deadlines.", zh: "他总是误期。", hl: "deadlines" }
      ]
    },
    {
      group: "办公场景 · At work",
      head: "colleague",
      def: "a person you work with, especially in a profession or business",
      zh: "同事",
      register: "可数",
      when: "<b>可数名词</b>。比口语的 workmate 更正式。",
      examples: [
        { en: "A colleague helped me finish the report.", zh: "一位同事帮我完成了报告。", hl: "colleague" },
        { en: "She gets on well with her colleagues.", zh: "她和同事们相处融洽。", hl: "colleagues" },
        { en: "I'm meeting a colleague for lunch.", zh: "我要和一位同事一起吃午饭。", hl: "colleague" }
      ]
    },
    {
      group: "办公场景 · At work",
      head: "schedule",
      def: "a plan that lists times when tasks or events will happen",
      zh: "日程、时间表",
      register: "可数",
      when: "<b>可数名词</b>。on schedule(按计划)/ behind schedule(落后)。注意英美读音不同。",
      examples: [
        { en: "My schedule is full this week.", zh: "我这周的日程满了。", hl: "schedule" },
        { en: "The project is back on schedule.", zh: "项目重新回到了正轨。", hl: "schedule" },
        { en: "We need to fit it into the schedule.", zh: "我们得把它排进日程里。", hl: "schedule" }
      ]
    },
    {
      group: "办公场景 · At work",
      head: "agenda",
      def: "a list of the items to be discussed at a meeting",
      zh: "议程",
      register: "可数",
      when: "<b>可数名词</b>。on the agenda = 在议程上;也比喻「待办、要务」。",
      examples: [
        { en: "What's first on the agenda?", zh: "议程的第一项是什么?", hl: "agenda" },
        { en: "Her name is on today's agenda.", zh: "今天的议程上有她的名字。", hl: "agenda" },
        { en: "The chair set out the agenda for the meeting.", zh: "主席列出了会议议程。", hl: "agenda" }
      ]
    }
  ]
};
