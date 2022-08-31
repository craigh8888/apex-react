

const ViewFile = ({node}) => {

    const viewName = node?.id

    return (
        <>

        <div className='desktop-wrapper-file-viewer'>
            <div className='ViewerInner'>
                <div className="breadcrumbs-viewer" id="breadcrumbsViewer">
                    <div className="breadcrumb-trail">
                        <span>{viewName}</span>
                    </div>
                    <div className="button-wrap">
                      
            
                        <button className="button-top upload-files">Download File</button>
                    </div>
                </div>


                <table className="blueTable title-section">
                    <tbody>
                        <tr>
                            <td></td>
                            <td><span className='Title'>{viewName}</span></td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
                <table className="blueTable table-curved">
                  
                    <tbody>
                
               
                    </tbody>
                </table>
                <div className="pagination" >
                    <table>
                        <tfoot>
                            <tr>
                                <td colSpan="7">
                                    <div className="links">
                                   
                                      {/*  <Link to="#">&laquo;</Link> 
                                        <Link className="active" to="#">1</Link> 
                                        <Link to="#">2</Link> 
                                        <Link to="#">...</Link> 
                                        <Link to="#">8</Link> 
                                        <Link to="#">9</Link> 
                                        <Link to="#">&raquo;</Link>*/}
                                        </div>
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

export default ViewFile