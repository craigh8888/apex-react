import React from 'react';
import './FolderViewerOuter.css';

import ViewerInnerNFTs from './ViewerInnerNFT';

function FolderViewerOuterNFT() {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        <ViewerInnerNFTs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterNFT;