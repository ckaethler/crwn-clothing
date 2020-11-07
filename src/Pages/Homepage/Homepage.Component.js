import React from 'react';

import Directory from '../../Components/Directory/Directory.Component';

import { HomePageContainer } from './Homepage.Styles';

const HomePage = ({history}) => {
    return (
        <HomePageContainer>
            {/* PHOTO GALLERY SHOP DIRECTORY */}
            <Directory />
        </HomePageContainer>
    );
}

export default HomePage;