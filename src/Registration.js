import React, { Component } from "react";
import { FormikForm } from "./RegistrationForm";
export class Registration extends Component {
  render() {
    return (
      <div id="parent">
        <div id="form">
          <div className="topbar">
            <h1>Registration </h1>{" "}
          </div>
          <div className="formcontent">
            <FormikForm />
          </div>
        </div>
      </div>
    );
  }
}
