<script>
    import { page } from "$app/stores";
    import { Header, DataTable } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<Header>
    <svelte:fragment slot="title">
        {$page.data.currentSchema.name.display}
    </svelte:fragment>

    <svelte:fragment slot="action">
        <Button as="a" href="/studio/content-types/1/create">
            + Create {$page.data.currentSchema.name.display}
        </Button>
    </svelte:fragment>
</Header>

<div class="flex flex-col">
    <div class="flex flex-col">
        <DataTable>
            <DataTable.Header>
                {#each Object.keys($page.data.currentSchema.attributes) as attribute}
                    <DataTable.HeaderCell>
                        {attribute}
                    </DataTable.HeaderCell>
                {/each}

                <DataTable.HeaderCell />
            </DataTable.Header>

            <DataTable.Body>
                {#each $page.data.documents as document}
                    <DataTable.Row>
                        {#each Object.keys($page.data.currentSchema.attributes) as attribute}
                            <DataTable.Cell>
                                {document?.[attribute] ?? '-'}
                            </DataTable.Cell>
                        {/each}

                        <DataTable.Cell>
                            <a href="/studio/content-types/{document.contentTypeId}/{document.uid}/">Edit</a>
                        </DataTable.Cell>
                    </DataTable.Row>
                {/each}
            </DataTable.Body>
        </DataTable>
    </div>

    <div class="flex flex-row bg-neutral-100 p-3">
        Pagination
    </div>
</div>
