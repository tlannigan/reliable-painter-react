import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='flex items-center gap-x-3 roboto-bold decoration-4 underline-offset-4'>
        <a href='#about' className='hover:underline'>ABOUT</a>
        <a href='#contact' className='hover:underline'>CONTACT</a>
      </nav>
    )
  }
}

export default Navbar