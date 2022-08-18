import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/menus/Navbar';
import ethers from 'ethers'

import './styles/App.css';
import Home from './pages/Home';
import SignUp from './components/modals/SignUp'
import Products from './pages/Products'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Team from './pages/Team';
import AllFiles from './components/old/AllFiles';
import NFTFolder from './components/NFTFolder';
import Settings from './components/Settings';
import Favourites from './components/Favourites';
import FolderMedia from './components/MediaLibrary';
import Folders from './components/Folders';

import { WebBundlr } from '@bundlr-network/client';
import CustomEthereumConfig from './lib/bundlr/customCurrencyConfigs/ethereum.ts'
import Dashboard from './pages/Dashboard';

function App() {

  const [onboarded, setOnboarded] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [wallet, setWallet] = useState()

  const [bundlr, setBundlr] = useState()
  const [bundlrNode, setBundlrNode] = useState("http://node1.bundlr.network");
  const [currencyNetwork, setCurrencyNetwork] = useState("matic");
  const [bundlrAddress, setBundlrAddress] = useState();
  const [bundlrBalance, setBundlrBalance] = useState()
  const [fileLinks, setFileLinks] = useState()

  useEffect(()=>{
    if (window.localStorage.getItem("apex-cloud-wallet")){
      setOnboarded(true)
      
    }
    else {
      setOnboarded(false)
    }
  },[])

  useEffect(()=>{
    if (loggedIn){
      console.log("initializing bundlr")
      initBundlr()
    }


  },[loggedIn,onboarded])

  async function initBundlr () {
    const config = new CustomEthereumConfig({ name: "matic", ticker: "MATIC", providerUrl: "https://polygon-rpc.com", wallet: wallet.privateKey, minConfirm: 3 })
    const bundlr = new WebBundlr(bundlrNode, currencyNetwork, wallet.privateKey);
    bundlr.currencyConfig = config
    bundlr.uploader.currencyConfig = config
    await setBundlr(bundlr)
    console.log(bundlr)
    

  }

  async function fetchFiles (){

  }

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
          <Route path="/apex-react/Dashboard" element={loggedIn ? <Dashboard /> :  
          <Home 
          onboarded={onboarded}
          setOnboarded={setOnboarded}
          wallet={wallet}
          setWallet={setWallet}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          />} />

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
          <Route path="/apex-react/settings" element={loggedIn ? <Settings />:  
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


