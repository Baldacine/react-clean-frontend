import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

interface Props {
  children: React.ReactNode;
}

export function AppThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
