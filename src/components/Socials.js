import React from 'react';
import './Socials.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Twitter } from '../twitter.svg';
import { ReactComponent as Mail } from '../mail.svg';
import { ReactComponent as Discord } from '../discord.svg';
import { ReactComponent as M } from '../m.svg';

export default function Socials() {
    return (
        <div className='social-container'>
            <div className='twitter'>

                <Link
                    to='/twitter'
                    className='social-link'

                >
                    <Twitter />
                </Link>


            </div>
            <div className='mail'>

                <Link
                    to='/mail'
                    className='social-link'

                >
                    <Mail />
                </Link>


            </div>
            <div className='discord'>

                <Link
                    to='/discord'
                    className='social-link'

                >
                    <Discord />
                </Link>



            </div>
            <div className='M'>

                <Link
                    to='/m'
                    className='social-link'

                >
                    <M />
                </Link>



            </div>
        </div>
    );
}