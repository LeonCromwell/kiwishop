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
