---
title: "Testing the post layout"
date: 2026-07-12
description: "A kitchen-sink post to exercise the article styles. Code blocks, images, links, quotes, lists. Delete before shipping, or keep it as a reference."
---

This is a test post. It exists to exercise every element the prose styles
cover. If something looks off here, it will look off in a real essay.

## Text and links

Body text sits at a comfortable size with generous line height. Inline links
like [the Astro docs](https://docs.astro.build) get the pink underline
treatment. Links to [dust.tt](https://dust.tt) work the same way. Inline code
like `getCollection('posts')` gets a bordered chip in monospace.

Here is a second paragraph to check spacing between blocks. It also has some
**bold text** and some *italic text* for good measure.

## Code blocks

A TypeScript block:

```ts
import { getCollection } from 'astro:content';

const posts = await getCollection('posts', ({ data }) => !data.draft);

export function byDate(a: Post, b: Post) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}
```

A shell block with a long line to check horizontal scrolling behavior inside the pre element:

```sh
bun create astro@latest my-site --template minimal --install --git --typescript strict && cd my-site && bun run dev
```

## Quotes and lists

> Boxes and lines encode how we think a process works. The model stops being
> the bottleneck long before the diagram does.

An unordered list:

- agents should own control flow
- workflows should own guarantees
- the boundary between the two moves every quarter

An ordered one:

1. write the post
2. push to main
3. it deploys

## Tables

| model     | context | good at                  |
| --------- | ------- | ------------------------ |
| fable 5   | 200k    | orchestration, reasoning |
| opus 4.8  | 10k     | deep work, code review   |
| haiku 4.5 | 1m      | fast, cheap, everywhere  |

## Images

An image with a caption-ish paragraph below it:

![A placeholder landscape](https://picsum.photos/seed/adrsimon/1200/630)

Images get rounded corners and never overflow the column.

## Headings

### A third-level heading

Smaller, tighter, for sub-sections inside a section. That is everything the
styles cover. 
