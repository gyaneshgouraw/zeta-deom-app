/**
 *
 */
import React, { Component } from "react";
import "./index.css";

export default class Card extends Component {
  render() {
    const {
      image,
      name,
      price,
      btntext,
      width,
      imgH,
      imgW,
      onCardClick
    } = this.props;
    //style={{width:width}}
    return (
      <div className="cardContainer" key={name}>
        <div className="imgContainer" onClick={onCardClick}>
          <img
            className="cardImg"
            src={image}
            alt=""
            style={{ height: imgH, width: imgW }}
          />
        </div>
        <div className="name">{name}</div>
        <div className="price">₹{price}</div>
        <div />
        <div className="buttonContainer">
          <button>{btntext}</button>
        </div>
      </div>
    );
  }
}
