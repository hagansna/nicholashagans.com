<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config';
	import { cn } from '$lib/utils';
	import type { Post } from '$lib/types';
	import ThemeToggle from './ThemeToggle.svelte';
	import SearchDialog from './SearchDialog.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		posts: Post[];
	}

	let { posts }: Props = $props();

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
	<div class="container mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
		<a href="/" class="font-semibold" onclick={closeMobileMenu}>
			{siteConfig.name}
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-6 md:flex" aria-label="Main navigation">
			{#each siteConfig.nav as item}
				<a
					href={item.href}
					class={cn(
						'text-sm font-medium transition-colors hover:text-foreground/80',
						$page.url.pathname === item.href ? 'text-foreground' : 'text-foreground/60'
					)}
					aria-current={$page.url.pathname === item.href ? 'page' : undefined}
				>
					{item.title}
				</a>
			{/each}
			<SearchDialog {posts} />
			<ThemeToggle />
		</nav>

		<!-- Mobile Menu Button -->
		<div class="flex items-center gap-2 md:hidden">
			<SearchDialog {posts} />
			<ThemeToggle />
			<Button
				variant="ghost"
				size="icon"
				class="h-9 w-9"
				onclick={toggleMobileMenu}
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-nav"
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{#if mobileMenuOpen}
					<X class="h-5 w-5" aria-hidden="true" />
				{:else}
					<Menu class="h-5 w-5" aria-hidden="true" />
				{/if}
			</Button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<nav id="mobile-nav" class="border-t border-border/40 md:hidden" aria-label="Mobile navigation">
			<div class="container mx-auto max-w-4xl px-4 py-4">
				{#each siteConfig.nav as item}
					<a
						href={item.href}
						class={cn(
							'block py-2 text-sm font-medium transition-colors hover:text-foreground/80',
							$page.url.pathname === item.href ? 'text-foreground' : 'text-foreground/60'
						)}
						aria-current={$page.url.pathname === item.href ? 'page' : undefined}
						onclick={closeMobileMenu}
					>
						{item.title}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
