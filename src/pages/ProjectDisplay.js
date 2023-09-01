import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import tabtitle from "../helpers/GeneralFunctions";
import GitHubIcon from "../assets/icones/github.svg";
import YouTubeIcon from "../assets/icones/youtube.svg";
import herokuIcon from "../assets/icones/cib-heroku.svg";
import vercelIcon from "../assets/icones/vercel.svg";
import ArrowBack from "../assets/icones/arrow-back.svg";
import ArrowForward from "../assets/icones/arrow-forward.svg";
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
            <img className="arrow" src={ArrowBack} alt="arrow-back" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
      <div className="arrow-right">
        {id < 7 ? (
          <Link to={`/project/${Number(id) + 1}`}>
            <img className="arrow" src={ArrowForward} alt="arrow-forward" />
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
            <img className="icon github" src={GitHubIcon} alt="github" />
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
                <img className="icon" src={YouTubeIcon} alt="youtube" />
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
            <a href={project.vercel} target="_blank" className="icon">
              <img className="icon" src={vercelIcon} alt="vercel" />
            </a>
          </Tippy>
        ) : null}
      </div>
    </div>
  );
}
