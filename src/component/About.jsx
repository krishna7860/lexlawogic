import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class About extends Component {
  render() {
    console.log('object');
    return (
      <div>
         <div style={{background:'#ffffff'}}>
         <div className='d-flex container py-5'>
           <div className='mx-5'>
             <h4>Oriented By Future</h4>
             <h1 className='display-1'>Lex Lawogic</h1>
           </div>
           <div>
         <h1 className='py-3 p-2 text-center' >About</h1>
           <p className='align-self-center mx-5'>Lex lawogic is an informative website. It is a platform for various law students to be updated with the current affairs happening around us with the highest responsibility. Lex Lawogic also provides updates on events, competition and a great opportunity for the internships and jobs related to the legal profession and aims at developing the legal thought process which influences people in mass.</p>
           </div>
         </div>

         </div>
        <div>
         <div  style={{
                      opacity: '0.7',
                      position: 'fixed',
                      top: '0',
                      left: '0',
                      height: '100%',
                      width: '100%',
                      background: "url('about.jpg') no-repeat center center/cover",
                      zIndex: '-3',
                  }}> </div>
                
                  <div className="container text-center py-5" style={{color : 'white'}}>
                    <h1 className='display-1 my-4' style={{}}>Welcome to Lex Lawogic</h1>
                    <h1 className=' display-4 my-4' style={{}}>स्वस्मै स्वल्पं समाजाय सर्वस्वं।</h1>
                    <Link  to='/team' className='btn btn-dark px-3 py-2' style={{borderRadius:'50px', border : "2px solid white"}}>Know Our Crew </Link>
                    <h1 className=' display-4 my-4' style={{width:''}}>“You may be disappointed if you fail, but you are doomed if you don't try.” <br/> – Beverly Sills</h1>
                    <Link  to='/contact' className='btn btn-dark px-4 py-2' style={{borderRadius:'50px', border : "2px solid white"}}>Contact Us </Link>

                  </div>
                    <div className='py-5 text-center' style={{background:'#fff'}}>
                      <h1>Lawyers are the Foot Soldiers of our Constitution</h1>
                      <h5>Join stutdent and Lawyers Around the Globe</h5>
                   

                    <button type="button" className='btn btn-dark px-5 py-2 my-4' style={{borderRadius:'50px', border : "2px solid black"}} data-toggle="modal" data-target=".bd-example-modal-lg">JOIN US</button>
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

                    <div className='container d-flex-column'>
                      <h1>Our Partners</h1>
                      <div>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      </div>
                      <div>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}} />
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                      <img className='m-3' src="logo.jpeg" alt="" style={{height:'150px',width:'150px'}}/>
                     
                      </div>
                  
                    </div>
                    </div>
       
      </div>

      {/* <div style={{background: "url('about2.jpg') no-repeat center center/cover", height:'40vh'}}>
        <h1 className=' display-4 my-4'>“You may be disappointed if you fail, but you are doomed if you don't try.” – Beverly Sills</h1>
      </div> */}
     
    </div>
    )
  }
}

export default About
