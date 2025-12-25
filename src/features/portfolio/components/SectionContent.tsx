import React from "react";
import { useTranslation } from "react-i18next";
import type { PortfolioSection } from "../types";
import { Timeline } from "@/shared/components/Timeline/Timeline";
import { AwardsSection } from "./AwardsSection";
import { HobbiesSection } from "./HobbiesSection";
import { UseCaseSection } from "./UseCaseSection";

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

  const renderSimpleList = (key: string) => {
    const items = t(key, { returnObjects: true }) as string[];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  switch (section) {
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
      return renderSimpleList("portfolio.sections_content.certifications");

    case "Use Cases":
      return <UseCaseSection />;

    case "Awards":
      return <AwardsSection />;

    case "Hobbies":
      return <HobbiesSection />;

    default:
      return <p>{t("portfolio.sections_content.empty")}</p>;
  }
};
