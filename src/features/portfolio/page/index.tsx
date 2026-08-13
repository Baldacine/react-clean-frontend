import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import type { PortfolioSection } from "../types";
import { Card } from "@/shared/components/Card/Card";
import { Container, Header, NavButtons, SocialActions } from "./styles";
import profilePhoto from "@/assets/img/profile.jpg";
import { Modal } from "@/shared/components/Modal/Modal";
import { SectionContent } from "../components/SectionContent";
import { Button } from "@/shared/components/Button/Button";
import {
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
      <Header>
        <Avatar
          src={profilePhoto}
          alt="Wanderson Baldacine"
          size={120}
          shape="circle"
        />
        <h1>Wanderson Baldacine</h1>
        <h2>{t("portfolio.headline")}</h2>

        <SocialActions>
          <Button
            variant="circle"
            size="small"
            aria-label={t("portfolio.social.linkedin")}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wandersonbaldacine",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <Linkedin size={15} />
          </Button>

          <Button
            variant="circle"
            size="small"
            aria-label={t("portfolio.social.email")}
            onClick={() =>
              (window.location.href = "mailto:wandersonse0@gmail.com")
            }
          >
            <Mail size={15} />
          </Button>

          <Button
            variant="circle"
            size="small"
            aria-label={t("portfolio.social.github")}
            onClick={() =>
              window.open(
                "https://github.com/Baldacine/react-clean-frontend",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <Github size={15} />
          </Button>
        </SocialActions>
        <p>
          <Trans
            i18nKey="portfolio.description"
            components={{ bold: <strong /> }}
          />
        </p>
      </Header>

      <NavButtons>
        {sections.map((s) => (
          <Card
            key={s}
            variant={section === s ? "primary" : "outline"}
            icon={sectionIcons[s]}
            title={t(`portfolio.sections.${s}`)}
            onClick={() => handleSectionChange(s)}
            width="100%"
            minWidth="150px"
            style={{
              flex: "1 1 200px",
              maxWidth: "300px",
            }}
          />
        ))}
      </NavButtons>

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
