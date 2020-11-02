import React, { Component } from 'react'

import Showcase from './Showcase';
import Aside from './Aside';
import Showcase2 from './Showcase2';
import Menu from './Menu'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <div className='container-fluid'>
                    <div className='row'>
                    < div className='col-8' >
                        <Showcase />
                        

                    </div>
                     < div className='col-4' >
                        <Aside />

                    </div>
                    </div>
                   
  
                 </div>
                <Showcase2 />
            </div>
        )
    }
}
