import React, { useEffect, useState } from 'react';
import '../../styles/Table.css';
import Link from 'react-router-dom';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder-blue.svg';
import ReactPaginate from 'react-paginate';
import { ReactComponent as SettingsSliderIcon } from '../../images/settings-slider-icon.svg';



const PageHeader = ({ headerNames, viewName, button1Class, button2Class, button1Func, button2Func, button1Text, button2Text, icon, setInnerContent }) => {
    // const viewFinal = { viewName };
    return <div>
        <>
            <div className="breadcrumb-trail">

                <span>

                    {viewName === 'Archive' &&
                        <span className='breadcrumb-parent' onClick={() => { setInnerContent("allFiles"); }}>All Files &gt;</span>
                    }

                    {viewName === 'Settings' &&
                        <span className='breadcrumb-parent' onClick={() => { setInnerContent("allFiles"); }}>All Files &gt;</span>
                    }
                    <span className="tier-1">{viewName}</span></span>
            </div>

            <table className='blueTable title-section'>
                <tbody>
                    <tr>
                        <td>
                            {viewName === 'Settings' &&
                                <SettingsSliderIcon />
                            }
                            {viewName === 'files' &&
                                <FoldersIcon />
                            }
                            {viewName === 'Archive' &&
                                <FoldersIcon />
                            }
                            {viewName === 'Folders' &&
                                <FoldersIcon />
                            }
                            {viewName === 'Favourites' &&
                                <FoldersIcon />
                            }
                            {viewName === 'All Files' &&
                                <FoldersIcon />
                            }
                        </td>
                        {/* <td><SettingsSliderIcon /></td> */}
                        <td><span className='Title'>{viewName}</span></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            {/* <table className='blueTable table-curved'>
                <thead>
                    <tr>
                        {headerNames?.map((name, index) => { return <th>{name}</th> })}
                    </tr>
                </thead>
                
                <tbody>

                    {
                        dataTable.map((item, index) => (
                            <tr key={item.id}>

                                <td>{item.id}</td>



                                <td >{item.title}</td>




                            </tr>
                        ))
                    }
                </tbody>
            </table> */}


        </>

    </div>;
}

export default PageHeader
