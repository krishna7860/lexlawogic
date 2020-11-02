import React, { Component } from 'react'

export class Caprograms extends Component {
  render() {
    return (
      <div className='container '>
        <img src="caselaw3.jpg" alt="banner" className='container my-4'/>

        <button type="button" className='btn btn-dark m-4 px-5' data-toggle="modal" data-target=".bd-example-modal-lg">Click Here to fill the form</button>
          <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <h3 className='text-center' >Fill the Form</h3>

                <form className='p-4'>
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control"  placeholder="Enter Name"/>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input"/>
                      <label class="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </form>

               

              </div>
            </div>
          </div>

        
        <div className='d-flex'>
          <div className='my-5 col-8'>
            <h1>LEX LAWOGIC : Call For CA Programme</h1>
            <p>The Legal Thirst Campus Ambassador Program is one of our initiatives to reach those students of our nation, who have leadership
            qualities in them. Along with the knowledge of Law and some management basis. We will enhance these skills.</p>
            <h3>RELATED POSTS</h3>
            <p>Certificate Course By Legal Intelligence</p>
            <p>Anumarga: Call for Interns - Apply Now</p>
            <p>The Lawkit Campus Representative Programme, June 2020</p>
            <p>You will have an opportunity to learn professionalism. Legal Thirst team is governed by Senior Lawyers. We believe in our leaders,
            they have awarded deserving skills. Through Our Campus Ambassador Program, we aim to give the students an opportunity to
            represent us on their campus.</p>
            <h3>Duration</h3>
            <p>l year.</p>
            <h3>Eligibility</h3>
            <p>Students pursuing an Undergraduate or Post-Graduate course.</p>
            <h3>Perks</h3>
            <p>To have the position of Campus Ambassador and lead Legal Thirst in the concerned college is in itself a matter of pride. Some of
              the perks given to campus Ambassador are:</p>
              <p className='my-5'>Certificate as a ‘Campus Ambassador’, to boost your CV. You can feature on Linkedin as well.

              Blog Publications on Websites and Journals.

              Exposure and Experience to work with the students from all over India.

              Opportunity to make your special identity, you can sign yourself as Campus Ambassador, Legal Thirst in your email signatures,
              LinkedIn, Facebook, Instagram profiles, blogs, personal pages, etc.

              Internship Guidance

              An opportunity to be mentored by leading professionals to expand your skillset and grow.

              Special Recognition will be given for outstanding contributions during events and competitions.

              Rewards will be increased on the basis of work.

              To learn professional insights and develop presentation skills, leadership, media relations, team working, time management, etc.
              Participation in conferences and seminars free/partly payable organized by Legal Thirst.

              Responsibilities

              The Campus Ambassador will be an integral part of the Legal Thirst team. As a part of it, we expect the following qualities and work
              from the Campus Ambassador:

              Hard-working, honest and punctual candidate having good leadership, communication, and organizational skill.

              Represent and lead us at your campus.

              Communicate the events and happening of Legal Thirst.

              Communicate any event happening in their college to our team.

              To complete the tasks/works given to them from time to time and Conduct interviews of Dean, Director, Principal of your Law
              Faculty, eminent legal luminaries visiting your law faculty, the guests arriving at your campus, etc. for the purpose of publication on
              interview section of Legal Thirst.

              An active internet user, interested in promoting our services, articles, and educational content on Social Media.</p>
              <h3>Application procedure</h3>
              <button type="button" className='btn btn-dark my-4 px-5' data-toggle="modal" data-target=".bd-example-modal-lg">Click Here to fill the form</button>
          <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <h3 className='text-center' >Fill the Form</h3>

                <form className='p-4'>
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control"  placeholder="Enter Name"/>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input"/>
                      <label class="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </form>

               

              </div>
            </div>
          </div>
              <p>You will be contacted soon by the concerned team</p>
              <h3>Selection process</h3>
              <p>Application are accepted on the roling basis.After a review of the Application by us,the selected applicant will recieve a confirmation mail and joining letter </p>
              <h3>Contact </h3>
              <p>For any queries kindly mail us at :- contact.lexlawogic@gmail.com</p>
              <p>Contact un whatsapp :- +91-9999887026</p>
              <div className='my-5 d-flex justify-content-between'>
                  <div><h3>Share</h3></div>
                  <div>
                  <i class='fab fa-facebook-f mx-2 fa-2x'></i>
                  <i class='fab fa-twitter mx-2 fa-2x'></i>
                  <i class='fab fa-linkedin-in mx-2 fa-2x'></i>
                  <i class='fab fa-youtube mx-2 fa-2x'></i>
                  <i class='fab fa-instagram mx-2 fa-2x'></i>

                  </div>
          </div>

          </div>
          <div className='mx-2 my-5 px-5 col-4' style={{ width: '300px', height:'300px', background:'grey' }}>
            <h1 className='py-3 my-4'>Write An Article for Publishment</h1>
            <button className=' btn btn-block btn-dark'>Write Now</button>
       </div>
        </div>
        
      </div>
    )
  }
}

export default Caprograms
