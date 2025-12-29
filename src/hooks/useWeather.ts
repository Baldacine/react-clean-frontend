// src/hooks/useWeather.ts
import { useQuery } from "@tanstack/react-query";
import { weatherService } from "@/services/weatherService";
import { useTranslation } from "react-i18next";

export const useWeather = (city: string) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    return useQuery({
        queryKey: ["weather", city, currentLang],
        queryFn: () => weatherService.getWeatherByCity(city, currentLang),
        enabled: !!city,
        staleTime: 1000 * 60 * 10,
    });
};