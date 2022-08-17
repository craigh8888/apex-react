import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import ethers from 'ethers'

import './styles/App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Team from './pages/Team';
import AllFiles from './pages/AllFiles';
import NFTFolder from './pages/NFTFolder';
import AllFilesSettings from './pages/Settings-allfiles';
import Favourites from './pages/Favourites';
import FolderMedia from './pages/MediaLibrary';
import Folders from './pages/Folders';

function App() {

  const [onboarded, setOnboarded] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  
  const [wallet, setWallet] = useState()

  useEffect(()=>{
    if (window.localStorage.getItem("apex-cloud-wallet")){
      setOnboarded(true)
      
    }
    else {
      setOnboarded(false)
    }
  },[])
  return (
    <>
     
       {/* <Navbar /> */}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path='/apex-react/' element={
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          
          <Route path="/apex-react/team" element={<Team />} />
          <Route path="/apex-react/advisory-boards" element={<AdvisoryBoard />} />

          <Route path="/apex-react/AllFiles" element={loggedIn ? <AllFiles /> :  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/NFTFolder" element={loggedIn ? <NFTFolder />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/folders" element={loggedIn ? <Folders />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/products" element={loggedIn ? <Products />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/favourites" element={loggedIn ? <Favourites />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/settings" element={loggedIn ? <AllFilesSettings />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          <Route path="/apex-react/media-library" element={loggedIn ? <FolderMedia />:  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />
          
        </Routes>
      

    </>
  );
}

export default App;


