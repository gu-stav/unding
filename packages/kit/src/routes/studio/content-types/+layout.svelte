<script>
    import { page } from "$app/stores";
    import { SubNavigation } from '@unding/studio/shared/components';
    import { createUrlPath } from "@unding/studio/shared/utils";
</script>

<SubNavigation>
    <SubNavigation.Group title="Content-Types">
        {#each Object.values($page.data.schema) as contentType}
            <SubNavigation.Item
                href={createUrlPath($page.data.prefix, `studio/content-types/${contentType.name.plural}`)}
                isActive={$page.params.content_type_id == contentType.name.plural}>
                {contentType.name.display}
            </SubNavigation.Item>
        {/each}
    </SubNavigation.Group>
</SubNavigation>

<div class="main">
    <slot />
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        max-height: 100vh;
    }
</style>
