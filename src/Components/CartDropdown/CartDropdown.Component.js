import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/CartItem.Component';
import CustomButton from '../CustomButton/CustomButton.Component';
import { SelectCartItems } from '../../Redux/Cart/Cart.Selectors';
import { ToggleCartHidden } from '../../Redux/Cart/Cart.Actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } 
    from './CartDropdown.Styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            { 
                cartItems.length ?
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
                :
                <EmptyMessageContainer>
                    Your cart is empty
                </EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(ToggleCartHidden());
            }}
        >GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: SelectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));