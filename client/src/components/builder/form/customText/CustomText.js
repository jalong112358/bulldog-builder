import React, { Component } from "react";
import { connect } from "react-redux";
import { setCustomText } from "../../../../actions/simpleAction";

import "./CustomText.css";

class CustomText extends Component {
	changeText = e => {
		e.preventDefault();
		this.props.setCustomText(e.target.value);
	};
	render() {
		return (
			<div className="custom-text">
				<p>Custom Stencil Text (Optional)</p>
				<input
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
		customText: state.main.customText
	};
};

export default connect(
	mapStateToProps,
	{ setCustomText }
)(CustomText);
