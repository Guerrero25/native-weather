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

type GooglePlacesAutocompleteResult = {
  status: string;
  predictions: GoogleSuggestions[];
};

type GoogleSuggestions = {
  description: string;
  distance_meters: number;
  id: string;
  matched_substrings: { length: number; offset: number }[];
  place_id: string;
  reference: string;
  terms: { offset: number; value: string }[];
  types: ("locality" | "political" | "geocode")[];
};
