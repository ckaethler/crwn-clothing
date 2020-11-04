import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const SelectShop = state => state.shop;

export const SelectCollections = createSelector(
    [SelectShop],
    shop => shop.collections,
);

export const SelectCollectionsForPreview = createSelector(
    [SelectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const SelectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [SelectCollections],
        collections => collections[collectionUrlParam]
    )
);