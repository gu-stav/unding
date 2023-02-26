<script>
    export let as = 'button';
</script>

<svelte:element this={as} class="bg-neutral-800 text-neutral-100 p-2 rounded" {...$$restProps}>
    <slot />
</svelte:element>
