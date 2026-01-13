<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { Badge } from "$lib/components/ui/badge";
  import BlogCard from "$lib/components/BlogCard.svelte";
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();

  // Get selected tag from URL (client-side only)
  let selectedTag = $derived(
    browser ? $page.url.searchParams.get("tag") : null
  );

  // Filter posts based on selected tag
  let filteredPosts = $derived(
    selectedTag
      ? data.posts.filter((post) => post.tags.includes(selectedTag))
      : data.posts
  );
</script>

<SEO
  title="Blog"
  description="Thoughts on software development and board games by Nicholas Hagans."
/>

<div class="container mx-auto max-w-4xl px-4 py-16">
  <h1 class="text-4xl font-bold tracking-tight">Blog</h1>
  <p class="mt-4 text-xl text-muted-foreground">
    Thoughts on software development and board games.
  </p>

  <!-- Tag Filter -->
  {#if data.tags.length > 0}
    <div class="mt-8 flex flex-wrap items-center gap-2">
      <span class="text-sm text-muted-foreground">Filter by tag:</span>
      <a href="/blog" data-sveltekit-noscroll>
        <Badge variant={selectedTag === null ? "default" : "outline"}>
          All
        </Badge>
      </a>
      {#each data.tags as tag}
        <a href="/blog?tag={tag}" data-sveltekit-noscroll>
          <Badge variant={selectedTag === tag ? "default" : "outline"}>
            {tag}
          </Badge>
        </a>
      {/each}
    </div>
  {/if}

  <!-- Posts List -->
  <div class="mt-12 space-y-10">
    {#if filteredPosts.length === 0}
      <p class="text-muted-foreground">
        {#if selectedTag}
          No posts found with tag "{selectedTag}".
        {:else}
          No posts yet. Check back soon!
        {/if}
      </p>
    {:else}
      {#each filteredPosts as post}
        <BlogCard {post} />
      {/each}
    {/if}
  </div>
</div>
