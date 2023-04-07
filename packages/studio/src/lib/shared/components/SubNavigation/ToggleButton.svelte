<button type="button" aria-label="Toggle" on:click />

<style>
    button {
        background-color: var(--color-white);
        border: 1px solid var(--color-slate-200);
        border-radius: 50%;
        height: var(--spacing-5);
        overflow: hidden;
        position: absolute;
        right: 0;
        transform: translateX(50%);
        width: var(--spacing-5);
    }

    button:hover,
    button:focus {
        background-color: var(--color-slate-200);
    }
</style>
