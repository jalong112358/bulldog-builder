import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { productSubmit } from "../../../../actions/simpleAction";
import uuid from "uuid";

import "./NextBtn.css";

class NextBtn extends Component {
  handleClick = () => {
    let id = uuid.v1();
    this.props.productSubmit(
      this.props.selectedPath,
      id,
      this.props.price,
      this.props.productId,
      this.props.variationId,
      this.props.pathIndex,
      this.props.customText,
      this.props.imageNumber,
      this.props.hasCustomText
    );
  };
  render() {
    if (this.props.UrlId !== null) {
      return <Redirect to={`/build-preview/${this.props.UrlId}`} />;
    }
    return (
      <div onClick={this.handleClick} className="next-wrapper">
        <div className="next-btn">NEXT</div>
        {this.props.loading ? (
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPath: state.main.selectedPath,
    price: state.main.price,
    UrlId: state.main.UrlId,
    loading: state.main.loading,
    productId: state.main.productId,
    variationId: state.main.variationId,
    pathIndex: state.main.pathIndex,
    customText: state.main.customText,
    imageNumber: state.main.imageNumber,
    hasCustomText: state.main.hasCustomText
  };
};

export default connect(mapStateToProps, { productSubmit })(NextBtn);
