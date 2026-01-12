<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { siGithub, siX } from 'simple-icons';
	import { linkedInIcon } from './icons';
	import SimpleIcon from './SimpleIcon.svelte';
</script>

<footer class="border-t border-border/40">
	<div class="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
		<p class="text-sm text-muted-foreground">
			&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
		</p>
		<div class="flex items-center gap-4">
			<a
				href={siteConfig.links.github}
				target="_blank"
				rel="noopener noreferrer"
				class="text-muted-foreground transition-colors hover:text-foreground"
				aria-label="GitHub"
			>
				<SimpleIcon icon={siGithub} size={20} />
			</a>
			<a
				href={siteConfig.links.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="text-muted-foreground transition-colors hover:text-foreground"
				aria-label="LinkedIn"
			>
				<SimpleIcon icon={linkedInIcon} size={20} />
			</a>
		<a
			href={siteConfig.links.x}
			target="_blank"
			rel="noopener noreferrer"
			class="text-muted-foreground transition-colors hover:text-foreground"
			aria-label="X"
		>
			<SimpleIcon icon={siX} size={20} />
		</a>
		</div>
	</div>
</footer>
