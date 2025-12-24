import React from "react";
import type { PortfolioSection, Project } from "../types";
import { Timeline } from "@/shared/components/Timeline/Timeline";
import { Button } from "@/shared/components/Button/Button";
import { ExternalLink } from "lucide-react";

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
    case "Journey":
      return (
        <Timeline
          items={[
            {
              date: "2010",
              title: "IT Career Kickoff",
              description: "Started in technical support and infrastructure.",
            },
            {
              date: "2015",
              title: "Project Management",
              description:
                "Transitioned to leadership, managing agile teams and complex deliveries.",
            },
            {
              date: "2023",
              title: "Full-stack Focus",
              description: "Launched Buu Agenda using React and Node.js.",
            },
          ]}
        />
      );
    case "Certifications":
      return (
        <ul>
          <li>PMP® - Project Management Professional</li>
          <li>Certified Scrum Master® (CSM)</li>
          <li>Advanced React & Software Architecture</li>
        </ul>
      );
    case "Use Cases":
      return (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {projects.map((project) => (
            <li
              key={project.name}
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <strong>{project.name}</strong>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink size={14} style={{ marginRight: "4px" }} />
                  View Project
                </Button>
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
                {project.name === "Buu Agenda"
                  ? "Full-stack scheduling system with 99.9% uptime, built with React and Node.js."
                  : "Real-time data visualization for strategic project tracking and KPIs."}
              </p>
            </li>
          ))}
        </ul>
      );
    case "Awards":
      return (
        <ul>
          <li>Best IT Project of the Year (2022)</li>
          <li>Innovation Excellence Award</li>
        </ul>
      );
    case "Hobbies":
      return (
        <ul>
          <li>Technical Reading</li>
          <li>Strategy Games</li>
          <li>Continuous Learning (Web Ecosystem)</li>
        </ul>
      );
    default:
      return <p>Select a section to explore details.</p>;
  }
};
