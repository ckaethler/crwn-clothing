import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import { SelectCartItems } from '../../Redux/Cart/CartSelectors'
import { ToggleCartHidden } from '../../Redux/Cart/CartActions'
import './CartDropdown.scss';

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