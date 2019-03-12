import React, { Component } from "react";
import "./App.css";
import Foreground from "./components/Stars/Foreground";
import ham from "./ham.svg";
import $ from "jquery";
class HamMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
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
  openNav() {
    if (this.state.width >= 900)
      document.getElementById("ham").style.width = "250px";
    else document.getElementById("ham").style.width = "100%";
  }

  closeNav() {
    document.getElementById("ham").style.width = "0";
  }

  render() {
    return (
      <div id="parent">
        <Foreground size="B" />
        <div id="hamburger-root">
          <div id="hamburger">
            <img id="toggle" onClick={this.openNav} src={ham} />{" "}
          </div>
          <div id="ham" className="ham-menu">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.closeNav}
            >
              &times;
            </a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Registration</a>
            <a href="#">Events</a>
            <a href="#">Sponsors</a>
          </div>
        </div>
      </div>
    );
  }
}

export default HamMenu;
