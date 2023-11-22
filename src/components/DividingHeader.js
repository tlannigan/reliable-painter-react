import React, { Component } from 'react'

export class DividingHeader extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.text }</h2>
      </div>
    )
  }
}

export default DividingHeader