import React, { Component } from 'react'
import Shop from "./shop";
import ShoppingCart from "./shopping-cart";

var items = [
  {category: 'Banana', price: '$1.99', stocked: true, name: 'Green Banana'},
  {category: 'Banana', price: '$2.99', stocked: true, name: 'Yellow Banana'},
  {category: 'Banana', price: '$3.99', stocked: false, name: 'Brown Banana'},
  {category: 'Banana', price: '$4.99', stocked: true, name: 'Black Banana'},
  {category: 'Banana', price: '$5.99', stocked: false, name: 'Special Banana'},
  {category: 'Banana', price: '$6.99', stocked: true, name: 'Crazy Banana'}
];



class App extends Component {

  constructor (props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.state = {
      cartItems:[]
    }
  }

  removeFromCart (item) {
    let itemToRemove = item
    let currentCart = this.state.cartItems
    console.log(currentCart, "curr cart!!")
    let newCart = currentCart.map(function(item){
      console.log(item, "item")
      if(item !== itemToRemove){
        return item
      }

    })

    this.setState( {cartItems: newCart} )
  }

  addToCart (itemToAdd) {
    let item = itemToAdd
    let currentCart = this.state.cartItems
    currentCart.push(item)
    this.setState( {cartItems: currentCart} )
  }

  render () {
    var toBuy = this.state.cartItems

    return (
      <div className="container">
        <h1>Welcome to {this.props.name}</h1>
        <Shop
          items={items}
          addToCart={this.addToCart} />
        <ShoppingCart
          removeFromCart={this.removeFromCart}
          itemsToBuy={toBuy} />
      </div>
    );

  }

}






export default App
