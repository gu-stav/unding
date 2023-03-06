<script>
    export let isActive = false;
    export let href;
</script>

<li>
    <a href={href} class:bg-gray-700={isActive} class="block px-2 py-1 rounded hover:bg-gray-700">
        <slot />
    </a>
</li>
