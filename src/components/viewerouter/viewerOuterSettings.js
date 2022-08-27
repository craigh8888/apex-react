import React from 'react';
import '../../styles/FolderViewerOuter.css';

import ViewerInnerSettings from '../viewerinner/viewerInnerSettings.js';

function FolderViewerOuterSettings({bundlrBalance}) {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <ViewerInnerSettings bundlrBalance={bundlrBalance}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterSettings;