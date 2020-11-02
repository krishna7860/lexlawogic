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
function Navbar2() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
    return (
      <>
        <nav class='navbar'>
               <img
                  className='navbar-logo'
                  src={logo}
                  alt=''
                  style={{ height: '70px', width: '200px' }}
                  onClick={handleClick}
                  />
           <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
         
              <ul class={click?'nav-menu active' :'nav-menu'}>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/' onClick={closeMobileMenu}>
                      Home 
                    </Link>
                 </li>
             

                  <li class='nav-item dropdown' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <a
                      class='nav-links dropdown-toggle'
                      href='#'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    onClick={closeMobileMenu}>
                      Categories
                    </a>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                   
                    <Link class='dropdown-item' to='/news' onClick={closeMobileMenu}>
                      News
                    </Link>
                    <Link class='dropdown-item' to='/article'onClick={closeMobileMenu}>
                      Article
                    </Link>
                    <Link class='dropdown-item' to='/blog'onClick={closeMobileMenu}>
                      Blog 
                    </Link>
                    <Link class='dropdown-item' to='/research'onClick={closeMobileMenu}>
                      Research papers 
                    </Link>
                    <Link class='dropdown-item' to='/caprograms'onClick={closeMobileMenu}>
                     CA programs 
                    </Link>
                    <Link class='dropdown-item' to='/caselaw'onClick={closeMobileMenu}>
                     Case law 
                    </Link>
                    <Link class='dropdown-item' to='/internship'onClick={closeMobileMenu}>
                     Internship & Events 
                    </Link>
                    </div>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/about'onClick={closeMobileMenu}>
                      About 
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/team'onClick={closeMobileMenu}>
                      Team 
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-links' to='/contact'onClick={closeMobileMenu}>
                      Contact 
                    </Link>
                  </li>
            {/* <input type="search" class="form-control" placeholder="Search......" style={{ borderRadius: '50px' }} /> */}
             
          </ul>
         
          
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
      </>
    );
  }

export default Navbar2;