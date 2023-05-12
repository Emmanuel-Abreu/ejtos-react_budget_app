import React from "react";

import '../assets/styles/DecreaseBtn.css'

const DecreaseBtn = () => {

  const buttonClickedMsg = () => {
    console.log("clicked")
  }

  return (
      <button onClick={buttonClickedMsg} className="DecreaseBtn">
        -
      </button>
  );
}

export default DecreaseBtn;