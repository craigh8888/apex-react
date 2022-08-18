import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SidebarMenu from '../components/menus/SidebarMenu';
import FolderViewerOuter from '../components/viewerouter/FolderViewerOuter';
import NavbarFiles from '../components/navbarFiles';
import Folders from '../components/Folders'
import TempNav from '../components/menus/tempNav';
import ViewerInner from '../components/viewerinner/Viewer-Inner';
import Favourites from '../components/Favourites';
import Archive from "../components/Archive"
import Settings from "../components/Settings"
import AllFiles from '../components/AllFiles';

export default function Dashboard() {

    const [innerContent, setInnerContent] = useState("folders")

  
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
                    
                    <SidebarMenu 
                    setInnerContent={setInnerContent}
                    />
                    <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                      {innerContent === "allFiles" ? <AllFiles /> : <></>}
                       {innerContent === "folders" ? <Folders /> : <></>}
                       {innerContent === "archive" ? <Archive /> : <></>}
                       {innerContent === "favorites" ? <Favourites /> : <></>}
                       {innerContent === "settings" ? <Settings /> : <></>}
                    </div>
                </div>
            </div>
        </div>
                    <TempNav />
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