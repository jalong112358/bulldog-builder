import React, { Component } from "react";
import { Link } from "react-router-dom";

import { refreshState } from "../../actions/simpleAction";

import { connect } from "react-redux";

import "./ProductSelection.css";

// import fireguard from "../../images/fireguard/hose.png";

// import firepowerii from "../../images/firepower-ii/hose.png";

// import hiCombatii from "../../images/hi-combat-ii/hose.png";

// import hiPower from "../../images/hi-power/hose.png";

// import hiVol from "../../images/hi-vol/hose.png";

// import hiVolTpu from "../../images/hi-vol-tpu/hose.png";

// import redChief from "../../images/red-chief/hose.png";

// import redskin from "../../images/redskin/hose.png";

// import ultima from "../../images/ultima/hose.png";

// import yellowChief from "../../images/yellow-chief/hose.png";

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
            {/* <img src={fireguard} /> */}
            <div className="product-info">
              <h3>Fireguard</h3>
              <p>
                Fireguard™, BullDog’s latest innovation, is a premium hose that
                takes your average attack line to the next level. Its unique
                design gives combat firefighters the performance...
              </p>
              <Link
                className="btn-primary"
                to="/build/fireguard"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={firepowerii} /> */}
            <div className="product-info">
              <h3>Firepower II</h3>
              <p>
                Firepower II™ is an extremely durable double-jacketed hose made
                from a high-tech nylon-polyester outer jacket, with durability
                and flow that make it an invaluable firefighting tool.
              </p>
              <Link
                className="btn-primary"
                to="/build/firepower-ii"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={hiCombatii} /> */}
            <div className="product-info">
              <h3>Hi-Combat II</h3>
              <p>
                Hi-Combat II® is the ultimate in firefighting hose technology
                for aggressive interior combat operations. Its unique design
                gives combat firefighters the performance...
              </p>
              <Link
                className="btn-primary"
                to="/build/hi-combat-ii"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={hiVol} /> */}
            <div className="product-info">
              <h3>Hi-Vol</h3>
              <p>
                Hi-Vol® is a tough supply hose that maintains excellent water
                flow. It is the premium extruded-through-the- weave,
                large-diameter, nitrile-rubber hose with the...
              </p>
              <Link
                className="btn-primary"
                to="/build/hi-vol"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={hiVolTpu} /> */}
            <div className="product-info">
              <h3>Hi-Vol TPU</h3>
              <p>
                Hi-Vol TPU™ is an extruded-through-the-weave TPU hose that
                provides excellent abrasion resistance, reduced weight, and
                improved kink resistance in comparison to...
              </p>
              <Link
                className="btn-primary"
                to="/build/hi-vol-tpu"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            <img src={hiPower} />
            <div className="product-info">
              <h3>Hi-Power</h3>
              <p>
                Hi-Vol TPU™ is an extruded-through-the-weave TPU hose that
                provides excellent abrasion resistance, reduced weight, and
                improved kink resistance in comparison to...
              </p>
              <Link
                className="btn-primary"
                to="/build/hi-power"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={ultima} /> */}
            <div className="product-info">
              <h3>Ultima</h3>
              <p>
                BullDog Ultima™ is a durable, double-jacketed hose constructed
                with staple-polyester, both warp and filler, and lined with a
                high-tech EPDM tube. Its engineered design guarantees...
              </p>
              <Link
                className="btn-primary"
                to="/build/ultima"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={redChief} /> */}
            <div className="product-info">
              <h3>Red Chief</h3>
              <p>
                BullDog’s exclusive heavy-rib outer cover combines with a unique
                nitrile-rubber, PVC-through-the-weave construction to provide
                the backbone of excellent hose performance in Red Chief...
              </p>
              <Link
                className="btn-primary"
                to="/build/red-chief"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={yellowChief} /> */}
            <div className="product-info">
              <h3>Yellow Chief</h3>
              <p>
                BullDog’s exclusive heavy-rib outer cover combines with a unique
                nitrile-rubber, PVC-through-the-weave construction to provide
                the backbone of excellent hose performance in Red Chief...
              </p>
              <Link
                className="btn-primary"
                to="/build/yellow-chief"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
          <div className="product">
            {/* <img src={redskin} /> */}
            <div className="product-info">
              <h3>Redskin</h3>
              <p>
                BullDog Redskin/Blueskin® is a lay-flat, lightweight, flexible
                firehose specifically designed for industrial fire protection.
                This hose brings tough, versatile firefighting...
              </p>
              <Link
                className="btn-primary"
                to="/build/redskin"
                onClick={this.onClick}
              >
                Select
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { refreshState })(ProductSelection);
