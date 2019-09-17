import React, { Component } from "react";
import "./ImageOutput.css";
import { connect } from "react-redux";

class ImageOutput extends Component {
	state = {
		image: 1,
		slug: ""
	};

	componentDidUpdate() {
		if (this.state.image !== this.props.pathIndex.join("")) {
			this.setState({
				image: this.props.pathIndex.join("")
			});
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
						src={require(`../../../images/${this.state.slug}/${this.state.image}.png`)}
					/>
				) : null}
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
		pathIndex: state.main.pathIndex
	};
};

export default connect(
	mapStateToProps,
	null
)(ImageOutput);
