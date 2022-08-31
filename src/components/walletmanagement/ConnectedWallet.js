
// import { ReactComponent as FolderIconBabyBlue } from '../images/folder-light-blue.svg';
// import { ReactComponent as RightArrow } from '../images/right-arrow.svg';
import { Link } from 'react-router-dom'

function ConnectedWallet({ bundlrAddress, bundlrBalance, fundBundlr, setOnramper }) {

    return (

        <div className='connected-wallet-wrap'>
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
        </div>
    )
}

export default ConnectedWallet


/**
 * 
 * <Folder 
 * folderName={}
 * dateCreated={}
 * size={}
 * fileCount={}
 * category={}
 * />
 */
