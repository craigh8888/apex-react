import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './ConnectApple.css';

import { ReactComponent as AppleLogo } from './apple.svg';


function ConnectApple() {
    return (
        <div className='btns-apple'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                <AppleLogo />  Sign in with Apple
            </Button >
        </div>
    );
}

export default ConnectApple;