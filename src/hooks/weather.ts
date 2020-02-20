import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
/* Services */
import SantiWeatherService from "../services/api/SantiWeatherService";
import { SET_WEATHER_DATA, SET_LOADING } from "../redux/types";

type useWeatherReturn = {
  weatherData: WeatherResult;
  loading: boolean;
  getWeather: (q: string) => Promise<boolean>;
};
export function useWeather(): useWeatherReturn {
  const weatherData = useSelector<any, WeatherResult>(
    state => state.weatherData
  );
  const loading = useSelector<any, boolean>(state => state.loading);
  const dispatch = useDispatch();
  const setLoading = (loading: boolean) =>
    dispatch({
      type: SET_LOADING,
      data: loading
    });
  const setWeatherData = (data: WeatherResult) =>
    dispatch({
      type: SET_WEATHER_DATA,
      data: data
    });

  const getWeather = useCallback(
    (q: string) => {
      setLoading(true);

      return SantiWeatherService.getWeather(q)
        .then(result => {
          setWeatherData(result);
          setLoading(false);

          return true;
        })
        .catch(err => {
          console.log({ err });
          setLoading(false);

          return false;
        });
    },
    [dispatch]
  );

  return { weatherData, getWeather, loading };
}
