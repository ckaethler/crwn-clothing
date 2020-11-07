import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ToggleCartHidden } from '../../Redux/Cart/Cart.Actions';

import { SelectCartItemsCount } from '../../Redux/Cart/Cart.Selectors';

import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './CartIcon.Styles';

const CartIcon =  ({ ToggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={ToggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: SelectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);