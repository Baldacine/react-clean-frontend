import React from "react";
import type { PortfolioSection, Project } from "../types";
import { Timeline } from "@/shared/components/Timeline/Timeline";

interface Props {
  section: PortfolioSection | null;
}

const jornadaData = [
  {
    date: "2010",
    title: "Início da Carreira",
    description: "Primeiros passos no suporte técnico e infraestrutura de TI.",
  },
  {
    date: "2015",
    title: "Gerência de Projetos",
    description:
      "Promoção para liderança de equipes e implementação de metodologias ágeis.",
  },
  {
    date: "2023",
    title: "Buu Agenda & React",
    description:
      "Foco total no ecossistema JavaScript e lançamento do Buu Agenda.",
  },
  {
    date: "2025",
    title: "Design Systems",
    description:
      "Arquitetando componentes escaláveis com Styled Components e TypeScript.",
  },
];

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
      return <Timeline items={jornadaData} />;
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
