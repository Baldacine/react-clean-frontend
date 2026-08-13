import { useTranslation } from "react-i18next";
import { Sun, Moon, Languages } from "lucide-react";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { StyledHeader, HeaderActions } from "./styles";
import type { HeaderProps } from "./types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";

export function Header({ themeMode, toggleTheme }: HeaderProps) {
  const { i18n, t } = useTranslation();
  const { state } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const languageOptions = [
    { key: "pt", label: "Português", onClick: () => i18n.changeLanguage("pt") },
    { key: "en", label: "English", onClick: () => i18n.changeLanguage("en") },
    { key: "es", label: "Español", onClick: () => i18n.changeLanguage("es") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader $isScrolled={isScrolled}>
      <h1>
        {t("header.hello")}, {state.name || t("header.visitor")}
      </h1>
      <HeaderActions>
        <Dropdown
          items={languageOptions}
          label={t("header.changeLanguage")}
          trigger={
            <>
              <Languages size={18} />
              {i18n.language.split("-")[0].toUpperCase()}
            </>
          }
        />
        <Button
          variant="circle"
          size="small"
          aria-label={t(
            themeMode === "light" ? "header.darkTheme" : "header.lightTheme",
          )}
          onClick={toggleTheme}
        >
          {themeMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </HeaderActions>
    </StyledHeader>
  );
}
