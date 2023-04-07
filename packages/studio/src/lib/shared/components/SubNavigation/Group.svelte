<script>
    export let title;
</script>

<div class="group">
    <strong class="title">
        {title}
    </strong>

    <ol class="items">
        <slot />
    </ol>
</div>

<style>
    .group {
        flex-direction: column;
        gap: var(--spacing-2);
    }

    .title {
        display: block;
        padding: var(--spacing-2);
        text-transform: uppercase;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
        list-style: none;
    }
</style>
