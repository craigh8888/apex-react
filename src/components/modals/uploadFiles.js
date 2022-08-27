import React, { useState } from 'react';
import '../../styles/UploadFiles.css';
import '../old/file-upload.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { Link } from 'react-router-dom';
import { ReactComponent as CloudIcon } from '../../images/cloud-icon.svg';
import { ReactComponent as ModalCloseIcon } from '../../images/close-modal.svg';
import { ReactComponent as ButtonUploadFilesIcon } from '../../images/upload-files.svg';
import FolderLocation from '../../images/foldericon-blue.png';
import immer from 'immer'
// import { ReactComponent as Mail } from '../mail.svg';
// import { ReactComponent as Discord } from '../discord.svg';
// import { ReactComponent as M } from '../m.svg';




export default function UploadFiles({bundlr,address,query, newFiles, setNewFiles, filePreviews, setFilePreviews, uploadFiles, newFilesData, setNewFilesData}) {

   const [loading, setLoading] = useState(false)
   const [tnxUrl, setTnxUrl] = useState("")

    function onChange(e) {
        const file = e.target.files[0]
        console.log(file)
        if (file) {
          const preview = URL.createObjectURL(file);
          console.log(preview)
          setFilePreviews([...filePreviews, preview])

          const immerFile = immer(newFiles, draft => {
            draft.push(file)
          })
          setNewFiles(immerFile)
          let reader = new FileReader()
          reader.onload = function () {
            if (reader.result) {
              //figure out how to upload an array of multiple files

              // const immerFilesData = immer(newFilesData, draft => {
              //   draft.push()
              // })
              const buf = Buffer.from(reader.result);
              setNewFilesData(buf);
            }
          }
          reader.readAsArrayBuffer(file)
       
        }
      }

      async function upload(){
        const data = newFilesData
        const tags = [
            {name: "Content-Type", value: `${newFiles[0].type}`},
             {name:"Apex-Cloud-User", value:`${address}`},
             {name:"File-Type", value:"File"},
             {name:"File-Name", value:`${newFiles[0].name}`},
             {name:"File-Size", value:`${newFiles[0].size}`},
             {name:"lastModified", value:`${newFiles[0].lastModified}`}
            ];
        const transaction = bundlr.createTransaction(data, { tags: tags });
        await transaction.sign()
        const id = (await transaction.upload()).data.id
        setTnxUrl(`http://arweave.net/${id}`)
        console.log(tags)
        query()

      }
      


    return (
        <>
            <div className='pop-up-wrapper' id="home-modal">
                <Popup
                    trigger={<button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={()=>{setFilePreviews([]);setNewFiles([]);setNewFilesData([]);close()}}>
                                <ModalCloseIcon />
                            </button>
                            <div className="header"> Upload Files to #Marketing </div>
                            <div className="content">
                                {' '}<label style={{width:"100%", height:"100%"}}>
                                <div className='upload-box-wrapper'>
                                
                                    <CloudIcon />
                                    <h4>Drag or Click to Upload Files</h4>
                                    <input id="files-input" style={{display:"none"}}type="file" onChange={(e)=>{onChange(e)}}/>
                                
                                </div></label>
                                {filePreviews?.map((file, index) => <img src={file} key={index} alt="" hieght={"100px"}width={"100px"}/>)}
                                <div className='choose-location'>
                                    <h5>or choose from a location</h5>
                                    <div className='upload-wrapper'>
                                        <div className='item'>
                                            <a href='#'>
                                                <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                                <p>My Device</p>
                                                
                                            </a>
                                        </div>
                                        <button onClick={()=>{upload()}}>Upload</button>
                                        {tnxUrl !== "" ? <a href={tnxUrl}> View File</a> : <></>}
                                    </div>
                                </div>

                            </div>
                            {/* <div className="actions">
                                <Popup
                                    trigger={<button className="button"> Trigger </button>}
                                    position="top center"
                                    nested
                                >
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                    </span>
                                </Popup>
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ');
                                        close();
                                    }}
                                >
                                    close modal
                                </button>
                            </div> */}
                        </div>
                    )}
                </Popup>

            </div>
        </>

    );
}