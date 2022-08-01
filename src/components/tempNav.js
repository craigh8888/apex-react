import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Socials from './Socials';

function Navbar() {


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div>
            <nav className='navbar-list development use only'>
                <div className='navbar-container-dev'>
                    <p>Dev Pages:</p>
                    {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/apex-react/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/AllFiles'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                All Files
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/NFTFolder'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                NFT Folder
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/Team'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/media-library'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Media Library
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/media-library'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Media Library
                            </Link>
                        </li>

                    </ul> */}



                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/apex-react/' className='nav-links' onClick={closeMobileMenu}>
                                Login Screen
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/AllFiles'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                All Files
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/NFTFolder'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                NFT Folder
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/settings'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Settings Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/apex-react/#home-modal'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Upload Files
                            </Link>
                        </li>
                    </ul>
                    {/* <Socials /> */}
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;