---
title: "Grasshopper"
titleZh: "Grasshopper 专篇"
blurb: "Visual programming for parametric design — a small kit of utility components, plus building, environmental, and personal-interest experiments."
blurbZh: "可视化参数化编程 — 通用小工具集,以及建筑、环境模拟、爱好类实验。"
hero: "/research/grasshopper/QQ_20240704215717.png"
order: 2
---

## 关于Grasshopper

## About Grasshopper

Grasshopper是Rhino里一个强大的可视化编程插件，它与Rhino的3D建模功能紧密集成。Grasshopper允许用户通过拖放界面和连接不同的组件来创建复杂的参数化模型和设计。广泛应用于建筑、产品设计、艺术装置等领域，它支持用户进行参数化设计、生成式设计、动态模拟和复杂几何体的创建。 Grasshopper is a powerful visual programming plugin in Rhino that is closely integrated with Rhino’s 3D modeling capabilities. Grasshopper allows users to create complex parametric models and designs by dragging and dropping interfaces and connecting different components. Widely used in fields such as architecture, product design, and art installations, it supports users in parametric design, generative design, dynamic simulation, and the creation of complex geometries.

尽管在大学时期曾接触过这款软件，但遗憾的是，我并未能掌握其精髓。直到步入职场后的第二个月，我才真正开始正式使用它。我非常感谢我的导师高原子，在很短的时间内传授给我许多宝贵的知识。在熟练掌握这个插件的基本操作后，我更进一步自主研发了一些能够与Rhino实时互动的电池组件。这些创新功能使我无需手动设置物体，仅凭鼠标控制，便能轻松实现多种操作，极大地提升了工作效率。下面是我的一部分作品。 Although I was exposed to this software during my college years, unfortunately, I was unable to grasp its essence. It wasn’t until the second month after entering the workplace that I officially started using it. I am very grateful to my mentor Gao Atom for imparting me a lot of valuable knowledge in a very short period of time. After mastering the basic operation of this plugin proficiently, I further independently developed some battery components that can interact with Rhino in real-time. These innovative features allow me to easily perform multiple operations without the need to manually set objects, relying solely on mouse control, greatly improving work efficiency. Here are some of my works.

## 通用篇

## General section

这部分是整合了建筑常用的一些小功能，打包方便随时可以调用。按照功能来讲分别是：提取上下边线；提取brep高度；按距离等分线；ISO；转化余弦曲线；一键生成带休息平台的台阶；随机打断曲线；室内打灯；线转箭头；路径跟随；生成V形柱；合并楼板；转波浪线；去除重复面。下面是其中一些部分的演示： This section integrates some commonly used small functions in architecture, making it easy to package and call at any time. According to their functions, they are: extracting upper and lower edges; Extract Brep height; Divide lines equally by distance; ISO； Convert cosine curve; One click generation of steps with rest platform; Randomly break the curve; Indoor lighting; Line to arrow; Path following; Generate V-shaped columns; Merge floor slabs; Turning wave lines; Remove duplicate faces.Here are some demonstrations of these parts:

提取物件的上下边线，用了两种不同的原理以适用不同的模型 Extracting the upper and lower edges of objects using two different principles to apply to different models

![](/research/grasshopper/QQ_20240704215717.png)

![](/research/grasshopper/QQ_20240704215749.png)

将线按照周期转化成余弦图像的曲线 Convert the line into a cosine image curve according to its period

![](/research/grasshopper/QQ_20240704220013.png)

![](/research/grasshopper/QQ_20240704220113.png)

![](/research/grasshopper/QQ_20240704220125.png)

将曲面转换成带休息平台的台阶 Convert the surface into steps with rest platforms

![](/research/grasshopper/QQ_20240704220754.png)

![](/research/grasshopper/QQ_20240704220808.png)

随机打断曲线 Randomly break curves

![](/research/grasshopper/QQ_20240704220904.png)

![](/research/grasshopper/QQ_20240704220910.png)

使用这些常小工具，可以轻松地组合做出一些特殊效果 By using these common tools, it is easy to combine them to create some special effects

![](/research/grasshopper/QQ_20240705162332.png)

