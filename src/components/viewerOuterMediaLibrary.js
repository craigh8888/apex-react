import React from 'react';
import './FolderViewerOuter.css';

import ViewerInnerMedia from './ViewerInnerMedia';
import Notifications from './notifications';
function FolderViewerOuterMedia() {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <Notifications />
                        <ViewerInnerMedia />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterMedia;