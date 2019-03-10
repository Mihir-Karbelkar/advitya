import React, { Component } from "react";
import "./TechPlanetBackground.css";
import gear_1 from "./gear1.svg";
import gear_2 from "./gear2.svg";
import gear_3 from "./gear3.svg";
import gear_4 from "./gear4.svg";

class TechPlanetBackground extends Component {
  render() {
    return (
      <div className="TechPlanetBackground">
        <GearBoard />
      </div>
    );
  }
}

class GearBoard extends Component {
  render() {
    return (
      <div className="GearBoard">
        <Gear gear_num="1" />
        <Gear gear_num="2" />
        <Gear gear_num="3" />
        <Gear gear_num="4" />
      </div>
    );
  }
}

class Gear extends Component {
  constructor(props) {
    super(props);
    this.gear_num = props.gear_num;
  }

  render() {
    switch (this.gear_num) {
      case "1":
        return (
          <div className="Gear-1 Gear ">
            <img src={gear_1} />
          </div>
        );
      case "2":
        return (
          <div className="Gear-2 Gear ">
            <img src={gear_2} />
          </div>
        );
      case "3":
        return (
          <div className="Gear-3 Gear">
            <img src={gear_3} />
          </div>
        );
      case "4":
        return (
          <div className="Gear-4 Gear ">
            <img src={gear_4} />
          </div>
        );
      default:
        return null;
    }
  }
}

export default TechPlanetBackground;
