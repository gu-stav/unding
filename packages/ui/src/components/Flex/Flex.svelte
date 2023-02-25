<script>
    import { Box } from '../Box';

    export let display = 'flex';
    export let grow;
</script>

<Box display={display} flexGrow={grow} {...$$restProps}>
    <slot />
</Box>
