import React, { Component } from "react";

import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	PinterestShareButton,
	EmailShareButton,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
	PinterestIcon,
	EmailIcon
} from "react-share";

export default class ShareIcons extends Component {
	render() {
		return (
			<div>
				<FacebookShareButton url={window.location.href}>
					<FacebookIcon size={28} round={false} />
				</FacebookShareButton>
				<LinkedinShareButton url={window.location.href}>
					<LinkedinIcon size={28} round={false} />
				</LinkedinShareButton>
				<TwitterShareButton url={window.location.href}>
					<TwitterIcon size={28} round={false} />
				</TwitterShareButton>
				<PinterestShareButton url={window.location.href}>
					<PinterestIcon size={28} round={false} />
				</PinterestShareButton>
				<EmailShareButton url={window.location.href}>
					<EmailIcon size={28} round={false} />
				</EmailShareButton>
			</div>
		);
	}
}
