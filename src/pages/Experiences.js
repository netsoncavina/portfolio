import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";
import tabtitle from "../helpers/GeneralFunctions";

export default function Experiences() {
  tabtitle("Portfólio Netson - Experiências");
  return (
    <div className="experiences">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            E.E. DR. Paulo Lauro
          </h3>
          <p>Ensino Médio</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">ETEC Itaquera II</h3>
          <p>Técnico em Desenho da Construção Civil</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Fatec Tatuapé</h3>
          <p>Técnólogo em Construção de Edificios</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#ECD444", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Fatec Tatuapé</h3>
          <h5>Laboratório de Materiais</h5>
          <p>Assistente de laboratório</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#ECD444", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Azimute Med</h3>
          <p>Assistente de Qualidade</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - presente"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Fatec Zona Leste</h3>
          <p>Desenvolvimento de Software Multiplataforma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#ECD444", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Fatec Zona Leste</h3>
          <h5>Pesquisa com Machine Learning</h5>
          <p>Aluno Pesquisador</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
