import ViewerInner from "./viewerinner/Viewer-Inner"
import { ReactComponent as ButtonAddFolderIcon } from '../images/add-folder.svg';
import { ReactComponent as ButtonUploadFilesIcon } from '../images/upload-files.svg';
import UploadFiles from "./modals/uploadFiles";
import { useEffect, useState } from "react";
import File from "./File";
import ViewFile from "./modals/ViewFile";


const AllFiles = ({bundlr,address,query,files, newFiles, setNewFiles, filePreviews, setFilePreviews, uploadFiles, newFilesData, setNewFilesData, queryResult}) => {

  const [myFiles, setMyFiles] = useState([])

  const [innerState, setInnerState] = useState('view-inner')
  const [viewNode, setViewNode] = useState()

  async function fileView({node}) {
    console.log(node)
    setViewNode(node)
    setInnerState("fileView")
  }
  
 

    const demoLinks = queryResult?.map((file, index) => 
    { let myFile;
       if (file?.node.tags?.length >= 5){
       const fileDate = new Date(file?.node.tags[5]?.value -1)
   
       myFile = <File
        icon={<ButtonUploadFilesIcon />}
        Name={file?.node.tags[3]?.value}
        dateCreated={fileDate.toDateString()}
        size={file?.node.tags[4]?.value / 1024 + " KB"}
        fileCount={"1"}
        folder={"root"}
        node={file?.node}
        fileView={fileView}
        />

    } else {
      
      myFile = <File Name={"bad format"}/>}
    return myFile} )

    const demoPages = []

    return (
        <>
         {innerState === "view-inner" ? <ViewerInner 
        viewName={"All Files"}
        buttons={[
      <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>,
      <UploadFiles 
      newFiles={newFiles}
      setNewFiles={setNewFiles}
      filePreviews={filePreviews}
      setFilePreviews={setFilePreviews}
      newFilesData={newFilesData}
      setNewFilesData={setNewFilesData}
      bundlr={bundlr}
      address={address}
      query={query}
      />]}
        headerNames={["Icon","Name","Folder","Created","Size","File Count", "View File", "Actions"]}
        rows={demoLinks}
        pagination={demoPages}
        /> : <></>}

        {innerState === "viewFile" ? <ViewFile viewNode={viewNode}/> : <></>}
        </>
    )
}

export default AllFiles