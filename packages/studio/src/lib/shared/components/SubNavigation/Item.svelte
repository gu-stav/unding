<script>
    export let isActive = false;
    export let href;
</script>

<li>
    <a href={href} class:bg-gray-200={isActive} class="block hover:bg-gray-200 p-2 rounded">
        <slot />
    </a>
</li>
