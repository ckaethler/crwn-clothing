import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton.Component';
import { AddItem } from '../../Redux/Cart/Cart.Actions';

import './CollectionItem.Styles.scss';

const CollectionItem = ({ item, AddItem}) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className='name'>{name}</span>                
                <span className='price'>${price}</span>                
            </div>

            <CustomButton onClick={() => AddItem(item)} inverted>
                Add To Cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);