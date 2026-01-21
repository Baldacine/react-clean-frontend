import React from "react";
import { useTranslation } from "react-i18next";
import type { PortfolioSection } from "../types";
import { Timeline } from "@/shared/components/Timeline/Timeline";
import { AwardsSection } from "./AwardsSection";
import { UseCaseSection } from "./UseCaseSection";
import { SkillsSection } from "./SkillsSection";
import { CertificationSection } from "./CertificationSection";

interface Props {
  section: PortfolioSection | null;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export const SectionContent: React.FC<Props> = ({ section }) => {
  const { t } = useTranslation();

  switch (section) {
    case "TechStack":
      return <SkillsSection />;
    case "Journey":
      return (
        <Timeline
          items={
            t("portfolio.sections_content.journey", {
              returnObjects: true,
            }) as TimelineItem[]
          }
        />
      );

    case "Certifications":
      return <CertificationSection />;

    case "Projects":
      return <UseCaseSection />;

    case "Awards":
      return <AwardsSection />;

    default:
      return <p>{t("portfolio.sections_content.empty")}</p>;
  }
};
