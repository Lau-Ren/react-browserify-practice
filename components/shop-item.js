import React from "react";

console.log("item is loaded")

export default class Shop extends React.Component {

  constructor (props) {
    super(props)
    }

  isSelected () {
    console.log(this.props ,"this.props")
    this.props.addToCart(this.props.info)
  }

  render () {

    return (
      <li onClick={this.isSelected.bind(this)} >
        <span> {this.props.info.name} </span>
        <span> {this.props.info.price} </span>
      </li>
    );
  }
};
