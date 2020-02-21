import * as React from "react";
import { View, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
/* Components */
import Text from "../UI/Text";
import BlockButton from "../UI/BlockButton";
import SearchList from "./SearchList";
import { useWeather } from "../../hooks/weather";

function SearchModal() {
  const [visible, setVisible] = React.useState(false);
  const { weatherData, getWeather } = useWeather();

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (visible) {
          setVisible(false);
          return true;
        }

        return false;
      }
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <View>
      <BlockButton onPress={toggleVisible}>
        <Text style={{ fontSize: 16 }}>
          <Icon name="search" size={16} />{" "}
          {weatherData?.location
            ? weatherData?.location.slice(0, 40)
            : "Search"}
        </Text>
      </BlockButton>
      <SearchList
        visible={visible}
        onChangeVisible={toggleVisible}
        onPressSuggestion={handlePressSuggestion}
      />
    </View>
  );

  function toggleVisible() {
    setVisible(!visible);
  }

  function handlePressSuggestion(suggestion: GoogleSuggestions) {
    getWeather(suggestion.description);
  }
}

export default SearchModal;
