export const ENV = {
    WEATHER_API_KEY: import.meta.env.VITE_WEATHER_API_KEY ?? "",
    WEATHER_API_URL:
        import.meta.env.VITE_WEATHER_API_URL ??
        "https://api.openweathermap.org/data/2.5",
    GITHUB_API_URL:
        import.meta.env.VITE_GITHUB_API_URL ?? "https://api.github.com",
    BASE_URL: import.meta.env.VITE_BASE_URL ?? "",
} as const;
