import React, { Component } from "react";
import PageT from "./PageT";
import TechPlanet from "./components/Planets/TechPlanet";
import CulturePlanet from "./components/Planets/CulturePlanet";
import AdvityaLogo from "./Optimized-Logo.png";
import "./PageScroll.css";
export default class PageScroll extends Component {
  goToPage = pageNumber => {
    this.PageT.goToPage(pageNumber);
  };
  render() {
    return (
      <PageT ref={c => (this.PageT = c)}>
        <div className="component first-component" id="home">
          <div id="register-form" />

          <div className="logo">
            <img src={AdvityaLogo} />
          </div>
        </div>

        <div className="component second-component" id="techfest">
          <TechPlanet />
        </div>
        <div className="component fourth-component" id="culturefest">
          <CulturePlanet />
        </div>
      </PageT>
    );
  }
}
