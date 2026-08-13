import { create } from "zustand";

export type ThemeMode = "light" | "dark";

type ThemeState = {
    themeMode: ThemeMode;
    toggleTheme: () => void;
};

const THEME_STORAGE_KEY = "@my-app:theme-mode";

const isThemeMode = (value: string | null): value is ThemeMode =>
    value === "light" || value === "dark";

export const useThemeStore = create<ThemeState>((set) => {
    const storedTheme = typeof window !== "undefined"
        ? localStorage.getItem(THEME_STORAGE_KEY)
        : null;
    const savedTheme = isThemeMode(storedTheme) ? storedTheme : "light";

    return {
        themeMode: savedTheme,
        toggleTheme: () =>
            set((state) => {
                const next = state.themeMode === "light" ? "dark" : "light";
                localStorage.setItem(THEME_STORAGE_KEY, next);
                return { themeMode: next };
            }),
    };
});
