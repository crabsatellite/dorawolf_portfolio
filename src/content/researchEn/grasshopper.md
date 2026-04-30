---
---

## About

Grasshopper sits in the studio as a working instrument, not as the "high-end-looking" canvas next to Rhino. It doesn't make architectural design itself any cleverer; it just compresses the recurring steps into a single click and pulls the early-stage judgements that tend to dissipate back onto the desk.

The studio's standard practice is to wire up small component groups that talk to Rhino in real time — nudge the mouse and the definition runs again, no need to manually re-pick objects. This study is divided into four directions: a kit of utility components, building skins and structure, environmental simulation, and a more exploratory set of form-driven experiments.

## A utility kit

The first group collects the small functions reached for repeatedly, packaged as single-call components: extracting upper / lower edges, extracting Brep height, dividing curves by distance, ISO, converting curves to cosine waves, generating stairs with rest landings in one click, randomly breaking curves, indoor lighting, line-to-arrow, path-following, generating V-shaped columns, merging floor slabs, converting to wave lines, removing duplicate faces.

For extracting upper and lower edges there are two separate definitions covering different model types — one based on geometric projection, one on topological traversal:

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

Stitched together, even these small components occasionally produce something not very useful but unexpectedly fun as a by-product:

![](/research/grasshopper/QQ_20240705162332.png)

![](/research/grasshopper/QQ_20240705162340.png)

## Buildings

In the project pipeline, most Grasshopper time goes into building skins and structure. Every project comes with its own boundary conditions, so the source files are rarely archived; what follows is a small selection of skin definitions that came back into rotation.

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

## Form experiments

The last group pushes Grasshopper past the boundary of its project tasks, to test how large a system of forms this dataflow can actually carry. These are not deliverables — they are the studio's own stress tests.

An *element toolbox*: a fairly large piece of work, built around several mutually independent yet combinable "elements", each tied to its own small tool. Hold Alt and drag the right mouse button left or right to switch between them. The screenshot below is a fragment of the wiring; the whole graph is too dense to fit into a still image.

![](/research/grasshopper/_-1.jpg)

Two of the elements in motion:

![](/research/grasshopper/GIF-2024-7-8-17-02-39.gif)

![](/research/grasshopper/GIF-2024-7-8-17-03-44.gif)

Bow-and-arrow launch. Only the pre-launch animation is finished so far; the rest continues as a motion state-machine:

![](/research/grasshopper/QQ_20240705202826.png)

![](/research/grasshopper/GIF-2024-7-5-20-28-10.gif)

Rule-driven board-game study — the rules are written into the wiring as constraints, used to verify the jump from rules to form:

![](/research/grasshopper/QQ_20240705203113.png)

![](/research/grasshopper/GIF-2024-7-5-20-31-52.gif)
