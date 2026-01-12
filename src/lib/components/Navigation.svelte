<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config';
	import { cn } from '$lib/utils';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

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
		<nav class="hidden items-center gap-6 md:flex">
			{#each siteConfig.nav as item}
				<a
					href={item.href}
					class={cn(
						'text-sm font-medium transition-colors hover:text-foreground/80',
						$page.url.pathname === item.href ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					{item.title}
				</a>
			{/each}
			<ThemeToggle />
		</nav>

		<!-- Mobile Menu Button -->
		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<Button variant="ghost" size="icon" class="h-9 w-9" onclick={toggleMobileMenu}>
				{#if mobileMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
				<span class="sr-only">Toggle menu</span>
			</Button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<nav class="border-t border-border/40 md:hidden">
			<div class="container mx-auto max-w-4xl px-4 py-4">
				{#each siteConfig.nav as item}
					<a
						href={item.href}
						class={cn(
							'block py-2 text-sm font-medium transition-colors hover:text-foreground/80',
							$page.url.pathname === item.href ? 'text-foreground' : 'text-foreground/60'
						)}
						onclick={closeMobileMenu}
					>
						{item.title}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
