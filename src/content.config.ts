import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    // If set, the post lists in the feed but links out (e.g. work posts on dust.tt).
    external: z.string().url().optional(),
    // Short label shown next to external posts, e.g. "dust.tt".
    source: z.string().optional(),
    // Projects render as a compact one-liner in the feed instead of a full entry.
    kind: z.enum(['post', 'project']).default('post'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
