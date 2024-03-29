import React from "react";
import "../styles/Home.css";
import GitHubIcon from "../assets/icones/github.svg";
import EmailIcon from "../assets/icones/email.svg";
import LinkedinIcon from "../assets/icones/linkedin.svg";
import tabtitle from "../helpers/GeneralFunctions";
export default function Home() {
  function emailObfuscation() {
    const email = "mailto:netsoncavina@gmail.com";
    const emailIcon = document.getElementById("email");
    emailIcon.setAttribute("href", email);
  }
  tabtitle("Portfólio Netson - Home");
  return (
    <div className="home">
      <div className="about">
        <h2>Olá, eu sou o Netson!</h2>
        <div className="prompt">
          <p>Um desenvolvedor apaixonado por programar e aprender.</p>
          <a href="https://github.com/netsoncavina" target="_blank">
            <img className="icon" src={GitHubIcon} alt="github" />
          </a>
          <a target="_blank" id="email" onClick={emailObfuscation}>
            <img className="icon" src={EmailIcon} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/netson-cavina-487736115/"
            target="_blank"
          >
            <img className="icon" src={LinkedinIcon} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Tecnologias</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, Bootstrap, React, React Native, Redux, Material UI{" "}
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Java Spring, .NET, MongoDB, MySQL, SQL Server
            </span>
          </li>
          <li className="item">
            <h2>Linguagens</h2>
            <span>Javascript, Python, C#, Flutter, Dart, Java, C </span>
          </li>
          <li className="item">
            <h2>Ferramentas</h2>
            <span>
              VS Code, GIT, Visual Studio, Eclipse, Figma, Postman, Insomnia{" "}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
