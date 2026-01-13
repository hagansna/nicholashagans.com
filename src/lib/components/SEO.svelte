<script lang="ts">
	import { siteConfig } from '$lib/config';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: 'website' | 'article';
		publishedTime?: string;
		modifiedTime?: string;
		tags?: string[];
		noindex?: boolean;
	}

	let {
		title,
		description = siteConfig.description,
		image = '/og-image.png',
		type = 'website',
		publishedTime,
		modifiedTime,
		tags = [],
		noindex = false
	}: Props = $props();

	const fullTitle = $derived(title ? `${title} | ${siteConfig.name}` : siteConfig.name);
	const canonicalUrl = siteConfig.url;
	const imageUrl = $derived(image.startsWith('http') ? image : `${siteConfig.url}${image}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteConfig.name} />

	{#if type === 'article'}
		{#if publishedTime}
			<meta property="article:published_time" content={publishedTime} />
		{/if}
		{#if modifiedTime}
			<meta property="article:modified_time" content={modifiedTime} />
		{/if}
		{#each tags as tag}
			<meta property="article:tag" content={tag} />
		{/each}
		<meta property="article:author" content={siteConfig.author} />
	{/if}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	{#if siteConfig.links.x}
		<meta name="twitter:site" content="@{siteConfig.links.x.split('/').pop()}" />
		<meta name="twitter:creator" content="@{siteConfig.links.x.split('/').pop()}" />
	{/if}

	<!-- Additional meta tags -->
	<meta name="author" content={siteConfig.author} />
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>
