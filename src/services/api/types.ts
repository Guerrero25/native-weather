type WeatherResult = {
  summary: string;
  forecastMessage: string;
  forecast: string;
  temperature: number;
  location: string;
  address: string;
  iconito: WeatherIcon;
  precip: string;
  precipnum: number;
  imageURL: string;
};

type WeatherIcon =
  | "clear-day"
  | "clear-night"
  | "cloudy"
  | "fog"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "rain"
  | "sleet"
  | "snow"
  | "weird"
  | "wind";

type WeatherAPIError = {
  error: string;
};
