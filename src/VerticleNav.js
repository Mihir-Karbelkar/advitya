import React, { Component } from "react";
import $ from "jquery";
import "./VerticleNav.css";
import { scrollWindowUp } from "./PageT";
import { scrollWindowDown } from "./PageT";
class VerticleNav extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div id="parent">
        <div id="nav" className={this.state.width < 900 ? "mobile" : null}>
          <div className="nav-item active" id="number0">
            <div className="nav-number"> 01</div>
            <div className="bar">&nbsp;</div>
            <div className="nav-text">Home</div>
          </div>{" "}
          <div className="nav-item" id="number1">
            <div className="nav-number">02</div>

            <div className="bar">&nbsp;</div>

            <div className="nav-text">TechFest</div>
          </div>{" "}
          <div className="nav-item" id="number2">
            <div className="nav-number">03</div>
            <div className="bar">&nbsp;</div>
            <div className="nav-text">CultureFest</div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default VerticleNav;
