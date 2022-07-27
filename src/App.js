import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';

import Team from './components/pages/Team';
import AllFiles from './components/pages/AllFiles';
import NFTFolder from './components/pages/NFTFolder';
import Products from './components/pages/Products';
import AllFilesSettings from './components/pages/Settings-allfiles';
import SignUp from './components/pages/SignUp';
import AdvisoryBoard from './components/pages/AdvisoryBoards';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/apex-react/' element={<Home />} />
          <Route path="/AllFiles" element={<AllFiles />} />
          <Route path="/NFTFolder" element={<NFTFolder />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apex-react/advisory-boards" element={<AdvisoryBoard />} />
          <Route path="/apex-react/products" element={<Products />} />
          <Route path="/apex-react/sign-up" element={<SignUp />} />
          <Route path="/apex-react/settings" element={<AllFilesSettings />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;