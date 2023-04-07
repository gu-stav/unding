<label {...$$props}>
    <slot />
</label>

<style>
    label {
        align-items: center;
        display: flex;
        flex-direction: row;
        font-weight: bold;
        gap: var(--spacing-3);
    }
</style>
