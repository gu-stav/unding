<div class="container">
    <slot />
</div>

<style>
    .container {
        display: grid;
        gap: var(--spacing-4);
        grid-template-columns: repeat(12, 1fr);
    }
</style>
