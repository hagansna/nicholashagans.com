<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props();
</script>

<SEO description="Personal website and blog of Nicholas Hagans. Developer, board game enthusiast, and technology explorer." />

<div class="container mx-auto max-w-4xl px-4 py-16 md:py-24">
	<!-- Hero Section -->
	<section class="flex flex-col items-start gap-4">
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
			Hi, I'm {siteConfig.name.split(' ')[0]}
		</h1>
		<p class="max-w-2xl text-xl text-muted-foreground">
			Welcome to my corner of the internet. I write about technology, share my projects, and document my journey.
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
			<a href="/blog" class="text-sm text-muted-foreground hover:text-foreground">
				View all posts
			</a>
		</div>
		<div class="mt-6">
			{#if data.latestPosts.length === 0}
				<p class="text-muted-foreground">No posts yet. Check back soon!</p>
			{:else}
				<div class="space-y-10">
					{#each data.latestPosts as post}
						<BlogCard {post} />
					{/each}
				</div>
			{/if}
		</div>
	</section>
</div>
