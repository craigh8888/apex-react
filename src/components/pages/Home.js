import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import UploadFiles from '../uploadFiles';
import TempNav from '../tempNav';


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