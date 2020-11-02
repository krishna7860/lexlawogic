import React, { Component } from 'react'

export class Teamcard extends Component {
  render() {
    return (
      <div>
         <div className='text-center m-4 p-4' style={{width:'250px', height:'350px', background:'#dddddd',borderRadius:'5%' }}>
           <div style={{height:"150px",width:'150px', borderRadius:'50%', overflow:"hidden", margin:'auto'}}> <img src={this.props.img} 
           style={{
             width:"150px"
           }}  alt="" /></div>
            <h5 className='my-4'>{this.props.name}</h5>
            <h6 className='my-4'>{this.props.deg}</h6>
              <span>
                <i class="far fa-envelope mx-2 "></i>
                <i class='fab fa-facebook-f mx-2  '></i>
                <i class='fab fa-twitter mx-2 '></i>
                <i class='fab fa-linkedin-in mx-2 '></i>
                <i class='fab fa-instagram mx-2 '></i>
              </span>
          </div>
      </div>
    )
  }
}

export default Teamcard
