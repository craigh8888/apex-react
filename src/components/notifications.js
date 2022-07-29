import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import './Notifications.css';
import { ReactComponent as CloseIcon } from '../close-icon.svg';

function Notifications() {

    const [isShown, setIsShown] = useState(true);

    const handleClose = event => {
        event.preventDefault();
        console.log('You clicked close notification.');
        // event.closest('.notification-wrapper').hide();
        setIsShown(current => !current);
    };




    return (

        <div style={{ display: isShown ? 'block' : 'none' }} className='notification-wrapper'>
            <div className='notifications-inner bg-green'>
                <div className='item-col'>
                    <p>Completed</p>
                </div>
                <div className='item-col'>
                    <p>Item has been moved to Archive</p>
                </div>
                <div className='item-col'>

                    <button className="close" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Notifications;