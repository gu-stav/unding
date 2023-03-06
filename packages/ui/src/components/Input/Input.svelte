<script>
    export let disabled = false;
    export let name = null;
    export let error;
</script>

<input class="p-2 w-full rounded border-gray-300 border-[1px] text-gray-800 focus:outline focus:outline-2 focus:outline-gray-700" class:bg-gray-100={!!disabled} class:bg-red-100={!!error} class:border-red-400={!!error} disabled={disabled} id={name} name={name} {...$$restProps} />
