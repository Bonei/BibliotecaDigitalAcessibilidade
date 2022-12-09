import React from 'react';

import VLibras from '@djpfs/react-vlibras';

import { Footer, Blog, Header } from './containers';
import { Navbar, HeaderNavbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <VLibras />
    <div className="gradient__bg">
      <HeaderNavbar />
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    {/* <WhatGPT3 /> */}
    {/* <Features /> */}
    {/* <Possibility /> */}
    <Blog />
    {/* <CTA /> */}
    <Footer />
  </div>
);

export default App;
