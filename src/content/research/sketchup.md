---
title: "Sketchup"
titleZh: "Sketchup 专篇"
blurb: "Daily 3D modeling — small-object practice, scene-creation studies, and a custom dynamic-component method developed in the studio."
blurbZh: "日常 3D 建模 — 小物件练习、场景营造、以及自创的动态组件建模法。"
hero: "/research/sketchup/_-2-_.png"
order: 1
---

## 关于Sketchup

## About Sketchup

作为一款功能强大且易于上手的3D建模软件，SketchUp在建筑设计、室内设计、景观设计、游戏开发和电影制作等领域应用广泛。它不仅操作简单，界面直观，而且还有预设的3D库和丰富的工具栏。此外，它还支持插件扩展，可以根据自身需要添加额外的功能。因此，不管是绘制线条、形状和表面，还是调整细节和赋予材质，SketchUp都拥有相当的优势。所以，无论是专业设计师还是3D建模初学者，SketchUp都是一个优先的选择，因为它让创意的实现变得更加简单和直观。 As a powerful and easy-to-use 3D modeling software, SketchUp is widely used in fields such as architectural design, interior design, landscape design, game development, and film production. It not only has simple operation and intuitive interface, but also has preset 3D libraries and rich toolbars. In addition, it also supports plugin extensions and can add additional features according to its own needs. Therefore, whether it’s drawing lines, shapes, and surfaces, or adjusting details and assigning materials, SketchUp has significant advantages. So, whether it’s a professional designer or a beginner in 3D modeling, SketchUp is a priority choice because it makes creative implementation easier and more intuitive.

在我大二那年，我有幸接触到了这款软件。尽管在我们专业领域内，它主要被用于建筑设计，但初次体验三维建模软件的我，却对其产生了浓厚的兴趣。自那以后，我不再满足于仅仅制作简单的建筑模型，而是开始探索和学习更为复杂的建模技术。我涉猎了SubD细分建模，掌握了适用于各种曲面的流动建模技巧，还深入研究了基于MSPhysics的动力学建模。直至最终，我自创了动态组件建模法。这款软件始终是我极为珍视和喜爱的工具。下面是我的其中一部分练习作品。 In my sophomore year, I had the privilege of being exposed to this software. Although it is mainly used in architectural design within our professional field, as a first-time user of 3D modeling software, I have developed a strong interest in it. Since then, I have been no longer satisfied with just making simple building models, but have begun to explore and learn more complex modeling techniques. I have delved into SubD subdivision modeling, mastered flow modeling techniques applicable to various surfaces, and also delved into dynamic modeling based on MSPhysics. Until the end, I created the dynamic component modeling method myself. This software has always been a tool that I highly value and love.Here are some of my exercise works.

## 小物件篇

## Small Objects

从日常生活中的小物件的练习出发,这部分的模型主要是用顶点编辑器,subd细分建模以及curviloft来实现. 下图分别展示的是果盘,小刀,夜灯,皮卡丘挂件,留声机,蜘蛛,牙刷,口琴

Starting from the practice of small objects in daily life, this part of the model is mainly implemented using vertex editors, subd subdivision modeling, and curveloft The following pictures show the fruit tray, knife, night light, Picasso pendant, phonograph, spider, toothbrush, and harmonica, respectively

![](/research/sketchup/_-2-_.png)

## 场景营造篇

## Scene Creation

这部分主要以生活中的所见为灵感来进行的创作.这部分主要是通过MSPhysics动力学插件,skatter自然散布来实现的 。 图片分别是:大雄的大魔境中哆啦a梦的道具探险帽,碎玻璃堆中的星星,海边步道,三叶草丛,sketchup杯(朋友王剑enscape 所 出),逆转裁判中的检察官勋章,芦苇步道

This section is mainly inspired by what we see in life The pictures are: Doraemon’s prop adventure hat in Daxiong’s Great Magic Realm, stars in broken glass piles, seaside trail, clover bushes, sketchup cup (issued by his friend Wang Jian’s enscape), prosecutor’s medal in reversal judgment, reed trail

![](/research/sketchup/_-3-_.png)

## 动态组件篇

## Dynamic Components

Sketchup自带了一些动态组件资源,我通过这些官方案例配合一些其他插件,做了一些有意思的参数化模型.当然,它们的形态是可以通过参数调控的. 下图分别是: 贝壳 (这个我在b站发表了教程),参数球,三段人行天桥,参数环,雪花灯,耳环,壁灯

Sketchup comes with some dynamic component resources, and I have created some interesting parameterized models through these official cases combined with other plugins. Of course, their forms can be adjusted through parameters The following images are: Shell (which I have published a tutorial on Bilibili), Parameter Ball, Three Section Pedestrian Overpass, Parameter Ring, Snowflake Lamp, Earrings, and Wall Lamp

![](/research/sketchup/_-1-_.png)

这部分因为普通图片难以展示,我录制了一些gif来展示它们是如何参数化变化的. This part is difficult to display with regular images, so I recorded some GIFs to show how they are parameterized

首先是一个最简单的案例,我的个人模板,通过鼠标点击就可以切换表情,它的原理是做好两个表情的模型,通过点击切换它们的隐藏属性 First of all, let’s take the simplest example. My personal template allows you to switch between emoticons by clicking with the mouse. Its principle is to create models for two emoticons and switch their hidden attributes by clicking on them

![](/research/sketchup/GIF-2024-7-3-20-07-08.gif)

这是一只可以飞舞的蝴蝶,原理是通过点击设置一个不断增加的值,将蝴蝶的坐标通过三角函数和这个变量联系起来. This is a butterfly that can fly. The principle is to set an increasing value by clicking, and connect the coordinates of the butterfly with this variable through a trigonometric function

![](/research/sketchup/GIF-2024-7-3-20-25-03.gif)

这是一个栅栏门,原理跟蝴蝶的相似,但是多了一个固定尺寸的设定,可以通过缩放来控制它的长度,并用鼠标点击来实现动画 This is a fence door, similar in principle to a butterfly, but with an additional fixed size setting that can be scaled to control its length and animated with a mouse click

![](/research/sketchup/GIF-2024-7-3-20-26-40.gif)

这是一个可以随机切换颜色的栅栏,可以通过设置尺寸和颜色来切换不同的种类 This is a fence that can randomly switch colors, and different types can be switched by setting the size and color

![](/research/sketchup/GIF-2024-7-3-20-23-15.gif)

这是上面的参数环,原理也是通过将公式转化成模型的极坐标,可以通过设置一系列参数来控制模型生成的形态,并用curviloft插件来将它们生成一个完美的实体 This is the parameter loop above, which works by converting the formula into the polar coordinates of the model. The shape of the model can be controlled by setting a series of parameters, and they can be generated into a perfect entity using the Curviloft plugin

![](/research/sketchup/GIF-2024-7-3-20-33-29.gif)

这是一个密室逃脱游戏,你可以通过鼠标点击触发各种事件,通过解密来逃出这个房间 This is a room escape game where you can trigger various events by clicking the mouse and escape from the room by decrypting it

![](/research/sketchup/GIF-2024-7-3-22-40-28.gif)
