import React, { Component } from "react";
import ProductDetail from "./product-detail"
import {products} from "../products.json";

class ProductList extends Component {
  
  constructor(props) {
    super(props);
    this.state = { products };
  }
  
  renderList() {
    return this.state.products.map((product, i) => {
      return (
        <ProductDetail key={i} product={product}/>
      );
    });
  }

  renderListingHeader() {
    let headerText = `Masalas & Spicies (${this.state.products.length} items)`
    return <span>{headerText}</span>
  }

  render() {
    return (
      <React.Fragment>
        {this.renderListingHeader()}
        {this.renderList()}
      </React.Fragment>
    );
  }
}

export default ProductList;
