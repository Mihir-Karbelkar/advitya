import React, { Component } from "react";
import "./NavMenu.css";
import Ham from "./ham.svg";
import Cross from "./cross.svg";

class NavMenu extends Component {
  closeNavMenu() {
    var elem = document.getElementById("NavMenu");
    elem.className = "NavMenuClosed";
    elem = document.getElementById("NavMenuOpen");
    elem.className = "NavMenuOpenShow";
  }

  openNavMenu() {
    var elem = document.getElementById("NavMenu");
    elem.className = "NavMenuOpen";
    elem = document.getElementById("NavMenuOpen");
    elem.className = "NavMenuOpenHide";
  }

  home() {
    window.location.replace("/Advitya19");
  }

  events() {
    window.location.replace("/Advitya19/events");
  }

  about() {
    window.location.replace("/Advitya19/about");
  }

  render() {
    return (
      <div className="NavMenuContainer">
        <div className="NavMenuClosed" id="NavMenu">
          <img
            src={Cross}
            className="NavMenuClose"
            alt="Close"
            onClick={() => this.closeNavMenu()}
          />
          <img
            src={Ham}
            className="NavMenuOpenShow"
            alt="Open"
            id="NavMenuOpen"
            onClick={() => this.openNavMenu()}
          />
          <div className="NavMenuItem" onClick={() => this.home()}>
            Home
          </div>
          <div className="NavMenuItem" onClick={() => this.events()}>
            Events
          </div>
          <div className="NavMenuItem" onClick={() => this.about()}>
            About
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;
