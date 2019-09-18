import React, { Component } from "react";
import ShareIcons from "./ShareIcons";
import "./ShareBtn.css";

export default class ShareBtn extends Component {
	printHandler = () => {
		window.print();
	};
	render() {
		return (
			<div style={{ width: "50%" }}>
				{/* <div className="sharebtn" onClick={this.printHandler}>
					SHARE
				</div> */}
				<ShareIcons />
			</div>
		);
	}
}
