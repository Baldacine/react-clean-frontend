import React, { type JSX } from "react";
import { Cloud, Sun, CloudRain, CloudLightning } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useWeather } from "@/hooks/useWeather";
import type { WeatherWidgetProps } from "./type";
import * as S from "./styles";

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ city }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = useWeather(city);
  const unitSymbol = i18n.language.startsWith("en") ? "°F" : "°C";

  if (isLoading || isError || !data) return null;
  const stateFromProp =
    city.split(",").length > 1 ? city.split(",")[1].toUpperCase().trim() : "";

  const renderWeatherIcon = (): JSX.Element => {
    const weatherId = data.weather?.[0]?.id || 800;

    if (weatherId >= 200 && weatherId < 300)
      return <CloudLightning size={20} />;
    if (weatherId >= 300 && weatherId < 600) return <CloudRain size={20} />;
    if (weatherId === 800) return <Sun size={20} />;

    return <Cloud size={20} />;
  };

  return (
    <S.WeatherWrapper title={data.weather?.[0]?.description}>
      {renderWeatherIcon()}
      <div className="info">
        <span className="temp">
          {Math.round(data.main?.temp || 0)}
          {unitSymbol}
        </span>
        <span className="city">
          {data.name}
          {stateFromProp && `, ${stateFromProp}`}
          {data.sys?.country && ` - ${data.sys.country}`}
        </span>
      </div>
    </S.WeatherWrapper>
  );
};
