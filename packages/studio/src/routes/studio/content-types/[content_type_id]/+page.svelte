<script>
    import { page } from "$app/stores";
    import { Header, DataTable } from '$lib/studio/components';
    import { Box, Button, Flex } from '@unding/ui';
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

<Flex direction="col">
    <Flex grow={1}>
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
                            <Box as="a" href="/studio/content-types/{document.contentTypeId}/{document.id}/">Edit</Box>
                        </DataTable.Cell>
                    </DataTable.Row>
                {/each}
            </DataTable.Body>
        </DataTable>
    </Flex>

    <Flex backgroundColor="neutral-100" padding={3}>
        Pagination
    </Flex>
</Flex>
