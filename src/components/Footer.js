import React from "react";
import GitHubIcon from "../assets/icones/github.svg";
import EmailIcon from "../assets/icones/email.svg";
import LinkedinIcon from "../assets/icones/linkedin.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/netsoncavina" target="_blank">
          <img src={GitHubIcon} alt="GitHub" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/netson-cavina-487736115/"
          target="_blank"
        >
          <img src={LinkedinIcon} alt="Linkedin" className="icon" />
        </a>
      </div>
      <p> &copy; 2023 Netson Cavina</p>
    </div>
  );
}
