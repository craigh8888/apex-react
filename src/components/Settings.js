import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu.js';
// import ViewerInnerSettings from './viewerinner/viewerInnerSettings.js'
import ViewerOuterSettings from './viewerouter/viewerOuterSettings.js'
import NavbarFiles from './navbarFiles';


export default function Settings({ viewName, viewDesc, bundlrAddress, bundlrBalance, fundBundlr, setOnramper }) {


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
                    <ViewerOuterSettings
                        viewName={"Settings"}
                        viewDesc={"You can edit your Billing, Account Information and Notifications here."}
                        bundlrAddress={bundlrAddress}
                        bundlrBalance={bundlrBalance}
                        fundBundlr={fundBundlr}
                        setOnramper={setOnramper}
                    />
                    {/* <ViewerInnerSettings
                        viewName={"Settings"}
                        viewDesc={"You can edit your Billing, Account Information and Notifications here."}
                        bundlrAddress={bundlrAddress}
                        bundlrBalance={bundlrBalance}
                        fundBundlr={fundBundlr}
                        setOnramper={setOnramper}
                    /> */
                        /* This was replaced with ViewerOuterSettings to have the outer html */

                    }
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
