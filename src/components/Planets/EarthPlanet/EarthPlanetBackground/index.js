import React, { Component } from 'react';
import './EarthPlanetBackground.css';
import trophy from './trophy.svg';
import trophy_m from './trophy_m.svg';
import medal from './medal.svg';
import medal_m from './medal_m.svg';

class EarthPlanetBackground extends Component {
  render() {
    return (
      <div className="EarthPlanetBackground">
        <CollectionOfItems />
      </div>
    );
  }
}

class CollectionOfItems extends Component {
  render(){
    return(
      <div className="CollectionOfItems">
        <Trophy SportsItem_num="1"/>
        <TrophyM SportsItem_num="2"/>
        <Medal SportsItem_num="3"/>
        <MedalM SportsItem_num="4"/>
      </div>
    )
  }
}


class Trophy extends Component {
  constructor(props){
    super(props);
    this.SportsItem_num = props.SportsItem_num;
  }

  render(){
    var cl = "Trophy SportsItem-"+this.SportsItem_num+" SportsItem"
    return(
      <div className={cl}>
        <img src={trophy}></img>
      </div>
    );
  }
}


class TrophyM extends Component {
  constructor(props){
    super(props);
    this.SportsItem_num = props.SportsItem_num;
  }

  render(){
    var cl = "Trophy SportsItem-"+this.SportsItem_num+" SportsItem"
    return(
      <div className={cl}>
        <img src={trophy_m}></img>
      </div>
    );
  }
}

class Medal extends Component {
  constructor(props){
    super(props);
    this.SportsItem_num = props.SportsItem_num;
  }

  render(){
    var cl = "Medal SportsItem-"+this.SportsItem_num+" SportsItem"
    return(
      <div className={cl}>
        <img src={medal}></img>
      </div>
    );
  }
}


class MedalM extends Component {
  constructor(props){
    super(props);
    this.SportsItem_num = props.SportsItem_num;
  }

  render(){
    var cl = "Medal SportsItem-"+this.SportsItem_num+" SportsItem"
    return(
      <div className={cl}>
        <img src={medal_m}></img>
      </div>
    );
  }
}

export default EarthPlanetBackground;