import React, { useState, useEffect } from 'react';
// import '../styles/WalletManagement.css';

import { Link } from 'react-router-dom';

import { ReactComponent as DownloadIcon } from '../images/download-invoice.svg';
import { ReactComponent as SettingsIcon } from '../images/wallet-management.svg';
// import CurrentStorage from '../CurrentStorage';
// import OnRamperModal from '../modals/OnRamperModal';
import ConnectedWallet from './walletmanagement/ConnectedWallet.js';
import Account from './walletmanagement/Account.js';
import Billing from './walletmanagement/Billing.js';
import PaymentInfo from './walletmanagement/PaymentInfo.js';
import PreviewInvoices from './walletmanagement/previewInvoices.js';
import ViewerOuterSettings from './viewerouter/viewerOuterSettings.js'
import AccountDelete from './walletmanagement/AccountDelete.js';

function WalletManagement({ Title, bundlrAddress, bundlrBalance, fundBundlr, setOnramper }) {
    return (
        <div className='wallet-section'>
            <h3>{Title} <SettingsIcon /></h3>

            <ConnectedWallet />
            {/* <div className='connected-wallet-wrap'>
                <table>
                    <tr>
                        <td> <p className="connect-wallet title">connected wallet</p>
                            <p className="wallet-address">{bundlrAddress?.slice(0, 5)}...{bundlrAddress?.slice(-4, bundlrAddress?.length)}</p>
                        </td>
                        <td>
                            <p className='currency'>{bundlrBalance ? bundlrBalance : "0.00"}</p>
                        </td>
                        <td>
                            <Link className="show-all account-currency" to="#">Show All</Link>

                        </td>
                        <td className='button-td'>
                            <div className='view-files-wrapper'>
                                <button className="view-files buy" onClick={() => { setOnramper(true) }}>Buy</button>
                                <Link className="view-files send" to="#">Send</Link>
                                <Link className="view-files swap" to="#">Swap</Link>
                            </div>
                        </td>
                        <td>
                            <Link className="history" to="#">View History</Link>

                        </td>
                    </tr>

                </table>
            </div> */}

            <div className='row'>
                <div className='row-inner'>
                    <div className='row-item col col-50'>
                        {/* <h3 className='col-title'>Account</h3>

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
                        </form> */}
                        <Account />
                    </div>
                    <div className='row-item col col-50'>
                        <Billing
                            fundBundlr={fundBundlr}
                        />
                        {/* Billing  */
                            /*    Current Plan  */
                            /*    Payment Information  */
                            /*    Current Plan  */
                        }
                        {/* <h3 className='col-title'>Billing</h3>
                        <div className='plan-wrap'>
                            <div>
                                <p className='current-plan'>Current Plan</p>
                                <p className='plan-size'>285 MB of 500 MB used</p>
                                <p className='last-paid'>Paid: $450 on 08/08/2022</p>
                            </div>
                            <div>


                                <button className="view-files add-funds" onClick={() => { fundBundlr() }}>Add Funds</button>

                            </div>
                        </div> */}
                        <PaymentInfo />
                        {/* <div className='payment-info'>
                            <h3 className='billing'>Payment Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div> */}
                        <PreviewInvoices />
                        {/* <div className='preview-invoices'>
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
                        </div> */}
                    </div>

                </div>
            </div>
            <AccountDelete />
            {/* <div className='row account-delete'>
                <Link className="delete-account" to="#">Delete Account</Link>

            </div> */}
        </div>
    );
}

export default WalletManagement;
