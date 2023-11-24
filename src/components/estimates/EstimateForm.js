import { TextField } from '@mui/material'
import React, { Component } from 'react'

export class EstimateForm extends Component {
  render() {
    return (
      <div className='flex flex-col basis-4/12 justify-between gap-y-8 section'>
        <div className='text-xl roboto-bold'>
            <h3>Request a Free Estimate</h3>
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-first-name' label='First name' variant='outlined' defaultValue={'John'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-last-name' label='Last name' variant='outlined' defaultValue={'Smith'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-email' label='Email address' variant='outlined' defaultValue={'john.smith@gmail.com'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-phone' label='Phone number' variant='outlined' defaultValue={'123-456-7890'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-details' label='Details' variant='outlined' defaultValue={'My bathroom needs repainting...'} />
        </div>
        <div>
            <button>Request Estimate</button>
        </div>
      </div>
    )
  }
}

export default EstimateForm