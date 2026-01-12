<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { formatDate } from '$lib/utils/blog';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} | {siteConfig.name}</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="container mx-auto max-w-4xl px-4 py-16">
	<!-- Header -->
	<header class="mb-8">
		<div class="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
			<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
			<span>·</span>
			<span>{data.post.readingTime}</span>
		</div>

		<h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
			{data.post.title}
		</h1>

		<p class="mt-4 text-xl text-muted-foreground">
			{data.post.description}
		</p>

		{#if data.post.tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each data.post.tags as tag}
					<a href="/blog?tag={tag}">
						<Badge variant="secondary">{tag}</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Content -->
	<div class="prose prose-neutral dark:prose-invert max-w-none">
		<data.Content />
	</div>

	<!-- Navigation -->
	<nav class="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
		{#if data.prevPost}
			<Button href="/blog/{data.prevPost.slug}" variant="outline" class="justify-start">
				<ArrowLeft class="mr-2 h-4 w-4" />
				<span class="flex flex-col items-start">
					<span class="text-xs text-muted-foreground">Previous</span>
					<span class="truncate max-w-[200px]">{data.prevPost.title}</span>
				</span>
			</Button>
		{:else}
			<div></div>
		{/if}

		{#if data.nextPost}
			<Button href="/blog/{data.nextPost.slug}" variant="outline" class="justify-end text-right">
				<span class="flex flex-col items-end">
					<span class="text-xs text-muted-foreground">Next</span>
					<span class="truncate max-w-[200px]">{data.nextPost.title}</span>
				</span>
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		{/if}
	</nav>
</article>
