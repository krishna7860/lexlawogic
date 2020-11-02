import React, { Component } from 'react';
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


export default class Navbar2 extends Component {
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-light bg-light '>
          <div className='d-flex align-items-center justify-content-around w-100'>
            <div>
              <Link class='navbar-brand' to='/'>
                <img
                  src={logo}
                  alt=''
                  style={{ height: '90px', width: '300px' }}
                />
              </Link>
            </div>
            <div className='my-3'>
              <div
                class='collapse navbar-collapse '
                id='navbarSupportedContent'
              >
                <ul class='navbar-nav mr-auto mx-4 px-5'>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/'>
                      Home <span class='sr-only'>(current)</span>
                    </Link>
                  </li>

                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Categories
                    </a>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                   
                    <Link class='dropdown-item' to='/news'>
                      News <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/article'>
                      Article <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/blog'>
                      Blog <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/research'>
                      Research papers <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/caprograms'>
                     CA programs <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/caselaw'>
                     Case law <span class='sr-only'>(current)</span>
                    </Link>
                    <Link class='dropdown-item' to='/internship'>
                     Internship & Events <span class='sr-only'>(current)</span>
                    </Link>
                    </div>
                  </li>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/about'>
                      About <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/team'>
                      Team <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/contact'>
                      Contact <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  
                </ul>
               
                <div >
                    <input type="search" class="form-control" placeholder="Search......" style={{borderRadius:'50px'}} />
                    
                  </div>
                 
                 
                  
                <div className='mx-5' >
                  <a href="https://www.facebook.com/lexlawogic/" target="_blank"><i class='text-dark fab fa-facebook-f mx-2'></i></a>
                  <a href="https://twitter.com/lexlawogic" target="_blank"><i class='text-dark fab fa-twitter mx-2'></i></a>
                  <a href="https://www.linkedin.com/company/lexlawogic" target="_blank"> <i class='text-dark fab fa-linkedin-in mx-2'></i></a>
                  <a href="https://www.instagram.com/lexlawogic/" target="_blank"> <i class='text-dark fab fa-instagram mx-2'></i></a>
            
           
           
           
          </div>
          <Link to='/admin' className='btn btn-outline-danger my-1 my-sm-0'>Login</Link>
              </div>
            </div>
          </div>
        </nav>
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
    );
  }
}
