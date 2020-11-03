import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};

const SelectShop = state => state.shop;

export const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections,
);

export const SelectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [SelectCollections],
        collections => collections.find(collection => 
            collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);