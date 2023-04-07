<script>
    export let title;
</script>

<div class="group">
    {#if title}
        <h2 class="title">{title}</h2>
    {/if}

    <ol class="items">
        <slot />
    </ol>
</div>

<style>
    .group {
        display: flex;
        flex-direction: row;
    }

    .items {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-2);
        list-style: none;
    }

    .title {
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
