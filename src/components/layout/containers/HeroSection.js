import React, { Component } from "react";
import CustomButton from "../../elements/buttons/CustomButton/CustomButton";

export class HeroSection extends Component {
  render() {
    return (
      <div className="full-width-container hero-section-container">
        <div className="hero-section-child left-child">
          <h1>There's a better way to ask</h1>
          <p>
            You don't want to make a boring form. And your audience won't answer
            one. Create a typeform instead—and make everyone happy.
          </p>
          <CustomButton
            btnText="Get Started - it's Free"
            color="#FFF"
            backgroundColor="#262627"
            margin="0px 0px 10px"
          />
          <p className="sub-text">✓ No credit card required</p>
          <p className="sub-text">✓ No time limit on Free plan</p>
        </div>
        <div className="hero-section-child">YO!!</div>
      </div>
    );
  }
}

export default HeroSection;
