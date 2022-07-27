import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Lglogo } from '../apex-logo-lrge.svg';
import LoginBox from './LoginBox';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='overlay'></div>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div>
                <Link
                    to='/'
                    className='apex-lg'

                >
                    <Lglogo />
                </Link>
            </div>
            <LoginBox />
            {/* <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p> */}
            {/* <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div> */}
        </div>
    );
}

export default HeroSection;