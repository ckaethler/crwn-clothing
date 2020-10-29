import React from 'react';
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import { SelectCartItems } from '../../Redux/Cart/CartSelectors'
import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.map(cartItem => {
                return <CartItem key={cartItem.id} item={cartItem}/>
            })}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);