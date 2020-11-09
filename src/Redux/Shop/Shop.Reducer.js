import SHOP_DATA from './Shop.Data';

import { ShopActionTypes } from './Shop.Types';

const INITIAL_STATE = {
    collections: SHOP_DATA,
}

const ShopReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            }
        default:
            return state;
    }
}

export default ShopReducer;