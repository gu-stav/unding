<div class="container">
    <table>
        <slot />
    </table>
</div>

<style>
    .container {
        overflow-y: auto;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }
</style>
