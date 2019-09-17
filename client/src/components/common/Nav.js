import React, { Component } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
	faTwitterSquare,
	faPinterestSquare,
	faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import {
	faBars,
	faTimes,
	faCaretDown
} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
	state = {
		navOpen: false
	};
	menuToggle = () => {
		this.setState({
			navOpen: !this.state.navOpen
		});
	};
	render() {
		let navClass;

		if (this.state.navOpen) {
			navClass = "open";
		} else {
			navClass = "";
		}
		return (
			<nav>
				<div className="brand-wrapper">
					<div className="brand-wrapper-bg">
						<a
							href="http://staging.puck.flywheelsites.com/"
							class="navbar-brand"
							rel="home"
						>
							<img
								src="https://puck.com/wp-content/uploads/2018/09/puck-logo.png"
								class="img-fluid"
								alt="Puck - Built to Lead."
							/>
						</a>
					</div>
				</div>
				<div className="hamburger-icon-wrapper" onClick={this.menuToggle}>
					{this.state.navOpen ? (
						<FontAwesomeIcon className="hamburger-icon" icon={faTimes} />
					) : (
						<FontAwesomeIcon className="hamburger-icon" icon={faBars} />
					)}
				</div>
				<div className={`nav-right ${navClass}`}>
					<div className="nav-top">
						<ul>
							<li>
								<a href="https://puck.com/about-us/">About Us</a>
							</li>
							<li>
								<a href="https://puck.com/customer-service/">
									Customer Service
								</a>
							</li>
							<li>
								<a href="https://puck.bamboohr.com/jobs/">Careers</a>
							</li>
							<li>
								<ul className="social-media-icons">
									<li>
										<a target="_blank" href="http://bit.ly/2HPEjOl">
											<FontAwesomeIcon
												className="social-icon"
												icon={faFacebookSquare}
											/>
										</a>
									</li>
									<li>
										<a target="_blank" href="http://bit.ly/2GjFbKn">
											<FontAwesomeIcon
												className="social-icon"
												icon={faInstagram}
											/>
										</a>
									</li>
									<li>
										<a target="_blank" href="http://bit.ly/2CjFdQ2">
											<FontAwesomeIcon
												className="social-icon"
												icon={faTwitterSquare}
											/>
										</a>
									</li>
									<li>
										<a target="_blank" href="http://bit.ly/2NUFJe1">
											<FontAwesomeIcon
												className="social-icon"
												icon={faPinterestSquare}
											/>
										</a>
									</li>
									<li>
										<a target="_blank" href="http://bit.ly/2IXgEzW">
											<FontAwesomeIcon
												className="social-icon"
												icon={faYoutubeSquare}
											/>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="nav-bottom">
						<ul>
							<li>
								<a href="#">
									DISCOVER PUCK <FontAwesomeIcon icon={faCaretDown} />
								</a>
								<ul className="submenu discover">
									<li>
										<a className="bold" href="https://puck.com/discover-puck/">
											DISCOVER PUCK
										</a>
									</li>
									<li>
										<a className="bold" href="https://puck.com/40th/">
											40TH ANNIVERSARY
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">
									EQUIPMENT <FontAwesomeIcon icon={faCaretDown} />
								</a>
								<div className="submenu equipment">
									<div className="submenu-row">
										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/equipment/agriculture/"
												>
													Agriculture
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/agriculture/hose-carts">
													Hose Carts
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/agriculture/pump-units">
													Pump Units
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/agriculture/applicators">
													Applicators
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/agriculture/agitators">
													Agitators
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/agriculture/hoses-and-accessories">
													Hoses and Accessories
												</a>
											</li>
											<li>
												<a href="https://puck.com/control-systems/">
													Control Systems
												</a>
											</li>
										</ul>
										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/equipment/oil-and-gas/"
												>
													Oil &amp; Gas
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/oil-and-gas/hose-reels">
													Hose Reels
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/oil-and-gas/pump-units">
													Pump Units
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/oil-and-gas/water-transfer-hoses">
													Water Transfer Hoses
												</a>
											</li>
											<li>
												<a href="https://puck.com/control-systems/">
													Control Systems
												</a>
											</li>
										</ul>
										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/equipment/mining/"
												>
													Mining
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/mining/hose-reels">
													Hose Reels
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/mining/pump-units">
													Pump Units
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/mining/agitators-1">
													Agitators
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/mining/water-transfer-hoses">
													Water Transfer Hoses
												</a>
											</li>
											<li>
												<a href="https://puck.com/control-systems/">
													Control Systems
												</a>
											</li>
										</ul>
									</div>

									<div className="submenu-row">
										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/equipment/municipalities/"
												>
													Municipalities
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/municipalities/hose-reels">
													Hose Reels
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/municipalities/pump-units">
													Pump Units
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/municipalities/agitators-1">
													Agitators
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/municipalities/water-transfer-hoses">
													Water Transfer Hoses
												</a>
											</li>
											<li>
												<a href="https://puck.com/control-systems/">
													Control Systems
												</a>
											</li>
										</ul>

										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/equipment/forestry/"
												>
													Forestry
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/forestry/hose-reels">
													Hose Reels
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/forestry/pump-units">
													Pump Units
												</a>
											</li>
											<li>
												<a href="https://puck.com/equipment/forestry/forestry-hoses">
													Forestry Hoses
												</a>
											</li>
											<li>
												<a href="https://puck.com/control-systems/">
													Control Systems
												</a>
											</li>
										</ul>
										<ul>
											<li>
												<a
													className="bold"
													href="https://puck.com/store/used-equipment/"
												>
													Used Equipment
												</a>
											</li>
										</ul>
									</div>
								</div>
							</li>

							<li>
								<a href="#">
									CONTROL SYSTEMS <FontAwesomeIcon icon={faCaretDown} />
								</a>
								<ul className="submenu control">
									<li>
										<a
											className="bold"
											href="https://puck.com/control-systems/"
										>
											Overview
										</a>
									</li>
									<li>
										<a
											className="bold"
											href="https://puck.com/control-systems/lightspeed-pro/"
										>
											LightSpeed Pro
										</a>
									</li>
									<li>
										<a
											className="bold"
											href="https://puck.com/control-systems/lightspeed-iq/"
										>
											LightSpeed IQ
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">HOSE</a>
							</li>
							<li>
								<a href="https://puck.com/store/">
									STORE <FontAwesomeIcon icon={faCaretDown} />
								</a>
								<ul className="submenu store">
									<li>
										<a
											className="bold"
											href="https://puck.com/store/parts-store/"
										>
											Parts Store
										</a>
									</li>
									<li>
										<a
											className="bold"
											href="https://puck.com/store/used-equipment/"
										>
											Used Equipment
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="https://puck.com/news-events/">
									NEWS &amp; EVENTS <FontAwesomeIcon icon={faCaretDown} />
								</a>
								<ul className="submenu news">
									<li>
										<a
											className="bold"
											href="https://puck.com/news-events/news/"
										>
											News
										</a>
									</li>
									<li>
										<a
											className="bold"
											href="https://puck.com/news-events/events"
										>
											Events
										</a>
									</li>
									<li>
										<a
											className="bold"
											href="https://puck.com/news-events/pump-school"
										>
											Pump School
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
