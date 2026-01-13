<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Home, ArrowLeft } from 'lucide-svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />

<div class="container mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
	<div class="mb-8 text-8xl font-bold text-muted-foreground/30">
		{$page.status}
	</div>

	<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
		{#if $page.status === 404}
			Page Not Found
		{:else}
			Something went wrong
		{/if}
	</h1>

	<p class="mt-4 max-w-md text-lg text-muted-foreground">
		{#if $page.status === 404}
			The page you're looking for doesn't exist or has been moved.
		{:else}
			{$page.error?.message || 'An unexpected error occurred.'}
		{/if}
	</p>

	<div class="mt-8 flex flex-wrap justify-center gap-4">
		<Button href="/">
			<Home class="mr-2 h-4 w-4" />
			Go Home
		</Button>
		<Button variant="outline" onclick={() => history.back()}>
			<ArrowLeft class="mr-2 h-4 w-4" />
			Go Back
		</Button>
	</div>
</div>
