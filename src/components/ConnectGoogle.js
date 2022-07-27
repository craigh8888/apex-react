import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './ConnectGoogle.css';

import { ReactComponent as GoogleLogo } from './google.svg';


function ConnectGoogle() {
    return (
        <div className='btns-google'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                <GoogleLogo />  Sign in with Google
            </Button >
        </div>
    );
}

export default ConnectGoogle;