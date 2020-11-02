import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './User/UserReducer';
import CartReducer from './Cart/CartReducer';
import DirectoryReducer from './Directory/DirectoryReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
});

export default persistReducer(persistConfig, rootReducer);