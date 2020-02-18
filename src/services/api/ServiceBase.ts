import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ServiceBaseInterface {
  basePath: string;
  axiosInstance: AxiosInstance;
}

class ServiceBase implements ServiceBaseInterface {
  basePath: string;
  axiosInstance: AxiosInstance;

  constructor(basePath: string, config?: AxiosRequestConfig) {
    this.basePath = basePath;
    this.axiosInstance = axios.create({
      baseURL: this.basePath,
      ...config
    });
  }
}

export default ServiceBase;
