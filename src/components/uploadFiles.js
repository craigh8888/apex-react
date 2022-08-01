import React from 'react';
import './UploadFiles.css';
import './file-upload.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { Link } from 'react-router-dom';
import { ReactComponent as CloudIcon } from '../cloud-icon.svg';
import { ReactComponent as ModalCloseIcon } from '../close-modal.svg';
import FolderLocation from '../foldericon-blue.png';
// import { ReactComponent as Mail } from '../mail.svg';
// import { ReactComponent as Discord } from '../discord.svg';
// import { ReactComponent as M } from '../m.svg';

export default function UploadFiles() {
    return (
        <>
            <div className='pop-up-wrapper' id="home-modal">
                <Popup
                    trigger={<button className="button"> Open TEST Modal </button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                <ModalCloseIcon />
                            </button>
                            <div className="header"> Upload Files to #Marketing </div>
                            <div className="content">
                                {' '}
                                <div className='upload-box-wrapper'>
                                    <CloudIcon />
                                    <h4>Drag or Click to Upload Files</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className='choose-location'>
                                    <h5>or choose from a location</h5>
                                    <div className='upload-wrapper'>
                                        <div className='item'>
                                            <a href='#'>
                                                <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                                <p>My Device</p>
                                            </a>
                                        </div>
                                        <div className='item'>
                                            <a href='#'>
                                                <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                                <p>My Device</p>
                                            </a>
                                        </div>
                                        <div className='item'>
                                            <a href='#'>
                                                <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                                <p>My Device</p>
                                            </a>
                                        </div>
                                        <div className='item'>
                                            <a href='#'>
                                                <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                                <p>My Device</p>
                                            </a>
                                        </div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
                                        <div className='item'>  <a href='#'>
                                            <img width="40" height="40" src={FolderLocation} alt="folder location for upload" />
                                            <p>My Device</p>
                                        </a></div>
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