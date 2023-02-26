<script>
    export let isActive = false;
    export let href;
</script>

<li>
    <a href={href} class:bg-neutral-200={isActive} class="block p-2 rounded">
        <slot />
    </a>
</li>
