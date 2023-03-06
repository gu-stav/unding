<script>
    import { invalidateAll } from '$app/navigation';
    import { page } from "$app/stores";
    import { Header, ComposableComponent, DataTable } from '$lib/studio/components';
    import { components } from '$lib/shared/stores/components';
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
            <Button as="a" href="/studio/content-types/{$page.params.content_type_id}/create">
                + Create {$page.data.contentType.name.display}
            </Button>
        </svelte:fragment>
    </Header>
</ComposableComponent>

<div class="flex flex-col grow overflow-y-scroll">
    <DataTable>
        <DataTable.Header>
            {#each Object.keys($page.data.contentType.attributes) as attribute}
                <DataTable.HeaderCell>
                    <a href="/studio/content-types/{$page.params.content_type_id}?{appendURLParam('sort', attribute)}" on:click={async () => {
                        // otherwise the page does not call load again
                        await invalidateAll();
                    }}>{attribute}</a>
                </DataTable.HeaderCell>
            {/each}

            <DataTable.HeaderCell />
        </DataTable.Header>

        <DataTable.Body>
            {#each $page.data.documents as document}
                <DataTable.Row>
                    {#each Object.keys($page.data.contentType.attributes) as attribute}
                        <DataTable.Cell>
                            {document?.[attribute] ?? '-'}
                        </DataTable.Cell>
                    {/each}

                    <DataTable.Cell>
                        <a href="/studio/content-types/{$page.params.content_type_id}/{document.uid}/">Edit</a>
                    </DataTable.Cell>
                </DataTable.Row>
            {/each}
        </DataTable.Body>
    </DataTable>
</div>

<div class="flex flex-row bg-neutral-100 p-3">
    Pagination
</div>
