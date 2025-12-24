import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
  padding: 2rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
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

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: ${(props) => props.theme.typography.lineHeights.relaxed};
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;
