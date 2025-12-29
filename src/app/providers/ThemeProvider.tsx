import { ThemeProvider } from "styled-components";
import { useState, useEffect, type ReactNode } from "react";
import { lightTheme, darkTheme } from "../../theme";
import { Header } from "@/shared/components/Header/Header";
import "../../utils/i18n";

interface Props {
  children: ReactNode;
}

const THEME_STORAGE_KEY = "@my-app:theme-mode";

export function AppThemeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return (savedTheme as "light" | "dark") || "light";
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
}
