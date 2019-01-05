import React, { Component } from 'react'
import './Details.css'

export default class Details extends Component {
  render() {
      console.log(this.props)
    const {category,details,image,reviews} = this.props.location.loggedInUser
    return (
      <div className='Details'>
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                {category}
            </div>
            <div>
                {details}
            </div>
            <div>
                {reviews}
            </div>
      </div>
    )
  }
}
