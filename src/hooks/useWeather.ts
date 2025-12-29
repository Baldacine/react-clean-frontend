import { weatherService } from "@/services/weatherService";
import { useQuery } from "@tanstack/react-query";

export const useWeather = (city: string) => {
    return useQuery({
        queryKey: ["weather", city],
        queryFn: () => weatherService.getWeatherByCity(city),
        enabled: !!city,
        staleTime: 1000 * 60 * 10,
        throwOnError: false,
    });
};