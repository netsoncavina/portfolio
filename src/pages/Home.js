import React from "react";
import "../styles/Home.css";
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import EmailIcon from "@material-ui/icons/Email";
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
            Github
          </a>
          <a target="_blank" id="email" onClick={emailObfuscation}>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/netson-cavina-487736115/"
            target="_blank"
          >
            {/* <LinkedinIcon /> */} Linkedin
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Tecnologias</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, Bootstrap, React, Redux, Material UI </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Java Spring, .NET, MongoDB, MySQL, SQL Server{" "}
            </span>
          </li>
          <li className="item">
            <h2>Linguagens</h2>
            <span>Javascript, Python, C#, Flutter, Dart, Java, C </span>
          </li>
          <li className="item">
            <h2>Ferramentas</h2>
            <span>VS Code, GIT, Visual Studio, Eclipse, Figma, Postman </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
