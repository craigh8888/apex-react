import React, { Suspense } from 'react';
import '../styles/current-storage.css';
import Percentagewheel from './PercentageWheel';
import { Link } from 'react-router-dom';

function CurrentStorage() {


    return (

        <><div className='storage-preview-wrapper'>
            <div className='percentage-wheel'>
                <Suspense fallback={<div>loading...</div>}>
                    <Percentagewheel />
                </Suspense>
            </div>
            <div className='details-row'>
                <p>Current Storage</p>
                <p><b>285 MB if 500 MB used</b></p>
                <p className='upgrade-now-link'><Link to="#">Upgrade Now</Link></p>
            </div>
        </div>
        </>
    );

}
export default CurrentStorage;