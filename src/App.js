import React,{Component} from 'react';

import './App.css';

import About from './component/About'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import Footer from './component/Footer';

import Home from './Home'
function App() {
  return (
      < BrowserRouter>
      <Navbar/>
      <Navbar2/>
        < Route exact path='/' component={Home}></Route>
      < Route path='/about' component={About}>

      </Route>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
