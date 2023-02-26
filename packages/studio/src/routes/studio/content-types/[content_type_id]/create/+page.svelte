<script>
    import { Header, InputSwitch } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<form method="POST" action="?/create">
    <Header>
        <svelte:fragment slot="title">
            Create Document
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit" name="submit">
                Save
            </Button>
        </svelte:fragment>
    </Header>

    <InputSwitch type="text" label="Test" name="test" />
    <InputSwitch type="number" label="Test 2" name="test2" />
    <InputSwitch type="checkbox" label="Test 2" name="test2" />
</form>
