<script>
    import { page } from "$app/stores";
    import { Box } from '@unding/ui';
    import { List } from '$lib/studio/components';
</script>


<Box padding={3}>
    <h2>Documents</h2>

    <List items={$page.data.documents} />
</Box>

<slot />
