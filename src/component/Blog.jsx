import React, { Component } from 'react'
import Card2 from './Card2'


export class Blog extends Component {
  render() {
    return (
      <div>
 <h1 className='bg-dark text-light my-3 p-2 text-center '>Blog</h1>
       
        <div className='text-center'>
        <img src='blog.jpg' alt="banner" className='container '/>

        </div>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <button className=' container btn-block my-4 py-3 btn btn-dark'>Know More</button>
      </div>
    )
  }
}

export default Blog
