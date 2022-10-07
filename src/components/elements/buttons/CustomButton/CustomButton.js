import React from "react";

import "./CustomButton.scss";

function CustomButton({ btnText, color, backgroundColor, margin }) {
  return (
    <button
      id="custom-button"
      style={{
        color,
        backgroundColor,
        margin,
      }}
    >
      {btnText}
    </button>
  );
}

export default CustomButton;
