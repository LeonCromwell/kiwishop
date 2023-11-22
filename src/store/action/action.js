export const setVariant = (variant) => {
    return {
        type: 'SET_VARIANT',
        variant: variant,
    };
};

export const setQuantity = (quantity) => {
    return {
        type: 'SET_QUANTITY',
        quantity: quantity,
    };
};

export const setCurrentUser = (currentUser) => {
    return {
        type: 'SET_CURRENT_USER',
        currentUser: currentUser,
    };
}
