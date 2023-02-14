<script context="module">
	import { writable } from 'svelte/store'
	export const themeContext = {};

	const themeStore = writable({})
</script>

<script>
	import { setContext } from 'svelte'
	export let theme = {};

	$: $themeStore = {...$themeStore, ...theme}

	setContext(themeContext, { theme: themeStore });
</script>


<slot theme={$themeStore} />
