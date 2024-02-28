import React, { Component } from 'react'
import EstimateImage from './EstimateImage'
import EstimateForm from './EstimateForm'

export class EstimateSection extends Component {
  render() {
    return (
      <div id='estimate' className='flex flex-col md:flex-row justify-between gap-x-4 gap-y-8'>
        <EstimateImage />
        <EstimateForm />
      </div>
    )
  }
}

export default EstimateSection