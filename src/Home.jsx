import React, { Component } from 'react'

import Showcase from './component/Showcase';
import Aside from './component/Aside';
import Showcase2 from './component/Showcase2';
import Menu from './component/Menu'

export default class Home extends Component {
    render() {
        return (
            <div>
      <Menu/>
      <div className='d-flex'>
        < div className='col-8' >
        <Showcase />

        </div>
        < div className='col-4' >
        <Aside />

        </div>
  
      </div>
      <Showcase2 />
            </div>
        )
    }
}
