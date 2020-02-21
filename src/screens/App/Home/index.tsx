import * as React from "react";
/* Custom Hooks */
import { useWeather } from "../../../hooks/weather";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Components */
import WeatherStatus from "../../../components/WeatherStatus";
import SearchModal from "../../../components/SearchModal";
import { BackHandler } from "react-native";

const Home = () => {
  const { weatherData } = useWeather();

  React.useEffect(() => {
    const backEvent = BackHandler.addEventListener("hardwareBackPress", () => {
      BackHandler.exitApp();

      return true;
    });

    return () => {
      backEvent.remove();
    };
  }, []);

  return (
    <Layout imageUrl={weatherData?.imageURL}>
      <SearchModal />

      <WeatherStatus></WeatherStatus>
    </Layout>
  );
};

Home.navigationOptions = {};

export default Home;
