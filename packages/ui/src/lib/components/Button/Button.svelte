<script>
    export let as = 'button';
</script>

<svelte:element this={as} class="bg-gray-700 hover:bg-gray-900 text-gray-200 px-2 py-1 rounded focus:outline focus:outline-2 focus:outline-gray-800" {...$$restProps}>
    <slot />
</svelte:element>

<style>
    button {
        border: 1px solid red;
    }
</style>
