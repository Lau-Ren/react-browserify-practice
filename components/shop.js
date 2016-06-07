/*jshint esversion: 6 */
import React from "react";
import Item from "./item";

console.log("shop is loaded")

export default React.createClass({

  render: function() {
    return (
      <div className="shop">
        <Item />

      </div>
    );
  },
});
