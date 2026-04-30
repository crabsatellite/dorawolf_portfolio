---
title: "Grasshopper"
titleZh: "Grasshopper 专篇"
blurb: "Visual programming for parametric design — a small kit of utility components, plus building, environmental, and personal-interest experiments."
blurbZh: "可视化参数化编程 — 通用小工具集,以及建筑、环境模拟、爱好类实验。"
hero: "/research/grasshopper/QQ_20240704215717.png"
order: 2
---

## 关于

大学时第一次见到 Grasshopper,我以为它只是 Rhino 旁边那块"看起来很高级"的画布——没真正学会用它。直到工作的第二个月,在导师高原子手把手地带下,才算是开始把它当成一件日常工具。

熟悉之后,我陆续自己拼了一些可以和 Rhino 实时联动的电池组——不必再手动选物体,鼠标动一动就能跑一遍。它没有让"建筑设计"变得更聪明,但确实让一些重复的步骤变成了一次点击。这一篇分四个方向记录:通用工具集、建筑表皮与结构、环境模拟、以及与本职无关的爱好实验。

## 通用工具

工作里反复用到的小功能,我把它们整理成一组随时可调用的电池:提取上下边线、提取 Brep 高度、按距离等分线、ISO、转化余弦曲线、一键生成带休息平台的台阶、随机打断曲线、室内打灯、线转箭头、路径跟随、生成 V 形柱、合并楼板、转波浪线、去除重复面。

提取上下边线,我写了两套不同原理,适配两类不同的模型——一个偏几何投影,一个偏拓扑遍历:

![](/research/grasshopper/QQ_20240704215717.png)

![](/research/grasshopper/QQ_20240704215749.png)

把直线按周期转成余弦曲线:

![](/research/grasshopper/QQ_20240704220013.png)

![](/research/grasshopper/QQ_20240704220113.png)

![](/research/grasshopper/QQ_20240704220125.png)

把一片曲面转成带休息平台的台阶:

![](/research/grasshopper/QQ_20240704220754.png)

![](/research/grasshopper/QQ_20240704220808.png)

随机打断曲线:

![](/research/grasshopper/QQ_20240704220904.png)

![](/research/grasshopper/QQ_20240704220910.png)

把这些电池组合起来,有时也能拼出一些不那么实用、但意外好玩的效果:

![](/research/grasshopper/QQ_20240705162332.png)

![](/research/grasshopper/QQ_20240705162340.png)

## 建筑

工作中的 GH,大部分时间花在建筑表皮和结构上。每个项目的具体边界条件都不一样,源文件大多没特意留底,这里只挑几个常用的表皮文件做记录。

鲨鱼皮:

![](/research/grasshopper/QQ_20240705170154.png)

![](/research/grasshopper/QQ_20240705170206.png)

一键排教室——用来在很短时间里铺出一个合规的教学组团:

![](/research/grasshopper/QQ_20240705171209.png)

![](/research/grasshopper/GIF-2024-7-5-17-10-29.gif)

Y 形柱:

![](/research/grasshopper/QQ_20240705172017.png)

![](/research/grasshopper/GIF-2024-7-5-17-19-31.gif)

雨水模拟,用来粗算屋面排水方向:

![](/research/grasshopper/GIF-2024-7-5-17-27-45.gif)

一键立面流动(区分材质):

![](/research/grasshopper/QQ20240718-222144.png)

![](/research/grasshopper/QQ20240718-222122.png)

## 环境模拟

这一组主要靠 Ladybug。它把方案早期的"感觉"变成可以被指认的数字——不解决问题,但至少把问题落到桌面上。

日照分析:

![](/research/grasshopper/QQ_20240705190133.png)

![](/research/grasshopper/QQ_20240705190124.png)

采光系数。右图是模拟一间教室的数据图,UDI(有效采光照度)和 DA(全自然采光百分比):

![](/research/grasshopper/QQ_20240705195127.png)

![](/research/grasshopper/QQ_20240705195809.png)

热舒适模拟。右图是操作温度和舒适时间占比:

![](/research/grasshopper/QQ_20240705195306.png)

![](/research/grasshopper/QQ_20240705195830.png)

## 爱好

这一组跟本职没什么关系,纯粹是借着 GH 的特性玩。

元素工具箱:一个不小的工程。参考原神的七种元素,对应七个不同的小工具,按住 Alt + 鼠标右键左右滑动切换元素,不同元素之间也可以叠加。完整演示我放在了 [B 站](https://www.bilibili.com/video/BV1LdKRejEZL/),下图只是其中一小段电池截图——整体的工作量实在不适合塞进静态图里。

![](/research/grasshopper/_-1.jpg)

下面是其中两种元素的效果:

![](/research/grasshopper/GIF-2024-7-8-17-02-39.gif)

![](/research/grasshopper/GIF-2024-7-8-17-03-44.gif)

弓箭发射。目前只做完了发射前的一段动画,后续还在继续:

![](/research/grasshopper/QQ_20240705202826.png)

![](/research/grasshopper/GIF-2024-7-5-20-28-10.gif)

下棋:

![](/research/grasshopper/QQ_20240705203113.png)

![](/research/grasshopper/GIF-2024-7-5-20-31-52.gif)
