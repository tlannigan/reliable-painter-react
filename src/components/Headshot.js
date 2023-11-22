import React, { Component } from 'react'
import headshot from '../assets/images/headshot.jpg'

export class Headshot extends Component {
  render() {
    return (
      <div className='basis-2/5'>
        <img src={headshot} alt='Nathan Harms' />
      </div>
    )
  }
}

export default Headshot