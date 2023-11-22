import React, { Component } from 'react'
import headshot from '../../assets/images/headshot.jpg'

export class Headshot extends Component {
  render() {
    return (
      <div className='basis-1/2'>
        <img src={headshot} alt='Nathan Harms' className='rounded-2xl' />
      </div>
    )
  }
}

export default Headshot