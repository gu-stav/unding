<aside>
    <slot />
</aside>

<style>
    aside {
        border-left: 1px solid var(--color-slate-200);
        color: var(--color-slate-600);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-4);
        max-width: 20rem;
        padding: var(--spacing-5);
        position: relative;
        width: 100%;
    }
</style>
