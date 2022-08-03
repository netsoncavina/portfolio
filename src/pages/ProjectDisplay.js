import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import tabtitle from "../helpers/GeneralFunctions";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import herokuIcon from "../assets/icones/cib-heroku.svg";
export default function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  tabtitle(project.name);
  return (
    <div className="project">
      <div className="arrow-left">
        {id > 0 ? (
          <Link to={`/project/${id - 1}`}>
            <ArrowBackIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="arrow-right">
        {id < 7 ? (
          <Link to={`/project/${Number(id) + 1}`}>
            <ArrowForwardIcon />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <h1>{project.name}</h1>
      <img className="projectImage" src={project.image} alt={project.name} />
      <h3>Técnologias: {project.skills}</h3>
      <p className="description">{project.description}</p>
      {/* <p className="link-description">Links uteis:</p> */}
      <div className="links">
        <a href={project.github} target="_blank">
          <GitHubIcon />
        </a>
        {project.heroku ? (
          <a href={project.heroku} target="_blank">
            <img className="icon" src={herokuIcon} alt="heroku" />
          </a>
        ) : null}
        {project.youtube ? (
          <a className="icon" href={project.youtube} target="_blank">
            <YouTubeIcon />
          </a>
        ) : null}
      </div>
    </div>
  );
}
