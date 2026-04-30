---
---

## About

The first time I opened Sketchup was a sophomore-year elective. The little orange pencil cursor turned what I had assumed was an expensive, fussy engineering exercise — *modelling* — into something closer to a sketch you could throw down without ceremony. Within our discipline the software is mostly used for studying massing; but to me, just learning 3D, it felt more like a patch of grass you could draw on, erase, and redraw, at no cost.

It has stayed in my toolbar ever since. Bit by bit I picked up SubD subdivision, Curviloft surface lofting, and MSPhysics dynamics, and eventually worked out my own approach to dynamic components. To me, Sketchup is less a piece of architectural software than a pencil that is willing to wander off-topic with me. The three chapters below are some of the work that pencil has produced.

## Small objects

The earliest exercises were just things from around the house — a fruit tray, a knife, a night-light, a Pikachu charm, a phonograph, a spider, a toothbrush, a harmonica. Each one started from the most ordinary outline: a vertex editor to push the form into shape, SubD to soften it, Curviloft to stitch the surfaces shut.

There is no "correct" version of any of these objects. Their only job was to teach the hand the software — how a face is divided, how a single curve decides the whole form. Looking back, it is the muscle memory built up here that quietly carried every more complex study that came afterwards.

![](/research/sketchup/_-2-_.png)

## Scenes

The second chapter pulls back from a single object to a whole scene. Most of the source material comes from daily life and animation: Doraemon's prop adventure hat from *The Great Magic Realm*, stars sitting in a pile of broken glass, a seaside boardwalk, a clover meadow, the Sketchup mug my friend Wang Jian made in Enscape, the prosecutor's medal from *Ace Attorney*, a path through reeds in the wind.

These scenes lean on two plugins. MSPhysics makes objects fall and pile up the way real things do; Skatter scatters natural elements so they neither tile nor repeat. Together they round off the slightly geometric stiffness Sketchup defaults to.

![](/research/sketchup/_-3-_.png)

## A studio dynamic-component method

By the third chapter I had become curious about the *dynamic components* Sketchup ships with — those official samples that can be clicked, scaled, parametrically reshaped. Take them apart and they are just a small system of attributes plus formulas; combine them with a few other plugins and they can do far more than the documentation lets on.

The image below shows some parametric models built with this approach. Each can be reshaped through its parameters: a shell (I posted a tutorial for this one on Bilibili), a parameter ball, a three-segment pedestrian bridge, a parameter ring, a snowflake lamp, a pair of earrings, a wall lamp.

![](/research/sketchup/_-1-_.png)

Static images can't really show parametric behaviour, so the GIFs below record what happens when the parameters move.

The simplest case first — my personal template, where a mouse click swaps between two facial expressions. The trick is to model both, then toggle their hidden attribute on click.

![](/research/sketchup/GIF-2024-7-3-20-07-08.gif)

A butterfly that flies. A click increments an internal counter; the butterfly's coordinates are tied to that counter through trigonometric functions, and its wings come alive.

![](/research/sketchup/GIF-2024-7-3-20-25-03.gif)

A garden gate, similar in principle to the butterfly, with one extra: a fixed-size parameter so the gate can be scaled to any width while keeping its open / close animation on click.

![](/research/sketchup/GIF-2024-7-3-20-26-40.gif)

A fence that randomly switches colour. Both length and the palette of colours are exposed to parameters — you don't model one fence, you model a family of them.

![](/research/sketchup/GIF-2024-7-3-20-23-15.gif)

The parameter ring. The formula is converted directly into the model's polar coordinates; one parameter set yields one form, and Curviloft stitches the slices into a single clean solid.

![](/research/sketchup/GIF-2024-7-3-20-33-29.gif)

And finally an escape-room game. Mouse clicks trigger events; you solve puzzles to leave the room. By this point it has stopped being modelling at all — it is closer to writing a small interactive piece in the language of Sketchup.

![](/research/sketchup/GIF-2024-7-3-22-40-28.gif)
