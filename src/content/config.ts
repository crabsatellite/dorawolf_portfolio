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
    note: z.string().optional(),
    noteZh: z.string().optional(),
    align: z.enum(["left", "right"]).default("left"),
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

// English-locale bodies for the project case studies. Same slug as the
// canonical `projects` entry; only the markdown body is translated.
const projectsEn = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string().optional(),
  }),
});

// English-locale bodies for the research studies. Same slug as the
// canonical `research` entry; only the markdown body is translated.
const researchEn = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string().optional(),
  }),
});

export const collections = { projects, research, projectsEn, researchEn };
