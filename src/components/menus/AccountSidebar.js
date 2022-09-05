import React, { useState } from 'react';
import '../../styles/account-sidebar.css';
import AccountImage from '../../images/account-owl.png';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import { ReactComponent as UpArrow } from '../../images/up-arrow.svg';
import { Link } from 'react-router-dom';


function AccountSidebar() {
    const [isActive, setIsActive] = useState(false);


    return (

        <>
            <div className='account-wrap'>

                <Link to='#' onClick={() => setIsActive(!isActive)}>

                    <div>

                        <span>John S</span>
                        <img src={AccountImage} alt=""/>
                        {isActive ? <UpArrow /> : <DownArrow />}

                    </div>
                    {isActive && <div className='account-accord-content'>content here</div>}
                </Link>
            </div>
        </>
    );

}
export default AccountSidebar;
