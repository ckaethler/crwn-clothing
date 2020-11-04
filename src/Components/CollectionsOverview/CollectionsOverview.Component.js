import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from 
    '../CollectionPreview/CollectionPreview.Component';
import { SelectCollectionsForPreview } from '../../Redux/Shop/Shop.Selectors'

import './CollectionsOverview.Styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
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
    collections: SelectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview);