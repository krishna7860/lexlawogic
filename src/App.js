import React,{Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Navbar2 from './component/Navbar2';
import Footer from './component/Footer';

function App() {
  return (
      < BrowserRouter>
      
      <div className="container-fluid">
      <Navbar2/>
      <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
