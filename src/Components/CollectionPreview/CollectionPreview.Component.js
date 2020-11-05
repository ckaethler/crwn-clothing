import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem.Component';
import './CollectionPreview.Styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 3)
                    .map((item) => {
                    return <CollectionItem key={item.id} item={item} />
                })}
            </div>
        </div>
    );
}

export default CollectionPreview;