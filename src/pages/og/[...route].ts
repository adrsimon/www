import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const posts = await getCollection('posts', ({ data }) => !data.draft);

const fmt = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase();

const pages: Record<string, { title: string; description: string }> = {
  index: {
    title: 'adrien simon',
    description: 'building agents @ dust',
  },
};

for (const post of posts) {
  pages[post.id] = {
    title: post.data.title.toLowerCase(),
    description: fmt(post.data.date),
  };
}

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[12, 12, 14]],
    padding: 80,
    logo: { path: './public/og-mark.png', size: [72, 72] },
    font: {
      title: {
        color: [237, 237, 240],
        size: 60,
        weight: 'SemiBold',
        lineHeight: 1.2,
        families: ['Inter'],
      },
      description: {
        color: [143, 143, 152],
        size: 28,
        families: ['Geist Mono'],
      },
    },
    fonts: [
      'https://api.fontsource.org/v1/fonts/inter/latin-600-normal.ttf',
      'https://api.fontsource.org/v1/fonts/geist-mono/latin-400-normal.ttf',
    ],
  }),
});
