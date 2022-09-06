import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu';
import ViewerOuterNFT from './viewerouter/ViewerOuterNFT';
import NavbarFiles from './navbarFiles';


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
                    <ViewerOuterNFT />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <ViewerOuterNFT />
                    </div>

                </>
            )}
        </div>






    );
}