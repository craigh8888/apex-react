import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from '../components/SidebarMenu';
import ViewerOuterNFT from '../components/ViewerOuterNFT';
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