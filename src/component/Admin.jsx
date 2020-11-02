import React, { Component } from 'react'
import axios from 'axios'

export class Admin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id:'',
      banner: null,
       tags:'',
       subtags:[],
       title:'',
       description:'',

    }
  }
  handleSubtags = e =>{
    this.state.subtags.push(e.target.value)
    this.setState({
      subtags: this.state.subtags,
    })
  
  }

      handleSubmit = e =>{
        e.preventDefault();
        const fd = new FormData();
        fd.append('file',this.state.banner,this.state.banner.name)
        let user = {
          tags:this.state.tags,
          subtags:this.state.subtags,
          title:this.state.title,
          description:this.state.description,
        }

 
        axios.post("http://localhost:5000/api/v1/posts/", user)
        .then(res => {
          console.log(res.data,'------------------------user');
          this.setState({
             id : res.data.data._id,
          })
          axios.put(`http://localhost:5000/api/v1/posts/${this.state.id}/photo`,fd,{headers:{'content-type':'multipart/form-data'}})
          .then(res =>{
             console.log(res.data,'-------------------photo');
        })
        })
    }
      
  
  render() {
    return (
      <div>
                <form className='p-4' onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <h5>Choose An Image</h5>
                    <input type="file" class="form-control-file" onChange={e=>this.setState({banner:e.target.files[0]})}/>
                  </div>
                  <h5>Choose Tags</h5>
                  <select class="form-control"  onChange={e=>this.setState({ tags: e.target.value})}>
                    <option>CHOOSE......</option>
                    <option>NEWS</option>
                    <option>ARTICLE</option>
                    <option>BLOG</option>
                    <option>RESEARCH PAPERS</option>
                    <option>CASE LAW</option>
                  </select >

                  <h5>Choose Sub Tags</h5>
                  <label className=' ml-4' className=' ml-3'>LAW SCHOOL</label>
                  <input type="checkbox" className=' ml-2' value='LAW SCHOOL' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LEGAL COMMUNITY</label>
                  <input type="checkbox" className=' ml-2'value='LEGAL COMMUNITY' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LEGAL NEWS</label>
                  <input type="checkbox" className=' ml-2'value='LEGAL NEWS' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LEGAL EDUCATION</label>
                  <input type="checkbox" className=' ml-2'value='LEGAL EDUCATION' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>CRIME</label>
                  <input type="checkbox" className=' ml-2'value='CRIME' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>IPC</label>
                  <input type="checkbox" className=' ml-2'value='IPC' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>CONSTITUTION</label>
                  <input type="checkbox" className=' ml-2'value='CONSTITUTION' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LAW</label>
                  <input type="checkbox" className=' ml-2'value='LAW' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LAW STUDENTS</label>
                  <input type="checkbox" className=' ml-2'value='LAW STUDENTS' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>LAWYERS</label>
                  <input type="checkbox" className=' ml-2'value='LAWYERS' onChange={this.handleSubtags}/>
                  <label className=' ml-4'>CRIJUDICIARYME</label>
                  <input type="checkbox" className=' ml-2'value='CRIJUDICIARYME' onChange={this.handleSubtags}/>
    
                  
                   <div class="form-group">
                      <h5>Heading</h5>
                      <input type="text" class="form-control" placeholder="Enter Heading" onChange={e=>this.setState({ title: e.target.value})}/>
                    </div>
                    <div class="form-group">
                      <h5>Description</h5>
                      <textarea type="text" class="form-control" rows='8' placeholder="Enter Description" onChange={e=>this.setState({ description: e.target.value})}/>
                    </div>
      
                    <button type="submit" class="btn btn-block btn-primary">Submit</button>
                </form>
      </div>
    )
  }
}

export default Admin
