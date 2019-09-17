import React, { Component } from "react";
import "./UrlDisplay.css";
class UrlDisplay extends Component {
	render() {
		return (
			<input
				className="url-display"
				type="text"
				value={window.location.href}
			></input>
		);
	}
}

export default UrlDisplay;
