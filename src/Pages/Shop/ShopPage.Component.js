import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 
    '../../Components/CollectionPreview/CollectionPreview.Component';
import { SelectCollections } from '../../Redux/Shop/Shop.Selectors'

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => {
                return <CollectionPreview 
                    key={id} 
                    {...otherCollectionProps}/>
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: SelectCollections,
})

export default connect(mapStateToProps)(ShopPage);