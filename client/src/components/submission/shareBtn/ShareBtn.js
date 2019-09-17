import React, { Component } from "react";
import "./ShareBtn.css";

export default class ShareBtn extends Component {
	printHandler = () => {
		window.print();
	};
	render() {
		return (
			<div className="sharebtn" onClick={this.printHandler}>
				SHARE
			</div>
		);
	}
}
