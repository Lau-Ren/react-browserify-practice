/*jshint esversion: 6 */
import React from "react";
import ShopItem from "./shop-item";

console.log("shop is loaded")

export default class Shop extends React.Component {

  render() {

    var items = this.props.items

    return (
      <div className="shop box">
        <p>Items in the shop</p>
        <ul>
          {
            items.map( item => <ShopItem addToCart={this.props.addToCart} info={item}/>)
          }

        </ul>

      </div>
    );
  }
};
