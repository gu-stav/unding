<script>
    import { page } from "$app/stores";
    import { Header, ComposableComponent, DataTable } from '$lib/studio/components';
    import { components } from '$lib/shared/stores/components';
    import { Button, Input } from '@unding/ui';
</script>

<ComposableComponent component={$components.Header} inputName="bla">
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

<form method="POST" action="?/search">
    <Input name="term" />
</form>

<div class="flex flex-col">
    <div class="flex flex-col">
        <DataTable>
            <DataTable.Header>
                {#each Object.keys($page.data.contentType.attributes) as attribute}
                    <DataTable.HeaderCell>
                        {attribute}
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
</div>
