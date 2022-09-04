import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import File from './File'
import Folder from './Folder'
import ViewerInner from './viewerinner/Viewer-Inner'
import Table from './tables/Table';
import PageHeader from './tables/pageHeader';

const Archive = ({ fileData, viewName, setInnerContent }) => {


    // const demoLinks = ["edwedwedwed", "edwdewedwed", "edwedwedwed", "edwdewedwed"].map((link) => <File folderName={link} />)

    // const demoPages = [
    //     <Link className="active" to="#">1</Link>,
    //     <Link to="#">2</Link>,
    //     <Link to="#">...</Link>,
    //     <Link to="#">8</Link>]
    // console.log('data', { fileData });

    return (

        <>
            <div className='ViewerInner'>
                <PageHeader
                    viewName="Archive"
                    button1Class="button-top add-folder"
                    button2Class="button-top upload-files"
                    button1Func=""
                    button2Func=""
                    button1Text="My Button"
                    button2Text="My Other Button"
                    setInnerContent={setInnerContent}

                />
                <Table headerNames={["Icon", "Name", "Folder", "Created,Size", "File Count", "View File", "Actions"]}
                />
            </div>
            {/* <ViewerInner
                viewName={"Archive"}
                buttons={[<button>My button</button>, <button>My other button</button>]}
                headerNames={["Icon", "Name", "Folder", "Created,Size", "File Count", "View File", "Actions"]}
                rows={demoLinks}
                pagination={demoPages}

            /> */}
        </>
    )
}


export default Archive
