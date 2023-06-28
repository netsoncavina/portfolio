import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/netsoncavina" target="_blank">
          {/* <GitHubIcon /> */} GitHub
        </a>
        <a href="https://www.instagram.com/netsoncavina/" target="_blank">
          {/* <InstagramIcon /> */} Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/netson-cavina-487736115/"
          target="_blank"
        >
          {/* <LinkedinIcon /> */} Linkedin
        </a>
      </div>
      <p> &copy; 2022 Netson Cavina</p>
    </div>
  );
}
