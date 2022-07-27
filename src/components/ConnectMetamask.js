import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './ConnectMetamask.css';

import { ReactComponent as MetaLogo } from './metamask-logo.svg';


function ConnectMetamask() {
    return (
        <div className='btns-meta'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                <MetaLogo />  Connect with Metamask
            </Button >
        </div>
    );
}

export default ConnectMetamask;