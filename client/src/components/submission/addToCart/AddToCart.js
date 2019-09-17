import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Link } from "react-router-dom";
import "./AddToCart.css";
class AddToCart extends Component {
	handleClick = () => {
		window.location.href = `http://staging.puck.flywheelsites.com/cart/?add-to-cart=${this.props.productId}&variation_id=${this.props.variationId}`;
	};
	render() {
		return (
			<div onClick={this.handleClick} className="addCart-wrapper">
				ADD TO CART
			</div>
		);
	}
}

export default AddToCart;
