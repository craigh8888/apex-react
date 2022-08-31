import React, { useState, useEffect } from 'react';

import '../styles/ConnectFacebook.css';

import { ReactComponent as FbLogo } from '../images/facebook.svg';


function ConnectFacebook() {
    return (
        <div className='btns-fb'>
            <button className='btns btn--outline btn--large'
            >
                <FbLogo />  Sign in with Facebook
            </button >
        </div>
    );
}

export default ConnectFacebook;