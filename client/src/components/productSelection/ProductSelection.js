import React, { Component } from "react";
import { Link } from "react-router-dom";

import { refreshState } from "../../actions/simpleAction";

import { connect } from "react-redux";

import "./ProductSelection.css";

import hoseCartImg from "./images/hose-cart.png";
import turnTableReelImg from "./images/turn-table-reel.png";
import hoseMoverImg from "./images/hose-mover.png";
import forceFeedImg from "./images/force-feed.png";
import applicatorImg from "./images/applicator.png";
import agitationTrailerImg from "./images/agitation-trailer.png";
import agitationBoatImg from "./images/agitation-boat.png";
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
							<h3>Pump Trailer</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link
								className="btn-primary"
								to="/build/pump-trailer"
								onClick={this.onClick}
							>
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={hoseCartImg} />
						<div className="product-info">
							<h3>Warthog</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/warthog">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={turnTableReelImg} />
						<div className="product-info">
							<h3>Turn Table Reel</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/turn-table-reel">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={hoseMoverImg} />
						<div className="product-info">
							<h3>Hose Mover</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/hose-mover">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={hoseCartImg} />
						<div className="product-info">
							<h3>Force Feed</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/force-feed">
								Select
							</Link>
						</div>
					</div>
					<div className="product">
						<img src={agitationTrailerImg} />
						<div className="product-info">
							<h3>Agitation Trailer</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/agitation-trailer">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={applicatorImg} />
						<div className="product-info">
							<h3>Pull-Type</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/pull-type">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={applicatorImg} />
						<div className="product-info">
							<h3>3PT</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/3pt">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={applicatorImg} />
						<div className="product-info">
							<h3>4WD</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/4wd">
								Select
							</Link>
						</div>
					</div>

					<div className="product">
						<img src={hoseCartImg} />s
						<div className="product-info">
							<h3>Lagoon Feeder</h3>
							<p>
								Quis autem vel eum iure reprehenderit qui in ea voluptate velit
								esse quam nihil molestiae consequatur, vel illum qui dolorem eum
								fugiat quo voluptas nulla pariatur.
							</p>
							<Link className="btn-primary" to="/lagoon-feeder">
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
