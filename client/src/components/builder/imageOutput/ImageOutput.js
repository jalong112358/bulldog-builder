import React, { Component } from "react";
import "./ImageOutput.css";
import { connect } from "react-redux";
import { changeImageNumber } from "../../../actions/simpleAction";

class ImageOutput extends Component {
	state = {
		image: "0",
		pathIndex: [0],
		slug: ""
	};

	componentDidUpdate() {
		if (this.state.pathIndex !== this.props.pathIndex) {
			this.setState(
				{
					pathIndex: this.props.pathIndex
				},
				() => {
					if (this.state.pathIndex.length > 3) {
						this.setState(
							{
								image: this.state.pathIndex[3]
							},
							() => {
								this.props.changeImageNumber(this.state.image);
							}
						);
					}
				}
			);
		}
		if (this.state.slug !== this.props.selectedPath[0].slug) {
			this.setState({
				slug: this.props.selectedPath[0].slug
			});
		}
	}
	render() {
		return (
			<div id="image-output">
				{this.state.slug !== "" ? (
					<img
						className="image-main"
						src={require(`../../../images/${this.state.slug}/main.png`)}
					/>
				) : null}
				<div className="image">
					<p className="hose-text">{this.props.customText}</p>

					{this.state.slug !== "" ? (
						<img
							src={require(`../../../images/${this.state.slug}/${this.state.image}.png`)}
						/>
					) : null}
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
		pathIndex: state.main.pathIndex,
		customText: state.main.customText
	};
};

export default connect(
	mapStateToProps,
	{ changeImageNumber }
)(ImageOutput);
