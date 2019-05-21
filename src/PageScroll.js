import React, { Component } from "react";
import PageT from "./PageT";
import TechPlanet from "./components/Planets/TechPlanet";
import CulturePlanet from "./components/Planets/CulturePlanet";
import AdvityaLogo from "./Optimized-Logo.png";
import EarthPlanet from "./components/Planets/EarthPlanet";

import "./PageScroll.css";
export default class PageScroll extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = number => {
    this.setState({ currentPage: number });
  };

  render() {
    return (
      <PageT ref={c => (this._pageScroller = c)}>
        <div className="component first-component" id="home">
          <div className="logo">
            <img src={AdvityaLogo} />
          </div>
          <div id="down" className="chevs">
            <div className="one">
              <span className="chevron bottom" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron bottom" />
            </div>
          </div>
        </div>
        <div className="component second-component" id="techfest">
          <div id="up" className="chevs">
            <div className="one">
              <span className="chevron top" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron top" />
            </div>
          </div>
          <TechPlanet />
          <div id="down-two" className="chevs">
            <div className="one">
              <span className="chevron bottom" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron bottom" />
            </div>
          </div>
        </div>
        <div className="component third-component" id="culturefest">
          <div id="up-two" className="chevs">
            <div className="one">
              <span className="chevron top" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron top" />
            </div>
          </div>
          <CulturePlanet />
          <div id="down-three" className="chevs">
            <div className="one">
              <span className="chevron bottom" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron bottom" />
            </div>
          </div>
        </div>
        <div className="component fourth-component" id="sportsfest">
          <div id="up-three" className="chevs">
            <div className="one">
              <span className="chevron top" />
            </div>
            <div className="two">
              {" "}
              <span className="chevron top" />
            </div>
          </div>
          <EarthPlanet />
        </div>
      </PageT>
    );
  }
}
