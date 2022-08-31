import React, { useState, useEffect } from 'react';

import '../styles/ConnectApple.css';

import { ReactComponent as AppleLogo } from '../images/apple.svg';


function ConnectApple() {
    return (
        <div className='btns-apple'>
            <button className='btns btn--outline btn--large'>
                <AppleLogo />  Sign in with Apple
            </button>
        </div>
    );
}

export default ConnectApple;