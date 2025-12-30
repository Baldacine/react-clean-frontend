import styled from "styled-components";
import {
  Code2,
  Database,
  Layout,
  BarChart3,
  MoreHorizontal,
  TestTube,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};

  svg {
    opacity: 0.8;
  }
`;

const SkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;

  background: ${({ theme }) => theme.colors?.gray300};
  border-radius: 6px;
  font-family: "Fira Code", "JetBrains Mono", monospace;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography?.fontWeights.medium};
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors?.gray500};
    color: ${({ theme }) => theme.colors?.white};
    border-color: transparent;
    transform: translateY(-1px);
  }

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 50%;
    margin-right: 8px;
    opacity: 0.6;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;

export const SkillsSection = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.frontend", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: "Backend",
      icon: <Code2 size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.backend", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: "Testing",
      icon: <TestTube size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.test", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.database", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: "Data & BI",
      icon: <BarChart3 size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.data_analytics", {
        returnObjects: true,
      }) as string[],
    },
    {
      title: "Others",
      icon: <MoreHorizontal size={18} />,
      TechStack: t("portfolio.sections_content.TechStack.others", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <Grid>
      {skillGroups.map((group, i) => (
        <GroupContainer key={i}>
          <Header>
            {group.icon}
            <span>{group.title}</span>
          </Header>
          <TagContainer>
            {group.TechStack.map((skill, j) => (
              <SkillTag key={j}>{skill}</SkillTag>
            ))}
          </TagContainer>
        </GroupContainer>
      ))}
    </Grid>
  );
};
