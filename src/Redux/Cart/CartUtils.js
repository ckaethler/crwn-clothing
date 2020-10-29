export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem;
        })
    } else return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const RemoveItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id;
    });

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }

    return cartItems.map(item => {
        if (item.id === cartItemToRemove.id) {
            return { ...item, quantity: item.quantity - 1};
        } else return item;
    })
}