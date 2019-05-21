import React, { Component } from "react";
import "./TechPlanet.css";
import TechPlanetBackground from "./TechPlanetBackground";

class TechPlanet extends Component {
  render() {
    return (
      <div className="TechPlanetContainer hide">
        <TechPlanetBackground />
        <div
          className="TechPlanet"
          onClick={() => {
            window.location = "/Advitya19/events";
          }}
        >
          <div className="TechPlanetShadow" />
        </div>
        <div className="TechPlanetHead">
          <h1>
            TECHNICAL
            <br />
            FEST
          </h1>
        </div>
      </div>
    );
  }
}

export default TechPlanet;
