<script lang="ts">
	interface IconData {
		title: string;
		path: string;
	}

	interface Props {
		icon: IconData;
		class?: string;
		size?: number;
	}

	let { icon, class: className = '', size = 20 }: Props = $props();
</script>

<svg
	role="img"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill="currentColor"
	class={className}
	aria-label={icon.title}
>
	<title>{icon.title}</title>
	<path d={icon.path} />
</svg>
