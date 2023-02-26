<script>
    import { page } from "$app/stores";
    import paneStore from '$lib/studio/stores/panes';
    import { Header } from '$lib/studio/components';
    import { Box, Button, Flex } from '@unding/ui';
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

    <Flex gap={1} direction="col" grow={1}>
        <Box as="button" on:click={() => paneStore.swap()}>
            Swap panes
        </Box>

        <Flex grow={1}>
            {#each $paneStore.panes as pane}
                <Flex grow={1}>
                    <Box as="button" on:click={() => paneStore.close(pane.type)}>
                        Close pane {pane.type}
                    </Box>

                    {#if pane.type === 'edit'}
                        <h2>Document</h2>
                        [Document {$page.params.document_id}]
                    {:else if pane.type === 'preview'}
                        <h2>Preview</h2>
                        [{$page.params.document_id}]
                    {/if}
                </Flex>
            {/each}
        </Flex>
    </Flex>
</form>
