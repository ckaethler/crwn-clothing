import React from 'react';
import { connect } from 'react-redux';
import { ToggleCartHidden } from '../../Redux/Cart/CartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/images/icons/shopping-bag.svg';
import { SelectCartItemsCount } from '../../Redux/Cart/CartSelectors';

import './CartIcon.scss';

const CartIcon =  ({ ToggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = state => ( SelectCartItemsCount[state])

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);