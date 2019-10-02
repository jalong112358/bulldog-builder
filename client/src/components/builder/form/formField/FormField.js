import React, { Component } from "react";

import "./FormField.css";

class FormField extends Component {
	// Sends field id to parent on change
	handleCheck = value => {
		this.props.onSelect(value, this.props);
		//  console.log(value);
	};

	render() {
		let formFieldClass;

		if (this.props.isSelected === true) {
			formFieldClass = "selected";
		} else {
			formFieldClass = "";
		}

		const fieldInfo = this.props.info.map((part, index) => <li>{part}</li>);

		return (
			<div
				id="form-field"
				value={this.props.identifier}
				className={formFieldClass}
				onClick={() => this.handleCheck(this.props.identifier)}
			>
				<img src={require(`../../../../formData/images/${this.props.image}`)} />
				<div id="field-info">
					<span className="field-name">{this.props.name}</span>
					<ul className="field-meta">{fieldInfo}</ul>
					<div id="checkbox-wrapper">
						<div id="field-checkbox">
							<div id="field-checkbox-inner" className={formFieldClass} />
						</div>
						<span>Select</span>
					</div>
				</div>
			</div>
		);
	}
}

export default FormField;
