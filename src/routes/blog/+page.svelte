<script lang="ts">
  import { siteConfig } from "$lib/config";
</script>

<svelte:head>
  <title>Blog | {siteConfig.name}</title>
  <meta name="description" content="Blog posts by {siteConfig.name}" />
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-16">
  <h1 class="text-4xl font-bold tracking-tight">Blog</h1>
  <p class="mt-4 text-xl text-muted-foreground">
    Thoughts on technology and board games.
  </p>

  <!-- TODO: Blog posts will be listed here -->
  <div class="mt-12">
    <p class="text-muted-foreground">No posts yet. Check back soon!</p>
  </div>
</div>
