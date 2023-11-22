const initState = {
    variant: 'login',
    quantity: 0,
    currentUser: {},
};
function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_VARIANT':
            return {
                ...state,
                variant: action.variant,
            };
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser,
            };
        default:
            return state;
    }
}

export default reducer;
