<script>
    import { Input } from '@unding/ui';

    const perPage = [10, 20, 30, 40, 100, 200];

    export let totalDocuments = 0;
    export let currentPage = 1;
    export let totalPages = 3;
    export let documentsPerPage = perPage[1];
</script>

<div class="flex flex-row gap-3 bg-gray-50 border-gray-100 border-t-[1px] px-3 py-2 justify-between items-center">
    <span class="whitespace-nowrap">
        {totalDocuments} documents
    </span>

    <a href="/">Previous</a>

    <div class="flex flex-row gap-3 max-w-sm whitespace-nowrap items-center">
        Page <Input name="currentPage" value={currentPage} /> <span>of {totalPages}</span>
    </div>

    <a href="/">Next</a>

    <span class="flex flex-row gap-3 whitespace-nowrap">
        Show <select name="documentsPerPage" value={documentsPerPage}>
            {#each perPage as count}
                <option value={count}>{count}</option>
            {/each}
        </select>
    </span>
</div>
