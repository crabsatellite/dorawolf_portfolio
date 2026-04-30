---
---

## About

The first time I saw Grasshopper, in university, I assumed it was the "high-end-looking" canvas next to Rhino — and never really learned to use it. It wasn't until the second month at my first studio job, with my mentor Gao Atom walking me through it line by line, that I started treating it as a daily instrument.

Once I was comfortable, I began wiring up small component groups that talk to Rhino in real time — no need to manually re-pick objects, just nudge the mouse and the definition runs again. None of this made architectural design itself any cleverer; it just turned a handful of repetitive steps into a single click. This study is divided into four directions: a kit of utility components, building skins and structure, environmental simulation, and personal-interest experiments unrelated to my profession.

## A utility kit

Small functions I find myself reaching for repeatedly, packaged as single-call components: extracting upper / lower edges, extracting Brep height, dividing curves by distance, ISO, converting curves to cosine waves, generating stairs with rest landings in one click, randomly breaking curves, indoor lighting, line-to-arrow, path-following, generating V-shaped columns, merging floor slabs, converting to wave lines, removing duplicate faces.

For extracting upper and lower edges I wrote two separate definitions covering different model types — one based on geometric projection, one on topological traversal:

![](/research/grasshopper/QQ_20240704215717.png)

![](/research/grasshopper/QQ_20240704215749.png)

Converting a straight line into a periodic cosine curve:

![](/research/grasshopper/QQ_20240704220013.png)

![](/research/grasshopper/QQ_20240704220113.png)

![](/research/grasshopper/QQ_20240704220125.png)

Turning a surface into a stair with rest landings:

![](/research/grasshopper/QQ_20240704220754.png)

![](/research/grasshopper/QQ_20240704220808.png)

Randomly breaking curves:

![](/research/grasshopper/QQ_20240704220904.png)

![](/research/grasshopper/QQ_20240704220910.png)

Stitched together, even these small components occasionally produce something not very useful but unexpectedly fun:

![](/research/grasshopper/QQ_20240705162332.png)

![](/research/grasshopper/QQ_20240705162340.png)

## Buildings

Most of my Grasshopper time at work has gone to building skins and structure. Every project comes with its own boundary conditions, so the source files were rarely archived; what follows is a small selection of skin definitions that came back into rotation.

A shark-skin façade:

![](/research/grasshopper/QQ_20240705170154.png)

![](/research/grasshopper/QQ_20240705170206.png)

One-click classroom layout — a way to drop a code-compliant teaching cluster into place in a few seconds:

![](/research/grasshopper/QQ_20240705171209.png)

![](/research/grasshopper/GIF-2024-7-5-17-10-29.gif)

A Y-shaped column:

![](/research/grasshopper/QQ_20240705172017.png)

![](/research/grasshopper/GIF-2024-7-5-17-19-31.gif)

Rainwater simulation, used as a quick check on roof drainage direction:

![](/research/grasshopper/GIF-2024-7-5-17-27-45.gif)

One-click façade flow, with material differentiation:

![](/research/grasshopper/QQ20240718-222144.png)

![](/research/grasshopper/QQ20240718-222122.png)

## Environmental simulation

This chapter leans almost entirely on Ladybug. It turns the early "feel" of a scheme into something nameable in numbers — it doesn't solve the problem, but it puts the problem on the table where it can be talked about.

Sunlight analysis:

![](/research/grasshopper/QQ_20240705190133.png)

![](/research/grasshopper/QQ_20240705190124.png)

Daylight factor. The right image simulates a single classroom, showing UDI (useful daylight illuminance) and DA (daylight autonomy):

![](/research/grasshopper/QQ_20240705195127.png)

![](/research/grasshopper/QQ_20240705195809.png)

Thermal comfort. The right image plots operative temperature against the share of comfort-time:

![](/research/grasshopper/QQ_20240705195306.png)

![](/research/grasshopper/QQ_20240705195830.png)

## Hobbies

This chapter has nothing to do with my day job. It's me playing with Grasshopper for the sake of it.

An *element toolbox*: a fairly large project. Inspired by the seven elements of *Genshin Impact*, mapped onto seven small tools — hold Alt and drag the right mouse button left or right to switch elements, with combinations between them. The full demo lives on [Bilibili](https://www.bilibili.com/video/BV1LdKRejEZL/); the screenshot below is only a fragment of the wiring, the whole graph is too dense to fit into a still image.

![](/research/grasshopper/_-1.jpg)

A look at two of the elements in motion:

![](/research/grasshopper/GIF-2024-7-8-17-02-39.gif)

![](/research/grasshopper/GIF-2024-7-8-17-03-44.gif)

Bow-and-arrow launch. Only the pre-launch animation is finished so far; the rest is still in progress:

![](/research/grasshopper/QQ_20240705202826.png)

![](/research/grasshopper/GIF-2024-7-5-20-28-10.gif)

Chess:

![](/research/grasshopper/QQ_20240705203113.png)

![](/research/grasshopper/GIF-2024-7-5-20-31-52.gif)
