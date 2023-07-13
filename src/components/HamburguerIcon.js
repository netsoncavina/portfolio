import React, { useState } from "react";
import "../styles/HamburguerIcon.css";

function HamburguerIcon({ isOpen }) {
  return (
    <div id="nav-icon1" className={isOpen ? "open" : null}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburguerIcon;
