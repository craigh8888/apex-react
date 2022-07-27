import React from 'react';
// import '../App.css';
// import { Button } from './Button';
import './Sidebar.css';
import SidebarNav from './SidebarNav';
import SidebarRecents from './SidebarRecents';
// import { ReactComponent as Lglogo } from '../apex-logo-lrge.svg';
// import LoginBox from './LoginBox';
import { ReactComponent as SidebarLogo } from '../SidebarLogo.svg';

import { ReactComponent as ArweaveSidebarLogo } from '../arweave.svg';
import CurrentStorage from './CurrentStorage';
import AccountSidebar from './AccountSidebar';

function SidebarMenu() {
    return (
        <div className='sidebar-wrap'>
            <div className='sidebar-top'>
                <SidebarLogo />
                <p className='poweredby'>Powered by <ArweaveSidebarLogo /></p>
            </div>
            <SidebarNav />

            <SidebarRecents />
            <div className='side-bar-lowerwrap'>
                <CurrentStorage />

                <AccountSidebar />
            </div>
        </div>
    );
}

export default SidebarMenu;