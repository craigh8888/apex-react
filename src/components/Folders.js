import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from './menus/SidebarMenu';
import FolderViewerOuter from './viewerouter/viewerOuterFolder';
import NavbarFiles from './navbarFiles';

import ViewerInner from './viewerinner/Viewer-Inner';
// import Table from './tables/Table';
import Table2 from './tables/Table-Local';
// import TempNav from './menus/tempNav';
import PageHeader from './tables/pageHeader';
export default function Favourites(viewName, viewDesc, bundlrAddress, bundlrBalance, fundBundlr, setOnramper, setInnerContent) {

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
                        viewName="Folders"
                        button1Class="button-top add-folder"
                        button2Class="button-top upload-files"
                        button1Func=""
                        button2Func=""
                        button1Text="My Button"
                        button2Text="My Other Button"
                        setInnerContent={setInnerContent}

                    />
                    {/* <Table headerNames={["Icon", "Name", "Folder", "Created,Size", "File Count", "View File", "Actions"]}
                    /> */}
                    <Table2 headerNames={["Icon", "Name", "Folder", "Created", "Size", "File Count", "View File", "Actions"]}
                    />
                    {/* <ViewerInner
                        viewName={"Folders"}
                        buttons={[<button>My button</button>, <button>My other button</button>]}
                        headerNames={["Icon", "Name", "Folder", "Created,Size", "File Count", "View File", "Actions"]}
                        rows={demoLinks}
                        pagination={demoPages}
                        bundlrAddress={bundlrAddress}
                        bundlrBalance={bundlrBalance}
                        fundBundlr={fundBundlr}
                        setOnramper={setOnramper}

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
