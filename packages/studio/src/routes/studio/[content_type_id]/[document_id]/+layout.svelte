<script>
    import { page } from "$app/stores";
    import paneStore from '$lib/studio/stores/panes';
    import { Box, Flex } from '@unding/ui';
</script>

<Flex gap={1}>
    <button type="button" on:click={() => paneStore.swap()}>
        Swap panes
    </button>

    {#each $paneStore.panes as pane}
        <Box>
            <button type="button" on:click={() => paneStore.close(pane.type)}>
                Close pane {pane.type}
            </button>

            {#if pane.type === 'edit'}
                <slot />
            {:else if pane.type === 'preview'}
                <h2>Preview</h2>
                [{$page.params.document_id}]
            {/if}
        </Box>
    {/each}
</Flex>
