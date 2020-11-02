import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


export class News extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:[],
      isLoading: false,
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/posts/")
      .then(res => {
      this.setState({
        items:res.data.data,
        isLoading: false,
        cardClasses : ['col-4','col-8','col-4','col-4','col-4','col-4','col-4','col-4','col-4','col-4','col-4',]
      })
    })
    .catch(err => console.log(err))   
  }
  

  render() {
    const {items,isLoading,cardClasses}=this.state;
    let item = items.filter(item=> item.tags == 'NEWS')
    return (
      
      <div>
      <h1 className='bg-dark text-light my-3 p-2 text-center '>NEWS</h1>
      <div  className='d-flex justify-content-center '>
        <div className='col-8'>

        <div className='my-5 container'>
          <div className='row'>
            {!isLoading?(
            item.map((item,i) => {
              if(i<11){
                
                return(
                      <div key={item._id} className={`my-4 ${cardClasses[i]}`} >
                       <img src={item.banner}  height='300px' width='100%' alt=""/>
                       <p>{item.createdAt.split('T')[0]}
                       <span class="badge badge-primary m-1">{item.tags}</span></p>
                       <h3>{item.title}</h3>
                       <p>{item.description.length <= 20 ? item.description : (item.description.slice(0,20) + ' .....')}</p>
                       <Link  className='btn btn-dark' to={`/readmore/${item._id}`} >
                         Read More
                       </Link>
                     </div> 
                )
              }
            })
         ):(" ")}
         </div>
          <div className='text-center'>
            <button className='btn btn-dark m-5 py-3 px-5'> Load More</button>
          </div>
      </div>

        </div>
        <div classname='col-4'>
      
        <div className='mx-2 my-5' style={{ width: '300px' }}>
          <div className='badge badge-dark py-3 px-5 my-3'>International News</div>
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
          <div className='badge badge-dark py-3 px-5 my-3'>Current Affairs</div>
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

export default News
