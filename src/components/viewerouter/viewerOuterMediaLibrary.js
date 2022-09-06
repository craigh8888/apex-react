import React from 'react';
import '../../styles/FolderViewerOuter.css';

import ViewerInnerMedia from '../viewerinner/ViewerInnerMedia';
import Notifications from '../notifications';
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