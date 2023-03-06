<script>
    export let as = 'button';
</script>

<svelte:element this={as} class="bg-gray-700 hover:bg-gray-900 text-gray-200 px-2 py-1 rounded" {...$$restProps}>
    <slot />
</svelte:element>
