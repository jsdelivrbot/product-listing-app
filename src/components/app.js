import React from "react";
import { Component } from "react";
import ProductList  from "../containers/product-list";
import CartSummary  from "../containers/cart-summary";

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ProductList />
        <CartSummary />
      </React.Fragment>
    );
  }
}

export default App;
