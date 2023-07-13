import React, { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { projectList } from "../helpers/ProjectList";
import tabtitle from "../helpers/GeneralFunctions";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Projects() {
  tabtitle("Portfólio Netson - Projetos");

  const [selectedOption, setSelectedOption] = useState(
    projectList.length > 0 ? { value: "all", label: "Todos" } : null
  );

  const options = [
    { value: "all", label: "Todos" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "desktop", label: "Desktop" },
  ];

  const defaultOption = options[0];

  return (
    <div className="projects">
      <h1> Projetos </h1>
      <div className="projectsFilter">
        <Dropdown
          className="dropdown"
          options={options}
          onChange={setSelectedOption}
          value={selectedOption}
          placeholder="Selecione uma categoria"
        />
      </div>
      <div className="projectList">
        {projectList.map((project, idx) => {
          if (selectedOption === null || selectedOption.value === "all") {
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                image={project.image}
              />
            );
          } else if (project.categories.includes(selectedOption.value)) {
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                image={project.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
