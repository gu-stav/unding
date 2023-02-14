import { writable } from "svelte/store";

const initialState = {
    panes: [
        {
            type: 'edit'
        },

        {
            type: 'preview'
        }
    ]
};

function createStore() {
    const { subscribe, set, update } = writable(initialState);

    return {
        subscribe,
        close: (type) => update((state) => {
            state.panes = state.panes.filter(pane => pane.type !== type);
            return state;
        }),
        swap: () => update((state) => {
            state.panes = state.panes.reverse();
            return state;
        }),
        reset: () => set(initialState)
      };
}

export default createStore();
