type WeatherResult = {
  summary: string;
  forecastMessage: string;
  forecast: string;
  temperature: number;
  location: string;
  address: string;
  iconito: string;
  precip: string;
  precipnum: number;
  imageURL: string;
};

type WeatherAPIError = {
  error: string;
};
