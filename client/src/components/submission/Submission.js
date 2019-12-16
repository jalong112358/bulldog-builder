import React, { Component } from "react";
import TextForm from "./textForm/TextForm";
import SubmitBtn from "./submitBtn/SubmitBtn";
import AddToCart from "./addToCart/AddToCart";
import PrintBtn from "./printBtn/PrintBtn";
import ShareBtn from "./shareBtn/ShareBtn";
import ProductReview from "./productReview/ProductReview";
import UrlDisplay from "./urlDisplay/UrlDisplay";

import { connect } from "react-redux";
import { getProductBuild } from "../../actions/simpleAction";

import "./Submission.css";

class Submission extends Component {
  state = {
    buildData: []
  };
  componentDidMount() {
    this.props.getProductBuild(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.buildData !== this.state.buildData) {
      this.setState({
        buildData: this.props.buildData
      });
    }
  }
  render() {
    return (
      <div id="submission-wrapper">
        {this.props.loading ? (
          <div style={{ margin: "0 auto" }} className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        ) : (
          <div id="submission">
            <div>
              <ProductReview buildData={this.state.buildData} />
            </div>
            <div id="submission-form">
              <div className="btn-row">
                <AddToCart
                  productId={this.state.buildData.productId}
                  variationId={this.state.buildData.variationId}
                />
                <PrintBtn />
              </div>
              <div className="btn-col" style={{ margin: "50px 0px 50px 0px" }}>
                <p style={{ marginBottom: "10px" }} className="bold-text">
                  SHARE
                </p>
                <UrlDisplay />
                <ShareBtn />
              </div>
              <TextForm />
              <SubmitBtn />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buildData: state.main.buildData,
    loading: state.main.loading
  };
};

export default connect(mapStateToProps, { getProductBuild })(Submission);
