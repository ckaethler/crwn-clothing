import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { SelectCartItems, SelectCartTotal } from 
    '../../Redux/Cart/Cart.Selectors';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.Component';
import StripeCheckoutButton from '../../Components/StripeButton/StripeButton.Component'

import './Checkout.Styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem 
                        cartItem={cartItem} 
                        key={cartItem.id} />)
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                * Please use the following test credit card for payments *
                <br />
                4242 4242 4242 4242 - Exp: 1/21 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    cartItems: SelectCartItems,
    total: SelectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
