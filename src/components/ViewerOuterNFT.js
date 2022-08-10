import React from 'react';
import '../styles/FolderViewerOuter.css';

import ViewerInnerNFTs from './ViewerInnerNFT';
import Notifications from './notifications';
function FolderViewerOuterNFT() {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <Notifications />
                        <ViewerInnerNFTs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterNFT;