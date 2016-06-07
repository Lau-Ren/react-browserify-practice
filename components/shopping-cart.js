import React from "react";
import CartItem from "./cart-item";

console.log("cart is loaded")


export default class ShoppingCart extends React.Component {

  render() {
    return (
      <div className="cart box">
        <p>Items in the cart</p>
        <ul>
          {
            this.props.itemsToBuy.map( (item, i) => {
              return <CartItem removeFromCart={this.props.removeFromCart} info={item} index={i} />
            })
          }

        </ul>
      </div>
    );
  }
};
