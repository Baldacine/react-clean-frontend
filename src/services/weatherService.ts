import { ENV } from "@/config/env";
import api from "./api/api";

export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    };
    weather: Array<{ description: string; icon: string }>;
    name: string;
}

export const weatherService = {
    getWeatherByCity: async (city: string): Promise<WeatherData> => {
        return api.get<WeatherData>(`${ENV.WEATHER_API_URL}/weather`, {
            q: city,
            appid: ENV.WEATHER_API_KEY,
            units: 'metric',
            lang: 'pt_br'
        });
    }
};