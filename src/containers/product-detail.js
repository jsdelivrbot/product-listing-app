import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {subtractFromCart, addToCart} from "../actions/index";

class ProductDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.props.product.brandName}</div>
        <div>{this.props.product.productName}</div>
        <div>{this.props.product.detail}</div>
        <div>Rs {this.props.product.price}</div>
        <div>
          {Boolean(this.props.cart.find(item => item.id === this.props.product.id)) ? 
          <button onClick={() => this.props.subtractFromCart(this.props.product.id)}> - </button>: null}
          <button onClick={() => this.props.addToCart(this.props.product)}>{Boolean(this.props.cart.find(item => item.id === this.props.product.id)) ? `${this.props.cart.find(item => item.id === this.props.product.id).count} in cart` : `Add To Cart`}</button>
          {Boolean(this.props.cart.find(item => item.id === this.props.product.id)) ? 
          <button onClick={() => this.props.addToCart(this.props.product)}> + </button>: null}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ subtractFromCart: subtractFromCart, addToCart: addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
