import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/CartItem.Component';
import CustomButton from '../CustomButton/CustomButton.Component';
import { SelectCartItems } from '../../Redux/Cart/Cart.Selectors'
import { ToggleCartHidden } from '../../Redux/Cart/Cart.Actions'

import './CartDropdown.Styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { 
                cartItems.length ?
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(ToggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: SelectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));