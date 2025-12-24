import React, { useState } from "react";
import { Button } from "@/shared/components/Button/Button";
import type { PortfolioSection } from "../types";
import { SectionContent } from "../components/SectionContent";
import { Container, Header, NavButtons, Section } from "./styles";
import fotoPerfil from "@/assets/foto.jpeg";

export const Portfolio: React.FC = () => {
  const [section, setSection] = useState<PortfolioSection | null>(null);

  const sections: PortfolioSection[] = [
    "Jornada",
    "Certificações",
    "Use Cases",
    "Premiações",
    "Hobbies",
  ];

  return (
    <Container>
      <Header>
        <img src={fotoPerfil} alt="Wanderson Baldacine" />
        <h1>Wanderson Baldacine</h1>
        <p>
          Gerente de Projetos | Desenvolvedor React | Criador do Buu Agenda |
          Apaixonado por tecnologia e inovação
        </p>
      </Header>

      <NavButtons>
        {sections.map((s) => (
          <Button key={s} onClick={() => setSection(s)}>
            {s}
          </Button>
        ))}
      </NavButtons>

      <Section>
        <SectionContent section={section} />
      </Section>
    </Container>
  );
};
