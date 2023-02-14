<script>
    import { Box } from '@unding/ui';

    export let isActive = false;
    export let label;
    export let href;
</script>

<Box as="li">
    <Box as="a" href={href} backgroundColor={isActive && "neutral-200"} display="block" padding={1} borderRadius>
        <slot />
    </Box>
</Box>
