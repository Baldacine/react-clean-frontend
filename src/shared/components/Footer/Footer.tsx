import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { WeatherWidget } from "../WeatherWidget/WeatherWidget";
import type { FooterProps } from "./types";

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.Copyright>
        © {currentYear} — {t("footer.rights")}
      </S.Copyright>
      <WeatherWidget city="Aracruz, ES, BR" />
    </S.FooterContainer>
  );
};
