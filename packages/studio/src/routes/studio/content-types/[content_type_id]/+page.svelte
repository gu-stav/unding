<script>
    import { page } from "$app/stores";
    import { Header, DataTable } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<Header>
    <svelte:fragment slot="title">
        Document
    </svelte:fragment>

    <svelte:fragment slot="action">
        <Button as="a" href="/studio/content-types/1/create">
            + Create document
        </Button>
    </svelte:fragment>
</Header>

<div class="flex flex-col">
    <div class="flex flex-col">
        <DataTable>
            <DataTable.Header>
                <DataTable.HeaderCell>
                    id
                </DataTable.HeaderCell>

                <DataTable.HeaderCell>
                    title
                </DataTable.HeaderCell>

                <DataTable.HeaderCell />
            </DataTable.Header>

            <DataTable.Body>
                {#each $page.data.documents as document}
                    <DataTable.Row>
                        <DataTable.Cell>
                            {document.id}
                        </DataTable.Cell>

                        <DataTable.Cell>
                            {document.title}
                        </DataTable.Cell>

                        <DataTable.Cell>
                            <a href="/studio/content-types/{document.contentTypeId}/{document.id}/">Edit</a>
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
