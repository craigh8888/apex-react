import React from 'react';
import './FolderViewerOuter.css';

import ViewerInnerSettings from './viewerInnerSettings';

function FolderViewerOuterSettings() {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <ViewerInnerSettings />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterSettings;