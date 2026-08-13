import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding: 2rem;

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 176px minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1008px;
  margin: ${({ theme }) => theme.spacing.md} auto
    ${({ theme }) => theme.spacing["2xl"]};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.gray300}66;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

export const HeroProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    box-shadow: none;
  }
`;

export const HeroContent = styled.div`
  min-width: 0;

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSizes["3xl"]};
    line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
    margin: ${({ theme }) => theme.spacing.xs} 0
      ${({ theme }) => theme.spacing.md};
    line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  }

  @media (max-width: 700px) {
    h1 {
      font-size: ${({ theme }) => theme.typography.fontSizes["2xl"]};
    }

    h2 {
      font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    }
  }
`;

export const HeroSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  max-width: 660px;
`;

export const HeroDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  opacity: 0.86;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 700px) {
    justify-content: center;
  }

  @media (max-width: 420px) {
    > button:not([aria-label]) {
      flex: 1 1 130px;
    }
  }
`;

export const UtilityActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
    margin-left: 0;
  }
`;

export const NavButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  overflow: visible;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PortfolioNavigation = styled.section`
  max-width: 1040px;
  margin: 0 auto;
`;

export const NavigationAction = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;
