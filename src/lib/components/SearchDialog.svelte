<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Post } from '$lib/types';
	import { initializeSearch, searchPosts, type SearchResult } from '$lib/utils/search';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Search, FileText, ArrowRight } from 'lucide-svelte';
	import { formatDate } from '$lib/utils/blog';

	interface Props {
		posts: Post[];
	}

	let { posts }: Props = $props();

	let open = $state(false);
	let query = $state('');
	let results = $state<SearchResult[]>([]);
	let selectedIndex = $state(0);

	// Initialize search when posts change
	$effect(() => {
		if (posts.length > 0) {
			initializeSearch(posts);
		}
	});

	// Search when query changes
	$effect(() => {
		if (query) {
			results = searchPosts(query);
			selectedIndex = 0;
		} else {
			results = [];
			selectedIndex = 0;
		}
	});

	// Keyboard shortcut to open search
	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			// Open with Cmd+K or Ctrl+K
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				open = true;
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	function handleDialogKeydown(e: KeyboardEvent) {
		if (!open) return;

		const itemCount = query ? results.length : posts.length;
		if (itemCount === 0) return;

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				selectedIndex = (selectedIndex + 1) % itemCount;
				break;
			case 'ArrowUp':
				e.preventDefault();
				selectedIndex = (selectedIndex - 1 + itemCount) % itemCount;
				break;
			case 'Enter':
				e.preventDefault();
				const items = query ? results.map((r) => r.item) : posts;
				if (items[selectedIndex]) {
					navigateToPost(items[selectedIndex].slug);
				}
				break;
		}
	}

	function navigateToPost(slug: string) {
		open = false;
		query = '';
		goto(`/blog/${slug}`);
	}

	function handleOpenChange(value: boolean) {
		open = value;
		if (!value) {
			query = '';
			selectedIndex = 0;
		}
	}
</script>

<svelte:window onkeydown={handleDialogKeydown} />

<!-- Search Trigger Button -->
<button
	onclick={() => (open = true)}
	class="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
	aria-label="Search"
>
	<Search class="h-4 w-4" />
	<span class="hidden sm:inline-flex">Search</span>
	<kbd
		class="pointer-events-none ml-1 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:inline-flex"
	>
		<span class="text-xs">&#8984;</span>K
	</kbd>
</button>

<Dialog.Root bind:open onOpenChange={handleOpenChange}>
	<Dialog.Content class="max-w-lg gap-0 p-0">
		<Dialog.Header class="sr-only">
			<Dialog.Title>Search</Dialog.Title>
			<Dialog.Description>Search through blog posts</Dialog.Description>
		</Dialog.Header>

		<div class="flex items-center border-b px-3">
			<Search class="mr-2 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
			<input
				bind:value={query}
				placeholder="Search posts..."
				aria-label="Search blog posts"
				autocomplete="off"
				class="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
			/>
		</div>

		<div class="max-h-80 overflow-y-auto p-2" role="listbox" aria-label="Search results">
			{#if query && results.length === 0}
				<div class="py-6 text-center text-sm text-muted-foreground" role="status">No results found.</div>
			{:else if query && results.length > 0}
				<div class="space-y-1">
					{#each results as result, i}
						<button
							onclick={() => navigateToPost(result.item.slug)}
							role="option"
							aria-selected={selectedIndex === i}
							class="flex w-full cursor-pointer items-start gap-3 rounded-md px-3 py-2 text-left transition-colors {selectedIndex ===
							i
								? 'bg-accent text-accent-foreground'
								: 'hover:bg-accent/50'}"
							onmouseenter={() => (selectedIndex = i)}
						>
							<FileText class="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
							<div class="flex-1 overflow-hidden">
								<div class="truncate font-medium">{result.item.title}</div>
								<div class="truncate text-xs text-muted-foreground">
									{result.item.description}
								</div>
							</div>
							<ArrowRight
								class="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity {selectedIndex ===
								i
									? 'opacity-100'
									: ''}"
								aria-hidden="true"
							/>
						</button>
					{/each}
				</div>
			{:else}
				<!-- Show recent posts when no query -->
				<div class="space-y-1">
					<div class="px-2 py-1.5 text-xs font-medium text-muted-foreground" id="recent-posts-label">Recent Posts</div>
					{#each posts.slice(0, 5) as post, i}
						<button
							onclick={() => navigateToPost(post.slug)}
							role="option"
							aria-selected={selectedIndex === i}
							class="flex w-full cursor-pointer items-start gap-3 rounded-md px-3 py-2 text-left transition-colors {selectedIndex ===
							i
								? 'bg-accent text-accent-foreground'
								: 'hover:bg-accent/50'}"
							onmouseenter={() => (selectedIndex = i)}
						>
							<FileText class="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
							<div class="flex-1 overflow-hidden">
								<div class="truncate font-medium">{post.title}</div>
								<div class="truncate text-xs text-muted-foreground">
									{formatDate(post.date)}
								</div>
							</div>
							<ArrowRight
								class="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity {selectedIndex ===
								i
									? 'opacity-100'
									: ''}"
								aria-hidden="true"
							/>
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<div class="flex items-center justify-between border-t px-3 py-2 text-xs text-muted-foreground">
			<div class="flex gap-2">
				<span><kbd class="rounded border bg-muted px-1">&#8593;</kbd><kbd class="rounded border bg-muted px-1">&#8595;</kbd> to navigate</span>
				<span><kbd class="rounded border bg-muted px-1">&#8629;</kbd> to select</span>
			</div>
			<span><kbd class="rounded border bg-muted px-1">esc</kbd> to close</span>
		</div>
	</Dialog.Content>
</Dialog.Root>
