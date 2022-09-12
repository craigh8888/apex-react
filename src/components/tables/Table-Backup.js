




const Table = ({ viewName, buttons, rows, headerNames }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>John Doe</td></tr>
                    <tr><td>Test@test.com</td></tr>
                </tbody>
            </table>
            <Pagination />
            <div className='desktop-wrapper-file-viewer'>
                <div className='ViewerInner'>
                    <div className="breadcrumbs-viewer" id="breadcrumbsViewer">
                        <div className="breadcrumb-trail">
                            <span>{viewName}</span>
                        </div>
                        <div className="button-wrap">
                            {buttons?.map((button, index) => { return button })}
                            {/*<button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>
                                    <button className="button-top upload-files">Upload Files  <ButtonUploadFilesIcon /></button>*/}
                        </div>
                    </div>


                    <table className="blueTable title-section">
                        <tbody>
                            <tr>
                                <td><FoldersIcon /></td>
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
                        <thead>
                            <tr>
                                {headerNames?.map((name, index) => { return <th>{name}</th> })}
                            </tr>
                        </thead>
                        <tbody>
                            {rows?.length > 0 ? rows.map((row, index) => { return row }) : <tr>
                                <td></td>
                                <td>No Files Found</td>
                            </tr>}
                        </tbody>
                    </table>
                    <div className="pagination" >
                        <table>
                            <tfoot>
                                <tr>
                                    <td colSpan="7">
                                        <div className="links">
                                            {/* {pagination?.map((link, index) => { return link })} */}
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
        </div>
    )
}

export default Table
