<nav class="container">
    <a href="/studio" class="logo">
        Unding
    </a>

    <slot />

    <slot name="search" />

    <slot name="user" />
</nav>

<style>
    .container {
        align-items: center;
        background-color: var(--color-slate-800);
        color: var(--color-slate-200);
        display: flex;
        gap: var(--spacing-3);
        justify-content: space-between;
        padding: var(--spacing-2);
    }

    .logo {
        display: block;
        font-weight: bold;
        padding-inline: var(--spacing-3);
        text-transform: uppercase;
    }
</style>
