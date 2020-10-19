export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });
    console.log(cartItems, existingCartItem)

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem;
        })
    } else return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}