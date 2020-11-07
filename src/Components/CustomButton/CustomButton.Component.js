import React from 'react'

import { CustomButtonContainer } from './CustomButton.Styles';
import './CustomButton.Styles.scss';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;