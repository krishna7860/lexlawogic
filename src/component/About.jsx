import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='text-center my-5 container-flud'>
                <h1>Our Team</h1>
                <p>It’s a beginning of a journey that we’re excited to share with you.</p>
                <p>Thanks</p>
                </div>
                <div className='row justify-content-center mx-auto'>
                    <div className='text-center m-4'>
                        <img src="dips.jpeg" alt="" style={{height:"300px",width:'300px'}}/>
                        <p>Deepanshu</p>
                        <span>
                            <i class='fab fa-facebook-f mx-2'></i>
                            <i class='fab fa-twitter mx-2'></i>
                            <i class='fab fa-linkedin-in mx-2'></i>
                            <i class='fab fa-youtube mx-2'></i>
                            <i class='fab fa-instagram mx-2'></i>
                        </span>
                    </div>
                    <div className='text-center m-4'>
                        <img src="san.jpeg" alt="" style={{height:"300px",width:'300px'}}/>
                        <p>Sankalp</p>
                        <span>
                            <i class='fab fa-facebook-f mx-2'></i>
                            <i class='fab fa-twitter mx-2'></i>
                            <i class='fab fa-linkedin-in mx-2'></i>
                            <i class='fab fa-youtube mx-2'></i>
                            <i class='fab fa-instagram mx-2'></i>
                        </span>
                    </div>
                    <div className='text-center m-4'>
                        <img src="suy.jpeg" alt="" style={{height:"300px",width:'300px'}}/>
                        <p>Suyash</p>
                        <span>
                            <i class='fab fa-facebook-f mx-2'></i>
                            <i class='fab fa-twitter mx-2'></i>
                            <i class='fab fa-linkedin-in mx-2'></i>
                            <i class='fab fa-youtube mx-2'></i>
                            <i class='fab fa-instagram mx-2'></i>
                        </span>
                    </div>
                    <div className='text-center m-4'>
                        <img src="kk.jpeg" alt="" style={{height:"300px",width:'300px'}}/>
                        <p>Krishna</p>
                        <span>
                            <i class='fab fa-facebook-f mx-2'></i>
                            <i class='fab fa-twitter mx-2'></i>
                            <i class='fab fa-linkedin-in mx-2'></i>
                            <i class='fab fa-youtube mx-2'></i>
                            <i class='fab fa-instagram mx-2'></i>
                        </span>
                    </div>
                    <div className='text-center m-4'>
                        <img src="adi.jpeg" alt="" style={{height:"300px",width:'300px'}}/>
                        <p>Adiyta</p>
                        <span>
                            <i class='fab fa-facebook-f mx-2'></i>
                            <i class='fab fa-twitter mx-2'></i>
                            <i class='fab fa-linkedin-in mx-2'></i>
                            <i class='fab fa-youtube mx-2'></i>
                            <i class='fab fa-instagram mx-2'></i>
                        </span>
                    </div>
                    
                </div>
            </div>
        )
    }
}
