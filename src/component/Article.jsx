import React, { Component } from 'react'
import Card from './Card'

export class Article extends Component {
  render() {
    return (
      <div>
        <h1 className='bg-dark text-light my-3 p-2 text-center '>Article</h1>
      <div className=' d-flex justify-content-center'>
       <div className='col-8'>
        <Card tags='ARTICLE'/>
        
        <button className='container btn-block m-4 py-3 btn btn-dark'>Know More</button>
      </div>
      <div classname='col-4'>
      
        <div className='mx-2' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Popular Articles</div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <button className='my-2 btn btn-dark'>Read More</button>
        </div>
        <div className='mx-2 my-5 px-3' style={{ width: '300px', height:'300px', background:'grey' }}>
       <h1 className='py-3 my-5'>Write An Article for Publishment</h1>
       <button className='  btn btn-block btn-dark'>Write Now</button>
       </div>
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>Current Articles</div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='m-2'
              style={{ background: 'grey', height: '75px', width: '100px' }}
            ></div>
            <div>
              <p>Far far away, behind the word mountains</p>
              <p> 4 MAY, 2016</p>
            </div>
          </div>
          <button className=' my-2 btn btn-dark'>Read More</button>
        </div>
        
        </div>
      </div>
      </div>
      
    )
  }
}

export default Article
