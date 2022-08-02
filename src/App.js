import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';

import './App.css';
import Home from './components/pages/Home';

import Team from './components/pages/Team';
import AllFiles from './components/pages/AllFiles';
import NFTFolder from './components/pages/NFTFolder';
import AllFilesSettings from './components/pages/Settings-allfiles';
import Favourites from './components/pages/Favourites';
import FolderMedia from './components/pages/MediaLibrary';
import Folders from './components/pages/Folders';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/apex-react/' element={<Home />} />
          <Route path="/apex-react/AllFiles" element={<AllFiles />} />
          <Route path="/apex-react/NFTFolder" element={<NFTFolder />} />
          <Route path="/apex-react/team" element={<Team />} />
          <Route path="/apex-react/folders" element={<Folders />} />
          {/* <Route path="/apex-react/advisory-boards" element={<AdvisoryBoard />} />
          <Route path="/apex-react/products" element={<Products />} />
          <Route path="/apex-react/sign-up" element={<SignUp />} /> */}
          <Route path="/apex-react/favourites" element={<Favourites />} />
          <Route path="/apex-react/settings" element={<AllFilesSettings />} />
          <Route path="/apex-react/media-library" element={<FolderMedia />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;