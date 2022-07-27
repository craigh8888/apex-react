import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './ConnectFacebook.css';

import { ReactComponent as FbLogo } from './facebook.svg';


function ConnectFacebook() {
    return (
        <div className='btns-fb'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                <FbLogo />  Sign in with Facebook
            </Button >
        </div>
    );
}

export default ConnectFacebook;