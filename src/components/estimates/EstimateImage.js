import React, { Component } from 'react'
import estimateImage from '../../assets/images/paint-chips.jpg';

export class EstimateImage extends Component {
  render() {
    return (
      <div className='basis-8/12'>
        <img src={estimateImage} alt="Paint chips" />
      </div>
    )
  }
}

export default EstimateImage