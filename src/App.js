import React, { Component } from "react";
import "./App.css";
import Foreground from "./components/Stars/Foreground";
import NavMenu from "./components/components/NavMenu";

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
        <NavMenu />
        <Foreground size="B" />
      </div>
    );
  }
}

export default HamMenu;
