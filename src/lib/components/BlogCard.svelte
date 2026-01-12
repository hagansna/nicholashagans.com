<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils/blog';
	import { Badge } from '$lib/components/ui/badge';

	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

<article class="group relative flex flex-col space-y-2">
	<a href="/blog/{post.slug}" class="absolute inset-0 z-10">
		<span class="sr-only">Read {post.title}</span>
	</a>

	<h2 class="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
		{post.title}
	</h2>

	<p class="text-muted-foreground">{post.description}</p>

	<div class="flex flex-wrap items-center gap-2 pt-2">
		<time datetime={post.date} class="text-sm text-muted-foreground">
			{formatDate(post.date)}
		</time>
		<span class="text-muted-foreground">·</span>
		<span class="text-sm text-muted-foreground">{post.readingTime}</span>
	</div>

	{#if post.tags.length > 0}
		<div class="flex flex-wrap gap-2 pt-2">
			{#each post.tags as tag}
				<Badge variant="secondary" class="relative z-20 pointer-events-auto">
					<a href="/blog?tag={tag}" class="hover:underline">
						{tag}
					</a>
				</Badge>
			{/each}
		</div>
	{/if}
</article>
