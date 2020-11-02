import React, { Component } from 'react'

export class contact extends Component {
  render() {
    return (
      <div className='container-fluid'>
      <img className='container-fluid' style={{}} src="contact.jpg" alt=""/>
      <div className='container-fluid d-flex justify-content-between '>
        <ul className='text-center m-5 ' style={{listStyle:'none'}}>
          <li className='p-4' >
          <i class="fas fa-globe-americas fa-2x m-3"></i>
            <h5>Address</h5>
            <p>80/18 Eldeco County New Shivli Road Kalyanpur Kanpur Utter Pradesh</p>
          </li>
            
          <li className='p-4' >
          <i class="fas fa-phone fa-2x m-3"></i>
          <h5>Phone Numbers</h5>
            <p>+91-9999887026</p>
            <p>+91-7522860245</p>
          </li>
          <li className='p-4' >
          <i class="far fa-envelope fa-2x m-3"></i>
            <h5>Email
              <p>contact.lexlawogic@gmail.com</p>
            </h5>
          </li>

        </ul>
        <form className='m-5 p-4'>
          <h3>Leave A Message</h3>
          <p>I must explain to you how all this a mistaken idea of ncing great explorer of the rut the is lder of human happinescias unde omnis iste natus error sit volptatem</p>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"/>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" placeholder="Enter Email"/>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" class="form-control" placeholder="Enter Subject"/>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea type="text" class="form-control" placeholder="Enter Message"/>
            </div>
            <div class="form-check my-5">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-block btn-primary my-5">Submit</button>
        </form>
      </div>
      <div className='text-center container'  style={{height:'50vh'}}>
        <h1>JOIN OUR LEX LAWOGIC FAMILY</h1>
        <div class="input-group m-5">
          <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
            <button class="btn btn-danger" type="button">SUSCRIBE</button>
          </div>
        </div>
      </div>



    </div>
    )
  }
}

export default contact
