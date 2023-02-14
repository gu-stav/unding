<script>
    import { Box, Text } from '@unding/ui';

    export let title;
</script>

<Box as="ol">
    {#if title}
        <Text as="h2" transform="uppercase" weight="bold">{title}</Text>
    {/if}

    <slot />
</Box>
