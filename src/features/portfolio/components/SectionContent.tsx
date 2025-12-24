import React from "react";
import type { PortfolioSection, Project } from "../types";

interface Props {
  section: PortfolioSection | null;
}

const projects: Project[] = [
  { name: "Buu Agenda", link: "https://github.com/seu-usuario/buu-agenda" },
  {
    name: "Outro Projeto",
    link: "https://github.com/seu-usuario/outro-projeto",
  },
];

export const SectionContent: React.FC<Props> = ({ section }) => {
  switch (section) {
    case "Jornada":
      return (
        <ul>
          <li>2010 - Início da carreira em TI</li>
          <li>2015 - Promoção a gerente de projetos</li>
          <li>2023 - Desenvolvimento do Buu Agenda</li>
        </ul>
      );
    case "Certificações":
      return (
        <ul>
          <li>PMP - Project Management Professional</li>
          <li>Scrum Master</li>
          <li>React Avançado</li>
        </ul>
      );
    case "Use Cases":
      return (
        <ul>
          {projects.map((p) => (
            <li key={p.name}>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      );
    case "Premiações":
      return (
        <ul>
          <li>Melhor Projeto de TI 2022</li>
          <li>Reconhecimento interno por inovação</li>
        </ul>
      );
    case "Hobbies":
      return (
        <ul>
          <li>Leitura</li>
          <li>Futebol</li>
          <li>Tecnologia</li>
          <li>Games</li>
        </ul>
      );
    default:
      return <p>Escolha uma seção acima para visualizar.</p>;
  }
};
