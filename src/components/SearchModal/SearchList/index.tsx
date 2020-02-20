import * as React from "react";
import {
  View,
  Animated,
  TextInput,
  Dimensions,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
/* Components */
import Text from "../../UI/Text";
import BlockButton from "../../UI/BlockButton";

type SearchListProps = {
  visible?: boolean;
  onChangeVisible?: (visible?: boolean) => void;
};
function SearchList({ visible, onChangeVisible }: SearchListProps) {
  const MAX_CONTAINER_HEIGHT = Dimensions.get("window").height;
  const [height] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    toggleVisible();
  }, [visible]);

  return (
    <View
      style={[styles.container, { height: visible ? MAX_CONTAINER_HEIGHT : 0 }]}
    >
      <Animated.View
        style={[
          styles.body,
          {
            height: height.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ["0%", "60%", "100%"]
            })
          }
        ]}
      >
        {visible && (
          <View>
            <TextInput autoFocus={visible} />
            <BlockButton
              onPress={() => onChangeVisible && onChangeVisible(false)}
            >
              <Text style={{ fontSize: 16 }}>
                <Icon name="close" size={16} /> Close
              </Text>
            </BlockButton>
          </View>
        )}
      </Animated.View>
    </View>
  );

  function toggleVisible() {
    const toValue = visible ? 1 : 0;

    Animated.spring(height, { toValue, friction: 5 }).start();
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    overflow: "hidden",
    top: -10,
    left: -10,
    right: -10
  },
  body: {
    backgroundColor: "white"
  }
});

export default SearchList;
