import React, { Component } from "react";
import "./EarthPlanet.css";
import EarthPlanetBackground from "./EarthPlanetBackground";

class EarthPlanet extends Component {
  render() {
    return (
      <div className="EarthPlanetContainer hide">
        <EarthPlanetBackground />
        <div
          className="EarthPlanet"
          onClick={() => {
            window.location = "/Advitya19/events";
          }}
        >
          <div className="EarthPlanetShadow" />
        </div>
        <div className="EarthPlanetHead">
          <h1>
            SPORTS
            <br />
            FEST
          </h1>
        </div>
      </div>
    );
  }
}

export default EarthPlanet;
