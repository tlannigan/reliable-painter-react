import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='flex'>
        <a href='/'>ABOUT</a>
        <a href='/'>CONTACT</a>
      </nav>
    )
  }
}

export default Navbar