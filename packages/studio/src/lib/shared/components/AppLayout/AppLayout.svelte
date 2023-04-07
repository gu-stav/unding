<div class="container">
    <slot name="header" />

    <slot name="sub-navigation" />

    <div class="main">
        <slot />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .main {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        max-height: 100vh;
    }
</style>
