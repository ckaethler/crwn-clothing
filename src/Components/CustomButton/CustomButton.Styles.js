import styled, { css } from 'styled-components';

// BASIC BUTTON STYLES
const ButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

// INVERTED BUTTON STYLES
const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

// GOOGLE SIGN IN BUTTON STYLE
const GoogleSignInStyles = css`
    background-color: #4285f4;
    border: none;
    color: white;

    &:hover {
        background-color: #357ae8;
    }
`;

// DECIDES BUTTON STYLE BASED ON PROPS PASSED IN
const GetButtonStyles = ({ isGoogleSignIn, inverted, ...otherProps }) => {
    if (isGoogleSignIn) return GoogleSignInStyles;
    else if (inverted) return InvertedButtonStyles;
    else return ButtonStyles;
}

// TOTAL OF BUTTON STYLING
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${GetButtonStyles}
`;
