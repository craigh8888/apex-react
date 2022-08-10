import React, { useState, useEffect } from 'react';
import '../styles/ViewerInner.css';
import { Link } from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../images/icon-folder-blue.svg';
import { ReactComponent as ButtonAddFolderIcon } from '../images/add-folder.svg';
// import NFTimage from './account-owl.png';
import { ReactComponent as ButtonUploadFilesIcon } from '../images/upload-files.svg';
import MediaImage from '../images/media-library.jpg';

import { ReactComponent as NFTViewerIcon } from '../images/nft-viewer.svg';
import { ReactComponent as NFTActionsIcon } from '../images/nft-actions.svg';
// import { ReactComponent as FolderIconBabyBlue } from '../folder-light-blue.svg';
// import { ReactComponent as ImageIcon } from '../image.svg';
// import { ReactComponent as DownArrow } from '../down-arrow.svg';
// import { ReactComponent as RightArrow } from '../right-arrow.svg';


function ViewerInnerNFTs() {

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
                    <div className='desktop-wrap'>
                        <div className='ViewerInner'>
                            <div className="breadcrumbs-viewer" id="breadcrumbsViewer">

                                <div className="breadcrumb-trail">
                                    <span>All Files > Media Library</span>
                                </div>
                                <div className="button-wrap">
                                    <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>
                                    <button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>
                                </div>

                            </div>
                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td><span className='Title'>Media Library</span></td>
                                        <td><Link to="#" className='nft-button hollow'>Download list of URLS</Link></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* if just  nfts add class nft-only */}
                            <table className="blueTable table-curved media-only  nft-only">

                                <tbody>
                                    <tr className='NFT-item'>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>
                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>


                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

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
                    <div className='mobile-wrap'>

                        <div className='ViewerInner'>
                            <div className="breadcrumbs-viewer" id="breadcrumbsViewer">

                                <div className="breadcrumb-trail">
                                    <span>All Files</span>
                                </div>
                                <div className="button-wrap">
                                    <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>
                                    <button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>
                                </div>

                            </div>
                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td><span className='Title'>Moonbirds - Asset Library</span></td>
                                        <td><Link to="#" className='nft-button hollow'>Download list of URLS</Link></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* if just  nfts add class nft-only */}
                            <table className="blueTable table-curved media-only nft-only">

                                <tbody>
                                    <tr className='NFT-item'>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>
                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>


                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

                                    </tr>
                                    <tr>
                                        <td><img width="275" height="275" src={MediaImage} alt="" /></td>
                                        <td className="variable-width name">Ghost</td>
                                        <td><NFTViewerIcon /></td>
                                        <td>&nbsp;</td>
                                        <td><NFTActionsIcon /></td>

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
export default ViewerInnerNFTs;