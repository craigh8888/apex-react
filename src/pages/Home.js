import {useState, useEffect} from 'react';
import '../styles/App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UploadFiles from '../components/uploadFiles';
import TempNav from '../components/tempNav';
import SignUp from './SignUp';
import Login from '../components/Login';
import AllFiles from './AllFiles';


function Home({loggedIn, setLoggedIn, onboarded,setOnboarded,wallet,setWallet}) {



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
            /> : 
            !loggedIn ?
            <Login 
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            wallet={wallet}
            setWallet={setWallet}
            setOnboarded={setOnboarded}
            /> : <div className="overlay"></div>
            }
            <TempNav />
            <UploadFiles />

        </>
    );
}

export default Home;