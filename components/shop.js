/*jshint esversion: 6 */
import React from "react";
import Item from "./item";

console.log("shop is loaded")

export default class Shop extends React.Component {


  render() {
    return (
      <div className="shop box">
        <Item />

      </div>
    );
  }
};
