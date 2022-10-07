import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export class Footbar extends Component {
  render() {
    return (
      <div className="full-width-container home-page-footbar">
        <div>
          <h1>With love, from Jabalpur</h1>
        </div>
        <div className="home-page-footbar-icons">
          <FaGithub color="#FFF" size={25} />
          <FaLinkedin color="#FFF" size={25} />
        </div>
        <div>
          <h1>© Formspace</h1>
        </div>
      </div>
    );
  }
}

export default Footbar;
