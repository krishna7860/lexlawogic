import React, { Component } from 'react'
import Teamcard from './Teamcard'

export class Team extends Component {
  render() {
    return (
      <div className='container'>
        <div className='text-center my-5 container'>
          <h1>Meet Our Crew</h1>
          <p>"Talent wins games, but teamwork and intelligence win championships." – Michael Jordan</p>
          <h3>Thanks</h3>
        </div>
        <div className='row justify-content-center mx-auto'>
                <Teamcard img='akash.jpeg' name='Akash Prajapati' deg='Founder & CEO'/>    
                <Teamcard img='shivangi.jpeg' name='Shivangi Srivastava' deg='Content Head'/>    
                <Teamcard img='ayushi.jpeg' name='Ayushi Upadhyay' deg='Campus Ambassador Head'/>    
                <Teamcard img='anushka.jpeg' name='Anushka Singh' deg='Chief Admission Officer'/>    
                 
                    
        </div>
        <div className='text-center my-5 container'>
          <h1>Technical Team</h1>
          <p>It’s a beginning of a journey that we’re excited to share with you.</p>
          <h3>Thanks</h3>
        </div>
        <div className='row justify-content-center mx-auto'>
                <Teamcard img='adi.jpeg' name='Aditya Shukla' deg='Software Engineer'/>    
                <Teamcard img='san.jpeg' name='Sankalp Mishra' deg='Software Engineers'/>    
                <Teamcard img='dips.jpeg' name='Deepanshu Prajapati' deg='Chief Technology Officer'/>    
                <Teamcard img='kk.jpeg' name='Krishnkant Sharma' deg='Chief Technical Advisor'/>    
                <Teamcard img='suy.jpeg' name='Suyash Mishra' deg='Team Lead'/>    
                    
        </div>
      </div>
    )
  }
}

export default Team
