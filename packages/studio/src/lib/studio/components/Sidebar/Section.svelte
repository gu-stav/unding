<script>
    export let title;
</script>

<h3 class="title">{title}</h3>

<div>
    <slot />
</div>

<style>
    .title {
        font-weight: medium;
        text-transform: uppercase;
    }
</style>
