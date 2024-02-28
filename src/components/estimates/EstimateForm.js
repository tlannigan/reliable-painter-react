import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import bbbImage from '../../assets/images/bbb_a_plus_rating.svg';

export class EstimateForm extends Component {
  render() {
    return (
      <div className='flex flex-col basis-4/12 justify-between gap-y-8 section'>
        <div className='text-xl roboto-bold'>
          <h3>Request a Free Estimate</h3>
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-first-name' label='First name' variant='outlined' placeholder={'John'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-last-name' label='Last name' variant='outlined' placeholder={'Smith'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-email' label='Email address' variant='outlined' placeholder={'john.smith@gmail.com'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-phone' label='Phone number' variant='outlined' placeholder={'123-456-7890'} />
        </div>
        <div className=''>
          <TextField fullWidth id='estimate-details' label='Details' variant='outlined' placeholder={'My bathroom needs repainting...'} />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex-auto'>
            <img src={bbbImage} alt='BBB A+ rating' className='svg-filter h-[36px]' />
          </div>
          <div className='basis-2/5'>
            <Button fullWidth size="large" variant='contained' className='!text-sm'>REQUEST</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default EstimateForm