import { Portfolio } from "@/features/portfolio/page";
import { Footer } from "@/shared/components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export function AppRoutes() {
  return (
    <LayoutWrapper>
      <MainContent>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </MainContent>

      <Footer />
    </LayoutWrapper>
  );
}
