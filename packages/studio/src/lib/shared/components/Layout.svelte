<script>
	import { getContext } from 'svelte';
    import { getCSSCustomProperties } from '@unding/ui';
	import { themeContext } from '$lib/shared/components/ThemeProvider.svelte'

	const { theme } = getContext(themeContext);
</script>

<div class="container" style={getCSSCustomProperties($theme)}>
    <slot />
</div>

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	:global(a[href]) {
		color: currentColor;
		text-decoration: none;
	}

	:global(ol),
	:global(li) {
		list-style: none;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		font-size: inherit;
		font-weight: inherit;
	}

	.container {
		background-color: var(--colors-neutral-50);
		color: var(--colors-neutral-900);
		min-height: 100vh;
	}
</style>
