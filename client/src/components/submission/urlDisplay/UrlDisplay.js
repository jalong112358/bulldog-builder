import React, { Component } from "react";
import "./UrlDisplay.css";
class UrlDisplay extends Component {
	state = {
		btnText: "COPY"
	};
	copyLink = () => {
		let url = this.refs.urlInput;
		url.select();
		url.setSelectionRange(0, 99999); /*For mobile devices*/
		document.execCommand("copy");
		this.setState({
			btnText: "COPIED!"
		});
	};
	render() {
		return (
			<div className="url-display-wrapper">
				<input
					className="url-display"
					ref="urlInput"
					type="text"
					value={window.location.href}
				></input>
				<div className="copy-btn" onClick={this.copyLink}>
					{this.state.btnText}
				</div>
			</div>
		);
	}
}

export default UrlDisplay;
