import React, { useState, useEffect } from 'react';
import '../../App.css';
import SidebarMenu from '../SidebarMenu';
import ViewerOuterMediaLibrary from '../viewerOuterMediaLibrary';
import LoginBox from '../LoginBox';
import NavbarFiles from '../navbarFiles';
import TempNav from '../tempNav';

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