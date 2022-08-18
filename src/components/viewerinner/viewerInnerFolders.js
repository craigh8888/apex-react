import React, { useState, useEffect } from 'react';
import '../../styles/ViewerInner.css';
import { Link } from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder-blue.svg';
// import { ReactComponent as ButtonAddFolderIcon } from '../add-folder.svg';
import { ReactComponent as StarIcon } from '../../images/icon-star-blue.svg';
// import { ReactComponent as ButtonUploadFilesIcon } from '../upload-files.svg';

import { ReactComponent as FolderIconBabyBlue } from '../../images/folder-light-blue.svg';

import { ReactComponent as ImageIcon } from '../../images/image.svg';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import { ReactComponent as RightArrow } from '../../images/right-arrow.svg';
import { isContentEditable } from '@testing-library/user-event/dist/utils';
import Folder from './Folder'

function ViewerInnerFolders() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

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

                    <div className='desktop-wrapper-file-viewer'>
                        <div className='ViewerInner'>
                            <div className="breadcrumbs-viewer" id="breadcrumbsViewer">

                                <div className="breadcrumb-trail">
                                    <span>All Files > Folders</span>
                                </div>
                                {/* <div className="button-wrap">
                                    <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>
                                    <button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>
                                </div> */}

                            </div>
                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><StarIcon /></td>
                                        <td><span className='Title'>Folders</span></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="blueTable table-curved">
                                <thead>

                                    <tr>
                                      
                                        <th>Icon</th>
                                        <th>Name</th>
                                        <th>Folder</th>
                                        <th>Created</th>
                                        <th>Size</th>
                                        <th>File Count</th>
                                        <th>View File</th>
                                        <th>Actions</th>

                                    </tr>

                                </thead>

                                <tbody>
                                  

                                        <Folder 
                                         folderName={"my folder"}
                                         dateCreated={"a long time ago"}
                                         size={"1 tb"}
                                         fileCount={"500"}
                                         category={"testing"}
                                         />
                                        <tr>
                                        <td><FoldersIcon /></td>
                                        <td className="variable-width name">Influencer_List.xls</td>
                                        <td>Marketing</td>
                                        <td>Thursday 12th January 2020</td>
                                        <td>12.3mb</td>
                                        <td><Link className="view-files" to="#">View Files</Link></td>
                                        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
                                    </tr>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td className="variable-width name">Example_Clients.xls</td>
                                        <td>Sales</td>
                                        <td>Thursday 12th January 2020</td>
                                        <td>12.3mb</td>
                                        <td><Link className="view-files" to="#">View Files</Link></td>
                                        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
                                    </tr>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td className="variable-width name">cell2_5</td>
                                        <td>cell3_5</td>
                                        <td>cell4_5</td>
                                        <td>cell5_5</td>
                                        <td><Link className="view-files" to="#">View Files</Link></td>
                                        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
                                    </tr>


                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td className="variable-width name">cell2_5</td>
                                        <td>cell3_5</td>
                                        <td>cell4_5</td>
                                        <td>cell5_5</td>
                                        <td><Link className="view-files" to="#">View Files</Link></td>
                                        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
                                    </tr>
                                    <tr>
                                        <td><ImageIcon /></td>
                                        <td className="variable-width name">Anna.png</td>
                                        <td>cell3_5</td>
                                        <td>cell4_5</td>
                                        <td>cell5_5</td>
                                        <td><Link className="view-files" to="#">View Files</Link></td>
                                        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
                                    </tr>
                                </tbody>

                                {/* <tfoot>
                    <tr>
                        <td colspan="7">
                            <div className="links"><a to="#">&laquo;</a> <a className="active" to="#">1</a> <a to="#">2</a> <a to="#">...</a> <a to="#">8</a> <a to="#">9</a> <a to="#">&raquo;</a></div>
                        </td>
                    </tr>
                </tfoot> */}
                            </table>
                            <div className="pagination" >
                                <table>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="7">
                                                <div className="links"><Link to="#">&laquo;</Link> <Link className="active" to="#">1</Link> <Link to="#">2</Link> <Link to="#">...</Link> <Link to="#">8</Link> <Link to="#">9</Link> <Link to="#">&raquo;</Link></div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="mobile-wrap">
                        <div className='ViewerInner'>
                            <div className="breadcrumbs-viewer" id="breadcrumbsViewer">

                                <div className="breadcrumb-trail">
                                    <span>All Files > Folders</span>
                                </div>


                            </div>
                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td><span className='Title'>Folders</span></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="blueTable table-curved">
                                <thead>

                                    <tr>




                                    </tr>

                                </thead>

                                <tbody>
                                    <tr className="folder">
                                        <td>< FolderIconBabyBlue /></td>
                                        <td className="variable-width name">Staff Headshots</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><RightArrow /></td>
                                    </tr>
                                    <tr className="folder">
                                        <td>< FolderIconBabyBlue /></td>
                                        <td className="variable-width name">Staff Headshots</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><RightArrow /></td>
                                    </tr>
                                    <tr className="folder">
                                        <td>< FolderIconBabyBlue /></td>
                                        <td className="variable-width name">Staff Headshots</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><RightArrow /></td>
                                    </tr>







                                </tbody>

                                {/* <tfoot>
                    <tr>
                        <td colspan="7">
                            <div className="links"><a to="#">&laquo;</a> <a className="active" to="#">1</a> <a to="#">2</a> <a to="#">...</a> <a to="#">8</a> <a to="#">9</a> <a to="#">&raquo;</a></div>
                        </td>
                    </tr>
                </tfoot> */}
                            </table>
                            <div className="pagination" >
                                <table>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="7">
                                                <div className="links"><Link to="#">&laquo;</Link> <Link className="active" to="#">1</Link> <Link to="#">2</Link> <Link to="#">...</Link> <Link to="#">8</Link> <Link to="#">9</Link> <Link to="#">&raquo;</Link></div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );

}
export default ViewerInnerFolders;