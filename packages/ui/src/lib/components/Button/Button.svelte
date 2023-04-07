<script>
    export let as = 'button';
</script>

<svelte:element this={as} {...$$restProps}>
    <slot />
</svelte:element>

<style>
    button {
        background: var(--color-slate-700);
        border: none;
        border-radius: var(--radius);
        color: var(--color-slate-200);
        padding-block: var(--spacing-2);
        padding-inline: var(--spacing-4);
    }

    button:hover,
    button:focus {
        background-color: var(--color-slate-900);
    }
</style>
