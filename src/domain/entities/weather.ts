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
