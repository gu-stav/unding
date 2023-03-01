<script>
    import { page } from "$app/stores";
    import { Header, InputSwitch } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<form method="POST" action="?/create">
    <Header>
        <svelte:fragment slot="title">
            Create {$page.data.contentType.name.display}
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit" name="submit">
                Save
            </Button>
        </svelte:fragment>
    </Header>

    {#each Object.entries($page.data.contentType.attributes) as [name, attribute]}
        <InputSwitch type={attribute.type} label={name} name />
    {/each}
</form>
