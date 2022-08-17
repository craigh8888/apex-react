import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from '../components/SidebarMenu';
import FolderViewerOuter from '../components/viewerOuterFolder';
import LoginBox from '../components/LoginBox';
import NavbarFiles from '../components/navbarFiles';

import TempNav from '../components/tempNav';

export default function Favourites() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 978);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);

    }, []);

    return (
        <div>
            {isDesktop ? (
                <>

                    <SidebarMenu />
                    <FolderViewerOuter />
                    <TempNav />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <FolderViewerOuter />
                    </div>

                </>
            )}
        </div>
    );
}