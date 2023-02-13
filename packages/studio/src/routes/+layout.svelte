<script>
    import { signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
</script>

{#if $page.data.session}
    <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>

    <a href="/auth/signout" data-sveltekit-preload-data="off">Sign out</a>
{/if}

<slot />
