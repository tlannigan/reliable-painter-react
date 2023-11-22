import React, { Component } from 'react'
import Navbar from './Navbar'

export class Header extends Component {
  render() {
    return (
      <div className='flex justify-between py-8'>
        <div>
          <h1 className='rowdies text-3xl'>RELIABLE PAINTERS</h1>
        </div>
        <Navbar/>
      </div>
    )
  }
}

export default Header