const initState = {
    variant: 'login',
    quantity: 0,
};
function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_VARIANT':
            return {
                ...state,
                variant: action.variant,
            };
        default:
            return state;
    }
}

export default reducer;
