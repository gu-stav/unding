<script>
    import { Popover } from "../Popover";
</script>

<Popover>
    <svelte:fragment slot="trigger">
        <slot name="trigger" />
    </svelte:fragment>

    <svelte:fragment slot="portal">
        <slot name="portal" />
    </svelte:fragment>
</Popover>
