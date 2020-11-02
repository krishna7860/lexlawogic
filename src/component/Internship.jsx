import React, { Component } from 'react'
import Card3 from './Card3'

export class Internship extends Component {
  render() {
    return (
      <div>
        <h1 className='bg-dark text-light my-3 p-2 text-center '>Internship & Events</h1>
        <div className='container text-center'>
          <img className='container my-4' src="internship.jpg" alt=""/>
          <h3>Details of Internship Opportunity</h3>
          <p>Legal Thirst is a Non-Profit Organization that is working in a real terms to improve the conditions of Legal profession in areas where students lack resources. Social Evils like Nepotism, poverty, non-awareness proves to be a major cause that used to deprive the talented minds to get and achieve the opportunities and success they deserves. </p>
          <p>That’s-why Legal Thirst bought a great opportunity for Non-NLU & First Generation law students to get the Internships solely based on their talent, without any “Jugaad”. </p>
          

          <button type="button" className='btn btn-dark my-4 px-5' data-toggle="modal" data-target=".bd-example-modal-lg">Apply for Internship</button>
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

          <p>Click on the button to fill up the form of Internship. We will review your C.V.s on a real basis. We will also try to tell you the cause of rejection, if any. Though It’s the second series of Internship at Senior Supreme Court and High Court Lawyers Chambers. There are only 50 seats… So, will want to choose the best. But in case you will be rejected, don’t loose your hope. As we promise to bring more wonderful opportunities for you.</p>
          <p>We got an overwhelming response from students. We are closing the applications for now. We will soon launch one more Internship slot for students.</p>
          <h3 className='my-5'>Some Good Events and Opportunities</h3>
          </div>

          <div className='d-flex container'>
            <div className='col-4'>
              <Card3/>
              <Card3/>
              <Card3/>
              </div>
            <div className='col-4 '>
              <Card3/>
              <Card3/>
              <Card3/>
              </div>
            <div className='col-4 '>
              <Card3/>
              <Card3/>
              <Card3/>
              </div>
            </div>

      </div>
    )
  }
}

export default Internship
