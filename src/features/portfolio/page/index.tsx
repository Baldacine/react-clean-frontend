import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type { PortfolioSection } from "../types";
import { Card } from "@/shared/components/Card/Card";
import {
  Container,
  Hero,
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroProfile,
  HeroSummary,
  NavigationAction,
  NavButtons,
  PortfolioNavigation,
  UtilityActions,
} from "./styles";
import profilePhoto from "@/assets/img/profile.jpg";
import { Modal } from "@/shared/components/Modal/Modal";
import { SectionContent } from "../components/SectionContent";
import { Button } from "@/shared/components/Button/Button";
import {
  ArrowRight,
  Briefcase,
  Code,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Trophy,
  Wrench,
} from "lucide-react";
import { Avatar } from "@/shared/components/Avatar/Avatar";

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [section, setSection] = useState<PortfolioSection | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections: PortfolioSection[] = [
    "TechStack",
    "Journey",
    "Certifications",
    "Projects",
    "Awards",
  ];

  const sectionIcons: Record<PortfolioSection, React.ReactNode> = {
    TechStack: <Wrench size={32} />,
    Journey: <Briefcase size={32} />,
    Certifications: <GraduationCap size={32} />,
    Projects: <Code size={32} />,
    Awards: <Trophy size={32} />,
  };

  const handleSectionChange = (s: PortfolioSection) => {
    setSection(s);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Hero aria-labelledby="portfolio-title">
        <HeroProfile>
          <Avatar
            src={profilePhoto}
            alt="Wanderson Baldacine"
            size={176}
            shape="circle"
          />
        </HeroProfile>

        <HeroContent>
          <h1 id="portfolio-title">Wanderson Baldacine</h1>
          <h2>{t("portfolio.headline")}</h2>

          <HeroSummary>
            <HeroDescription>{t("portfolio.description")}</HeroDescription>
            <HeroDescription>
              {t("portfolio.description_focus")}
            </HeroDescription>
          </HeroSummary>

          <HeroActions>
            <Button
              variant="primary"
              size="medium"
              onClick={() => handleSectionChange("Projects")}
            >
              <Code size={18} aria-hidden="true" />
              {t("portfolio.hero.view_projects")}
            </Button>

            <Button
              variant="outline"
              size="medium"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/wandersonbaldacine",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Linkedin size={18} aria-hidden="true" />
              {t("portfolio.hero.linkedin")}
            </Button>

            <UtilityActions>
              <Button
                variant="circle"
                size="medium"
                aria-label={t("portfolio.social.email")}
                onClick={() =>
                  (window.location.href = "mailto:wandersonse0@gmail.com")
                }
              >
                <Mail size={17} aria-hidden="true" />
              </Button>

              <Button
                variant="circle"
                size="medium"
                aria-label={t("portfolio.social.github")}
                onClick={() =>
                  window.open(
                    "https://github.com/Baldacine/react-clean-frontend",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <Github size={17} aria-hidden="true" />
              </Button>
            </UtilityActions>
          </HeroActions>
        </HeroContent>
      </Hero>

      <PortfolioNavigation aria-label={t("portfolio.navigation.label")}>
        <NavButtons>
          {sections.map((s) => (
            <Card
              key={s}
              variant={isModalOpen && section === s ? "primary" : "outline"}
              icon={sectionIcons[s]}
              title={t(`portfolio.sections.${s}`)}
              description={t(`portfolio.section_descriptions.${s}`)}
              footer={
                <NavigationAction aria-hidden="true">
                  {t("portfolio.navigation.explore")}
                  <ArrowRight size={18} />
                </NavigationAction>
              }
              aria-label={t(`portfolio.sections.${s}`)}
              onClick={() => handleSectionChange(s)}
              width="100%"
              minWidth="150px"
            />
          ))}
        </NavButtons>
      </PortfolioNavigation>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeLabel={t("portfolio.modal.closeLabel")}
        title={section ? t(`portfolio.sections.${section}`) : ""}
        width="90vw"
        maxWidth={800}
        height="90vh"
        footer={
          <Button
            variant="outline"
            size="small"
            onClick={() => setIsModalOpen(false)}
          >
            {t("portfolio.modal.close")}
          </Button>
        }
      >
        <SectionContent section={section} />
      </Modal>
    </Container>
  );
};
