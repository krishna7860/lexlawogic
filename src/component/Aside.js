import React, { Component } from 'react';

export class Aside extends Component {
  render() {
    return (
      <div className='m-2'>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>About Me</button>
          <div style={{ background: 'grey', height: '231px' }}></div>

          <p>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way. When she reached the first hills of the
            Italic Mountains.
          </p>
        </div>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>Social</button>
          <div>
            <i class='fab fa-facebook-f  btn-dark mx-1 my-4 p-3'></i>
            <i class='fab fa-twitter btn-dark mx-1 my-4 p-3'></i>
            <i class='fab fa-linkedin-in btn-dark mx-1 my-4 p-3'></i>
            <i class='fab fa-youtube btn-dark mx-1 my-4 p-3'></i>
            <i class='fab fa-instagram btn-dark mx-1 my-4 p-3'></i>
          </div>

          <div style={{ background: 'grey', height: '231px' }}></div>

          <p>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way. When she reached the first hills of the
            Italic Mountains.
          </p>
        </div>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>Events</button>
          <div class='row'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div class='w-100'></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div class='w-100'></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
            <div
              className='m-2'
              style={{ background: 'grey', height: '90px', width: '90px' }}
            ></div>
          </div>
        </div>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>Latest Post</button>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
        </div>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>Categories</button>
          <div className='d-flex flex-column'>
            <a href='#' className='border-bottom my-2 p-1 text-dark'>
              Design
            </a>
            <a href='#' className='border-bottom my-2 p-1 text-dark'>
              Web Development
            </a>
            <a href='#' className='border-bottom my-2 p-1 text-dark'>
              Photography
            </a>
            <a href='#' className='border-bottom my-2 p-1 text-dark'>
              Print
            </a>
            <a href='#' className='border-bottom my-2 p-1 text-dark'>
              Brand
            </a>
          </div>
        </div>
        <div className='m-5' style={{ width: '300px' }}>
          <button className='btn btn-dark py-3 px-5 my-3'>Tags</button>
          <div className='d-flex flex-column'>
            <div>
              <a className='m-2 text-dark' href='#'>
                Fahsion
              </a>
              <a className='m-2 text-dark' href='#'>
                Logo
              </a>
              <a className='m-2 text-dark' href='#'>
                Branding
              </a>
              <a className='m-2 text-dark' href='#'>
                Web
              </a>
            </div>
            <div>
              <a className='m-2 text-dark' href='#'>
                Programming
              </a>
              <a className='m-2 text-dark' href='#'>
                print
              </a>
              <a className='m-2 text-dark' href='#'>
                Development
              </a>
              <a className='m-2 text-dark' href='#'>
                Video
              </a>
            </div>
            <div>
              <a className='m-2 text-dark' href='#'>
                Production
              </a>
              <a className='m-2 text-dark' href='#'>
                Identity
              </a>
              <a className='m-2 text-dark' href='#'>
                Advertising
              </a>
              <a className='m-2 text-dark' href='#'>
                strategy
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
