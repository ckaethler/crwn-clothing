import React from 'react';

import { CartItemContainer, ItemDetailsContainer, NameContainer, PriceContainer} 
    from './CartItem.Styles';

const CartItem = ({ item: { imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{quantity} x ${price}</PriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;