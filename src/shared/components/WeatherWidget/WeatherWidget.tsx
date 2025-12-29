import { Cloud, Sun, CloudRain } from "lucide-react";
import { useWeather } from "@/hooks/useWeather";
import * as S from "./styles";

export function WeatherWidget() {
  const { data, isLoading, isError } = useWeather("Vitoria,BR");

  if (isLoading || isError || !data) return null;

  const renderWeatherIcon = () => {
    const desc = data.weather?.[0]?.description?.toLowerCase() || "";
    if (desc.includes("chuva")) return <CloudRain size={18} />;
    if (desc.includes("limpo") || desc.includes("sol"))
      return <Sun size={18} />;
    return <Cloud size={18} />;
  };

  return (
    <S.WeatherWrapper>
      {renderWeatherIcon()}
      <div className="info">
        <span className="temp">{Math.round(data.main?.temp || 0)}°C</span>
      </div>
    </S.WeatherWrapper>
  );
}
