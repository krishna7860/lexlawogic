import React, { Component } from 'react';
import{Link} from 'react-router-dom'

export class Aside extends Component {
  render() {
    return (
      <div className='my-2 row'>
        <div className=' my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Write Article</div>
              <div className=' px-3' style={{ width: '300px', height:'300px', background:'grey' }}>
          <h1 className='py-3 my-5'>Write An Article for Publishment</h1>
          <button className='  btn btn-block btn-dark'>Write Now</button>
          </div>
        </div>
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Social</div>
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
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Events</div>
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
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Latest Post</div>
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
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Categories</div>
          <div className='d-flex flex-column'>
            <Link to='/news' className='border-bottom my-2 p-1 text-dark'>
              News
            </Link>
            <Link to='/article' className='border-bottom my-2 p-1 text-dark'>
              Article
            </Link>
            <Link to='/blog' className='border-bottom my-2 p-1 text-dark'>
              Blog
            </Link>
            <Link to='/research' className='border-bottom my-2 p-1 text-dark'>
             Research Papers
            </Link>
            <Link to='/caprograms' className='border-bottom my-2 p-1 text-dark'>
             CA Programs
            </Link>
            <Link to='/caselaw' className='border-bottom my-2 p-1 text-dark'>
             Case Law
            </Link>
            <Link to='/internship' className='border-bottom my-2 p-1 text-dark'>
             Internship and Events
            </Link>
          </div>
        </div>
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Tags</div>
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
