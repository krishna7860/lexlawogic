import React, { Component } from 'react';
import logo from '../assests/logo.png';
import{Link} from 'react-router-dom'

export default class Navbar2 extends Component {
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-light bg-light '>
          <div className='d-flex justify-content-around w-100'>
            <div>
              <Link class='navbar-brand' to='#'>
                <img
                  src={logo}
                  alt=''
                  style={{ height: '75px', width: '300px' }}
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
                      Dropdown
                    </a>
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                      <a class='dropdown-item' href='#'>
                        Action
                      </a>
                      <a class='dropdown-item' href='#'>
                        Another action
                      </a>
                      <div class='dropdown-divider'></div>
                      <a class='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/about'>
                      About <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  <li class='nav-item active'>
                    <a class='nav-link' href='#'>
                      Team <span class='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li class='nav-item active'>
                    <a class='nav-link' href='#'>
                      Blog <span class='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li class='nav-item active'>
                    <a class='nav-link' href='#'>
                      Contact <span class='sr-only'>(current)</span>
                    </a>
                  </li>
                </ul>
                <form class='form-inline my-2 my-lg-0'>
                  <input
                    class='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button
                    class='btn btn-outline-success my-2 my-sm-0'
                    type='submit'
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
