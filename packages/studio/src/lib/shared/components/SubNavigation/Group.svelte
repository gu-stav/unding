<script>
    import { Box, Text } from '@unding/ui';

    export let title;
</script>

<Box as="ol">
    <Text as="h2" transform="uppercase" weight="bold">{title}</Text>
    <slot />
</Box>
