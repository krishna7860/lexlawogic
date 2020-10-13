import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div className='d-flex justify-content-around my-2 container'>
        <p>Welcome to Educate HTML Template</p>
        <div className='d-flex justify-content-between '>
          <div class='d-flex mx-4'>
            <div class='mx-3'>
              <a href='+61383766284' title='Phone number'>
                <i class='fas fa-phone mx-1'></i>
                0084 - 9622 26602
              </a>
            </div>
            <div class='mx-3'>
              <a href='mailto:AlitStudios@gmail.com' title='Email address'>
                <i class='fas fa-envelope mx-1'></i>
                info@educate.com
              </a>
            </div>
          </div>
          <div className='mx-3'>
            <i class='fab fa-facebook-f mx-2'></i>
            <i class='fab fa-twitter mx-2'></i>
            <i class='fab fa-linkedin-in mx-2'></i>
            <i class='fab fa-youtube mx-2'></i>
            <i class='fab fa-instagram mx-2'></i>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Navbar;
