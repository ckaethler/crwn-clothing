import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ToggleCartHidden } from '../../Redux/Cart/Cart.Actions';
import { ReactComponent as ShoppingIcon } from 
    '../../assets/images/icons/shopping-bag.svg';
import { SelectCartItemsCount } from '../../Redux/Cart/Cart.Selectors';

import './CartIcon.Styles.scss';

const CartIcon =  ({ ToggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: SelectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);