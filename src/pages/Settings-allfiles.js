import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from '../components/SidebarMenu';
import ViewerOuterSettings from '../components/viewerOuterSettings';
import LoginBox from '../components/LoginBox';
import NavbarFiles from '../components/navbarFiles';


export default function NFTFolder() {


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
                    <ViewerOuterSettings />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <ViewerOuterSettings />
                    </div>

                </>
            )}
        </div>






    );
}