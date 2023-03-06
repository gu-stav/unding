<script>
    import ToggleButton from "./ToggleButton.svelte";

    let isExpanded = true;
</script>

<nav class:p-3={isExpanded} class="flex flex-direction-col gap-4 h-full bg-gray-100 text-gray-800 relative shrink-0 border-gray-200 border-r-[1px]">
    <ToggleButton on:click={() => {
        isExpanded = !isExpanded;
    }}>
        Toggle
    </ToggleButton>

    {#if isExpanded}
        <slot />
    {/if}
</nav>
