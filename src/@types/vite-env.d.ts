/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEATHER_API_KEY: string
    readonly VITE_WEATHER_API_URL: string
    readonly VITE_GITHUB_API_URL: string
    readonly VITE_BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}