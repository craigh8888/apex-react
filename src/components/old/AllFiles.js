import React, { useState, useEffect } from 'react';
import '../../styles/App.css';
import SidebarMenu from '../menus/SidebarMenu';
import FolderViewerOuter from '../viewerouter/FolderViewerOuter';
import NavbarFiles from '../navbarFiles';

import TempNav from '../menus/tempNav';

export default function AllFiles() {

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