import React, { Component } from "react";
import "./FormPart.css";
import { changePath } from "../../../../actions/simpleAction";
import FormField from "../formField/FormField";

import { connect } from "react-redux";

class FormPart extends Component {
	state = {
		selectedField: undefined,
		selectedFieldProps: undefined,
		formOpen: true
	};

	// When a field within this component is selected, setState "selectedField" to the index of the selected field

	componentWillUpdate(nextProps) {
		if (this.props !== nextProps) {
			this.setState({
				selectedField: undefined,
				formOpen: true
			});
		}
	}

	handleSelect = (value, selectedFieldProps) => {
		this.setState(
			{
				selectedField: value,
				selectedFieldProps: selectedFieldProps
			},
			() => {
				this.props.changePath(
					this.state.selectedFieldProps,
					this.state.selectedField
				);
				this.formToggle();
			}
		);
	};

	// TOGGLE THE FORM PART

	formToggle = () => {
		this.setState({
			formOpen: !this.state.formOpen
		});
	};

	render() {
		// Output the form fields
		const fields = this.props.fieldData.map((field, index) => {
			let isSelected;
			let info;
			let variationId;

			if (field.info) {
				info = field.info;
			} else {
				info = [];
			}

			if (field.variationId) {
				variationId = field.variationId;
			} else {
				variationId = 0;
			}

			if (this.state.selectedField === index) {
				isSelected = true;
			} else {
				isSelected = false;
			}

			return (
				<FormField
					key={index}
					title={field.title}
					stage={field.stage}
					variationId={variationId}
					label={field.label}
					price={field.price}
					info={info}
					identifier={index}
					fieldData={field.fields}
					name={field.name}
					image={field.image}
					isSelected={isSelected}
					onSelect={this.handleSelect}
				/>
			);
		});

		let formClass;
		let formHeight;

		if (this.state.formOpen === true) {
			formClass = "open";
		} else {
			formClass = "";
			formHeight = 0;
		}

		return (
			<div id="form-part">
				{this.state.selectedField !== undefined &&
				this.props.fieldData[this.state.selectedField].name ? (
					<div className="form-part-header selected" onClick={this.formToggle}>
						{this.props.fieldData[this.state.selectedField].title}:{"  "}
						{this.props.fieldData[this.state.selectedField].name}
					</div>
				) : (
					<div className="form-part-header">{this.props.label}</div>
				)}

				<div id="form-part-fields" className={formClass}>
					{fields}
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ changePath }
)(FormPart);
