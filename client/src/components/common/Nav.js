import React, { Component } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
  faYoutube
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
            <a href="https://bulldoghose.com/" class="navbar-brand" rel="home">
              <img
                src={require("./logo.png")}
                class="img-fluid"
                alt="BullDog Hose Company logo"
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
                <a href="https://bulldoghose.com/canadian-customers/">
                  CANADIAN CUSTOMERS
                </a>
              </li>
              <li>
                <a href="https://bulldoghose.com/about-us/">ABOUT US</a>
              </li>
              <li>
                <a href="https://bulldoghose.com/contact-us/">CONTACT US</a>
              </li>
              <li>
                <ul className="social-media-icons">
                  <li>
                    <a target="_blank" href="http://bit.ly/BHCoFB">
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={faFacebookF}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://bit.ly/BHCoTW">
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={faTwitter}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://bit.ly/BHCoYT">
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={faYoutube}
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://bit.ly/BHCoIG">
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={faInstagram}
                      />
                    </a>
                  </li>

                  <li>
                    <a target="_blank" href="http://bit.ly/BHCoPin">
                      <FontAwesomeIcon
                        className="social-icon"
                        icon={faPinterest}
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
                <a href="https://bulldoghose.com/fire-hoses/">FIRE HOSE</a>
                <ul className="submenu">
                  <li>
                    <a href="https://bulldoghose.com/fire-hoses/attack-fire-hoses/">
                      Attack Fire Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/attack-fire-hoses/hi-combat-ii/">
                          Hi-Combat II&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/attack-fire-hoses/firepower-ii/">
                          Firepower II&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/attack-fire-hoses/ultima/">
                          Ultima&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/attack-fire-hoses/fireguard/">
                          Fireguard&reg;
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/fire-hoses/fire-supply-hoses/">
                      Supply Line Fire Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/fire-supply-hoses/hi-vol/">
                          Hi-Vol&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/fire-supply-hoses/hi-vol-tpu/">
                          Hi-Vol TPU&trade;
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/fire-hoses/general-fire-hoses/">
                      General Fire Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/general-fire-hoses/red-yellow-chief/">
                          Red / Yellow Chief&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/general-fire-hoses/redskin-blueskin/">
                          Redskin / Blueskin&reg;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/fire-hoses/general-fire-hoses/hi-power/">
                          Hi-Power&trade;
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://bulldoghose.com/industrial-hoses/">
                  INDUSTRIAL HOSE
                </a>

                <ul className="submenu">
                  <li>
                    <a href="https://bulldoghose.com/industrial-hoses/military-hoses/">
                      Military Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/military-hoses/fuel-hose/">
                          Fuel Hose&trade;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/military-hoses/armoured-chemicoil/">
                          Armoured Chemicoil&trade;
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/industrial-hoses/oil-and-gas-hoses/">
                      Oil and Gas Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/oil-and-gas-hoses/wat-hog/">
                          WAT-Hog&trade;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/oil-and-gas-hoses/armour-guard/">
                          Armour Guard&trade;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/oil-and-gas-hoses/red-yellow-chief/">
                          Red / Yellow Chief&reg;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/oil-and-gas-hoses/redskin-blueskin/">
                          Redskin / Blueskin&reg;
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/">
                      General Industrial Hoses
                    </a>
                    <ul className="submenu-two">
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/fuel-hose/">
                          Fuel Hose&trade;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/wat-hog/">
                          WAT-Hog&trade;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/redskin-blueskin/">
                          Redskin / Blueskin&reg;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/red-yellow-chief/">
                          Red / Yellow Chief&reg;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/rackhose/">
                          Rackhose&trade;
                        </a>
                      </li>

                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/single-jacket/">
                          Single Jacket&trade;
                        </a>
                      </li>
                      <li>
                        <a href="https://bulldoghose.com/industrial-hoses/general-industrial-hoses/chiller-hose/">
                          Chiller Hose&trade;
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="https://bulldoghose.com/agricultural-hoses/">
                  AGRICULTURAL HOSE
                </a>
                <ul className="submenu">
                  <li>
                    <a href="https://bulldoghose.com/agricultural-hoses/mainline/">
                      Mainline&trade;
                    </a>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/agricultural-hoses/armour-guard/">
                      Armour Guard&reg; LDH
                    </a>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/agricultural-hoses/premium-200/">
                      Premium 200&reg; Irrigation Hose
                    </a>
                  </li>
                  <li>
                    <a href="https://bulldoghose.com/agricultural-hoses/drag-hose/">
                      Drag Hose&trade;
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="https://bulldoghose.com/resources/">RESOURCES</a>
              </li>
              <li>
                <a href="https://bulldoghose.com/news-events/">
                  NEWS &amp; EVENTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
