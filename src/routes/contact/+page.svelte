<script lang="ts">
  import { siteConfig } from "$lib/config";
  import { Mail } from "lucide-svelte";
  import { siGithub, siX } from "simple-icons";
  import { linkedInIcon } from "$lib/components/icons";
  import SimpleIcon from "$lib/components/SimpleIcon.svelte";
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
  title="Contact"
  description="Get in touch with Nicholas Hagans. Reach out via email, GitHub, LinkedIn, or X."
/>

<div class="container mx-auto max-w-4xl px-4 py-16">
  <h1 class="text-4xl font-bold tracking-tight">Contact</h1>
  <p class="mt-4 text-xl text-muted-foreground">
    Have a question or want to work together? Feel free to reach out.
  </p>

  <div class="mt-12 grid gap-6 sm:grid-cols-2">
    <!-- Email -->
    <a
      href="mailto:{siteConfig.email}"
      class="flex items-center gap-4 rounded-lg border border-border p-6 transition-colors hover:bg-accent"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
      >
        <Mail class="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 class="font-semibold">Email</h3>
        <p class="text-sm text-muted-foreground">{siteConfig.email}</p>
      </div>
    </a>

    <!-- GitHub -->
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-4 rounded-lg border border-border p-6 transition-colors hover:bg-accent"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
      >
        <SimpleIcon icon={siGithub} size={24} class="text-primary" />
      </div>
      <div>
        <h3 class="font-semibold">GitHub</h3>
        <p class="text-sm text-muted-foreground">View my projects</p>
      </div>
    </a>

    <!-- LinkedIn -->
    <a
      href={siteConfig.links.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-4 rounded-lg border border-border p-6 transition-colors hover:bg-accent"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
      >
        <SimpleIcon icon={linkedInIcon} size={24} class="text-primary" />
      </div>
      <div>
        <h3 class="font-semibold">LinkedIn</h3>
        <p class="text-sm text-muted-foreground">Connect with me</p>
      </div>
    </a>

    <!-- X -->
    <a
      href={siteConfig.links.x}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-4 rounded-lg border border-border p-6 transition-colors hover:bg-accent"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
      >
        <SimpleIcon icon={siX} size={24} class="text-primary" />
      </div>
      <div>
        <h3 class="font-semibold">X</h3>
        <p class="text-sm text-muted-foreground">Follow me</p>
      </div>
    </a>
  </div>
</div>
