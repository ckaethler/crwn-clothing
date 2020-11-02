import React from 'react';

import Directory from '../../Components/Directory/Directory.Component';

import './Homepage.Styles.scss';

const HomePage = ({history}) => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
}

export default HomePage;