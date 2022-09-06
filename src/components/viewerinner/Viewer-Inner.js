import React, { useState, useEffect } from 'react';
import '../../styles/ViewerInner.css';
import { Link } from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder-blue.svg';

import { ReactComponent as FolderIconBabyBlue } from '../../images/folder-light-blue.svg';
import PageHeader from '../tables/pageHeader';
import { ReactComponent as ImageIcon } from '../../images/image.svg';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import { ReactComponent as RightArrow } from '../../images/right-arrow.svg';
import Table from '../tables/Table';

function ViewerInner({ viewName, buttons, headerNames, rows, pagination }) {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

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
                            {/* <div className="breadcrumbs-viewer" id="breadcrumbsViewer">
                                <div className="breadcrumb-trail">
                                    <span>{viewName}</span>
                                </div>
                                <div className="button-wrap">
                                    {buttons?.map((button, index) => { return button })}
                                </div>
                            </div> */}


                            {/* <table className="blueTable title-section">
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
                            </table> */}
                            <PageHeader
                                viewName={viewName}
                                button1Class="button-top add-folder"
                                button2Class="button-top upload-files"
                                button1Func=""
                                button2Func=""
                                button1Text="My Button"
                                button2Text="My Other Button"

                            />
                            <Table headerNames={["Icon", "Name", "Folder", "Created,Size", "File Count", "View File", "Actions"]}
                            />


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
                                    <tr></tr>
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

                </>
            )}
        </div>
    );

}
export default ViewerInner;
