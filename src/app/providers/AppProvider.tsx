import { AppThemeProvider } from "./ThemeProvider";
import { QueryProvider } from "./QueryProvider";
import "@/utils/i18n";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppThemeProvider>
  );
}
