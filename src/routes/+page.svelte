<script lang="ts">
  import { siteConfig } from "$lib/config";
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight } from "lucide-svelte";
</script>

<div class="container mx-auto max-w-4xl px-4 py-16 md:py-24">
  <!-- Hero Section -->
  <section class="flex flex-col items-start gap-4">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      Hi, I'm {siteConfig.name.split(" ")[0]}
    </h1>
    <p class="max-w-2xl text-xl text-muted-foreground">
      Welcome to my corner of the internet. I'll be using this space to write
      about technology and board games.
    </p>
    <div class="flex flex-wrap gap-4 pt-4">
      <Button href="/about">
        About Me
        <ArrowRight class="ml-2 h-4 w-4" />
      </Button>
      <Button href="/blog" variant="outline">Read the Blog</Button>
    </div>
  </section>

  <!-- Latest Posts Preview -->
  <section class="mt-20">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold tracking-tight">Latest Posts</h2>
      <a
        href="/blog"
        class="text-sm text-muted-foreground hover:text-foreground"
      >
        View all posts
      </a>
    </div>
    <div class="mt-6 text-muted-foreground">
      <p>No posts yet. Check back soon!</p>
    </div>
  </section>
</div>
