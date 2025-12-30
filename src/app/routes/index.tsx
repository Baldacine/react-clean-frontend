import { Portfolio } from "@/features/portfolio/page";
import { Footer } from "@/shared/components/Footer/Footer";
import { Header } from "@/shared/components/Header/Header";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useAppTheme } from "../providers/ThemeProvider";

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
  const { themeMode, toggleTheme } = useAppTheme();

  return (
    <LayoutWrapper>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <MainContent>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
}
