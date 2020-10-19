import { combineReducers } from 'redux';

import userReducer from './User/UserReducer';
import CartReducer from './Cart/CartReducer';

export default combineReducers({
    user: userReducer,
    cart: CartReducer
});