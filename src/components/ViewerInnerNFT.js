import React from 'react';
import './ViewerInner.css';
import { Link } from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../icon-folder-blue.svg';
import { ReactComponent as ButtonAddFolderIcon } from '../add-folder.svg';
// import NFTimage from './account-owl.png';
import { ReactComponent as ButtonUploadFilesIcon } from '../upload-files.svg';
import NFTImage from '../nft-owl.jpg';
import { ReactComponent as NFTViewerIcon } from '../nft-viewer.svg';
import { ReactComponent as NFTActionsIcon } from '../nft-actions.svg';
// import { ReactComponent as FolderIconBabyBlue } from '../folder-light-blue.svg';
// import { ReactComponent as ImageIcon } from '../image.svg';
// import { ReactComponent as DownArrow } from '../down-arrow.svg';
// import { ReactComponent as RightArrow } from '../right-arrow.svg';


function ViewerInnerNFTs() {
    return (
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
            <table className="blueTable table-curved nft-only">

                <tbody>
                    <tr className='NFT-item'>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>
                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>


                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
                        <td><NFTActionsIcon /></td>

                    </tr>
                    <tr>
                        <td><img width="129" src={NFTImage} alt="" /></td>
                        <td className="variable-width name">Ghost</td>
                        <td><NFTViewerIcon /></td>
                        <td className="mint-no">#209</td>
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
    );
}
export default ViewerInnerNFTs;