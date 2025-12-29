import { useTranslation } from "react-i18next";
import { Sun, Moon, Languages } from "lucide-react";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown"; // Import o novo componente
import { StyledHeader, HeaderActions } from "./styles";
import type { HeaderProps } from "./types";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export function Header({ themeMode, toggleTheme }: HeaderProps) {
  const { i18n } = useTranslation();
  const { state } = useContext(UserContext);

  const languageOptions = [
    { key: "pt", label: "Português", onClick: () => i18n.changeLanguage("pt") },
    { key: "en", label: "English", onClick: () => i18n.changeLanguage("en") },
    { key: "es", label: "Español", onClick: () => i18n.changeLanguage("es") },
  ];

  return (
    <StyledHeader>
      <h1>Olá, {state.name || "Visitante"}</h1>

      <HeaderActions>
        <Dropdown
          items={languageOptions}
          trigger={
            <Button variant="outline" size="small" style={{ gap: "8px" }}>
              <Languages size={18} />
              {i18n.language.split("-")[0].toUpperCase()}
            </Button>
          }
        />

        <Button variant="circle" size="small" onClick={toggleTheme}>
          {themeMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </HeaderActions>
    </StyledHeader>
  );
}
