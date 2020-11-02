import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class Card extends Component {
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
      })
    })
    .catch(err => console.log(err))   
  }
  render() {
    const {items,isLoading}=this.state;
    let item = items.filter(item=> item.tags == this.props.tags)
    return (
      <div>
      {!isLoading?(
        item.map((item,i)=>{
          if(i<8){
            return(
              <div className='container d-flex'>
              <img src={item.banner} className='m-3' height='200px' width='300px'/>
              <div className='m-3'>
              <Link to={`/readmore/${item._id}`} className='' style={{textDecoration:'none'}}><h3>{item.title}</h3></Link>
              <p>{item.createdAt.split('T')[0]}<span class="badge badge-primary m-1">{item.tags}</span></p>
              <p>{item.description.lenght <=200 ? item.description:(item.description.slice(0,200) + '....')}</p>
                
              </div>
            </div>
            )
          }
          
        })
      ):('')}
      </div>
    )

  }
  
 
}

export default Card
