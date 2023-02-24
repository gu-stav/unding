<script>
    import { Box } from '../Box';

    export let display = 'flex';
</script>

<Box display={display} {...$$restProps}>
    <slot />
</Box>
