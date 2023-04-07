<script>
    import ToggleButton from "./ToggleButton.svelte";

    let isExpanded = true;
</script>

<nav class:expanded={isExpanded}>
    <ToggleButton on:click={() => {
        isExpanded = !isExpanded;
    }}>
        Toggle
    </ToggleButton>

    {#if isExpanded}
        <slot />
    {/if}
</nav>

<style>
    nav {
        background-color: var(--color-slate-100);
        border-right: 1px solid var(--color-slate-200);
        color: var(--color-slate-800);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        gap: var(--spacing-4);
        position: relative;
    }

    nav.expanded {
        padding: var(--spacing-3);
    }
</style>
