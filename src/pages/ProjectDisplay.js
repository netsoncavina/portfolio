import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import tabtitle from "../helpers/GeneralFunctions";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import herokuIcon from "../assets/icones/cib-heroku.svg";
import vercelIcon from "../assets/icones/vercel.svg";
export default function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  tabtitle(project.name);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project">
      <div className="arrow-left">
        {id > 0 ? (
          <Link to={`/project/${id - 1}`}>
            {/* <ArrowBackIcon /> */}
            Proximo
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="arrow-right">
        {id < 7 ? (
          <Link to={`/project/${Number(id) + 1}`}>
            {/* <ArrowForwardIcon /> */}
            Anterior
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <h1>{project.name}</h1>
      <img className="projectImage" src={project.image} alt={project.name} />
      <h3>Tecnologias: {project.skills}</h3>
      <p className="description">{project.description}</p>
      <p className="link-description">Para mais informações:</p>
      <div className="icons">
        <Tippy interactive={false} content={<a>Link para o repositório</a>}>
          <a href={project.github} target="_blank">
            {/* <GitHubIcon /> */} GitHub
          </a>
        </Tippy>
        {project.youtube ? (
          <div>
            <Tippy
              className="tooltip"
              interactive={false}
              content={<a>Video demonstração</a>}
            >
              <a className="icon" onClick={() => setIsOpen(true)}>
                {/* <YouTubeIcon /> */} Youtube
              </a>
            </Tippy>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={project.youtube}
              onClose={() => setIsOpen(false)}
            />
          </div>
        ) : null}
        {project.heroku ? (
          <Tippy interactive={false} content={<a>Link para o site</a>}>
            <a href={project.heroku} target="_blank">
              <img className="icon" src={herokuIcon} alt="heroku" />
            </a>
          </Tippy>
        ) : null}
        {project.vercel ? (
          <Tippy interactive={false} content={<a>Link para o site</a>}>
            <a href={project.vercel} target="_blank">
              <img className="icon" src={vercelIcon} alt="vercel" />
            </a>
          </Tippy>
        ) : null}
      </div>
    </div>
  );
}
