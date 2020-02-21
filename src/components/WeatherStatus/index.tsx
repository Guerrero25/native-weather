import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
/* Components */
import Text from "../UI/Text";
/* Custom Hooks */
import { useWeather } from "../../hooks/weather";

type WeatherStatusProps = {};

function WeatherStatus(props: WeatherStatusProps) {
  const { loading, weatherData, getWeather } = useWeather();

  React.useEffect(() => {
    if (!weatherData) {
      getWeather("Cartagena de Indias");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Icon
        name={getWeatherIconName(weatherData?.iconito)}
        size={120}
        color="white"
      />

      <View>
        <Text style={styles.h2}>
          {loading ? "" : weatherData?.temperature.toFixed(0)}°
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={{ textAlign: "center" }}>
          {loading ? "Loading" : weatherData?.location}
        </Text>
      </View>
    </View>
  );

  function getWeatherIconName(iconName: WeatherIcon): string {
    switch (iconName) {
      case "clear-day":
        return "day-sunny";

      case "clear-night":
        return "night-clear";

      case "cloudy":
        return "cloudy";

      case "fog":
        return "fog";

      case "partly-cloudy-day":
        return "day-cloudy";

      case "partly-cloudy-night":
        return "night-alt-cloudy";

      case "rain":
        return "rains";

      case "sleet":
        return "snow";

      case "snow":
        return "snows";

      case "wind":
        return "wind";

      default:
        return "horizon";
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  h2: {
    fontSize: 42,
    marginTop: 10
  },
  location: {
    fontSize: 18,
    width: "50%",
    textAlign: "center",
    marginTop: 5
  }
});

export default WeatherStatus;
