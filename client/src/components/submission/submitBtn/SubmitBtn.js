import React, { Component } from "react";
import { connect } from "react-redux";
import { formSubmit } from "../../../actions/simpleAction";
import "./SubmitBtn.css";

class SubmitBtn extends Component {
	state = {
		formData: "test",
		errors: {},
		success: false,
		sending: false,
		serverErr: false
	};

	handleSubmit = e => {
		let data = {
			buildData: this.props.buildData,
			userInfo: this.props.userInfo
		};
		this.props.formSubmit(data);
	};

	render() {
		return (
			<div className="submit-wrapper">
				{!this.props.success ? (
					<div className="submit-btn" onClick={this.handleSubmit}>
						SUBMIT
					</div>
				) : null}

				{this.props.loading ? (
					<div class="spinner">
						<div class="bounce1"></div>
						<div class="bounce2"></div>
						<div class="bounce3"></div>
					</div>
				) : null}
				{this.props.errors.name ||
				(this.props.errors.email && !this.props.errors.smtp) ? (
					<span className="error-text">Please fill out required fields</span>
				) : this.props.errors.smtp ? (
					<span className="error-text">Server error</span>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		buildData: state.main.buildData,
		userInfo: state.main.userInfo,
		loading: state.main.loading,
		errors: state.main.errors,
		success: state.main.success
	};
};

export default connect(
	mapStateToProps,
	{ formSubmit }
)(SubmitBtn);
