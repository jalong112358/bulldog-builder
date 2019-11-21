import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setCustomText,
  changeHasCustomText
} from "../../../../actions/simpleAction";

import "./CustomText.css";

class CustomText extends Component {
  state = {
    textToggled: "No"
  };

  onTextToggle = e => {
    this.setState(
      {
        textToggled: e.target.value
      },
      () => {
        this.props.changeHasCustomText(this.state.textToggled);
      }
    );
  };
  changeText = e => {
    e.preventDefault();
    this.props.setCustomText(e.target.value);
  };
  render() {
    return (
      <div className="custom-text">
        <p>Would you like to add custom stencil text? (Additional $5)</p>
        <label className="radioBtn one">
          <input
            type="radio"
            value="No"
            checked={this.state.textToggled === "No"}
            onChange={this.onTextToggle}
          />
          No
        </label>
        <label className="radioBtn two">
          <input
            type="radio"
            value="Yes"
            checked={this.state.textToggled === "Yes"}
            onChange={this.onTextToggle}
          />
          Yes
        </label>
        <input
          class={
            this.state.textToggled === "Yes"
              ? "stencil-textbox open"
              : "stencil-textbox"
          }
          type="text"
          maxlength="32"
          onChange={this.changeText}
          value={this.props.customText}
        ></input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customText: state.main.customText,
    hasCustomText: state.main.hasCustomText
  };
};

export default connect(mapStateToProps, { setCustomText, changeHasCustomText })(
  CustomText
);
