import React from 'react';
import { connect } from 'react-redux';

import { SelectCollection } from '../../Redux/Shop/Shop.Selectors'

// import CollectionItem from 
//     '../../Components/CollectionItem/CollectionItem.Component';

import './Collection.Styles.scss';

const CollectionPage = ({ collection }) => {
    console.log(collection)
    return (
        <div className="collection-page">
            <h1>Collection PAGE</h1>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: SelectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);