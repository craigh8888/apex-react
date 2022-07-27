import React from 'react';
import { Button } from './Button';
import './LoginBox.css';
import { Link } from 'react-router-dom';
import ConnectMetamask from './ConnectMetamask';
import ConnectFacebook from './ConnectFacebook';
import ConnectGoogle from './ConnectGoogle';
import ConnectApple from './ConnectApple';

function LoginBox() {
    return (
        <div className='login-box-wrap'>

            <p className='title-login'>Login to Apex Cloud</p>
            <p className='title-para'>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur</p>
            <div className='button-wrap'>
                <ConnectMetamask />
                <ConnectFacebook />
                <ConnectGoogle />
                <ConnectApple />
            </div>

            <Link
                to='/#'
                className='create-acc'
            >
                Create an Account
            </Link>


        </div>
    );
}

export default LoginBox;