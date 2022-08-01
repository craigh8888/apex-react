import React, { useState, useEffect } from 'react';
import '../../App.css';
import SidebarMenu from '../SidebarMenu';
import FolderViewerOuter from '../FolderViewerOuter';
import LoginBox from '../LoginBox';
import NavbarFiles from '../navbarFiles';

import TempNav from '../tempNav';

export default function AllFiles() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

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