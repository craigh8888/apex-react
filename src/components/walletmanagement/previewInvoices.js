
import { Link } from 'react-router-dom'
import { ReactComponent as DownloadIcon } from '../../images/download-invoice.svg';

function PreviewInvoices() {

    return (
        <>
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
        </>
    )
}

export default PreviewInvoices
