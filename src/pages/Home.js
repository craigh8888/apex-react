import {useState, useEffect} from 'react';
import '../styles/App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UploadFiles from '../components/uploadFiles';
import TempNav from '../components/tempNav';
import SignUp from './SignUp';


function Home() {

    const [onboarded, setOnboarded] = useState(false)


    return (
        <>
            <Navbar />
           {onboarded ? <HeroSection /> : <></>}
            {/* <Cards />
            <Footer /> <Footer /> */ 

            }
            {!onboarded ? <SignUp /> : <></>}
            <TempNav />
            <UploadFiles />

        </>
    );
}

export default Home;