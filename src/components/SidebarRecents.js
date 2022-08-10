import React from 'react';
import '../styles/SidebarRecents.css';
import { ReactComponent as RectangleIcon } from '../images/Rectangle.svg';
import { Link } from 'react-router-dom';

function SidebarRecents() {
    return (
        <div>
            <div className='wrap-recent'>
                <p className='recent-files'>Recent Files</p>
                <div className='item-wrap-recent'>
                    <Link to="#"> <RectangleIcon /> Staff_Contact_Details.csv</Link>
                </div>
                <div className='item-wrap-recent'>
                    <Link to="#"> <RectangleIcon /> White_Paper_2022_V2.pdf</Link>
                </div>
                <div className='item-wrap-recent'>
                    <Link to="#"> <RectangleIcon /> Contract_Template.docx</Link>
                </div>
                <div className='item-wrap-recent'>
                    <Link to="#"> <RectangleIcon /> Team-Photo_DSC345.png</Link>
                </div>
                <div className='item-wrap-recent'>
                    <Link to="#"> <RectangleIcon /> Bored_Ape_456</Link>
                </div>
            </div>
        </div>
    );
}

export default SidebarRecents;