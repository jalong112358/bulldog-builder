import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faPinterestSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div id="footer">
        <img
          className="footer-logo"
          src="https://bulldoghose.com/wp-content/themes/understrap-child/images/bulldog-hose-stacked-logo.png"
          align="Puck Built to lead. Logo"
        />
        <div className="footer-nav">
          <div className="footer-nav-section">
            <span>
              <a href="https://bulldoghose.com/contact-us/">Contact Us</a>
            </span>
            <ul>
              <li>
                <a href="#">
                  141 Junny Rd. <br />
                  Angier, NC 27501
                </a>
              </li>
              <br />
              <li>
                <a href="mailto:customerservice@bulldoghose.com">
                  customerservice@bulldoghose.com
                </a>
              </li>
              <br />
              <li>
                <a href="tel:7126559201">P 712.655.9201</a>
              </li>
              <li>
                <a href="tel:8336559201">TF 833.655.9201</a>
              </li>
              <br />
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
          <div className="footer-nav-section">
            <span>
              <a href="https://bulldoghose.com/fire-hoses/">Hoses</a>
            </span>
            <ul>
              <li>
                <a href="https://bulldoghose.com/fire-hoses/">Fire Hose</a>
              </li>
              <li>
                <a href="https://bulldoghose.com/industrial-hoses/">
                  Industrial Hose
                </a>
              </li>
              <li>
                <a href="https://bulldoghose.com/agricultural-hoses/">
                  Agricultural Hose
                </a>
              </li>
            </ul>
            <span>
              <a href="https://bulldoghose.com/about-us/">About Us</a>
            </span>
            <ul>
              <li>
                <a href="#">American Made Tough</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Memberships</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-section">
            <span>
              <a href="https://bulldoghose.com/testimonials/">Testimonials</a>
            </span>
            <ul>
              <li>
                <a href="https://bulldoghose.com/testimonials/submit-testimonial/">
                  Submit Testimonial
                </a>
              </li>
            </ul>
            <span>
              <a href="https://bulldoghose.com/resources/">Resources</a>
            </span>
            <ul>
              <li>
                <a href="https://bulldoghose.com/resources/#literature">
                  Downloads
                </a>
              </li>
              <li>
                <a href="https://bulldoghose.com/resources/#photos">Photos</a>
              </li>
              <li>
                <a href="https://bulldoghose.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://bulldoghose.com/resources/">Submit Question</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-section">
            <span>Sales Reps</span>
            <ul>
              <li>
                <a href="https://bulldoghose.com/our-team/">Our Team</a>
              </li>
              <li>
                <a href="https://bulldoghose.com/canadian-customers/">
                  Canadian Customers
                </a>
              </li>
            </ul>
            <span>
              <a href="https://bulldoghose.com/news-events/">
                News &amp; Events
              </a>
            </span>
            <ul>
              <li>
                <a href="https://confirmsubscription.com/h/d/00DEC2529A06A085">
                  eNewsletter Sign-Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-info">
        &copy;2019 Bulldog Hose Company&trade;, a proud product of ------
        ENTERPRISES. All Rights Reserved. | branding &amp; website development
        <a href="https://bluespacecreative.com/" target="_blank">
          <strong>blue</strong>space creative, inc.
        </a>
      </p>
    </div>
  );
}
