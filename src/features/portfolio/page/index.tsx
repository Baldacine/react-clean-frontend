import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import type { PortfolioSection } from "../types";
import { Card } from "@/shared/components/Card/Card";
import { Container, Header, NavButtons, SocialActions } from "./styles";
import fotoPerfil from "@/assets/foto.jpeg";
import { Modal } from "@/shared/components/Modal/Modal";
import { SectionContent } from "../components/SectionContent";
import { Button } from "@/shared/components/Button/Button";
import {
  Briefcase,
  Code,
  Gamepad2,
  Globe,
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
  const [loadingSection, setLoadingSection] = useState<PortfolioSection | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections: PortfolioSection[] = [
    "Skills",
    "Journey",
    "Certifications",
    "Use Cases",
    "Awards",
    "Hobbies",
  ];

  const sectionIcons: Record<PortfolioSection, React.ReactNode> = {
    Skills: <Wrench size={32} />,
    Journey: <Briefcase size={32} />,
    Certifications: <GraduationCap size={32} />,
    "Use Cases": <Code size={32} />,
    Awards: <Trophy size={32} />,
    Hobbies: <Gamepad2 size={32} />,
  };

  const handleSectionChange = (s: PortfolioSection) => {
    setLoadingSection(s);
    setTimeout(() => {
      setSection(s);
      setLoadingSection(null);
      setIsModalOpen(true);
    }, 2);
  };

  return (
    <Container>
      <Header>
        <Avatar
          src={fotoPerfil}
          alt="Wanderson Baldacine"
          size={120}
          shape="circle"
        />
        <h1>Wanderson Baldacine</h1>

        <SocialActions>
          <Button
            variant="circle"
            size="small"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wandersonbaldacine",
                "_blank"
              )
            }
          >
            <Linkedin size={15} />
          </Button>

          <Button
            variant="circle"
            size="small"
            onClick={() =>
              (window.location.href = "mailto:wandersonse0@gmail.com")
            }
          >
            <Mail size={15} />
          </Button>

          <Button
            variant="circle"
            size="small"
            onClick={() =>
              window.open("https://buuapp.com.br/home.html", "_blank")
            }
          >
            <Globe size={15} />
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
            isLoading={loadingSection === s}
            disabled={!!loadingSection}
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
        title={section ? t(`portfolio.sections.${section}`) : ""}
        width="80vw"
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
