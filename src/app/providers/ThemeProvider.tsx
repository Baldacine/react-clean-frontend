import { ThemeProvider } from "styled-components";
import type { ReactNode } from "react";
import { useState } from "react";
import { lightTheme, darkTheme } from "../../theme";
import { Button } from "@/shared/components/Button/Button";
import { Sun, Moon } from "lucide-react";
interface Props {
  children: ReactNode;
}

export function AppThemeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
        }}
      >
        <Button variant="circle" onClick={toggleTheme}>
          {themeMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </div>
    </ThemeProvider>
  );
}
