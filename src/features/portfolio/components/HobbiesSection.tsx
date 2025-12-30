import styled from "styled-components";
import { Music, BookOpen, Brain, Mic2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;

  background: rgba(${({ theme }) => theme.colors.primary}, 0.03);
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  transition: transform 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  display: flex;
`;

const Title = styled.h4`
  margin: 0 0 6px 0;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
`;

const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: 1.5;
`;

export const HobbiesSection = () => {
  const { t } = useTranslation();

  const hobbies = t("portfolio.sections_content.hobbies", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  const getIcon = (title: string) => {
    const text = title.toLowerCase();

    if (text.match(/guitar|musica|música/)) return <Music size={24} />;
    if (text.match(/read|leitura|lectura/)) return <BookOpen size={24} />;
    if (text.match(/learn|aprendizado|aprendizaje/)) return <Brain size={24} />;

    return <Mic2 size={24} />;
  };

  return (
    <Grid>
      {hobbies.map((hobby, index) => (
        <Card key={index}>
          <IconWrapper>{getIcon(hobby.title)}</IconWrapper>

          <div>
            <Title>{hobby.title}</Title>
            <Description>{hobby.description}</Description>
          </div>
        </Card>
      ))}
    </Grid>
  );
};
