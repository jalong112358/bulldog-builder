import React, { Component } from "react";
import {
	setFormComplete,
	setPrice,
	setVariationId
} from "../../../actions/simpleAction";
import FormPart from "./formPart/FormPart";
import NextBtn from "./nextBtn/NextBtn";

import { connect } from "react-redux";
import "./Form.css";

class Form extends Component {
	state = {
		productName: "",

		selectedPath: []
	};

	componentDidUpdate() {
		if (this.state.productName !== this.props.selectedPath[0].productName) {
			this.setState({
				productName: this.props.selectedPath[0].productName
			});
		}
	}

	render() {
		const formParts = this.props.selectedPath.map((part, index) => {
			let name;
			let stage;
			let fields;
			let label;
			let type;
			let price;

			if (part.stage !== 0) {
				name = part.selectedFieldProps.name;
				stage = part.selectedFieldProps.stage;
				fields = part.selectedFieldProps.fieldData;
				label = part.selectedFieldProps.label;
				price = part.selectedFieldProps.price;
				type = part.selectedFieldProps.type;
			} else {
				name = part.name;
				stage = part.stage;
				fields = part.fields;
				label = part.label;
				price = part.price;
				type = part.type;
			}

			if (fields.length > 0) {
				return (
					<FormPart
						name={name}
						stage={stage}
						label={label}
						type={type}
						key={index}
						identifier={index}
						fieldData={fields}
						onFieldChange={this.changeSelectedField}
					/>
				);
			} else {
				{
					this.props.setVariationId(this.props.selectedPath);
				}
				return (
					<div>
						<NextBtn />
					</div>
				);
			}
		});

		return (
			<div id="form">
				<h3>{this.state.productName}</h3>
				<p>&#x24;{this.props.price}</p>
				{formParts}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedPath: state.main.selectedPath,
		userInfo: state.main.userInfo,
		price: state.main.price
	};
};

export default connect(
	mapStateToProps,
	{ setFormComplete, setPrice, setVariationId }
)(Form);
