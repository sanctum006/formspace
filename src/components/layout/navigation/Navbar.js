import React, { Component } from "react";
import CustomButton from "../../elements/buttons/CustomButton/CustomButton";

export class Navbar extends Component {
  render() {
    return (
      <div className="full-width-container navbar">
        <h1 className="navbar-header">Formspace</h1>
        <div>
          <CustomButton btnText="Log In" />
          <CustomButton btnText="Sign Up" color="#FFF" backgroundColor="#000" />
        </div>
      </div>
    );
  }
}

export default Navbar;