![](/research/grasshopper/QQ_20240705162340.png)

## 建筑篇

## Architecture

工作中的gh主要以建筑表皮和建筑结构居多，由于每次项目的具体情况不一样，所以没有特意去存那些源文件，这里只展示一部分经常用的的表皮文件 In work, GH mainly focuses on building skins and structures. As the specific situation of each project is different, there is no deliberate storage of those source files. Here, only a portion of commonly used skin files are displayed

鲨鱼皮 Shark skin

![](/research/grasshopper/QQ_20240705170154.png)

![](/research/grasshopper/QQ_20240705170206.png)

一键排教室 One click classroom arrangement

![](/research/grasshopper/QQ_20240705171209.png)

![](/research/grasshopper/GIF-2024-7-5-17-10-29.gif)

Y形柱 Y-shaped column

![](/research/grasshopper/QQ_20240705172017.png)

![](/research/grasshopper/GIF-2024-7-5-17-19-31.gif)

雨水模拟 Rainwater simulation

![](/research/grasshopper/GIF-2024-7-5-17-27-45.gif)

一键立面流动(区分材质) One click facade flow (distinguishing materials)

![](/research/grasshopper/QQ20240718-222144.png)

![](/research/grasshopper/QQ20240718-222122.png)

## 环境模拟篇

## Environmental Simulation

这部分主要依靠gh里的Ladybug插件来实现一些环境模拟 This part mainly relies on the Ladybug plugin in gh to achieve some environment simulation

日照分析 sunlight analysis

![](/research/grasshopper/QQ_20240705190133.png)

![](/research/grasshopper/QQ_20240705190124.png)

采光系数 右图是模拟一个教室的数据图，分别是UDI（有效采光照度）和DA（全自然采光百分比） The right figure of the lighting coefficient is a data graph that simulates a classroom, which shows UDI (effective lighting intensity) and DA (percentage of natural lighting), respectively

![](/research/grasshopper/QQ_20240705195127.png)

![](/research/grasshopper/QQ_20240705195809.png)

热舒适模拟 右图分别是操作温度/舒适时间占比 The right figure of thermal comfort simulation shows the proportion of operative temperature/comfort time, respectively

![](/research/grasshopper/QQ_20240705195306.png)

![](/research/grasshopper/QQ_20240705195830.png)

## 爱好篇

## Hobbies section

这部分跟我的职业没有太大的关系，我根据gh的特性创造了各种有意思的小工具 This part has little to do with my profession. I have created various interesting small tools based on the functions of gh

元素工具箱：这是个非常庞大的工程。它参考了原神的七种元素，分别对应了七个不同的小工具，你可以按住alt并按住鼠标右键左右滑动来切换不同的元素，不同元素之间甚至可以搭配使用。具体的演示视频可以看我上传在b站的作品： https://www.bilibili.com/video/BV1LdKRejEZL/?vd_source=fc6f13c2949d8c062913a6f8f219ebe9 下面我只上传了局部的电池截图，因为实在是非常庞大的工作量 Element Toolbox: This is a very extensive project. It refers to the seven elements of Genshin Impact and corresponds to seven different gadgets. You can press alt and hold the right mouse button to slide left and right to switch between different elements. Different elements can even be used together.The specific demonstration video can be seen in the works I uploaded on Bilibili Below, I have only uploaded partial screenshots of the battery, as it is a very large workload

![](/research/grasshopper/_-1.jpg)

这里展示一下其中两种元素的效果 Here is a demonstration of the effects of two of these elements

![](/research/grasshopper/GIF-2024-7-8-17-02-39.gif)

![](/research/grasshopper/GIF-2024-7-8-17-03-44.gif)

弓箭发射 目前只制作好了发射前的动画，后续还在制作中 Currently, only the pre launch animation has been produced for the bow and arrow launch, and further production is still ongoing

![](/research/grasshopper/QQ_20240705202826.png)

![](/research/grasshopper/GIF-2024-7-5-20-28-10.gif)

下棋 play chess

![](/research/grasshopper/QQ_20240705203113.png)

![](/research/grasshopper/GIF-2024-7-5-20-31-52.gif)
