import React, { Component } from 'react'
import './Categories.css'

export default class componentName extends Component {
  render() {
      const {name , image,filter} = this.props
    return (
      <div className='cat'onClick={()=>{filter(name)}}>
        <img className='catimg' src={image} alt=""/>
        <div className='cattext'>{name}</div>
      </div>
    )
  }
}
