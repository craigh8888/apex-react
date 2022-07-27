import React from 'react';
import './account-sidebar.css';
import AccountImage from './account-owl.png';
import { ReactComponent as DownArrow } from '../down-arrow.svg';
import { Link } from 'react-router-dom';

function AccountSidebar() {


    return (

        <>
            <div className='account-wrap'>
                <Link to='#'>
                    <div>

                        <span>John S</span>
                        <img src={AccountImage} />
                        <DownArrow />

                    </div>
                </Link>
            </div>
        </>
    );

}
export default AccountSidebar;