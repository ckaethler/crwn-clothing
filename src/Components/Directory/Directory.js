import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/MenuItem';
import { SelectDirectorySections } from 
    '../../Redux/Directory/DirectorySelectors';

import './Directory.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem 
                    key={id} 
                    {...otherSectionProps}/>
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: SelectDirectorySections
})

export default connect(mapStateToProps)(Directory);