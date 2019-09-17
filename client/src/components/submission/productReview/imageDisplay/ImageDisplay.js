import React, { Component } from "react";

import { connect } from "react-redux";

class ImageDisplay extends Component {
	state = {
		image: 0,
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
					<img src={require(`../../../../images/pump-trailer/0000.png`)} />
				) : null}
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
)(ImageDisplay);
