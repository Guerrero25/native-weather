import * as React from "react";
import {
  View,
  Animated,
  TextInput,
  Dimensions,
  Keyboard,
  ImageBackground,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
/* Custom Hooks */
import { useWeather } from "../../../hooks/weather";
import { useAutocompletePlaces } from "../../../hooks/autocomplete";
/* Components */
import SearchItem from "./Item";
/* Styles */
import { styles } from "./styles";
/* Configs */
import UIConfig from "../../UI/UIConfig";

const SPRING_CONFIG = {
  friction: 10,
  tension: 30
};

type SearchListProps = {
  visible?: boolean;
  onChangeVisible?: (visible?: boolean) => void;
  onPressSuggestion?: (suggestion: GoogleSuggestions) => void;
};
function SearchList({
  visible,
  onChangeVisible,
  onPressSuggestion
}: SearchListProps) {
  const { suggestions, loading, getSuggestions } = useAutocompletePlaces();
  const { weatherData } = useWeather();
  const [height] = React.useState(new Animated.Value(0));
  const [query, setQuery] = React.useState("");
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const MAX_CONTAINER_HEIGHT = Dimensions.get("window").height;

  React.useEffect(() => {
    toggleVisible();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: height.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [
              0,
              (MAX_CONTAINER_HEIGHT * 2) / 3,
              MAX_CONTAINER_HEIGHT
            ]
          })
        }
      ]}
    >
      <ImageBackground
        source={{
          uri: weatherData?.imageURL || UIConfig.DEFAULT_LAYOUT_BACKGROUND
        }}
        style={[styles.body]}
        blurRadius={8}
      >
        <View style={[styles.body]}>
          {visible && (
            <View style={styles.content}>
              <View style={styles.form}>
                <TextInput
                  autoFocus
                  style={styles.inputText}
                  value={query}
                  onChangeText={handleChangeText}
                />
                <Icon
                  name="close"
                  color="gray"
                  size={30}
                  onPress={handleClose}
                />
              </View>
              <FlatList
                keyboardShouldPersistTaps="handled"
                style={styles.suggestionsContainer}
                data={suggestions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <SearchItem
                      suggestion={item}
                      onPress={handlePressSuggestion}
                    />
                  );
                }}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </Animated.View>
  );

  function toggleVisible() {
    const toValue = visible ? 1 : 0;

    Animated.spring(height, { toValue, ...SPRING_CONFIG }).start();
  }

  function handleClose() {
    Keyboard.dismiss();

    Animated.spring(height, { toValue: 0, ...SPRING_CONFIG }).start(() => {
      onChangeVisible && onChangeVisible(false);
    });
  }

  function handleChangeText(text: string) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setQuery(text);

    timeoutRef.current = setTimeout(() => {
      getSuggestions(text).catch(err => {});
    }, 300);
  }

  function handlePressSuggestion(suggestion: GoogleSuggestions) {
    onPressSuggestion && onPressSuggestion(suggestion);

    handleClose();
  }
}

export default SearchList;
