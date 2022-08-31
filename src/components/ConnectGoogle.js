import React, { useState, useEffect } from 'react';
import '../styles/Button.css'
import '../styles/ConnectGoogle.css';

import { ReactComponent as GoogleLogo } from '../images/google.svg';


function ConnectGoogle() {
    return (
        <div className='btns-google'>
            <button
                className='btns btn--outline btn--large'>
                <GoogleLogo />  Sign in with Google
            </button >
        </div>
    );
}

export default ConnectGoogle;