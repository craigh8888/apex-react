import React, { useState } from 'react';
// import '../App.css';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css';
import SidebarNav from './SidebarNav';
import SidebarRecents from '../SidebarRecents';
// import { ReactComponent as Lglogo } from '../apex-logo-lrge.svg';
// import LoginBox from './LoginBox';
import { ReactComponent as SidebarLogo } from '../../images/SidebarLogo.svg';

import { ReactComponent as ArweaveSidebarLogo } from '../../images/arweave.svg';
import CurrentStorage from '../CurrentStorage';
import AccountSidebar from './AccountSidebar';



function SidebarMenu({setInnerContent}) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='sidebar-wrap'>
            <div className='sidebar-top'>
                <Link to='/apex-react/' className='logo-link' onClick={closeMobileMenu}>
                    <SidebarLogo />
                </Link>

                <p className='poweredby'>Powered by <ArweaveSidebarLogo /></p>
            </div>
            <SidebarNav
            setInnerContent={setInnerContent}
            />

            <SidebarRecents />
            <div className='side-bar-lowerwrap'>
                <CurrentStorage />

                <AccountSidebar />
            </div>
        </div>
    );
}

export default SidebarMenu;