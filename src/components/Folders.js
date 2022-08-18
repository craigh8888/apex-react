import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu';
import FolderViewerOuter from './viewerouter/viewerOuterFolder';
import NavbarFiles from './navbarFiles';
import ViewerInner from './viewerinner/Viewer-Inner';

import TempNav from './menus/tempNav';

export default function Favourites() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 978);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);

    }, []);

    const demoLinks = []
    const demoPages = []

    return (
        <div>
            {isDesktop ? (
                <>

        <ViewerInner 
        viewName={"Folders"}
        buttons={[<button>My button</button>, <button>My other button</button>]}
        headerNames={["Icon","Name","Folder","Created,Size","File Count", "View File", "Actions"]}
        rows={demoLinks}
        pagination={demoPages}
        
        />
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