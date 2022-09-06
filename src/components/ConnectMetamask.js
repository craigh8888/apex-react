import React, { useState, useEffect } from 'react';
import '../styles/Button.css'
import '../styles/ConnectMetamask.css';

import { ReactComponent as MetaLogo } from '../images/metamask-logo.svg';


function ConnectMetamask() {
    return (
        <div className='btns-meta'>
            <button
                className='btns btn--outline btn--large'
            >
                <MetaLogo />  Connect with Metamask
            </button >
        </div>
    );
}

export default ConnectMetamask;