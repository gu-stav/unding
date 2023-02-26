<script>
    import { page } from "$app/stores";
    import { Box } from '@unding/ui';
    import { SubNavigation } from '$lib/shared/components';
</script>

<SubNavigation>
    <SubNavigation.Group title="Content-Types">
        {#each $page.data.contentTypes as contentType}
            <SubNavigation.Item
                href="/studio/content-types/{contentType.id}"
                isActive={$page.params.content_type_id == contentType.id}>
                {contentType.name}
            </SubNavigation.Item>
        {/each}
    </SubNavigation.Group>
</SubNavigation>

<Box flexGrow={1}>
    <slot />
</Box>
