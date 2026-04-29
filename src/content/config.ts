import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    year: z.number(),
    location: z.string().optional(),
    role: z.string().optional(),
    typology: z.string().optional(),
    status: z.enum(["concept", "competition", "schematic", "built", "ongoing"]).optional(),
    cover: z.string().optional(),
    summary: z.string(),
    summaryZh: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
