import React, { Component } from "react";
import "./PrintBtn.css";

export default class PrintBtn extends Component {
	printHandler = () => {
		window.print();
	};
	render() {
		return (
			<div className="printbtn" onClick={this.printHandler}>
				PRINT
			</div>
		);
	}
}
