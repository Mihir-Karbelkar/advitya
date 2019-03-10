import React, { Component } from 'react';
import './EarthPlanet.css';
import EarthPlanetBackground from './EarthPlanetBackground';

class EarthPlanet extends Component {
  render() {
    return (
      <div className="EarthPlanetContainer">
        <EarthPlanetBackground />
        <div className="EarthPlanet">
          <div className="EarthPlanetShadow"></div>
        </div>
      </div>
    );
  }
}

export default EarthPlanet;
