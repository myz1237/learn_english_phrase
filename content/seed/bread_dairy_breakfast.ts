/* Vocabulary topic · Bread, dairy & breakfast — GENERIC topic shape (nouns,
   not phrasal verbs). Authored content: common bread / dairy / breakfast nouns
   grouped by sub-topic. For nouns the `register` pill shows countability
   (可数 / 不可数 / 复数); British/American variants and synonyms go in `syn`.
   `when` carries usage / collocation notes; examples[*].hl highlights the noun
   as it appears (incl. plural). Connected story is authored. */
import type { UnitSeed } from "./types.ts";

export const breadDairyBreakfast: UnitSeed = {
  id: "bread-dairy-breakfast",
  num: "45",
  tag: "面包乳品早餐 · Bread, dairy & breakfast",
  title: "Bread, dairy & breakfast",
  titleZh: "面包、乳制品与早餐",
  intro:
    "一组<b>面包烘焙、乳制品与早餐</b>的常见名词:从小圆面包、可颂到黄油、奶酪、果酱与燕麦粥。小标签标的是<b>可数 / 不可数</b>。",
  story: {
    title: "故事 · Sunday breakfast",
    text:
      "Sunday breakfast is the best meal of the week in our house. I start at the bakery, coming home with a crusty bread [[roll|roll]], a sticky iced [[bun|bun]], a flaky [[croissant|croissant]] each, and a fruit [[pastry|pastry]] to share. While the kettle boils I drop two slices of bread in for [[toast|toast]], and put a few [[biscuits|biscuit]] out for later.\n\n" +
      "Then I open the fridge. There's [[butter|butter]] for the toast, a wedge of [[cheese|cheese]], a tub of [[cream|cream]] for the coffee, a pot of [[yoghurt|yoghurt]] for the children, and half a dozen [[eggs|egg]] to scramble.\n\n" +
      "To finish, everyone helps themselves: [[jam|jam]] and [[honey|honey]] on the toast, a bowl of [[porridge|porridge]] made from the [[oats|oats]] in the cupboard, and a tall stack of [[pancakes|pancake]] with syrup."
  },
  phrases: [
    // ── 面包烘焙 Bread & baking ──────────────────────────────
    {
      group: "面包烘焙 · Bread & baking",
      head: "roll",
      def: "a small, round loaf of bread for one person",
      zh: "小圆面包",
      register: "可数",
      when: "<b>可数名词</b>,复数 rolls。如 bread roll、bacon roll(培根卷)。",
      examples: [
        { en: "He had a bacon roll for breakfast.", zh: "他早餐吃了个培根卷。", hl: "roll" },
        { en: "The bakery sells fresh bread rolls.", zh: "这家面包房卖新鲜的小圆面包。", hl: "rolls" },
        { en: "She buttered a warm roll.", zh: "她在一个热乎的小圆面包上抹了黄油。", hl: "roll" }
      ]
    },
    {
      group: "面包烘焙 · Bread & baking",
      head: "bun",
      def: "a small, round bread, sometimes sweet (e.g. for a burger)",
      zh: "小圆面包、圆甜面包",
      register: "可数",
      when: "<b>可数名词</b>,复数 buns。汉堡用的叫 burger bun;甜的如 hot cross bun。",
      examples: [
        { en: "We toasted the buns for the burgers.", zh: "我们把汉堡的面包烤了一下。", hl: "buns" },
        { en: "She iced a sweet bun.", zh: "她给一个甜面包浇了糖霜。", hl: "bun" },
        { en: "There are six buns in the bag.", zh: "袋子里有六个小圆面包。", hl: "buns" }
      ]
    },
    {
      group: "面包烘焙 · Bread & baking",
      head: "croissant",
      def: "a light, curved pastry made of buttery, flaky layers",
      zh: "牛角包、可颂",
      register: "可数",
      when: "<b>可数名词</b>,复数 croissants。源自法语,典型的欧式早餐。",
      examples: [
        { en: "I had a croissant and coffee for breakfast.", zh: "我早餐吃了可颂配咖啡。", hl: "croissant" },
        { en: "The croissants were warm and flaky.", zh: "这些可颂温热又酥脆。", hl: "croissants" },
        { en: "She filled a croissant with ham and cheese.", zh: "她在可颂里夹了火腿和奶酪。", hl: "croissant" }
      ]
    },
    {
      group: "面包烘焙 · Bread & baking",
      head: "pastry",
      def: "a flour-and-fat dough for pies; also a small sweet cake made from it",
      zh: "酥皮;酥皮点心",
      register: "不可数",
      when: "指<b>面皮 / 酥皮</b>时不可数(roll out the pastry);指<b>一个酥皮点心</b>时可数(a pastry, 复数 pastries)。",
      examples: [
        { en: "Roll out the pastry thinly.", zh: "把酥皮擀薄。", hl: "pastry" },
        { en: "She bought some pastries from the bakery.", zh: "她从面包房买了些酥皮点心。", hl: "pastries" },
        { en: "The pie has a crisp, golden pastry.", zh: "这个派有一层金黄酥脆的外皮。", hl: "pastry" }
      ]
    },
    {
      group: "面包烘焙 · Bread & baking",
      head: "toast",
      def: "bread that has been heated until it is brown and crisp",
      zh: "吐司、烤面包片",
      register: "不可数",
      when: "<b>不可数名词</b>:a slice/piece of toast。注意 a toast 另指「祝酒」。",
      examples: [
        { en: "I had two slices of toast with jam.", zh: "我吃了两片抹果酱的吐司。", hl: "toast" },
        { en: "The toast popped up golden brown.", zh: "吐司弹起来时已是金黄色。", hl: "toast" },
        { en: "She spread butter on her toast.", zh: "她在吐司上抹了黄油。", hl: "toast" }
      ]
    },
    {
      group: "面包烘焙 · Bread & baking",
      head: "biscuit",
      def: "a small, thin, dry cake, sweet or plain",
      zh: "饼干",
      register: "可数",
      when: "<b>可数名词</b>,复数 biscuits。常配茶,可以 dunk(蘸着吃)。",
      syn: "英式 biscuit;美式 cookie(指甜饼干)",
      examples: [
        { en: "She dunked a biscuit in her tea.", zh: "她把饼干蘸进茶里。", hl: "biscuit" },
        { en: "There's a packet of biscuits in the cupboard.", zh: "橱柜里有一包饼干。", hl: "biscuits" },
        { en: "He ate the last biscuit.", zh: "他吃掉了最后一块饼干。", hl: "biscuit" }
      ]
    },

    // ── 乳制品 Dairy ──────────────────────────────
    {
      group: "乳制品 · Dairy",
      head: "butter",
      def: "a soft yellow food made from cream, spread on bread or used in cooking",
      zh: "黄油、牛油",
      register: "不可数",
      when: "<b>不可数名词</b>:a knob of butter(一小块黄油)。",
      examples: [
        { en: "Spread some butter on the toast.", zh: "在吐司上抹点黄油。", hl: "butter" },
        { en: "She fried the onions in butter.", zh: "她用黄油煎洋葱。", hl: "butter" },
        { en: "We've run out of butter.", zh: "我们的黄油用完了。", hl: "butter" }
      ]
    },
    {
      group: "乳制品 · Dairy",
      head: "cheese",
      def: "a solid food made from milk",
      zh: "奶酪、芝士",
      register: "不可数",
      when: "通常<b>不可数</b>(some cheese / a piece of cheese);指<b>不同种类</b>时可数(cheeses)。",
      examples: [
        { en: "I'd like a cheese sandwich.", zh: "我想要个奶酪三明治。", hl: "cheese" },
        { en: "There are several cheeses on the board.", zh: "拼盘上有好几种奶酪。", hl: "cheeses" },
        { en: "Grate some cheese over the pasta.", zh: "在意面上擦些奶酪。", hl: "cheese" }
      ]
    },
    {
      group: "乳制品 · Dairy",
      head: "cream",
      def: "the thick, fatty liquid that rises to the top of milk",
      zh: "奶油、淡奶油",
      register: "不可数",
      when: "<b>不可数名词</b>。打发后叫 whipped cream(掼奶油)。",
      examples: [
        { en: "She poured cream over the strawberries.", zh: "她在草莓上浇了奶油。", hl: "cream" },
        { en: "Add a splash of cream to the sauce.", zh: "往酱汁里加一点奶油。", hl: "cream" },
        { en: "Do you take cream in your coffee?", zh: "你咖啡里加奶油吗?", hl: "cream" }
      ]
    },
    {
      group: "乳制品 · Dairy",
      head: "yoghurt",
      def: "a thick, slightly sour food made from milk",
      zh: "酸奶",
      register: "不可数",
      when: "通常<b>不可数</b>;指一份/一种时可数(a yoghurt)。",
      syn: "也拼作 yogurt",
      examples: [
        { en: "I have yoghurt with fruit for breakfast.", zh: "我早餐吃酸奶配水果。", hl: "yoghurt" },
        { en: "She bought a pot of yoghurt.", zh: "她买了一盒酸奶。", hl: "yoghurt" },
        { en: "The shop sells several fruit yoghurts.", zh: "这家店卖好几种水果酸奶。", hl: "yoghurts" }
      ]
    },
    {
      group: "乳制品 · Dairy",
      head: "egg",
      def: "an oval object with a shell, laid by a hen and eaten as food",
      zh: "鸡蛋、蛋",
      register: "可数",
      when: "<b>可数名词</b>,复数 eggs。做法:boiled / fried / scrambled / poached egg。",
      examples: [
        { en: "I boiled two eggs for breakfast.", zh: "我早餐煮了两个鸡蛋。", hl: "eggs" },
        { en: "Crack an egg into the bowl.", zh: "往碗里磕一个鸡蛋。", hl: "egg" },
        { en: "She whisked the eggs with a fork.", zh: "她用叉子把鸡蛋打散。", hl: "eggs" }
      ]
    },

    // ── 早餐 Breakfast ──────────────────────────────
    {
      group: "早餐 · Breakfast",
      head: "jam",
      def: "a sweet food made from fruit boiled with sugar, spread on bread",
      zh: "果酱",
      register: "不可数",
      when: "<b>不可数名词</b>:a jar of jam(一罐果酱)。",
      syn: "美式 jelly 多指无果肉的果冻状果酱",
      examples: [
        { en: "She spread strawberry jam on her toast.", zh: "她在吐司上抹了草莓酱。", hl: "jam" },
        { en: "We made jam from the plums.", zh: "我们用李子做了果酱。", hl: "jam" },
        { en: "There's a jar of jam in the cupboard.", zh: "橱柜里有一罐果酱。", hl: "jam" }
      ]
    },
    {
      group: "早餐 · Breakfast",
      head: "honey",
      def: "a sweet, sticky food made by bees",
      zh: "蜂蜜",
      register: "不可数",
      when: "<b>不可数名词</b>:a jar of honey、a spoonful of honey。",
      examples: [
        { en: "Stir a spoonful of honey into the tea.", zh: "往茶里搅一勺蜂蜜。", hl: "honey" },
        { en: "This honey is thick and golden.", zh: "这蜂蜜浓稠金黄。", hl: "honey" },
        { en: "Bees make honey from nectar.", zh: "蜜蜂用花蜜酿蜂蜜。", hl: "honey" }
      ]
    },
    {
      group: "早餐 · Breakfast",
      head: "porridge",
      def: "a soft breakfast food made by boiling oats in milk or water",
      zh: "麦片粥、燕麦粥",
      register: "不可数",
      when: "<b>不可数名词</b>。",
      syn: "美式常叫 oatmeal",
      examples: [
        { en: "He has porridge with honey every morning.", zh: "他每天早上吃加蜂蜜的燕麦粥。", hl: "porridge" },
        { en: "Porridge keeps you full all morning.", zh: "燕麦粥能让你一上午都不饿。", hl: "Porridge" },
        { en: "She stirred the porridge so it wouldn't stick.", zh: "她搅着燕麦粥,免得糊锅。", hl: "porridge" }
      ]
    },
    {
      group: "早餐 · Breakfast",
      head: "oats",
      def: "grain used to make porridge and breakfast cereals",
      zh: "燕麦",
      register: "复数",
      when: "常作<b>复数</b>:some oats、rolled oats(燕麦片)。",
      examples: [
        { en: "Add a cup of oats to the boiling water.", zh: "往沸水里加一杯燕麦。", hl: "oats" },
        { en: "These biscuits are made with oats.", zh: "这些饼干是用燕麦做的。", hl: "oats" },
        { en: "Rolled oats make the best porridge.", zh: "燕麦片煮出来的粥最好吃。", hl: "oats" }
      ]
    },
    {
      group: "早餐 · Breakfast",
      head: "pancake",
      def: "a thin, flat cake made from batter and fried in a pan",
      zh: "煎饼、薄饼、松饼",
      register: "可数",
      when: "<b>可数名词</b>,复数 pancakes。英式较薄,美式较厚(配 maple syrup)。",
      examples: [
        { en: "We had pancakes with maple syrup.", zh: "我们吃了配枫糖浆的松饼。", hl: "pancakes" },
        { en: "She flipped the pancake in the pan.", zh: "她在锅里把煎饼翻了个面。", hl: "pancake" },
        { en: "He made a tall stack of pancakes.", zh: "他做了高高一摞松饼。", hl: "pancakes" }
      ]
    }
  ]
};
