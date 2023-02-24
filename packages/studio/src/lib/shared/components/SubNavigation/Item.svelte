<script>
    import { Box } from '@unding/ui';

    export let isActive = false;
    export let href;
</script>

<Box as="li">
    <Box as="a" href={href} backgroundColor={isActive && "neutral-100"} display="block" padding={2} borderRadius>
        <slot />
    </Box>
</Box>
