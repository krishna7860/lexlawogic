import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


export class Showcase extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoading: false,
      cardClasses : ['col-4','col-8','col-4','col-4','col-4','col-4','col-4','col-4','col-4','col-4','col-4',]
    }

  }

 
  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/posts/")
      .then(res => {
      this.setState({
        items:res.data.data,
        isLoading: false,
      })
    })
    .catch(err => console.log(err))   
  }
  render() {
    const {items,isLoading, cardClasses}=this.state;
    return (
        <div className='my-5'>
          <div className='row'>
            {!isLoading?(
            items.map((item,i) => {
              if(i<11){
                
                return(
                      <div key={item._id} className={`my-4 ${cardClasses[i]}`} >
                       <img src={item.banner}  height='300px' width='100%' alt=""/>
                       <p>{item.createdAt.split('T')[0]}
                       <span class="badge badge-primary m-1">{item.tags}</span></p>
                       <h3>{item.title}</h3>
                       <p>{item.description.length <= 100 ? item.description : (item.description.slice(0,100) + ' .....')}</p>
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
    );
  }
}

export default Showcase;
