import React from 'react';
import '../styles/App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UploadFiles from '../components/uploadFiles';
import TempNav from '../components/tempNav';


function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            {/* <Cards />
            <Footer /> <Footer /> */

            }
            <TempNav />
            <UploadFiles />

        </>
    );
}

export default Home;