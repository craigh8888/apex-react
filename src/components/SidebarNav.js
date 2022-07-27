import React from 'react';
import './SidebarNav.css';
import { ReactComponent as FilesLogo } from '../files-icon.svg';
import { ReactComponent as StarIcon } from '../icon-star.svg';
import { ReactComponent as FoldersIcon } from '../icon-folder.svg';
import { ReactComponent as ArchiveIcon } from '../icon-archive.svg';
import { ReactComponent as SettingsIcon } from '../icon-settings.svg';
import { ReactComponent as PlusIcon } from '../icon-plus.svg';
import { ReactComponent as RectangleIcon } from '../Rectangle.svg';
import { Link } from 'react-router-dom';

function SidebarNav() {
    return (
        <div className='sidebar-nav-wrap'>
            <div className='item-wrap'>
                <Link to="#"><span className="svgwrap"><FilesLogo /></span>All Files</Link>
            </div>

            <div className='item-wrap'>
                <Link to="#"><span className="svgwrap"><StarIcon /></span>Favourites</Link>
            </div>

            <div className='item-wrap'>
                <Link to="#"><span className="svgwrap"><FoldersIcon /></span>Folders <span className='plus'><PlusIcon /></span></Link>
            </div>

            <div className='item-wrap'>
                <Link to="#"><span className="svgwrap"><ArchiveIcon /></span>Archive</Link>
            </div>

            <div className='item-wrap'>
                <Link to="#"><span className="svgwrap"><SettingsIcon /></span>Billing & Settings</Link>
            </div>
        </div>
    );
}

export default SidebarNav;