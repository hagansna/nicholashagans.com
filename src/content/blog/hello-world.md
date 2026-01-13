---
title: Hello World - Building My Personal Site with SvelteKit
description: A look at how I built this website using SvelteKit, Tailwind CSS, and mdsvex for Markdown-based blogging.
date: "2026-01-11"
tags:
  - svelte
  - web-dev
published: true
---

Welcome to my new personal website! I'm excited to share my journey of building this site and what I learned along the way.

## AI Usage

First off, I'll point out the obvious. This entire site (and most of this particular blog post) was made using AI. Specifically, Claude Opus 4.5 with OpenCode. Part of the reason I wanted to make this site a blog was so I had a place to experiment with AI development and openly discuss the results.

I am not quite sure how I feel about AI development yet. It certainly made standing up this website faster and therefore more likely to get done (I have a hard time completing personal projects in a timely manner, check Github if you don't believe me!). I will also say that I am impressed with how well the site came out, particularly given the fact that I made an effort not to intervene at all in the code. I still haven't actually looked at the generated code (I'm a bit afraid to!) but the site looks clean and functions exactly like I had envisioned it would.

Anyway, here's the rest of what Claude thought my first blog should be:

## The Tech Stack

This site is built with some of my favorite modern web technologies:

- **SvelteKit** - A fantastic framework for building fast, modern web apps
- **Tailwind CSS v4** - Utility-first CSS that makes styling a breeze
- **shadcn-svelte** - Beautiful, accessible UI components
- **mdsvex** - Markdown preprocessing for Svelte

## Why SvelteKit?

I chose SvelteKit for several reasons:

1. **Performance** - Svelte compiles to vanilla JavaScript, resulting in smaller bundles
2. **Developer Experience** - The syntax is clean and intuitive
3. **Static Site Generation** - Perfect for a personal blog

Here's a simple example of a Svelte component:

```svelte
<script lang="ts">
  let count = $state(0);

  function increment() {
    count++;
  }
</script>

<button onclick={increment}>
  Clicked {count} times
</button>
```

## Code Highlighting

The blog supports syntax highlighting for multiple languages. Here's some TypeScript:

```typescript
interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

async function getPosts(): Promise<Post[]> {
  // Fetch and return posts
  return [];
}
```

And some CSS:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
```

## What's Next?

I'll be writing about:

- Interesting projects I'm working on
- Tech insights
- Board gaming

Stay tuned for more posts!
