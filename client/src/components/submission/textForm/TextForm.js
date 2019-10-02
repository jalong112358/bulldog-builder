import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import { setUserInfo } from "../../../actions/simpleAction";

import "./TextForm.css";

class TextForm extends Component {
	state = {
		name: "",
		email: "",
		message: "",
		errors: {
			name: "",
			email: ""
		}
	};

	componentDidUpdate() {
		if (this.state.errors !== this.props.errors) {
			this.setState({
				errors: this.props.errors
			});
		}
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value }, () =>
			this.props.setUserInfo(this.state)
		);
	};

	onChange = value => {
		console.log("Captcha value:", value);
	};

	render() {
		return (
			<div className="text-form">
				{this.props.success ? (
					<span className="success">
						Your message has been sent. Thank you!
					</span>
				) : !this.props.success ? (
					<div>
						<p style={{ marginBottom: "10px" }} className="bold-text">
							INQUIRE ABOUT THIS BUILD
						</p>
						{/* <label for="name">
							Your Name:{" "}
							<span className="error-text">{this.state.errors.name}</span>
						</label> */}
						<input
							type="text"
							name="name"
							onChange={this.handleChange}
							placeholder="Name"
						></input>

						{/* <label for="email">
							Your Email:{" "}
							<span className="error-text">{this.state.errors.email}</span>
						</label> */}
						<input
							type="email"
							name="email"
							onChange={this.handleChange}
							placeholder="Email"
						></input>

						{/* <label for="message">Additional Information:</label> */}
						<textarea
							name="message"
							onChange={this.handleChange}
							placeholder="Message"
						></textarea>
						{/* <ReCAPTCHA
							sitekey="Your client site key"
							onChange={this.onChange}
						/> */}
					</div>
				) : null}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		errors: state.main.errors,
		success: state.main.success
	};
};

export default connect(
	mapStateToProps,
	{ setUserInfo }
)(TextForm);
