import React, { Component } from 'react'
import ContactMap from './ContactMap'
import ContactInformation from './ContactInformation'

export class ContactSection extends Component {
  render() {
    return (
      <div id='contact' className='flex flex-col md:flex-row gap-x-4 gap-y-8'>
        <ContactMap />
        <ContactInformation />
      </div>
    )
  }
}

export default ContactSection