<script>
    import { page } from "$app/stores";
    import { Header, InputSwitch, AttributeLayout } from '$lib/studio/components';
    import { Button } from '@unding/ui';
    import { contentTypeSync } from '$lib/studio/actions/contentTypeSync';
    import contentType from '$lib/studio/stores/contentType';

    $: contentType.set($page.data);
</script>

<form method="POST" action="?/edit" use:contentTypeSync={{ contentType }}>
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

    <AttributeLayout.Root>
        {#each $page.data.layout as row}
            <AttributeLayout.Row>
                {#each row as column}
                    {@const field = $contentType.contentType.attributes.find(attribute => attribute.name === column.name)}

                    <AttributeLayout.Column colSpan={column.width}>
                        <InputSwitch {...field} />
                    </AttributeLayout.Column>
                {/each}
            </AttributeLayout.Row>
        {/each}
    </AttributeLayout.Root>
</form>
