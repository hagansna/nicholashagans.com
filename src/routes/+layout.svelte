<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { siteConfig } from '$lib/config';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
	<title>{siteConfig.name}</title>
	<meta name="description" content={siteConfig.description} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navigation />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
