import React, { useState, useEffect } from 'react';
import '../../styles/ViewerInner.css';
import '../../styles/AccountSettings.css';
import { Link } from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder-blue.svg';
import { ReactComponent as ButtonAddFolderIcon } from '../../images/add-folder.svg';

import { ReactComponent as ButtonUploadFilesIcon } from '../../images/upload-files.svg';

import { ReactComponent as FolderIconBabyBlue } from '../../images/folder-light-blue.svg';

// import { ReactComponent as ImageIcon } from '../image.svg';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import { ReactComponent as RightArrow } from '../../images/right-arrow.svg';
import { ReactComponent as DownloadIcon } from '../../images/download-invoice.svg';
import { ReactComponent as SettingsIcon } from '../../images/wallet-management.svg';
import { ReactComponent as SettingsSliderIcon } from '../../images/settings-slider-icon.svg';
import CurrentStorage from '../CurrentStorage';

function ViewerInnerSettings({wallet}) {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

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
                                    <span>All Files > <span class="tier-1">Settings</span></span>
                                </div>

                                <div className="current-storage white">
                                    {/* <CurrentStorage /> */}
                                </div>

                            </div>

                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><SettingsSliderIcon /></td>
                                        <td><span className='Title'>Settings</span></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='page-desc'>
                                <p>You can edit your Billing, Account Information and Notifications here.</p>
                            </div>
                            <div className='wallet-section'>
                                <h3>Wallet Management <SettingsIcon /></h3>
                                <div className='connected-wallet-wrap'>
                                    <table>
                                        <tr>
                                            <td> <p className="connect-wallet title">connected wallet</p>
                                                <p className="wallet-address">{wallet?.address}</p>
                                            </td>
                                            <td>
                                                <p className='currency'>13.45 Avax</p>
                                            </td>
                                            <td>
                                                <Link className="show-all account-currency" to="#">Show All</Link>

                                            </td>
                                            <td className='button-td'>
                                                <div className='view-files-wrapper'>
                                                    <Link className="view-files buy" to="#">Buy</Link>
                                                    <Link className="view-files send" to="#">Send</Link>
                                                    <Link className="view-files swap" to="#">Swap</Link>
                                                </div>
                                            </td>
                                            <td>
                                                <Link className="history" to="#">View History</Link>

                                            </td>
                                        </tr>

                                    </table>
                                </div>

                                <div className='row'>
                                    <div className='row-inner'>
                                        <div className='row-item col col-50'>
                                            <h3 className='col-title'>Account</h3>

                                            <form>
                                                <div className='form-item-wrap'>
                                                    <label>
                                                        <span>Name</span>
                                                        <input type="text" name="name" placeholder='John Smith' />
                                                    </label>
                                                </div>
                                                <div className='form-item-wrap'>
                                                    <label>
                                                        <span>Email</span>
                                                        <input type="text" name="name" placeholder='john.s@gmail.com' />
                                                    </label>
                                                </div>
                                                <div className='form-item-wrap'>
                                                    <label>
                                                        <span>Alias</span>
                                                        <input type="text" name="name" placeholder='Mr Jay' />
                                                    </label>
                                                </div>
                                                <div className='form-item-wrap'>
                                                    <label>
                                                        <span>Billing</span>
                                                        <select>
                                                            <option value="Cryptocurrency-avax">Cryptocurrency (AVAX)</option>
                                                            <option value="Credit Card">Credit Card</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className='form-item-wrap'>
                                                    <label>
                                                        <span></span>
                                                        <input type="submit" value="Submit" />
                                                    </label>
                                                </div>
                                            </form>

                                        </div>
                                        <div className='row-item col col-50'>
                                            <h3 className='col-title'>Billing</h3>
                                            <div className='plan-wrap'>
                                                <div>
                                                    <p className='current-plan'>Current Plan</p>
                                                    <p className='plan-size'>285 MB of 500 MB used</p>
                                                    <p className='last-paid'>Paid: $450 on 08/08/2022</p>
                                                </div>
                                                <div>


                                                    <Link className="view-files add-funds" to="#">Add Funds</Link>

                                                </div>
                                            </div>
                                            <div className='payment-info'>
                                                <h3 className='billing'>Payment Information</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                            <div className='preview-invoices'>
                                                <h3 className='billing'>Preview Invoices</h3>
                                                <table className='preview-invoices'>
                                                    <tbody>
                                                        <tr>
                                                            <td>#INV_787328.pdf</td>
                                                            <td>04/04/22</td>
                                                            <td>Download Invoice</td>
                                                            <td><DownloadIcon /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>#INV_787328.pdf</td>
                                                            <td>04/04/22</td>
                                                            <td>Download Invoice</td>
                                                            <td><DownloadIcon /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>#INV_787328.pdf</td>
                                                            <td>04/04/22</td>
                                                            <td>Download Invoice</td>
                                                            <td><DownloadIcon /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>#INV_787328.pdf</td>
                                                            <td>04/04/22</td>
                                                            <td>Download Invoice</td>
                                                            <td><DownloadIcon /></td>
                                                        </tr>
                                                    </tbody>
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

                                    </div>
                                </div>
                                <div className='row account-delete'>
                                    <Link className="delete-account" to="#">Delete Account</Link>

                                </div>
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
                                    <span>All Files</span>
                                </div>


                            </div>
                            <table className="blueTable title-section">
                                <tbody>
                                    <tr>
                                        <td><FoldersIcon /></td>
                                        <td><span className='Title'>All Files</span></td>
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
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="folder">
                                        <td>< FolderIconBabyBlue /></td>
                                        <td className="variable-width name">Staff Headshots</td>
                                        <td></td>

                                        <td><RightArrow /></td>
                                    </tr>
                                    <tr className="folder">
                                        <td>< FolderIconBabyBlue /></td>
                                        <td className="variable-width name">Marketing</td>
                                        <td></td>

                                        <td><RightArrow /></td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>

                                        <td><p className="variable-width name">NDA_Contract_2022</p>
                                            <p className="date ">Thur 12th Jan 20</p>
                                        </td>
                                        <td><p className="size">12.3mb</p>
                                            <p className="category-type">Business</p>
                                        </td>

                                        <td>
                                            <div className='file-wrap'>
                                                <Link className="view-files" to="#">View Files</Link>
                                                <Link className="actions" to="#">Actions <DownArrow /></Link>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>

                                {/* <tfoot>
                    <tr>
                        <td colspan="7">
                            <div className="links"><a to="#">&laquo;</a> <a className="active" to="#">1</a> <a to="#">2</a> <a to="#">...</a> <a to="#">8</a> <a to="#">9</a> <a to="#">&raquo;</a></div>
                        </td>
                    </tr>s
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
            )
            }
        </div >
    );

}
export default ViewerInnerSettings;