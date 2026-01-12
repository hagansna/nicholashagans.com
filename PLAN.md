# nicholashagans.com Implementation Plan

Personal homepage built with SvelteKit (Svelte 5), shadcn-svelte, and Markdown-based blogging.

## Tech Stack

- **Framework:** SvelteKit (Svelte 5) with static adapter
- **Styling:** Tailwind CSS v4
- **Components:** shadcn-svelte
- **Markdown:** mdsvex with Shiki syntax highlighting
- **Search:** Fuse.js (client-side fuzzy search)
- **Dark Mode:** mode-watcher
- **Hosting:** Vercel (free tier)
- **DNS:** AWS Route 53

---

## Phase 1: Project Foundation

- [x] Initialize SvelteKit project with Svelte 5
- [x] Initialize git repository
- [x] Install and configure Tailwind CSS v4
- [x] Set up shadcn-svelte
- [x] Configure mode-watcher for dark mode
- [x] Install and configure static adapter for Vercel
- [x] Create site configuration file (`src/lib/config.ts`)
- [x] Create base layout with navigation and footer
- [x] Add ThemeToggle component

---

## Phase 2: Core Pages

- [ ] **Homepage** (`/`)
  - Hero section with name and tagline
  - Brief intro
  - Latest blog post previews (3 most recent)
  - Quick links to other sections

- [ ] **About** (`/about`)
  - Bio/personal story
  - Skills/interests
  - Profile photo (optional)

- [ ] **Resume** (`/resume`)
  - Styled resume content on page
  - Downloadable PDF link
  - Sections: Experience, Education, Skills, etc.

- [ ] **Contact** (`/contact`)
  - Email link
  - Social profile links (GitHub, LinkedIn, Twitter/X, etc.)

---

## Phase 3: Blog System

- [x] Configure mdsvex in `svelte.config.js`
- [x] Set up Shiki for syntax highlighting with theme support
- [x] Create blog content directory (`src/content/blog/`)
- [x] Define blog post frontmatter schema:
  ```yaml
  title: string
  description: string
  date: YYYY-MM-DD
  tags: string[]
  published: boolean
  ```
- [x] Create blog utilities (`src/lib/utils/blog.ts`)
  - `getPosts()` - fetch all published posts
  - `getPostBySlug()` - fetch single post
  - `calculateReadingTime()` - estimate reading time
  - `getAllTags()` - get unique tags
- [x] Build blog listing page (`/blog`)
  - Display all posts with title, date, description, tags
  - Filter by tag (client-side)
  - Sort by date (newest first)
- [x] Build blog post page (`/blog/[slug]`)
  - Render Markdown content
  - Display metadata (date, tags, reading time)
  - Previous/Next post navigation
- [x] Create BlogCard component for previews
- [x] Create sample blog post
- [x] Update homepage with latest posts preview

---

## Phase 4: Search & Polish

- [ ] Install Fuse.js
- [ ] Create search index from blog posts
- [ ] Build SearchDialog component (⌘K / Ctrl+K trigger)
  - Search posts by title, description, tags, content
  - Keyboard navigation
- [ ] Add SEO meta tags
  - Title, description, Open Graph, Twitter cards
- [ ] Create reusable SEO component
- [ ] Responsive design review and fixes
- [ ] Create custom 404 page
- [ ] Add page transitions (optional)
- [ ] Accessibility audit (keyboard nav, ARIA labels)

---

## Phase 5: Deployment

### 5.1 GitHub Setup
- [ ] Create GitHub repository
- [ ] Push code to GitHub

### 5.2 Vercel Setup
- [ ] Create Vercel account (if needed)
- [ ] Import project from GitHub
- [ ] Verify build succeeds
- [ ] Note the `.vercel.app` preview URL

### 5.3 Route 53 DNS Configuration
- [ ] In Vercel: Add custom domain `nicholashagans.com`
- [ ] In Vercel: Add custom domain `www.nicholashagans.com`
- [ ] Vercel will provide DNS records to configure
- [ ] In AWS Route 53, create/update records:
  - **A Record:** `nicholashagans.com` → Vercel IP (or ALIAS to Vercel)
  - **CNAME Record:** `www.nicholashagans.com` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (usually minutes, up to 48 hours)
- [ ] Verify SSL certificate is issued by Vercel
- [ ] Test both `nicholashagans.com` and `www.nicholashagans.com`

---

## Project Structure

```
nicholashagans.com/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn components
│   │   │   ├── BlogCard.svelte
│   │   │   ├── Navigation.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── SearchDialog.svelte
│   │   │   └── ThemeToggle.svelte
│   │   ├── utils/
│   │   │   ├── blog.ts
│   │   │   └── search.ts
│   │   └── config.ts
│   ├── content/
│   │   └── blog/
│   │       └── *.md
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte         # homepage
│   │   ├── about/+page.svelte
│   │   ├── resume/+page.svelte
│   │   ├── blog/
│   │   │   ├── +page.svelte     # listing
│   │   │   └── [slug]/+page.svelte
│   │   └── contact/+page.svelte
│   └── app.css
├── static/
│   ├── images/
│   └── resume.pdf
├── svelte.config.js
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Blog Post Template

```markdown
---
title: "Post Title"
description: "Brief description for previews and SEO"
date: "2026-01-11"
tags: ["tag1", "tag2"]
published: true
---

Content goes here...
```

---

## Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [shadcn-svelte](https://shadcn-svelte.com)
- [mdsvex](https://mdsvex.pngwn.io)
- [Vercel SvelteKit Deployment](https://vercel.com/docs/frameworks/sveltekit)
- [Route 53 Documentation](https://docs.aws.amazon.com/Route53/)
