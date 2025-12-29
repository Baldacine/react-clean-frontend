export const ENV = {
    WEATHER_API_KEY: import.meta.env.VITE_WEATHER_API_KEY as string,
    WEATHER_API_URL: import.meta.env.VITE_WEATHER_API_URL,
    GITHUB_API_URL: import.meta.env.VITE_GITHUB_API_URL,
    BASE_URL: import.meta.env.VITE_BASE_URL,
} as const;

if (!ENV.WEATHER_API_KEY) {
    console.warn("⚠️ WEATHER_API_KEY não foi encontrada nas variáveis de ambiente!");
}