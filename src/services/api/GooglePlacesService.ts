import { AxiosRequestConfig } from "axios";
import ServiceBase from "./ServiceBase";

/* Configs */
import apiConfig from "./config";

class GooglePlacesService extends ServiceBase {
  constructor(baseUrl: string, config?: AxiosRequestConfig) {
    super(baseUrl, config);

    this.axiosInstance.interceptors.request.use(config => {
      if (!config.params) {
        config.params = {};
      }

      config.params.key = apiConfig.GOOGLE_PLACES_API_KEY;

      return config;
    });
  }

  getPredictions(q: string): Promise<GooglePlacesAutocompleteResult> {
    return this.axiosInstance
      .get(`/autocomplete/json?types=(cities)&input=${q}`)
      .then(response => {
        return response.data;
      });
  }
}

export default new GooglePlacesService(apiConfig.GOOGLE_PLACES_API_BASE_URL);
