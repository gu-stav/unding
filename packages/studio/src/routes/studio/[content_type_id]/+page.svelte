<script>
    import { page } from "$app/stores";
    import { DataTable } from '$lib/studio/components';
    import { Box } from '@unding/ui';
</script>

<DataTable>
    <DataTable.Header>
        <DataTable.HeaderCell>
            id
        </DataTable.HeaderCell>

        <DataTable.HeaderCell>
            title
        </DataTable.HeaderCell>
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
                    <Box as="a" href="/studio/{document.contentTypeId}/{document.id}/">Edit</Box>
                </DataTable.Cell>
            </DataTable.Row>
        {/each}
    </DataTable.Body>
</DataTable>
