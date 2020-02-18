import * as React from "react";
/* Native Base Components */
import { Text } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import SantiWeatherService from "../../../services/api/SantiWeatherService";

const Home = () => {
  const [temperature, setTemperature] = React.useState(0);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    SantiWeatherService.getWeather("Prague")
      .then(weather => {
        setTemperature(weather.temperature);
        setImage(weather.imageURL);
      })
      .catch(err => {
        const responseError = err.response && err.response.request;

        console.log({ err, responseError });
      });
  }, []);

  return (
    <Layout imageUrl={image}>
      <Text>Screen Home</Text>

      <Text>Temperature: {temperature}</Text>
    </Layout>
  );
};

Home.navigationOptions = {};

export default Home;
