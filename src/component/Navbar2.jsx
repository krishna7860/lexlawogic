import React, { useState } from 'react';
import logo from '../assests/logo.png';
import{Link, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Team from './Team';
import News from './News';
import Article from './Article';
import Blog from './Blog';
import Research from './Research';
import Caselaw from './Caselaw';
import Caprograms from './Caprograms';
import Internship from './Internship';
import Contact from './Contact';
import Readmore from './Readmore';
import Admin from './Admin';
import './Navbar.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
function Navbar2() {

  
    return (
      <>

      
      <StickyHeader
      header={
        
        <div className="container-fluid bg-white mb-2">
        <nav class="navbar navigation navbar-expand-lg navbar-light container">
        <img
            className='navbar-logo'
            src={logo}
            alt=''
            style={{width: '180px' }}
        />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav d-flex justify-content-around align-items-center w-100 text-center ">

           
          <li class='nav-item'>
                    <Link class='nav-links' to='/' >
                      Home 
                    </Link>
                 </li>
                  
                 <li className="nav-item">
            <div class="dropdown">
              <a class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
               <Link class='dropdown-item' to='/news' >
                      News
                    </Link>
                    <Link class='dropdown-item' to='/article'>
                      Article
                    </Link>
                    <Link class='dropdown-item' to='/blog'>
                      Blog 
                    </Link>
                    <Link class='dropdown-item' to='/research'>
                      Research papers 
                    </Link>
                    <Link class='dropdown-item' to='/caprograms'>
                     CA programs 
                    </Link>
                    <Link class='dropdown-item' to='/caselaw'>
                     Case law 
                    </Link>
                    <Link class='dropdown-item' to='/internship'>
                     Internship & Events 
                    </Link>
              </div>
            </div>
            </li>


                  <li class='nav-item'>
                    <Link class='nav-links' to='/about'>
                      About 
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/team'>
                      Team 
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/contact'>
                      Contact 
                    </Link>
                  </li>

                  <li className="nav-item">
                                
                              <div class="wrap">
              <div class="search d-flex justify-content-center">
                  <input type="text" class="searchTerm" placeholder="Search " />
                  <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
                  </li>
    </ul>
  </div>
</nav></div>
      }
    ></StickyHeader>


     <div className="p-5" >
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/team' component={Team}></Route>
      <Route path='/news' component={News}></Route>
      <Route path='/article' component={Article}></Route>
      <Route path='/blog' component={Blog}></Route>
      <Route path='/research' component={Research}></Route>
      <Route path='/caselaw' component={Caselaw}></Route>
      <Route path='/caprograms' component={Caprograms}></Route>
      <Route path='/internship' component={Internship}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/admin' component={Admin}></Route>
      <Route path='/readmore/:id' component={Readmore}></Route>
     </div>
      </>
    );
  }

export default Navbar2;