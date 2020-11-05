import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './User/User.Reducer';
import CartReducer from './Cart/Cart.Reducer';
import DirectoryReducer from './Directory/Directory.Reducer';
import ShopReducer from './Shop/Shop.Reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);