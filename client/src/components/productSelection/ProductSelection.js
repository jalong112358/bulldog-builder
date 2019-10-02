import React, { Component } from "react";
import { Link } from "react-router-dom";

import { refreshState } from "../../actions/simpleAction";

import { connect } from "react-redux";

import "./ProductSelection.css";

import pumpUnitImg from "./images/pump-unit.png";

class ProductSelection extends Component {
	componentDidMount() {
		this.props.refreshState();
	}

	render() {
		return (
			<div id="product-selection-wrapper">
				<h1>BUILD YOUR OWN</h1>
				<div id="product-selection">
					<div className="product">
						<img src={pumpUnitImg} />
						<div className="product-info">
							<h3>Firepower II</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link
								className="btn-primary"
								to="/build/firepower-II"
								onClick={this.onClick}
							>
								Select
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ refreshState }
)(ProductSelection);
