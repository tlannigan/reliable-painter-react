import React, { Component } from 'react'
import Reviews from './Reviews'
import Headshot from './Headshot'

export class ReviewSection extends Component {
  render() {
    return (
      <div className='flex flex-col md:flex-row gap-x-4 gap-y-8'>
        <Reviews />
        <Headshot />
      </div>
    )
  }
}

export default ReviewSection