import React, { Component } from "react";
import { connect } from "react-redux";

import { Route } from "react-router-dom";

import { Link } from "react-router-dom";
import "./AddToCart.css";
class AddToCart extends Component {
  state = {
    variationId: "",
    diameter: "",
    length: "",
    color: "",
    coupling: "",
    text: "N/A",
    hasCustomText: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState(
        {
          diameter: this.props.buildData.specs[0].name,
          length: this.props.buildData.specs[1].name,
          color: this.props.buildData.specs[2].name,
          coupling: this.props.buildData.specs[3].name,
          variationId: this.props.variationId
        },
        () => {
          if (this.props.buildData.hasCustomText === "Yes") {
            this.setState({
              text: this.props.buildData.customText,
              variationId: this.props.variationId + 1
            });
          }
        }
      );
    }
  }
  handleClick = () => {
    window.location.href = `http://staging.bulldoghose.flywheelsites.com/cart/?add-to-cart=${this.props.productId}&variation_id=${this.state.variationId}&attribute_diameter=${this.state.diameter}&attribute_length=${this.state.length}&attribute_color=${this.state.color}&attribute_coupling=${this.state.coupling}&text=${this.state.text}`;
  };
  render() {
    return (
      <div onClick={this.handleClick} className="addCart-wrapper">
        ADD TO CART
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buildData: state.main.buildData
  };
};

export default connect(mapStateToProps)(AddToCart);
