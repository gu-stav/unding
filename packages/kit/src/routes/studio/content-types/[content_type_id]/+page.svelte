<script>
    import { invalidateAll } from '$app/navigation';
    import { page } from "$app/stores";
    import { AttributeValue, Header, ComposableComponent, DataTable } from '@unding/studio/studio/components';
    import { Pagination } from '@unding/studio/shared/components';
    import { components } from '@unding/studio/shared/stores';
    import { createUrlPath } from "@unding/studio/shared/utils";
    import { Button } from '@unding/ui';

    function appendURLParam(key, value) {
        const url = new URLSearchParams($page.url.search);

        url.set(key, value)

        return url.toString();
    }
</script>

<ComposableComponent component={$components.Header}>
    <Header>
        <svelte:fragment slot="title">
            {$page.data.contentType.name.display}
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button as="a" href={createUrlPath($page.data.prefix, `studio/content-types/${$page.params.content_type_id}/create`)}>
                + Create {$page.data.contentType.name.display}
            </Button>
        </svelte:fragment>
    </Header>
</ComposableComponent>

<DataTable>
    <DataTable.Header>
        {#each $page.data.contentType.attributes as attribute}
            <DataTable.HeaderCell>
                <a href={createUrlPath($page.data.prefix, `studio/content-types/${$page.params.content_type_id}?${appendURLParam('sort', attribute)}`)} on:click={async () => {
                    // otherwise the page does not call load again
                    await invalidateAll();
                }}>{attribute.name}</a>
            </DataTable.HeaderCell>
        {/each}

        <DataTable.HeaderCell />
    </DataTable.Header>

    <DataTable.Body>
        {#each $page.data.documents as document}
            <DataTable.Row>
                {#each $page.data.contentType.attributes as attribute}
                    <DataTable.Cell>
                        <AttributeValue value={document?.[attribute.name]} type={attribute.type} />
                    </DataTable.Cell>
                {/each}

                <DataTable.Cell>
                    <a href={createUrlPath($page.data.prefix, `studio/content-types/${$page.params.content_type_id}/${document.uid}/`)}>Edit</a>
                </DataTable.Cell>
            </DataTable.Row>
        {/each}
    </DataTable.Body>
</DataTable>

<Pagination totalDocuments={$page.data.documents.length} />
