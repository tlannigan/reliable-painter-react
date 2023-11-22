import React, { Component } from 'react'

export class DividingHeader extends Component {
  render() {
    return (
      <div className='py-16 roboto-bold text-center'>
        <h2 className='text-3xl'>
          { this.props.before }
          <span className='highlight'>{ this.props.underlined }</span>
          { this.props.after }
        </h2>
      </div>
    )
  }
}

export default DividingHeader