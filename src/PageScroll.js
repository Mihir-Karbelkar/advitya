import React, { Component } from "react";
import PageT from "./PageT";
import TechPlanet from "./components/Planets/TechPlanet";
import CulturePlanet from "./components/Planets/CulturePlanet";

export default class PageScroll extends Component {
  goToPage = pageNumber => {
    this.PageT.goToPage(pageNumber);
  };
  render() {
    return (
      <PageT ref={c => (this.PageT = c)}>
        <div className="component first-component">
          <h1>Advitya</h1>
        </div>

        <div className="component second-component">
          <TechPlanet />
        </div>
        <div className="component fourth-component">
          <CulturePlanet />
        </div>
      </PageT>
    );
  }
}
