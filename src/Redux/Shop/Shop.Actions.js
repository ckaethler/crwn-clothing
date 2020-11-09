import { ShopActionTypes } from './Shop.Types';

export const UpdateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
});