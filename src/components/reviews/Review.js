import React, { Component } from 'react'

export class Review extends Component {
  render() {
    return (
      <div className='flex flex-col gap-y-4 section'>
        <div className='flex justify-between items-center'>
            <div><p className='text-xl'>{ this.props.name }</p></div>
            <div><p className='text-3xl'>&#9733;&#9733;&#9733;&#9733;&#9733;</p></div>
        </div>
        <div>
            <p className='leading-[27px]'>{ this.props.review }</p>
        </div>
      </div>
    )
  }
}

export default Review