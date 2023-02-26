<script>
    import { Box, Field } from '..';
</script>

<Field.Label>
    <Box as="input" type="checkbox" {...$$restProps} />
    <slot />
</Field.Label>
