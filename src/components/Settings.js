import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu';
import ViewerInnerSettings from './viewerinner/viewerInnerSettings.js'
import ViewerOuterSettings from './viewerouter/viewerOuterSettings.js'
import NavbarFiles from './navbarFiles';


export default function Settings({bundlrAddress, bundlrBalance, fundBundlr, setOnramper}) {


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
                    <ViewerInnerSettings 
                    bundlrAddress={bundlrAddress} 
                    bundlrBalance={bundlrBalance}
                    fundBundlr={fundBundlr}
                    setOnramper={setOnramper}
                    />
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <NavbarFiles />

                        <ViewerOuterSettings 
                        bundlrBalance={bundlrBalance}
                        />
                    </div>

                </>
            )}
        </div>






    );
}