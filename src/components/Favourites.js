import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu';
import FolderViewerOuter from './viewerouter/viewerOuterFavourites';
import NavbarFiles from './navbarFiles';

import TempNav from './menus/tempNav';
import ViewerInnerFavourites from './viewerinner/viewerInnerFavourites';
import ViewerInner from './viewerinner/Viewer-Inner';
import Table from './tables/Table';
import PageHeader from './tables/pageHeader';




export default function Favourites(setInnerContent) {

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

                    <PageHeader
                        viewName="Favourites"
                        button1Class="button-top add-folder"
                        button2Class="button-top upload-files"
                        button1Func=""
                        button2Func=""
                        button1Text="My Button"
                        button2Text="My Other Button"
                        setInnerContent={setInnerContent}

                    />
                    <Table headerNames={["Icon", "Name", "Folder", "Created", "Size", "View File", "Actions"]}
                    />




                    {/* <ViewerInner 
        viewName={"Favorites"}
        buttons={[<button>My button</button>, <button>My other button</button>]}
        headerNames={["Icon","Name","Folder","Created,Size","File Count", "View File", "Actions"]}
        rows={demoLinks}
        pagination={demoPages}
        
        /> */}
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
