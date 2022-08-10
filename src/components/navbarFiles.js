import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Socials from './Socials';
import { ReactComponent as Logo } from '../images/apex-logo.svg';
import AccountSidebar from './AccountSidebar';
import { ReactComponent as ButtonAddFolderIcon } from '../images/add-folder.svg';

import { ReactComponent as ButtonUploadFilesIcon } from '../images/upload-files.svg';

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
                <></>
            ) : (
                <nav className='navbar is-mobile'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

                            <Logo />


                        </Link>

                        <div className="button-wrap">
                            <button className=" button-top add-folder">Add Folder <ButtonAddFolderIcon /></button>
                            <button className="button-top upload-files">Upload <ButtonUploadFilesIcon /></button>
                        </div>


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