import { ENV } from "@/config/env";
import type { WeatherData } from "@/domain/entities/weather";
import { externalApi } from "@/services/api/api";

const weatherLanguageByLocale: Record<string, string> = {
  pt: "pt_br",
  es: "es",
  en: "en",
};

export const weatherService = {
  getWeatherByCity: async (
    city: string,
    language: string,
  ): Promise<WeatherData> => {
    const response = await externalApi.get<WeatherData>(
      `${ENV.WEATHER_API_URL}/weather`,
      {
        params: {
          q: city,
          appid: ENV.WEATHER_API_KEY,
          units: language === "en" ? "imperial" : "metric",
          lang: weatherLanguageByLocale[language] ?? "en",
        },
      },
    );

    return response.data;
  },
};
