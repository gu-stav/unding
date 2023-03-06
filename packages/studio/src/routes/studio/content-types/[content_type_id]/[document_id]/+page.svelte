<script>
    import { enhance } from '$app/forms';
    import { page } from "$app/stores";
    import paneStore from '$lib/studio/stores/panes';
    import { Header, InputSwitch, Panes, AttributeLayout } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<form method="POST" action="?/edit" use:enhance>
    <Header>
        <svelte:fragment slot="title">
            Edit Document
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit" name="submit">
                Save
            </Button>
        </svelte:fragment>
    </Header>

    <div class="flex flex-col">
        <button on:click={() => paneStore.swap()}>
            Swap panes
        </button>

        <Panes.Root>
            {#each $paneStore.panes as pane}
                <Panes.Pane>
                    <button on:click={() => paneStore.close(pane.type)}>
                        Close pane {pane.type}
                    </button>

                    {#if pane.type === 'edit'}
                        <AttributeLayout.Root>
                            {#each $page.data.layout as row}
                                <AttributeLayout.Row>
                                    {#each row as column}
                                    {@const name = column.name}
                                    {@const field = $page.data.contentType.attributes[column.name]}

                                        <AttributeLayout.Column colSpan={column.width}>
                                            <InputSwitch type={field.type} value={$page.data.document?.[name]} label={name} name={name} description={field.description} disabled={!!field.readOnly} />
                                        </AttributeLayout.Column>
                                    {/each}
                                </AttributeLayout.Row>
                            {/each}
                        </AttributeLayout.Root>
                    {:else if pane.type === 'preview'}
                        <h2>Preview</h2>
                        [{$page.params.document_id}]
                    {/if}
                </Panes.Pane>
            {/each}
        </Panes.Root>
    </div>
</form>
