import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0.5rem 0;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
    margin: 0.25rem 0 0.75rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: ${(props) => props.theme.typography.lineHeights.relaxed};
  }
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  overflow: visible;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

export const SocialActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 10px 0;
`;
