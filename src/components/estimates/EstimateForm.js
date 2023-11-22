import React, { Component } from 'react'

export class EstimateForm extends Component {
  render() {
    return (
      <div className='flex flex-col basis-4/12 justify-between section'>
        <div>
            <h3>Request a Free Estimate</h3>
        </div>
        <div className='flex flex-col'>
            <label for='estimate-first-name'>First name</label>
            <input name='estimate-first-name' type='text' placeholder='John' />
        </div>
        <div className='flex flex-col'>
            <label for='estimate-last-name'>Last name</label>
            <input name='estimate-last-name' type='text' placeholder='Smith' />
        </div>
        <div className='flex flex-col'>
            <label for='estimate-email'>Email address</label>
            <input name='estimate-email' type='text' placeholder='john.smith@gmail.com' />
        </div>
        <div className='flex flex-col'>
            <label for='estimate-phone'>Phone number</label>
            <input name='estimate-phone' type='text' placeholder='123-456-7890' />
        </div>
        <div className='flex flex-col'>
            <label for='estimate-details'>Details</label>
            <input name='estimate-details' type='text' placeholder='My bathroom needs repainting...' />
        </div>
        <div>
            <button>Request Estimate</button>
        </div>
      </div>
    )
  }
}

export default EstimateForm