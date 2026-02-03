import { ENV } from "@/config/env";
import { externalApi } from "@/services/api/api";

export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    };
    weather: Array<{
        id: number;
        description: string;
        icon: string;
    }>;
    sys: {
        country: string;
    };
    name: string;
}

export const weatherService = {
    getWeatherByCity: async (city: string, lang: string): Promise<WeatherData> => {
        const units = lang === 'en' ? 'imperial' : 'metric';
        const weatherLangMap: Record<string, string> = {
            pt: 'pt_br',
            es: 'es',
            en: 'en'
        };

        const weatherLang = weatherLangMap[lang] || 'en';

        const response = await externalApi.get<WeatherData>(`${ENV.WEATHER_API_URL}/weather`, {
            params: {
                q: city,
                appid: ENV.WEATHER_API_KEY,
                units: units,
                lang: weatherLang
            }
        });

        return response.data;
    }
};