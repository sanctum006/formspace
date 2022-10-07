import React, { Component } from "react";
import HeroSection from "../components/layout/containers/HeroSection";
import Footbar from "../components/layout/navigation/Footbar";
import Navbar from "../components/layout/navigation/Navbar";

export class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-container-secondary">
          <Navbar />
          <HeroSection />
        </div>
        <Footbar />
      </div>
    );
  }
}

export default HomePage;
