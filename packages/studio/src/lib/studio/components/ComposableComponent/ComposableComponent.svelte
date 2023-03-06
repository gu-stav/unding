<script>
    export let defaultComponent;
    export let component;
</script>

<svelte:component this={component} {...$$props}>
    <slot />
</svelte:component>
