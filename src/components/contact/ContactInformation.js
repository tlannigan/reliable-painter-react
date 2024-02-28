import React, { Component } from 'react'

export class ContactInformation extends Component {
    render() {
        return (
            <div className='flex flex-col flex-auto section gap-y-4'>
                <div className='flex'>
                    <p className='basis-1/5'>Phone</p>
                    <p>(780) 123-4567</p>
                </div>
                <div className='flex'>
                    <p className='basis-1/5'>Email</p>
                    <p>nathan@reliable-painters.ca</p>
                </div>
                <div className='flex'>
                    <p className='basis-1/5'>Hours</p>
                    <div className='flex gap-x-8'>
                        <div>
                            <p>Weekdays</p>
                            <p>Saturday</p>
                            <p>Sunday</p>
                        </div>
                        <div>
                            <p>7am-6pm</p>
                            <p>10am-5pm</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactInformation