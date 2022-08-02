import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import tabtitle from "../helpers/GeneralFunctions";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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
      <img src={project.image} alt={project.name} />
      <h3>Técnologias: {project.skills}</h3>
      <p className="description">{project.description}</p>
      <a href={project.github} target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
}
