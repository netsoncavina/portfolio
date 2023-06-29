import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experiences.css";
import SchoolIcon from "../assets/icones/college.svg";
import WorkIcon from "../assets/icones/work.svg";
import tabtitle from "../helpers/GeneralFunctions";

export default function Experiences() {
  tabtitle("Portfólio Netson - Experiências");
  return (
    <div className="experiences">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2015"
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={SchoolIcon}
              alt="school icon"
              style={{
                height: "55px",
                width: "55px",
                margin: "auto",
                filter:
                  "invert(99%) sepia(0%) saturate(104%) hue-rotate(283deg) brightness(101%) contrast(101%)",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            E.E. DR. Paulo Lauro
          </h3>
          <p>Ensino Médio</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={SchoolIcon}
              alt="school icon"
              style={{
                height: "55px",
                width: "55px",
                margin: "auto",
                filter:
                  "invert(99%) sepia(0%) saturate(104%) hue-rotate(283deg) brightness(101%) contrast(101%)",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">ETEC Itaquera II</h3>
          <p>Técnico em Desenho da Construção Civil</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={SchoolIcon}
              alt="school icon"
              style={{
                height: "55px",
                width: "55px",
                margin: "auto",
                filter:
                  "invert(99%) sepia(0%) saturate(104%) hue-rotate(283deg) brightness(101%) contrast(101%)",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Fatec Tatuapé</h3>
          <p>Técnólogo em Construção de Edificios</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{
            background: "#ECD444",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={WorkIcon}
              alt="work icon"
              style={{
                height: "45px",
                width: "45px",
                margin: "auto",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Fatec Tatuapé</h3>
          <h5>Laboratório de Materiais</h5>
          <p>Assistente de laboratório</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{
            background: "#ECD444",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={WorkIcon}
              alt="work icon"
              style={{
                height: "45px",
                width: "45px",
                margin: "auto",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Azimute Med</h3>
          <h5>Assistente de Qualidade</h5>
          <p>
            Desenvolvimento de testes de qualidade, produção e revisão de
            documentos
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - presente"
          iconStyle={{
            background: "#3e497a",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={SchoolIcon}
              alt="school icon"
              style={{
                height: "55px",
                width: "55px",
                margin: "auto",
                filter:
                  "invert(99%) sepia(0%) saturate(104%) hue-rotate(283deg) brightness(101%) contrast(101%)",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Fatec Zona Leste</h3>

          <p>Desenvolvimento de Software Multiplataforma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{
            background: "#ECD444",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={WorkIcon}
              alt="work icon"
              style={{
                height: "45px",
                width: "45px",
                margin: "auto",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Fatec Zona Leste</h3>
          <h5>Pesquisa com Machine Learning</h5>
          <p>Aluno Pesquisador</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{
            background: "#ECD444",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={WorkIcon}
              alt="work icon"
              style={{
                height: "45px",
                width: "45px",
                margin: "auto",
              }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Desenvolvedor PJ</h3>
          {/* <h5>Desenvolvimento Full Stack</h5> */}
          <p>Desenvolvedor Fullstack</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
