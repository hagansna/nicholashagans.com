---
title: Hello World - Building My Personal Site with SvelteKit
description: A look at how I built this website using SvelteKit, Tailwind CSS, and mdsvex for Markdown-based blogging.
date: '2026-01-11'
tags:
  - svelte
  - web-dev
published: true
---

Welcome to my new personal website! I'm excited to share my journey of building this site and what I learned along the way.

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

- Web development techniques and best practices
- Interesting projects I'm working on
- Tech insights and tutorials

Stay tuned for more posts!
