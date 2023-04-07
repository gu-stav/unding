<script>
    export let isActive = false;
    export let href;
</script>

<li>
    <a href={href} class:active={isActive} class="item">
        <slot />
    </a>
</li>

<style>
    .item {
        border-radius: var(--radius);
        display: block;
        padding-inline: var(--spacing-2);
        padding-block: var(--spacing-1);
        text-decoration: none;
    }

    .item:hover,
    .item:focus,
    .item.active {
        background-color: var(--color-slate-700);
    }
</style>
