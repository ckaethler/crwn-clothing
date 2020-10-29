import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { SelectCartItems, SelectCartTotal } from '../../Redux/Cart/CartSelectors';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

import './Checkout.scss';

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
                <span>TOTAL: {total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    cartItems: SelectCartItems,
    total: SelectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
