import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {subtractFromCart} from "../actions/index";

class CartSummary extends Component {
  
    constructor(props) {
        super(props);
    }

    renderCartSummaryHeader() {
        return (
            <React.Fragment>
                <span>Your Cart Summary</span>
                <div>
                    <span> Items in Cart : {this.props.cart.reduce((acc, curr) => {
                        acc += curr.count
                        return acc 
                    }, 0)}</span>
                    <span> Total Rs : { this.props.cart.reduce((acc, curr) => {
                        acc += curr.price * curr.count
                        return acc
                    }, 0)}</span>
                </div>
            </React.Fragment>
        );    
    }

    renderCartSummarybody() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Total Rs</th>
                            <th>..</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.props.cart.length > 0 ? this.props.cart.map(item => {
                            return <tr>
                                <td>{item.productName}</td>
                                <td>{item.count}</td>
                                <td>{item.price * item.count}</td>
                                <td>
                                    <button onClick={() => this.props.subtractFromCart(item.id, true)}> Remove </button>
                                </td>
                            </tr>
                        }) : <tr></tr>}
                </tbody>
                </table>
            </React.Fragment>
        );
    }
  
    render() {
        return (
        <React.Fragment>
            {this.renderCartSummaryHeader()}
            {this.renderCartSummarybody()}
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
  return bindActionCreators({ subtractFromCart: subtractFromCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
