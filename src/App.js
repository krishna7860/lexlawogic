import React,{Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Navbar2 from './component/Navbar2';
import Footer from './component/Footer';

function App() {
  return (
      < BrowserRouter>
      
      <Navbar2/>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
