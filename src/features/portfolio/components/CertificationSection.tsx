import styled from "styled-components";
import { Award, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  getTranslationArray,
  isCertification,
} from "../utils/translation";

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 10px;
`;

const CertCard = styled.article<{ $interactive: boolean }>`
  border: 1px solid
    ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: inherit;
  cursor: ${({ $interactive }) => ($interactive ? "pointer" : "default")};
  height: 100%;
  text-decoration: none;

  ${({ $interactive, theme }) =>
    $interactive &&
    `
  &:hover,
  &:focus-visible {
    outline: none;
    border-color: ${theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  `}

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
  min-width: 64px;
  border-radius: 8px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const CertTitle = styled.h4`
  margin: 0 0 6px 0;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  line-height: 1.4;
`;

const CertInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IssuerBadge = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`;

export const CertificationSection = () => {
  const { t } = useTranslation();

  const certs = getTranslationArray(
    t("portfolio.sections_content.certifications", {
      returnObjects: true,
    }),
    isCertification,
  );

  return (
    <Grid>
      {certs.map((cert) => (
        <CertCard
          key={`${cert.issuer}-${cert.title}`}
          as={cert.link ? "a" : "article"}
          href={cert.link || undefined}
          target={cert.link ? "_blank" : undefined}
          rel={cert.link ? "noopener noreferrer" : undefined}
          $interactive={Boolean(cert.link)}
        >
          <ImageContainer>
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.issuer}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.style.background =
                      "rgba(var(--primary-rgb), 0.1)";
                  }
                }}
              />
            ) : (
              <Award size={32} color="var(--primary-color)" />
            )}
          </ImageContainer>

          <Content>
            <IssuerBadge>{cert.issuer}</IssuerBadge>
            <CertTitle>{cert.title}</CertTitle>
            <CertInfo>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Calendar size={14} style={{ opacity: 0.6 }} />
                <span>{cert.date}</span>
              </div>
            </CertInfo>
          </Content>
        </CertCard>
      ))}
    </Grid>
  );
};
