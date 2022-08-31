import React from 'react';
import '../../styles/FolderViewerOuter.css';

import ViewerInnerSettings from '../viewerinner/viewerInnerSettings.js';

function FolderViewerOuterSettings({ viewName, viewDesc, bundlrAddress, bundlrBalance, fundBundlr, setOnramper }) {
    return (

        <div className='folder-viewer-outer'>
            <div className='overlay'>
                <div className='viewer-inner'>
                    <div>
                        {/* <ViewerInnerSettings bundlrBalance={bundlrBalance}/> */}
                        <ViewerInnerSettings
                            viewName={"Settings"}
                            viewDesc={"You can edit your Billing, Account Information and Notifications here."}
                            bundlrAddress={bundlrAddress}
                            bundlrBalance={bundlrBalance}
                            fundBundlr={fundBundlr}
                            setOnramper={setOnramper}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FolderViewerOuterSettings;
