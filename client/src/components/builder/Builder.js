import React, { Component } from "react";
import { Route } from "react-router-dom";
import Form from "./form/Form";
import { getBuilderData, setPrice } from "../../actions/simpleAction";

import ImageOutput from "./imageOutput/ImageOutput";
import { connect } from "react-redux";

import "./Builder.css";

class Builder extends Component {
	state = {
		selectedPath: undefined
	};
	componentDidMount() {
		this.props.getBuilderData(this.props.match.params.product);
		this.props.setPrice();
	}
	componentDidUpdate() {
		if (this.state.selectedPath !== this.props.selectedPath) {
			this.setState(
				{
					selectedPath: this.props.selectedPath
				},
				() => this.props.setPrice()
			);
		}
	}
	render() {
		const { selectedPath, loading, success } = this.props;
		return (
			<div id="builder-wrapper">
				<h1>BUILD YOUR OWN</h1>

				<div id="builder">
					<ImageOutput />

					<Form selectedPath={selectedPath} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedPath: state.main.selectedPath,
		loading: state.main.loading,
		success: state.main.success,
		productId: state.main.productId,
		variationId: state.main.variationId
	};
};

export default connect(
	mapStateToProps,
	{ getBuilderData, setPrice }
)(Builder);
