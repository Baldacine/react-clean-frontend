import React, { useState } from "react";
import type { PortfolioSection } from "../types";
import { Card } from "@/shared/components/Card/Card";
import { Container, Header, NavButtons } from "./styles";
import fotoPerfil from "@/assets/foto.jpeg";
import { Modal } from "@/shared/components/Modal/Modal";
import { SectionContent } from "../components/SectionContent";
import { Button } from "@/shared/components/Button/Button";
import { Briefcase, Code, Gamepad2, GraduationCap, Trophy } from "lucide-react";

export const Portfolio: React.FC = () => {
  const [section, setSection] = useState<PortfolioSection | null>(null);
  const [loadingSection, setLoadingSection] = useState<PortfolioSection | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections: PortfolioSection[] = [
    "Jornada",
    "Certificações",
    "Use Cases",
    "Premiações",
    "Hobbies",
  ];

  const sectionIcons: Record<PortfolioSection, React.ReactNode> = {
    Jornada: <Briefcase size={32} />,
    Certificações: <GraduationCap size={32} />,
    "Use Cases": <Code size={32} />,
    Premiações: <Trophy size={32} />,
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
        <img src={fotoPerfil} alt="Wanderson Baldacine" />
        <h1>Wanderson Baldacine</h1>
        <p>
          <strong>Software Engineer | React & TypeScript Specialist.</strong>
          Focado na criação de interfaces performáticas e escaláveis. Criador do{" "}
          <strong>Buu Agenda</strong>, combinando sólido conhecimento em
          arquitetura Front-end com uma visão estratégica de Gerenciamento de
          Projetos para entregar soluções de alto impacto.
        </p>
      </Header>

      <NavButtons>
        {sections.map((s) => (
          <Card
            key={s}
            variant={section === s ? "primary" : "outline"}
            isLoading={loadingSection === s}
            disabled={loadingSection === s}
            icon={sectionIcons[s]}
            title={s}
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
        title={section || ""}
        width="80vw"
        maxWidth={800}
        height="90vh"
        footer={
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Fechar
          </Button>
        }
      >
        <SectionContent section={section} />
      </Modal>
    </Container>
  );
};
