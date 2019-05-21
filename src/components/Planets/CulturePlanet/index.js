import React, { Component } from "react";
import "./CulturePlanet.css";
import CulturePlanetBackground from "./CulturePlanetBackground";

class CulturePlanet extends Component {
  render() {
    return (
      <div className="CulturePlanetContainer hide">
        <CulturePlanetBackground />
        <div
          className="CulturePlanet"
          onClick={() => {
            window.location = "/Advitya19/events";
          }}
        >
          <div className="CulturePlanetShadow" />
        </div>
        <div className="CulturePlanetHead">
          <h1>
            CULTURAL
            <br />
            FEST
          </h1>
        </div>
      </div>
    );
  }
}

export default CulturePlanet;
