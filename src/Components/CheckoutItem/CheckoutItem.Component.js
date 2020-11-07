import React from 'react';
import { connect } from 'react-redux';

import { ClearItemFromCart, AddItem, RemoveItem } from 
    '../../Redux/Cart/Cart.Actions';
    
import { CheckoutItemContainer, ImageContainer, NameContainer, 
    QuantityContainer, ArrowContainer, ValueContainer, PriceContainer,
    RemoveContainer } 
    from './CheckoutItem.Styles';

const CheckoutItem = ({ cartItem, ClearItem, AddItem, RemoveItem }) => {
    
    const {price, imageUrl, name, quantity} = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl} />
            </ImageContainer>

            <NameContainer>{name}</NameContainer>
            <QuantityContainer>

                <ArrowContainer onClick={() => RemoveItem(cartItem)}>
                    &#10094;
                </ArrowContainer>

                <ValueContainer>{quantity}</ValueContainer>

                <ArrowContainer onClick={() => AddItem(cartItem)}>
                    &#10095;
                </ArrowContainer>
            </QuantityContainer>

            <PriceContainer>${price}</PriceContainer>
            <RemoveContainer onClick={() => ClearItem(cartItem)}>
                &#10005;
            </RemoveContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    ClearItem: item => dispatch(ClearItemFromCart(item)),
    AddItem: item => dispatch(AddItem(item)),
    RemoveItem: item => dispatch(RemoveItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);