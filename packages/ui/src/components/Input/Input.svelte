<script>
    export let disabled = false;
</script>

<input class="p-1 w-full rounded border-gray-300 border-[1px] text-gray-800" class:bg-gray-100={!!disabled} disabled={disabled} {...$$restProps} />
