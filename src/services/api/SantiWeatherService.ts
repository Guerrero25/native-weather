import ServiceBase from "./ServiceBase";
/* Configs */
import config from "./config";

class SantiWeatherService extends ServiceBase {
  getWeather(q: string): Promise<WeatherResult> {
    return this.axiosInstance.get(`/weather?address=${q}`).then(response => {
      return response.data;
    });
  }
}

export default new SantiWeatherService(config.WEATHER_API_BASE_URL);
