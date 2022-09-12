import React, { useState } from 'react';
import '../../styles/SidebarNav.css';
import { ReactComponent as FilesLogo } from '../../images/files-icon.svg';
import { ReactComponent as StarIcon } from '../../images/icon-star.svg';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder.svg';
import { ReactComponent as ArchiveIcon } from '../../images/icon-archive.svg';
import { ReactComponent as SettingsIcon } from '../../images/icon-settings.svg';
import { ReactComponent as PlusIcon } from '../../images/icon-plus.svg';
import { ReactComponent as RectangleIcon } from '../../images/Rectangle.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function SidebarNav({ setInnerContent }) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const [isActive, setIsActive] = useState(false);
    // this is used for accords

    return (
        <div className='sidebar-nav-wrap'>



            <div className='item-wrap' onClick={() => { setInnerContent("allFiles"); closeMobileMenu() }}>
                <span className="svgwrap"><FilesLogo /></span>All Files
            </div>

            <div className='item-wrap' onClick={() => { setInnerContent("favorites"); closeMobileMenu() }}>
                <span className="svgwrap"><StarIcon /></span>Favourites
            </div>

            <div className='item-wrap' onClick={() => { setInnerContent("folders"); closeMobileMenu(); setIsActive(!isActive) }}>
                <span className="svgwrap"><FoldersIcon /></span>Folders <span className='plus'>{isActive ? <PlusIcon /> : <PlusIcon />}</span>
                {isActive && <div className='dropdown'><p>Content here</p></div>}


            </div>

            <div className='item-wrap' onClick={() => { setInnerContent("archive"); closeMobileMenu() }}>
                <span className="svgwrap"><ArchiveIcon /></span>Archive
            </div>

            <div className='item-wrap' onClick={() => { setInnerContent("settings"); closeMobileMenu() }}>
                <span className="svgwrap"><SettingsIcon /></span>Billing & Settings
            </div>


        </div>
    );
}

export default SidebarNav;
