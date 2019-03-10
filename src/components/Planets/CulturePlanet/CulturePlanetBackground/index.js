import React, { Component } from 'react';
import './CulturePlanetBackground.css';
import petal from './petal.svg';

class CulturePlanetBackground extends Component {
  render() {
    return (
      <div className="CulturePlanetBackground">
        <Flower />
      </div>
    );
  }
}

class Flower extends Component {
  render(){
    return(
      <div className="Flower">
        <Petal petal_num="1"/>
        <Petal petal_num="2"/>
        <Petal petal_num="3"/>
        <Petal petal_num="4"/>
        <Petal petal_num="5"/>
        <Petal petal_num="6"/>
      </div>
    )
  }
}

class Petal extends Component {
  constructor(props){
    super(props);
    this.petal_num = props.petal_num;
  }

  render(){
    var cl = "Petal-"+this.petal_num+" Petal"
    return(
      <div className={cl}>
        <img src={petal}></img>
      </div>
    );
  }
}

export default CulturePlanetBackground;