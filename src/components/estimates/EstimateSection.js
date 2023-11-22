import React, { Component } from 'react'
import EstimateImage from './EstimateImage'
import EstimateForm from './EstimateForm'

export class EsimateSection extends Component {
  render() {
    return (
      <div className='flex justify-between'>
        <EstimateImage />
        <EstimateForm />
      </div>
    )
  }
}

export default EsimateSection