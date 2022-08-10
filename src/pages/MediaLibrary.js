import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from '../components/SidebarMenu';
import ViewerOuterMediaLibrary from '../components/viewerOuterMediaLibrary';
import LoginBox from '../components/LoginBox';
import NavbarFiles from '../components/navbarFiles';
import TempNav from '../components/tempNav';

export default function MediaFolder() {


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
                    <ViewerOuterMediaLibrary />
                    <TempNav />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <ViewerOuterMediaLibrary />
                    </div>

                </>
            )}
        </div>






    );
}