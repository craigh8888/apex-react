import React from 'react';
import './FolderViewerOuter.css';

import ViewerInner from './viewerInnerFavourites';

function FolderViewerOuterFavourites() {
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

export default FolderViewerOuterFavourites;