<div class="container">
    <slot />
</div>

<style>
    .container {
        display: grid;
        gap: var(--spacing-4);
        grid-template-columns: repeat(1, 1fr);
        padding: var(--spacing-3);
    }
</style>
