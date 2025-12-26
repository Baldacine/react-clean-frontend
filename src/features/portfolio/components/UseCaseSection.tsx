import { Apple, ExternalLink, Github, PlayCircle } from "lucide-react";
import { Button } from "@/shared/components/Button/Button";
import { useTranslation } from "react-i18next";
import type { ProfessionalExperience, Project } from "../types";
import { GithubStats, RepoCard, RepoCardHeader } from "./GithubStats";

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

const professionalExperience: ProfessionalExperience[] = [
  {
    name: "MedSempre",
    descKey: "portfolio.sections_content.career.medsempre_desc",
    androidLink:
      "https://play.google.com/store/search?q=medsempre&c=apps&hl=pt_BR",
    role: "Frontend Developer / Consultant",
  },
  {
    name: "PPC Jurong",
    descKey: "portfolio.sections_content.career.ppc_desc",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.globalsys.jurong_ppc_mobile&hl=pt_BR",
    role: "Frontend Developer / Consultant",
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

      <section>
        <h3 style={{ marginBottom: "16px", fontSize: "1.2rem" }}>
          {t("portfolio.sections_content.career.title", {
            defaultValue: "Enterprise Experience",
          })}
        </h3>
        <p style={{ fontSize: "0.9rem", marginBottom: "16px", opacity: 0.7 }}>
          {t("portfolio.sections_content.career.subtitle", {
            defaultValue:
              "Selected projects I've contributed to throughout my career.",
          })}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {professionalExperience.map((project) => (
            <RepoCard key={project.name}>
              <RepoCardHeader>
                <strong>{project.name}</strong>
                <div style={{ display: "flex", gap: "8px" }}>
                  {project.androidLink && (
                    <a href={project.androidLink} target="_blank">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </RepoCardHeader>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--primary)",
                  fontWeight: "bold",
                }}
              >
                {project.role}
              </span>
              <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                {t(project.descKey)}
              </p>
            </RepoCard>
          ))}
        </div>
      </section>
    </div>
  );
};
