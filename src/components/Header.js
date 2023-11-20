import React, { Component } from 'react'
import Navbar from './Navbar'

export class Header extends Component {
  render() {
    return (
      <div className='flex justify-between'>
        <div>Reliable Painters</div>
        <Navbar/>
      </div>
    )
  }
}

export default Header