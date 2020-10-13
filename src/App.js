import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import Showcase from './component/Showcase';
import Aside from './component/Aside';
import Showcase2 from './component/Showcase2';
import Footer from './component/Footer';
import Menu from './component/Menu'

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Menu/>
      <div className='d-flex'>
        <Showcase />
        <Aside />
      </div>
      <Showcase2 />
      <Footer />
    </div>
  );
}

export default App;
