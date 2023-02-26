<script>
    let isExpanded = true;
</script>

<nav class="flex flex-direction-col gap-4 p-3 h-screen bg-neutral-50 relative">
    <button type="button" class="absolute right-0" on:click={() => {
        isExpanded = !isExpanded;
    }}>
        Toggle
    </button>

    {#if isExpanded}
        <slot />
    {/if}
</nav>
