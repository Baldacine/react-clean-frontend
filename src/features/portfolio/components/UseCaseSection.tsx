import styled from "styled-components";
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
    stacks: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "Styled Components",
      "GitHub",
      "Payment integration (Mercado Pago, Stripe)",
      "CI/CD",
      "Postgres",
      "WhatsApp API",
    ],
  },
];

const professionalExperience: ProfessionalExperience[] = [
  {
    name: "MedSempre",
    descKey: "portfolio.sections_content.career.medsempre_desc",
    androidLink:
      "https://play.google.com/store/search?q=medsempre&c=apps&hl=pt_BR",
    role: "Frontend Developer / Consultant",
    stacks: [
      "React Native",
      "API REST",
      "TypeScript",
      "Styled Components",
      "Azure DevOps",
      "Kanban",
      "Scrum",
    ],
  },
  {
    name: "PPC Jurong",
    descKey: "portfolio.sections_content.career.ppc_desc",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.globalsys.jurong_ppc_mobile&hl=pt_BR",
    role: "Frontend Developer / Consultant",
    stacks: [
      "React Native",
      "API REST",
      "TypeScript",
      "Styled Components",
      "GitHub",
      "Azure DevOps",
      "Kanban",
    ],
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Section = styled.section``;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  opacity: 0.8;
  margin: 0;
`;

const StoreButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
`;

const StackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`;

const StackTag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  padding: 4px 8px;
  border-radius: 999px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.md};
  background: ${({ theme }) => theme.colors.gray100};
`;

const CareerSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin-bottom: 16px;
  opacity: 0.7;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Role = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  opacity: 0.8;
`;

const StackTags = ({ stacks }: { stacks?: string[] }) => {
  if (!stacks?.length) return null;

  return (
    <StackWrapper>
      {stacks.map((stack) => (
        <StackTag key={stack}>{stack}</StackTag>
      ))}
    </StackWrapper>
  );
};

export const UseCaseSection = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Section>
        <SectionTitle>
          {t("portfolio.sections_content.use_cases.featured_title", {
            defaultValue: "Featured Projects",
          })}
        </SectionTitle>

        <ProjectList>
          {projects.map((project) => (
            <ProjectItem key={project.name}>
              <ProjectHeader>
                <strong>{project.name}</strong>
                <Button
                  variant="outline"
                  size="small"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink size={14} />
                  {t("portfolio.sections_content.use_cases.view_project")}
                </Button>
              </ProjectHeader>

              <ProjectDescription>{t(project.descKey)}</ProjectDescription>

              <StackTags stacks={project.stacks} />

              {(project.iosLink || project.androidLink) && (
                <StoreButtons>
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
                </StoreButtons>
              )}
            </ProjectItem>
          ))}
        </ProjectList>
      </Section>

      <Section>
        <SectionTitle>
          <Github size={20} />
          {t("portfolio.sections_content.use_cases.github_activity", {
            defaultValue: "Recent GitHub Activity",
          })}
        </SectionTitle>

        <GithubStats />
      </Section>

      <Section>
        <SectionTitle>
          {t("portfolio.sections_content.career.title", {
            defaultValue: "Enterprise Experience",
          })}
        </SectionTitle>

        <CareerSubtitle>
          {t("portfolio.sections_content.career.subtitle", {
            defaultValue:
              "Selected projects I've contributed to throughout my career.",
          })}
        </CareerSubtitle>

        <CareerGrid>
          {professionalExperience.map((project) => (
            <RepoCard key={project.name}>
              <RepoCardHeader>
                <strong>{project.name}</strong>
                {project.androidLink && (
                  <a
                    href={project.androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </RepoCardHeader>

              <Role>{project.role}</Role>

              <CardDescription>{t(project.descKey)}</CardDescription>

              <StackTags stacks={project.stacks} />
            </RepoCard>
          ))}
        </CareerGrid>
      </Section>
    </Wrapper>
  );
};
