import React from 'react';
import './Homepage.scss';
import Directory from '../../Components/Directory/Directory';

const HomePage = ({history}) => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
}

export default HomePage;