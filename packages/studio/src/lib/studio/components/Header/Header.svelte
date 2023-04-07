<div class="container">
    <h2 class="title">
        <slot name="title" />
    </h2>

    <div class="action">
        <slot name="action" />
    </div>
</div>

<style>
    .container {
        align-items: center;
        border-bottom: 1px solid var(--color-slate-200);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: var(--spacing-3);
    }

    .title {
        font-weight: bold;
        padding: var(--spacing-2);
        text-transform: uppercase;
    }

    .action {
        align-items: flex-start;
        display: flex;
        gap: var(--spacing-2);
    }
</style>
