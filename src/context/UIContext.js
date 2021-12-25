export const initialUIState = {
    darkMode: false,
    project: null,
    openProjectModal: false,
}

export const UIReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_PROJECT_MODAL":
            return {
                ...state,
                openProjectModal: true,
                project: action.payload
            };

        case "CLOSE_PROJECT_MODAL":
            return {
                ...state,
                openProjectModal: false,
            };

        default:
            throw new Error(`action type ${action.type} is undefined`);
    }
}