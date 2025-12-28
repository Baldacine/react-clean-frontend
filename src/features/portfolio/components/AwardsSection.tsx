import styled from "styled-components";
import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/shared/components/Button/Button";
import { useTranslation } from "react-i18next";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TrophyBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${({ theme }) => theme.colors.black}99;
  backdrop-filter: blur(4px);
  border-radius: 50%;
  padding: 8px;
  display: flex;
  z-index: 2;
`;

const SecondPlaceBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  background: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.black};

  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
`;

const Description = styled.p`
  margin: 0 0 20px 0;
  font-size: 0.85rem;
  line-height: 1.6;
  flex: 1;
`;

export const AwardsSection = () => {
  const { t } = useTranslation();

  const awards = t("portfolio.sections_content.awards", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];

  return (
    <Grid>
      {awards.map((award, index) => (
        <Card key={index}>
          <ImageWrapper>
            <Image src={award.image} alt={award.title} />

            <TrophyBadge>
              <Trophy size={20} color="#FFD700" />
            </TrophyBadge>

            {award.title.includes("2º") && (
              <SecondPlaceBadge>🥈 2nd Place</SecondPlaceBadge>
            )}
          </ImageWrapper>

          <Content>
            <Title>{award.title}</Title>

            <Description>{award.description}</Description>

            <Button
              variant="outline"
              size="small"
              onClick={() => window.open(award.link, "_blank")}
              style={{ width: "100%", gap: "8px" }}
            >
              <ExternalLink size={14} />
              {t("portfolio.sections_content.use_cases.view_project")}
            </Button>
          </Content>
        </Card>
      ))}
    </Grid>
  );
};
