import React from 'react';

import SignIn from '../../Components/SignIn/SignIn.Component';
import SignUp from '../../Components/SignUp/SignUp.Component';

import './SignInSignUp.Styles.scss';

const SignInSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;