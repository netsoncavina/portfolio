import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { projectList } from "../helpers/ProjectList";
import tabtitle from "../helpers/GeneralFunctions";

export default function Projects() {
  tabtitle("Portfólio Netson - Projetos");

  return (
    <div className="projects">
      <h1> Projetos </h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}
