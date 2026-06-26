/* Vocabulary topic · Health & illness — GENERIC topic shape (nouns).
   Authored content: common health nouns grouped by sub-topic (symptoms,
   illnesses, treatment). `register` pill shows countability (many are 不可数);
   `when` carries usage notes; British/American variants go in `syn`.
   examples[*].hl highlights the noun as it appears. Connected story authored. */
import type { UnitSeed } from "./types.ts";

export const health: UnitSeed = {
  id: "health",
  num: "53",
  tag: "健康医疗 · Health & illness",
  title: "Health & illness",
  titleZh: "健康与疾病",
  intro:
    "一组<b>健康与疾病</b>的常见名词:症状、常见病与治疗护理。小标签标的是<b>可数 / 不可数</b>(不少病症不可数),英美用词差异写在批注里。",
  story: {
    title: "故事 · A bad week",
    text:
      "It was a bad week for our family. It started with a tickle in my throat that turned into a [[sore throat|sore throat]], then a dry [[cough|cough]], and by Wednesday I had a high [[fever|fever]] and a pounding [[headache|headache]]. The doctor said it was just a heavy [[cold|cold]], not the [[flu|flu]], but to rest anyway.\n\n" +
      "The children fared no better. My daughter came home covered in a red [[rash|rash]] — an [[allergy|allergy]] to a new washing powder — and couldn't stop with one [[sneeze|sneeze]] after another. My son fell off his bike and arrived with a dark [[bruise|bruise]] on his knee and a cut that, the nurse warned, could turn into an [[infection|infection]].\n\n" +
      "By Friday the house was a small clinic. There was a [[bandage|bandage]] round my son's arm and a [[plaster|plaster]] on every scrape, a [[prescription|prescription]] for my daughter on the fridge, a packet of [[painkillers|painkiller]] by my bed, and a reminder that the whole family was due a flu [[vaccine|vaccine]] in the autumn."
  },
  phrases: [
    // ── 症状 Symptoms ──────────────────────────────
    {
      group: "症状 · Symptoms",
      head: "cough",
      def: "the act of forcing air out of your throat with a sudden noise, often when ill",
      zh: "咳嗽",
      register: "可数",
      when: "<b>可数名词</b>:have a cough。也作动词。",
      examples: [
        { en: "She has a nasty cough.", zh: "她咳嗽得厉害。", hl: "cough" },
        { en: "Take this syrup for your cough.", zh: "喝这个糖浆治咳嗽。", hl: "cough" },
        { en: "A dry cough kept him awake.", zh: "干咳让他睡不着。", hl: "cough" }
      ]
    },
    {
      group: "症状 · Symptoms",
      head: "fever",
      def: "a body temperature that is higher than normal, usually because of illness",
      zh: "发烧、发热",
      register: "不可数",
      when: "<b>通常不可数</b>:have a fever / run a fever(发烧)。也说 a high fever。",
      examples: [
        { en: "The child had a fever all night.", zh: "孩子烧了一整夜。", hl: "fever" },
        { en: "Her fever finally came down.", zh: "她的烧终于退了。", hl: "fever" },
        { en: "He's running a high fever.", zh: "他在发高烧。", hl: "fever" }
      ]
    },
    {
      group: "症状 · Symptoms",
      head: "rash",
      def: "an area of red spots on the skin, caused by illness or an allergic reaction",
      zh: "皮疹、疹子",
      register: "可数",
      when: "<b>可数名词</b>:come out in a rash / have a rash。",
      examples: [
        { en: "She broke out in a rash after eating nuts.", zh: "她吃了坚果后起了疹子。", hl: "rash" },
        { en: "The rash spread across his arms.", zh: "疹子蔓延到了他的手臂。", hl: "rash" },
        { en: "A heat rash is common in summer.", zh: "夏天常见热疹。", hl: "rash" }
      ]
    },
    {
      group: "症状 · Symptoms",
      head: "bruise",
      def: "a dark mark on the skin caused by a knock or fall",
      zh: "淤青、瘀伤",
      register: "可数",
      when: "<b>可数名词</b>。also a verb: bruise easily(容易淤青)。",
      examples: [
        { en: "He had a big bruise on his leg.", zh: "他腿上有一大块淤青。", hl: "bruise" },
        { en: "The bruise turned yellow after a few days.", zh: "几天后淤青变黄了。", hl: "bruise" },
        { en: "She bruises easily.", zh: "她很容易淤青。", hl: "bruises" }
      ]
    },
    {
      group: "症状 · Symptoms",
      head: "sneeze",
      def: "a sudden, uncontrolled burst of air out through the nose and mouth",
      zh: "喷嚏",
      register: "可数",
      when: "<b>可数名词</b>:give a sneeze。也作动词 sneeze。",
      examples: [
        { en: "She let out a loud sneeze.", zh: "她打了个响亮的喷嚏。", hl: "sneeze" },
        { en: "One sneeze followed another.", zh: "喷嚏一个接一个。", hl: "sneeze" },
        { en: "Cover your mouth when you sneeze.", zh: "打喷嚏时捂住嘴。", hl: "sneeze" }
      ]
    },
    {
      group: "症状 · Symptoms",
      head: "sore throat",
      def: "pain or soreness in the throat, often a sign of a cold",
      zh: "嗓子痛、咽喉痛",
      register: "可数",
      when: "<b>可数名词</b>(常用 a sore throat):have a sore throat。",
      examples: [
        { en: "I've got a sore throat and a runny nose.", zh: "我嗓子痛,还流鼻涕。", hl: "sore throat" },
        { en: "Honey can soothe a sore throat.", zh: "蜂蜜能缓解嗓子痛。", hl: "sore throat" },
        { en: "Her sore throat lasted three days.", zh: "她嗓子痛了三天。", hl: "sore throat" }
      ]
    },

    // ── 疾病 Illnesses ──────────────────────────────
    {
      group: "疾病 · Illnesses",
      head: "cold",
      def: "a common illness that makes your nose run and your throat sore",
      zh: "感冒",
      register: "可数",
      when: "<b>可数名词</b>:catch / have a cold。注意 cold 也是形容词「冷的」。",
      examples: [
        { en: "I think I'm catching a cold.", zh: "我觉得我要感冒了。", hl: "cold" },
        { en: "She's had a cold all week.", zh: "她感冒了一整周。", hl: "cold" },
        { en: "There's no cure for the common cold.", zh: "普通感冒没有特效药。", hl: "cold" }
      ]
    },
    {
      group: "疾病 · Illnesses",
      head: "flu",
      def: "an infectious illness like a bad cold, with fever and aching muscles",
      zh: "流感",
      register: "不可数",
      when: "<b>不可数名词</b>:have (the) flu。比感冒重得多。全称 influenza。",
      examples: [
        { en: "Half the office is off with flu.", zh: "办公室一半人得流感请假了。", hl: "flu" },
        { en: "He caught flu over the winter.", zh: "他冬天得了流感。", hl: "flu" },
        { en: "The flu left her exhausted.", zh: "流感让她筋疲力尽。", hl: "flu" }
      ]
    },
    {
      group: "疾病 · Illnesses",
      head: "headache",
      def: "a pain in your head",
      zh: "头痛",
      register: "可数",
      when: "<b>可数名词</b>:have a headache。也比喻「令人头疼的麻烦事」。",
      examples: [
        { en: "I've got a splitting headache.", zh: "我头痛欲裂。", hl: "headache" },
        { en: "Bright lights give her a headache.", zh: "强光让她头痛。", hl: "headache" },
        { en: "Take an aspirin for your headache.", zh: "吃片阿司匹林治头痛。", hl: "headache" }
      ]
    },
    {
      group: "疾病 · Illnesses",
      head: "allergy",
      def: "a condition that makes you ill or your skin react when you eat, touch or breathe something",
      zh: "过敏",
      register: "可数",
      when: "<b>可数名词</b>,复数 allergies:an allergy to sth。形容词 allergic to。",
      examples: [
        { en: "She has an allergy to peanuts.", zh: "她对花生过敏。", hl: "allergy" },
        { en: "Food allergies are becoming more common.", zh: "食物过敏越来越普遍。", hl: "allergies" },
        { en: "His allergy gets worse in spring.", zh: "他的过敏一到春天就加重。", hl: "allergy" }
      ]
    },
    {
      group: "疾病 · Illnesses",
      head: "infection",
      def: "an illness caused by germs entering the body",
      zh: "感染、炎症",
      register: "可数",
      when: "<b>可数名词</b>:get / have an infection;作「感染过程」时也可不可数。",
      examples: [
        { en: "The cut became an infection.", zh: "那道伤口感染了。", hl: "infection" },
        { en: "She's on antibiotics for a chest infection.", zh: "她因肺部感染在吃抗生素。", hl: "infection" },
        { en: "Wash the wound to prevent infection.", zh: "清洗伤口以防感染。", hl: "infection" }
      ]
    },

    // ── 治疗护理 Treatment & care ──────────────────────────────
    {
      group: "治疗护理 · Treatment & care",
      head: "bandage",
      def: "a long strip of cloth wrapped around an injury",
      zh: "绷带",
      register: "可数",
      when: "<b>可数名词</b>。动词 bandage = 用绷带包扎。",
      examples: [
        { en: "The nurse wrapped a bandage round his ankle.", zh: "护士用绷带把他的脚踝缠了起来。", hl: "bandage" },
        { en: "Change the bandage every day.", zh: "每天换一次绷带。", hl: "bandage" },
        { en: "Her hand was covered in bandages.", zh: "她的手缠满了绷带。", hl: "bandages" }
      ]
    },
    {
      group: "治疗护理 · Treatment & care",
      head: "plaster",
      def: "(BrE) a small strip of sticky material to cover a small cut",
      zh: "(英式)创可贴",
      register: "可数",
      when: "<b>可数名词</b>。",
      syn: "英式 plaster;美式 Band-Aid / adhesive bandage",
      examples: [
        { en: "She put a plaster on the cut.", zh: "她在伤口上贴了张创可贴。", hl: "plaster" },
        { en: "Have you got a plaster for my blister?", zh: "你有创可贴给我贴水泡吗?", hl: "plaster" },
        { en: "The box of plasters is in the cupboard.", zh: "那盒创可贴在橱柜里。", hl: "plasters" }
      ]
    },
    {
      group: "治疗护理 · Treatment & care",
      head: "prescription",
      def: "a doctor's written instruction for medicine you can collect from a pharmacy",
      zh: "处方、药方",
      register: "可数",
      when: "<b>可数名词</b>。on prescription = 凭处方;write / fill a prescription。",
      examples: [
        { en: "The doctor wrote me a prescription.", zh: "医生给我开了处方。", hl: "prescription" },
        { en: "You need a prescription for this medicine.", zh: "这种药需要处方。", hl: "prescription" },
        { en: "She collected her prescription from the chemist.", zh: "她去药店取了药。", hl: "prescription" }
      ]
    },
    {
      group: "治疗护理 · Treatment & care",
      head: "painkiller",
      def: "a medicine that reduces or removes pain",
      zh: "止痛药",
      register: "可数",
      when: "<b>可数名词</b>,复数 painkillers。如 aspirin、paracetamol。",
      examples: [
        { en: "She took a painkiller for her headache.", zh: "她吃了片止痛药治头痛。", hl: "painkiller" },
        { en: "These painkillers work quickly.", zh: "这些止痛药见效很快。", hl: "painkillers" },
        { en: "Don't take painkillers on an empty stomach.", zh: "别空腹吃止痛药。", hl: "painkillers" }
      ]
    },
    {
      group: "治疗护理 · Treatment & care",
      head: "vaccine",
      def: "a substance given to protect the body against a particular disease",
      zh: "疫苗",
      register: "可数",
      when: "<b>可数名词</b>。a vaccine against sth;打疫苗 have / get a vaccine,动词 vaccinate。",
      examples: [
        { en: "The flu vaccine is offered every autumn.", zh: "流感疫苗每年秋天提供。", hl: "vaccine" },
        { en: "Scientists developed a new vaccine.", zh: "科学家研制出了一种新疫苗。", hl: "vaccine" },
        { en: "Both vaccines are given in two doses.", zh: "这两种疫苗都分两剂接种。", hl: "vaccines" }
      ]
    }
  ]
};
