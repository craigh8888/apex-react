import React from 'react';
import '../../styles/FolderViewerOuter.css';

import ViewerInner from '../viewerinner/Viewer-Inner';

function FolderViewerOuter() {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <ViewerInner /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuter;