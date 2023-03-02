<script>
    export let defaultComponent;
    export let component;

    console.log('composable', $$props);
</script>

<svelte:component this={component} {...$$props}>
    <slot />
</svelte:component>
