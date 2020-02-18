import * as React from "react";
import Icon from "react-native-vector-icons/Fontisto";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import SantiWeatherService from "../../../services/api/SantiWeatherService";
import SearchButton from "../../../components/UI/SearchButton";
import Text from "../../../components/UI/Text";

const Home = () => {
  const [temperature, setTemperature] = React.useState(0);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    SantiWeatherService.getWeather("Paris")
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
      <SearchButton>
        <Text style={{ fontSize: 16 }}>
          <Icon name="search" size={16} /> Search
        </Text>
      </SearchButton>

      <Text>Temperature: {temperature}</Text>
    </Layout>
  );
};

Home.navigationOptions = {};

export default Home;
