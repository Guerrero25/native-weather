import { combineReducers } from "redux";
import { SET_WEATHER_DATA, SET_LOADING } from "../types";

const weatherData = (
  state: null | WeatherResult = null,
  action: ReduxAction
) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return action.data;

    default:
      return state;
  }
};

const loading = (state: boolean = false, action: ReduxAction) => {
  switch (action.type) {
    case SET_LOADING:
      return action.data;

    default:
      return state;
  }
};

const rootReducer = combineReducers({ weatherData, loading });

export default rootReducer;
