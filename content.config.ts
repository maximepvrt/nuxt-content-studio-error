import { defineContentConfig, defineCollection, property } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        seo: property(
          z
            .intersection(
              z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                meta: z.array(z.record(z.string(), z.any())).optional(),
                link: z.array(z.record(z.string(), z.any())).optional(),
              }),
              z.record(z.string(), z.any())
            )
            .optional()
            .default({})
        ).editor({ hidden: true }),
        navigation: property(
          z
            .union([
              z.boolean(),
              z.object({
                title: z.string(),
                description: z.string(),
                icon: z.string(),
              }),
            ])
            .default(true)
        ).editor({ hidden: true }),
      }),
    }),
  },
});
