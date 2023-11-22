import React, { Component } from 'react'

export class Review extends Component {
  render() {
    return (
      <div className='section'>
        <div className='flex justify-between'>
            <div><p>{ this.props.name }</p></div>
            <div><p>&#9733;&#9733;&#9733;&#9733;&#9733;</p></div>
        </div>
        <div>
            <p>{ this.props.review }</p>
        </div>
      </div>
    )
  }
}

export default Review