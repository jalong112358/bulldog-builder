import React, { Component } from "react";
import { connect } from "react-redux";
// import ImageDisplay from "./imageDisplay/ImageDisplay";
import PuckBannerImg from "./puck-banner.png";

import "./ProductReview.css";

class ProductReview extends Component {
	state = {
		buildData: []
	};

	componentDidUpdate() {
		if (this.state.buildData !== this.props.buildData) {
			this.setState({
				buildData: this.props.buildData
			});
		}
	}
	render() {
		let specs;
		if (this.state.buildData.length !== 0) {
			specs = this.state.buildData.specs.map((part, index) => {
				let name;
				let price;
				let info;

				name = part.name;
				price = part.price;

				if (part.info) {
					info = part.info;
				}

				let infoList = info.map((item, index) => {
					return <p>{item}</p>;
				});

				return (
					<ul style={{ width: "100%" }}>
						<li>
							<span className="bold-text">{name}</span>

							<span>${price}</span>
						</li>
						<div className="spec-info">{infoList}</div>
					</ul>
				);
			});
		}

		return (
			<div id="product-review">
				<img
					style={{
						width: "17%"
					}}
					src={PuckBannerImg}
				/>
				<div className="image-preview">
					<img
						width="100%"
						src={require(`../../../images/pump-trailer/0000.png`)}
					/>
				</div>
				<div className="specs-wrapper">
					<h1>
						<span>Custom </span>
						<br />
						{this.state.buildData.productName}
					</h1>
					<div className="specs">
						<h3 className="bold-text" style={{ marginBottom: "15px" }}>
							SPECS:
						</h3>

						{specs}
						<p style={{ float: "right" }}>
							<span className="bold-text">Total Price:</span> $
							{this.state.buildData.totalPrice}
						</p>
					</div>
				</div>
				<p className="disclaimer">
					&#x2a;Image for reference only. Final product may vary.
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedPath: state.main.selectedPath,
		price: state.main.price,
		pathIndex: state.main.pathIndex
	};
};

export default connect(mapStateToProps)(ProductReview);
