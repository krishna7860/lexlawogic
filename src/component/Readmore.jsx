import React, { Component } from 'react'
import axios from 'axios';
import logo2 from '../assests/logo2.png'



export class Readmore extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      isLoading: false,
    }
  }
  

  componentDidMount() {
    let id = this.props.match.params.id
    axios.get(`http://localhost:5000/api/v1/posts/${id}`)
      .then(res => {
      this.setState({
        items:res.data.data,
        isLoading: false,
      })
    })
    .catch(err => console.log(err))   
  }
 
  render() {
    
  const {items}= this.state;
  console.log(items.banner)
    return (
      <div>
      
         <h1 className='bg-dark text-light my-3 p-2 text-center '>{items.tags}</h1>
         <div className='container'>
              <h1 className='border-bottom py-3 border-secondary'>{items.title}</h1>
              <p><img src='logo2.png' alt="logo" style={{height:'30px',width:'30px'}}/>-By Lex Lawogic--{items.createdAt} </p>
              <img src={`${items.banner}`} className='my-4' height='500px' width='100%' alt=""/>
              <p style={{fontSize:'1.3rem'}}>{items.description}</p>
         
            <h3 className='border-bottom border-dark py-2'>RELATED POST</h3>
            <li><a href="#">The Central Educational Institutions (Reservation in Teacher’s Cadre) Bill 2019</a></li>
            <li><a href="#">The Central Educational Institutions (Reservation in Teacher’s Cadre) Bill 2019</a></li>
            <li><a href="#">The Central Educational Institutions (Reservation in Teacher’s Cadre) Bill 2019</a></li>

            <p className='my-5' style={{fontSize:'1.3rem'}}> </p>
            <p className='border-bottom border-secondary py-3 my-5' style={{fontSize:'1.3rem'}}></p>
            <div className='d-flex border-bottom border-secondary py-5'>
              <div>
                  <p style={{fontSize:'1.3rem'}}><b>Lex Lawogic</b> has created a Whatsapp group group for exchanging legal knowledge, Events, and various opportunities.</p>
                <button className='btn btn-success p-3 m-2' style={{borderRadius:'50px'}}>Whatsapp Group</button>
                <button className='btn btn-danger p-3 m-2' style={{borderRadius:'50px'}}>Instagram Group</button>
                <h4>Tags:</h4>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <span class="badge badge-secondary p-2 m-1">#_Secondary</span>
                <h4>Share:</h4>
                <span class="btn btn-info py-2 px-4 m-1">Facebook</span>
                <span class="btn btn-success py-2 px-4 m-1">Whatsapp</span>
                <span class="btn btn-danger py-2 px-4 m-1">Gmail</span>
                <span class="btn btn-secondary py-2 px-4 m-1">Instagram</span>
              </div>
              <div className='mx-2 my-2 px-3' style={{ width: '300px', height:'300px', background:'grey' }}>
                  <h1 className='py-1 my-5'>Write An Article for Publishment</h1>
                  <button className='  btn btn-block btn-dark'>Write Now</button>
              </div>
            </div>
            <form className='my-5'>
              <h4>Leave A Reply</h4>
              <p>Your email address will not be published. Required fields are marked *</p>
              <div class="form-group">
                <label for="comment">Comment</label>
                <textarea class="form-control" rows="5"></textarea>
              </div>
              <div class="form-group">
                <label for="name">Name*</label>
                <input type="text" class="form-control" placeholder="Enter Name"/>
              </div>
              <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" class="form-control" placeholder="Enter email"/>
              </div>
              <button className='btn btn-primary btn-block'>Post Comment</button>
            </form>
         </div>
      </div>
    )
  }
}

export default Readmore
