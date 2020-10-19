import {CartActionTypes} from './CartTypes';

const INITIAL_STATE = {
    hidden: true
};

const CartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            console.log("toggling");
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            console.log("default");
            return state;
    }
}

export default CartReducer;