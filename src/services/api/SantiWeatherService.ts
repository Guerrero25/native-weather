import ServiceBase from "./ServiceBase";

const API_BASE = "http://litem-weather-webapp.herokuapp.com";

class SantiWeatherService extends ServiceBase {
  getWeather(q: string): Promise<WeatherResult> {
    return this.axiosInstance.get(`/weather?address=${q}`).then(response => {
      return response.data;
    });
  }
}

export default new SantiWeatherService(API_BASE);
