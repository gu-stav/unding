<script>
    import { page } from "$app/stores";
    import paneStore from '$lib/studio/stores/panes';
    import { Header } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<form method="GET">
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

        <div class="flex">
            {#each $paneStore.panes as pane}
                <div class="flex">
                    <button on:click={() => paneStore.close(pane.type)}>
                        Close pane {pane.type}
                    </button>

                    {#if pane.type === 'edit'}
                        <h2>Document</h2>
                        [Document {$page.params.document_id}]
                    {:else if pane.type === 'preview'}
                        <h2>Preview</h2>
                        [{$page.params.document_id}]
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</form>
