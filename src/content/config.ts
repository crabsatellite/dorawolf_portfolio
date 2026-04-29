import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    year: z.number(),
    dateZh: z.string().optional(),
    location: z.string().optional(),
    role: z.string().optional(),
    typology: z.string().optional(),
    status: z
      .enum(["concept", "competition", "schematic", "built", "ongoing"])
      .optional(),
    cover: z.string().optional(),
    hero: z.string().optional(),
    summary: z.string(),
    summaryZh: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    blurb: z.string(),
    blurbZh: z.string().optional(),
    hero: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, research };
