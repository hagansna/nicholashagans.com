<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { Button } from '$lib/components/ui/button';
	import { Download } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Resume | {siteConfig.name}</title>
	<meta name="description" content="Resume of {siteConfig.name}" />
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-16">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<h1 class="text-4xl font-bold tracking-tight">Resume</h1>
		<Button href="/resume.pdf" target="_blank">
			<Download class="mr-2 h-4 w-4" />
			Download PDF
		</Button>
	</div>

	<div class="mt-12 space-y-12">
		<!-- Experience -->
		<section>
			<h2 class="text-2xl font-semibold">Experience</h2>
			<div class="mt-6 space-y-6">
				<!-- TODO: Add your experience -->
				<div class="border-l-2 border-border pl-4">
					<h3 class="font-semibold">Job Title</h3>
					<p class="text-sm text-muted-foreground">Company Name | 2023 - Present</p>
					<p class="mt-2 text-muted-foreground">
						Description of your role and accomplishments...
					</p>
				</div>
			</div>
		</section>

		<!-- Education -->
		<section>
			<h2 class="text-2xl font-semibold">Education</h2>
			<div class="mt-6 space-y-6">
				<!-- TODO: Add your education -->
				<div class="border-l-2 border-border pl-4">
					<h3 class="font-semibold">Degree</h3>
					<p class="text-sm text-muted-foreground">University Name | Year</p>
				</div>
			</div>
		</section>

		<!-- Skills -->
		<section>
			<h2 class="text-2xl font-semibold">Skills</h2>
			<div class="mt-6 flex flex-wrap gap-2">
				<!-- TODO: Add your skills -->
				<span class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
					Skill 1
				</span>
				<span class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
					Skill 2
				</span>
				<span class="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground">
					Skill 3
				</span>
			</div>
		</section>
	</div>
</div>
