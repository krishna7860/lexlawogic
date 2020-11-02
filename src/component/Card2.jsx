import React, { Component } from 'react'

export class Card2 extends Component {
  render() {
    return (
      <div className= ' container border-bottom border-dark my-1'>
      <div className=' my-5' style={{background:'#cccccc'}}>
        <div className='d-flex p-4' >
          <div className='p-3' >
            <h2>CASES#</h2>
            <h1>Keshavnanda Bharti Vs. State of Kerala AIR 1973 SC 1461</h1>
            <h5>Article 368 : Doctrine of Basic Structure</h5>
            <p>Article 368 deals with the Powers of the Parliament to amend the Constitution and procedure therefor. It states Procedure through which Parliament can amend by way of addition, variation or repeal of any provision of the Constitution in accordance with the procedure established (Clause 1).</p>
          </div>
        <img style={{width:'1500px',height:'400px',background:'grey'}}></img>
        </div>
        <ul className='d-flex' style={{textstyle:'none'}}>
          <li style={{textDecoration:'none'}}>
            <h3>Subject Involved</h3>
            <p>The validity of the 24th, 25th, 29th amendments to the Constitution of India was challenged. The main question related to the nature, extent, and scope of amending power of the parliament under the Constitution.</p>
          </li>
          <li>
            <h3>Decision</h3>
            <p>[Theory of basic structure] Constitution can be amended only to the extent of and in accordance with the provisions of Art.368. Some of the provisions of the constitution of India form its basic structure which is not amendable by parliament by its constituent the power under art.368.</p>
          </li>
          <li>
            <h3>Remarks</h3>
            <p>See also Indira Nehru Gandhi v. Raj Narain AIR 1975 sc 2299, Minerva mills ltd. V. UOI AIR 1980 SC1789 & L.Chandra Kumar v. UOI AIR 1997 SC 1125</p>
          </li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Card2
