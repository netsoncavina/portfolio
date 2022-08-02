import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
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
