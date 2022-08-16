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
  const [login, setLogin] = useState(false)
  
  const [wallet, setWallet] = useState()

  useEffect(()=>{
    if (window.localStorage.getItem("apex-cloud-wallet")){
      setOnboarded(true)
      setLogin(true)
    }
    else {
      setOnboarded(false)
    }
  },[])
  return (
    <>
     
       {/* <Navbar /> */}
        <Routes>
          <Route exact path='/apex-react/' element={
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          />} />
          <Route path="/apex-react/AllFiles" element={<AllFiles />} />
          <Route path="/apex-react/NFTFolder" element={<NFTFolder />} />
          <Route path="/apex-react/team" element={<Team />} />
          <Route path="/apex-react/folders" element={<Folders />} />
          <Route path="/apex-react/advisory-boards" element={<AdvisoryBoard />} />
          <Route path="/apex-react/products" element={<Products />} />
          <Route path="/apex-react/sign-up" element={<SignUp />} /> 
          <Route path="/apex-react/favourites" element={<Favourites />} />
          <Route path="/apex-react/settings" element={<AllFilesSettings />} />
          <Route path="/apex-react/media-library" element={<FolderMedia />} />
          <Route path="*" element={<Home />} />
        </Routes>
      

    </>
  );
}

export default App;


