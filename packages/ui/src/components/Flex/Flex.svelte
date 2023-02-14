<script>
    import { Box } from '../Box';

    let rest;
    $: ({ display = 'flex', ...rest } = $$props);
</script>

<Box display={display} {...rest}>
    <slot />
</Box>
