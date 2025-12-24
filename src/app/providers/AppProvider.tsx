import { AppThemeProvider } from "./ThemeProvider";
import { QueryProvider } from "./QueryProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppThemeProvider>
  );
}
