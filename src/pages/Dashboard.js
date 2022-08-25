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
import FileQuery from '../lib/arweave/GQL/FileQuery'
import {arweave} from '../lib/arweave/arweave'

export default function Dashboard({bundlr,address, wallet}) {

    const [innerContent, setInnerContent] = useState("folders")  
    const [isDesktop, setDesktop] = useState(window.innerWidth > 100);
    
    const [newFiles, setNewFiles] = useState([])
    const [filePreviews, setFilePreviews] = useState([])
    const [newFilesData, setNewFilesData] = useState();

    const [queryResult, setQueryResult] = useState([])
    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])

    useEffect(()=>{
        const queryInterval = setInterval(query(), 60000)
       
        if (bundlr === null){
            clearInterval(queryInterval)
        }
    },[])
 


    async function query () {
        
        const filequery = FileQuery(address);
        const fileresults = await arweave.api.post('/graphql', filequery)
        .catch(err => {
          console.error('GraphQL query failed');
           throw new Error(err);
        });
        const driveedges = await fileresults?.data?.data?.transactions?.edges;
       
    //   const filterFiles = () => driveedges?.map((node) => {
    //     let file = {}
    //     if (node?.tags?.map(tag => tag.value === "File").includes(true)){
    //         file.tnxHash = node.id;
    //         file.tags = node.tags
    //     }
    //     return setFiles([...files, file])
    
    // })
    //     filterFiles()

        console.log(driveedges);
        setQueryResult(driveedges)


        
}
        

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
                      {innerContent === "allFiles" ? <AllFiles
                      files={files} 
                      newFiles={newFiles}
                      setNewFiles={setNewFiles}
                      filePreviews={filePreviews}
                      setFilePreviews={setFilePreviews}
                      newFilesData={newFilesData}
                      setNewFilesData={setNewFilesData}
                      bundlr={bundlr}
                      queryResult={queryResult}
                      setQueryResult={setQueryResult}
                      address={address}
                      query={query}
                      /> : <></>}
                       {innerContent === "folders" ? <Folders /> : <></>}
                       {innerContent === "archive" ? <Archive /> : <></>}
                       {innerContent === "favorites" ? <Favourites /> : <></>}
                       {innerContent === "settings" ? <Settings wallet={wallet}/> : <></>}
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