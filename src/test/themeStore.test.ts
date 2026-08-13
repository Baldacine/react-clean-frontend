import { beforeEach, describe, expect, it, vi } from "vitest";

const themeStorageKey = "@my-app:theme-mode";

describe("themeStore", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetModules();
  });

  it("uses the dark theme by default", async () => {
    const { useThemeStore } = await import("@/app/stores/themeStore");

    expect(useThemeStore.getState().themeMode).toBe("dark");
  });

  it("preserves a valid stored theme preference", async () => {
    localStorage.setItem(themeStorageKey, "light");

    const { useThemeStore } = await import("@/app/stores/themeStore");

    expect(useThemeStore.getState().themeMode).toBe("light");
  });
});
