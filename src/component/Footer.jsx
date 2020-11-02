import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div
        className='col-md-12  md-d-flex justify-content-center p-5 '
        style={{  background: 'grey' }}
      >
        <div className='m-5'>
          <h5 className='border-bottom border-dark'>ABOUT</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean.
          </p>
        </div>
        <div className='m-5'>
          <h5 className='border-bottom border-dark'>NEWSLETTER</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <span className='my-3'>
            <input value='Email' label='Email' />
            <button className='btn btn-dark m-5' type='submit'>
              Submit
            </button>
          </span>
        </div>
        <div className='d-flex flex-column m-5'>
          <h5 className='border-bottom border-dark'>LINKS</h5>
          <a href='#' className='my-1 p-1 text-dark'>
            Far far away
          </a>
          <a href='#' className='my-1 p-1 text-dark'>
            Right at the coast
          </a>
          <a href='#' className='my-1 p-1 text-dark'>
            Vokalia and Consonantia
          </a>
          <a href='#' className='my-1 p-1 text-dark'>
            A small river
          </a>
          <a href='#' className='my-1 p-1 text-dark'>
            Separated they live
          </a>
          <a href='#' className='my-1 p-1 text-dark'>
            It is a paradisematic
          </a>
        </div>
           <div className='d-flex flex-column m-5'>
                <h5 className='border-bottom border-dark'>PAGES</h5>
                <a href='#' className='my-1 p-1 text-dark'>
                  HOME
                </a>
                <a href='#' className='my-1 p-1 text-dark'>
                  ABOUT
                </a>
                <a href='#' className='my-1 p-1 text-dark'>
                  TEAM
                </a>
                <a href='#' className='my-1 p-1 text-dark'>
                  BLOG
                </a>
                <a href='#' className='my-1 p-1 text-dark'>
                  CONTACT
                </a>
          </div>
          <div className='d-flex flex-column m-5'>
               <h5 className='border-bottom border-dark'>LINKS</h5>
              <a href='#' className='my-1 p-1 text-dark'>
                DESIGN
              </a>
              <a href='#' className='my-1 p-1 text-dark'>
                BRANDING
              </a>
              <a href='#' className='my-1 p-1 text-dark'>
                ART
              </a>
              <a href='#' className='my-1 p-1 text-dark'>
                FASION
              </a>
              <a href='#' className='my-1 p-1 text-dark'>
                PRINT
              </a>
           </div>
      </div>
    );
  }
}

export default Footer;
