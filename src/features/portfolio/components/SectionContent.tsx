import React from "react";
import { useTranslation } from "react-i18next";
import type { PortfolioSection, Project } from "../types";
import { Timeline } from "@/shared/components/Timeline/Timeline";
import { Button } from "@/shared/components/Button/Button";
import { ExternalLink, Github } from "lucide-react";
import { GithubStats } from "./GithubStats";

interface Props {
  section: PortfolioSection | null;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const projects: (Project & { descKey: string })[] = [
  {
    name: "Buu Agenda",
    link: "https://buuapp.com.br/",
    descKey: "portfolio.sections_content.use_cases.buu_desc",
  },
  {
    name: "Outro Projeto",
    link: "https://github.com/seu-usuario/outro-projeto",
    descKey: "portfolio.sections_content.use_cases.other_desc",
  },
];

export const SectionContent: React.FC<Props> = ({ section }) => {
  const { t } = useTranslation();

  const renderSimpleList = (key: string) => {
    const items = t(key, { returnObjects: true }) as string[];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  switch (section) {
    case "Journey":
      return (
        <Timeline
          items={
            t("portfolio.sections_content.journey", {
              returnObjects: true,
            }) as TimelineItem[]
          }
        />
      );

    case "Certifications":
      return renderSimpleList("portfolio.sections_content.certifications");

    case "Use Cases":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <section>
            <h3 style={{ marginBottom: "16px", fontSize: "1.2rem" }}>
              {t("portfolio.sections_content.use_cases.featured_title", {
                defaultValue: "Featured Projects",
              })}
            </h3>
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
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
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <ExternalLink size={14} style={{ marginRight: "4px" }} />
                      {t("portfolio.sections_content.use_cases.view_project")}
                    </Button>
                  </div>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
                    {t(project.descKey)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3
              style={{
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "1.2rem",
              }}
            >
              <Github size={20} />
              {t("portfolio.sections_content.use_cases.github_activity", {
                defaultValue: "Recent GitHub Activity",
              })}
            </h3>
            <GithubStats />
          </section>
        </div>
      );

    case "Awards":
      return renderSimpleList("portfolio.sections_content.awards");

    case "Hobbies":
      return renderSimpleList("portfolio.sections_content.hobbies");

    default:
      return <p>{t("portfolio.sections_content.empty")}</p>;
  }
};
