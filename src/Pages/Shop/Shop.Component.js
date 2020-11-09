import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from 
    '../../Components/CollectionsOverview/CollectionsOverview.Component';
import CollectionPage from '../Collection/Collection.Component';
import { firestore, convertCollectionsSnapshopToMap } 
    from '../../Firebase/Firebase.Utils';
import { UpdateCollections } from '../../Redux/Shop/Shop.Actions';

class ShopPage extends React.Component {
    UnsubscribeFromSnapshop = null;

    componentDidMount() {
        const { UpdateCollections } = this.props;
        const CollectionRef = firestore.collection('collections');

        CollectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
            UpdateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverview} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPage} 
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    UpdateCollections: collectionsMap => 
        dispatch(UpdateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage);