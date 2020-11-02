import React, { Component } from 'react'

export class Card3 extends Component {
  render() {
    return (
      <div className='m-3'>
        <img src="events.jpg" alt="" style={{height:'200px', width:'350px'}}/>
        <h3>MNF LAW FIRM – Vacancy at Research Board</h3>
        <p>October 14, 2020  No Comments</p>
        <p>About the Organization MNF Law Firm is a dream project of three young and enthusiastic Law Graduates. Our primary objective is to provide legal assistance to</p>
        <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
      </div>
    )
  }
}

export default Card3
