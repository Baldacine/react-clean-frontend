import { Apple, ExternalLink, Github, PlayCircle } from "lucide-react";
import { Button } from "@/shared/components/Button/Button";
import { useTranslation } from "react-i18next";
import type { Project } from "../types";
import { GithubStats } from "./GithubStats";

const projects: Project[] = [
  {
    name: "Buu Agenda",
    link: "https://buuapp.com.br/",
    descKey: "portfolio.sections_content.use_cases.buu_desc",
    iosLink: "https://apps.apple.com/br/app/buu/id6749398692",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.buu.online&hl=pt_BR",
  },
];

export const UseCaseSection = () => {
  const { t } = useTranslation();

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
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink size={14} style={{ marginRight: "4px" }} />
                  {t("portfolio.sections_content.use_cases.view_project")}
                </Button>
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
                {t(project.descKey)}
              </p>

              {(project.iosLink || project.androidLink) && (
                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  {project.iosLink && (
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => window.open(project.iosLink, "_blank")}
                    >
                      <Apple size={14} />
                      App Store
                    </Button>
                  )}
                  {project.androidLink && (
                    <Button
                      variant="primary"
                      size="small"
                      onClick={() => window.open(project.androidLink, "_blank")}
                    >
                      <PlayCircle size={14} />
                      Google Play
                    </Button>
                  )}
                </div>
              )}
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
};
