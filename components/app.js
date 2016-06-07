import React, { Component } from 'react'
import Shop from "./shop";
import ShoppingCart from "./shopping-cart";

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Shop/>
        <ShoppingCart/>
      </div>
    );

  }

}

export default App
