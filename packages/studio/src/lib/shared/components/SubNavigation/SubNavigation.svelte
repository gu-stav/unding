<script>
    import { Box } from '@unding/ui';

    export let user;
</script>

<Box as="nav" padding={3} height="full-vh" borderColor="neutral-200" border="right">
    {#if user}
        <span class="signedInText">
            <strong>{user.name}</strong>
        </span>

        <a href="/auth/signout" data-sveltekit-preload-data="off">Sign out</a>
    {/if}

    <slot />
</Box>
