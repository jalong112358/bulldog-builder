import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div id="footer-wrapper">
			<div id="footer">
				<img
					className="footer-logo"
					src="https://puck.com/wp-content/themes/understrap-child/images/puck-vertical-logo.png"
					align="Puck Built to lead. Logo"
				/>
				<div className="footer-nav">
					<div className="footer-nav-section">
						<span>Discover Puck</span>
						<ul>
							<li>
								<a href="https://puck.com/equipment/agriculture/">
									Agriculture
								</a>
							</li>
							<li>
								<a href="https://puck.com/equipment/oil-and-gas/">
									Oil &amp; Gas
								</a>
							</li>
							<li>
								<a href="https://puck.com/equipment/municipalities/">
									Municipalities
								</a>
							</li>
							<li>
								<a href="https://puck.com/equipment/mining/">Mining</a>
							</li>
							<li>
								<a href="https://puck.com/equipment/forestry/">Forestry</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>Control Systems</span>
						<ul>
							<li>
								<a href="https://puck.com/control-systems/lightspeed-pro/">
									LightSpeed Pro
								</a>
							</li>
							<li>
								<a href="https://puck.com/control-systems/lightspeed-iq/">
									LightSpeed IQ
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>About Us</span>
						<ul>
							<li>
								<a href="https://puck.com/about-us/#our-company">Our Company</a>
							</li>
							<li>
								<a href="https://puck.com/about-us/#our-team">Our Team</a>
							</li>
							<li>
								<a href="https://puck.com/about-us/fabrication-services/">
									Fabrication Services
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>News &amp; Events</span>
						<ul>
							<li>
								<a href="https://puck.com/news-events/news/">News</a>
							</li>
							<li>
								<a href="https://puck.com/news-events/events/">Events</a>
							</li>
							<li>
								<a href="https://puck.com/news-events/pump-school/">
									Pump School
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>Customer Service</span>
						<ul>
							<li>
								<a href="https://puck.com/customer-service/service-request/">
									Service Request
								</a>
							</li>
							<li>
								<a href="https://puck.com/customer-service/technical-support/">
									Technical Support
								</a>
							</li>
							<li>
								<a href="https://puck.com/customer-service/faqs/">FAQs</a>
							</li>
							<li>
								<a href="https://puck.com/customer-service/parts/">Parts</a>
							</li>
							<li>
								<a href="https://puck.com/customer-service/finance/">Finance</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>Store</span>
						<ul>
							<li>
								<a href="https://puck.com/store/parts-store/">Parts Store</a>
							</li>
							<li>
								<a href="https://puck.com/store/used-equipment/">
									Used Equipment
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-nav-section">
						<span>
							<a href="https://confirmsubscription.com/h/d/229989E2567669A7">
								eNewsletter Sign-Up
							</a>
						</span>
						<span>
							<a href="https://puck.bamboohr.com/jobs/">Careers</a>
						</span>
					</div>
				</div>
			</div>
			<p className="footer-info">
				&copy;2019 Copyright Puck Enterprises · branding &amp; website
				development by{" "}
				<a href="https://bluespacecreative.com/" target="_blank">
					<strong>blue</strong>space creative, inc.
				</a>
			</p>
		</div>
	);
}
