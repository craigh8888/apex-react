import {useState, useEffect} from 'react';
import '../styles/App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UploadFiles from '../components/uploadFiles';
import TempNav from '../components/tempNav';
import SignUp from './SignUp';


function Home({onboarded,setOnboarded,wallet,setWallet}) {



    return (
        <>
            <Navbar />
           {/* <HeroSection /> : <></>}
            {/* <Cards />
            <Footer /> <Footer /> */ 

            }
            {!onboarded ? <SignUp 
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            /> : <></>}
            <TempNav />
            <UploadFiles />

        </>
    );
}

export default Home;