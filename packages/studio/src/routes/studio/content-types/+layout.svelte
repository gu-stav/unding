<script>
    import { page } from "$app/stores";
    import { SubNavigation } from '$lib/shared/components';
</script>

<SubNavigation>
    <SubNavigation.Group title="Content-Types">
        {#each Object.values($page.data.schema) as contentType}
            <SubNavigation.Item
                href="/studio/content-types/{contentType.name.plural}"
                isActive={$page.params.content_type_id == contentType.name.plural}>
                {contentType.name.display}
            </SubNavigation.Item>
        {/each}
    </SubNavigation.Group>
</SubNavigation>

<div class="flex flex-col grow">
    <slot />
</div>
