import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Socials from './Socials';
import { ReactComponent as Logo } from '../apex-logo.svg';
import AccountSidebar from './AccountSidebar';
import { ReactComponent as ButtonAddFolderIcon } from '../add-folder.svg';

import { ReactComponent as ButtonUploadFilesIcon } from '../upload-files.svg';

function Navbar() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 978);
    };

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1024) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);

        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <div>
            {isDesktop ? (
                <nav className='navbar isDesktop'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

                            <Logo />


                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/apex-react/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/AllFiles'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    All Files
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/NFTFolder'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    NFT Folder
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/Team'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Team
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/advisory-boards'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Advisory Boards
                                </Link>
                            </li>
                            {/* <li className='nav-item'>
                    <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Products
                    </Link>
                </li> */}

                            {/* <li>
                    <Link
                        to='/sign-up'
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                    >
                        Sign Up
                    </Link>
                </li> */}
                        </ul>
                        <Socials />
                        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                    </div>
                </nav>
            ) : (
                <nav className='navbar is-mobile'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

                            <Logo />


                        </Link>


                        <AccountSidebar />
                        {/* <Socials /> */}
                        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                    </div>
                </nav>
            )}
        </div>
    );
}

export default Navbar;