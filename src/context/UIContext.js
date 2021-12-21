export const initialUIState = {
    darkMode: false
}

export const UIReducer = (state, action) => {
    switch (action.type) {
        default:
            throw new Error(`action type ${action.type} is undefined`);
    }
}