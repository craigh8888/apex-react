import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/menus/Navbar';
import { ethers } from 'ethers'
import axios from 'axios';
import BigNumber from 'bignumber.js';
import './styles/paginate.css';
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

  const [onboarded, setOnboarded] = useState(true)
  const [loggedIn, setLoggedIn] = useState(true)
  const [wallet, setWallet] = useState()

  const [fundAmount, setFundAmount] = useState(1)
  const [bundlr, setBundlr] = useState()
  const [bundlrNode, setBundlrNode] = useState("https://node2.bundlr.network");
  const [currencyNetwork, setCurrencyNetwork] = useState("matic");
  const [bundlrAddress, setBundlrAddress] = useState();
  const [bundlrBalance, setBundlrBalance] = useState()
  const [fileLinks, setFileLinks] = useState()



  useEffect(() => {
    if (loggedIn) {
      console.log("initializing bundlr")
      console.log(window.ethereum)
      initBundlr()

    }
  }, [loggedIn, onboarded])




  async function initBundlr() {
    await window.ethereum.enable()

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider._ready()

    const bundler = new WebBundlr("https://node1.bundlr.network", "matic", provider)
    await bundler.ready()

    setBundlr(bundler)
    setBundlrAddress(bundler.address.toString())
    console.log(bundler.address)
    fetchBalance()
  }

  async function fundBundlr() {
    alert("funding")
    if (fundAmount) {
      const amountParsed = parseInput(fundAmount)
      let response = await bundlr.fund(amountParsed)
      fetchBalance()
      return console.log('Wallet funded: ', response)


    }

  }


  function parseInput(input) {
    const conv = new BigNumber(input).multipliedBy(bundlr.currencyConfig.base[1])
    if (conv.isLessThan(1)) {
      console.log('error: value too small')
      return
    } else {
      return conv
    }
  }

  async function fetchBalance() {
    const bal = await bundlr.getLoadedBalance()
    console.log('bal: ', ethers.utils.formatEther(bal.toString()))
    const format = ethers.utils.formatEther(bal.toString())
    if (format.length < 6) { setBundlrBalance(format) } else {
      const trim = format.slice(0, 6)
      setBundlrBalance(trim)
    }

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
        <Route path="/apex-react/Dashboard" element={loggedIn ?
          <Dashboard
            bundlr={bundlr}
            bundlrBalance={bundlrBalance}
            fundBundlr={fundBundlr}
            fetchBalance={fetchBalance}
            bundlrAddress={bundlrAddress}
          />
          :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            address={wallet?.address}
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
        <Route path="/apex-react/NFTFolder" element={loggedIn ? <NFTFolder /> :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />
        <Route path="/apex-react/folders" element={loggedIn ? <Folders /> :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />
        <Route path="/apex-react/products" element={loggedIn ? <Products /> :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />
        <Route path="/apex-react/favourites" element={loggedIn ? <Favourites /> :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />
        <Route path="/apex-react/settings" element={loggedIn ? <Settings /> :
          <Home
            onboarded={onboarded}
            setOnboarded={setOnboarded}
            wallet={wallet}
            setWallet={setWallet}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />} />
        <Route path="/apex-react/media-library" element={loggedIn ? <FolderMedia /> :
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


