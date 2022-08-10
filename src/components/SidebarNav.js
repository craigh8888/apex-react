import React, { useState } from 'react';
import '../styles/SidebarNav.css';
import { ReactComponent as FilesLogo } from '../images/files-icon.svg';
import { ReactComponent as StarIcon } from '../images/icon-star.svg';
import { ReactComponent as FoldersIcon } from '../images/icon-folder.svg';
import { ReactComponent as ArchiveIcon } from '../images/icon-archive.svg';
import { ReactComponent as SettingsIcon } from '../images/icon-settings.svg';
import { ReactComponent as PlusIcon } from '../images/icon-plus.svg';
import { ReactComponent as RectangleIcon } from '../images/Rectangle.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function SidebarNav() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='sidebar-nav-wrap'>


            <NavLink
                to='/apex-react/AllFiles'
                activeClassName='is-active'
                onClick={closeMobileMenu}
            >
                <div className='item-wrap'>
                    <span className="svgwrap"><FilesLogo /></span>All Files
                </div>
            </NavLink>



            <NavLink
                to='/apex-react/favourites'
                activeClassName='is-active'
                onClick={closeMobileMenu}
            >
                <div className='item-wrap'>
                    <span className="svgwrap"><StarIcon /></span>Favourites
                </div>
            </NavLink>


            <NavLink
                to='/apex-react/folders'
                activeClassName='is-active'
                onClick={closeMobileMenu}
            >
                <div className='item-wrap'>
                    <span className="svgwrap"><FoldersIcon /></span>Folders <span className='plus'><PlusIcon /></span>
                </div>
            </NavLink>

            <NavLink
                to='/apex-react/archive'
                activeClassName='is-active'
                onClick={closeMobileMenu}
            >
                <div className='item-wrap'>
                    <span className="svgwrap"><ArchiveIcon /></span>Archive
                </div>
            </NavLink>

            <NavLink
                to='/apex-react/settings'
                activeClassName='is-active'
                onClick={closeMobileMenu}
            >
                <div className='item-wrap'>
                    <span className="svgwrap"><SettingsIcon /></span>Billing & Settings
                </div>
            </NavLink>

        </div>
    );
}

export default SidebarNav;