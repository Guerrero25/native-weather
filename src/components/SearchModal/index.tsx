import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
/* Components */
import Text from "../UI/Text";
import BlockButton from "../UI/BlockButton";
import SearchList from "./SearchList";

function SearchModal() {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <BlockButton onPress={toggleVisible}>
        <Text style={{ fontSize: 16 }}>
          <Icon name="search" size={16} /> Search
        </Text>
      </BlockButton>
      <SearchList visible={visible} onChangeVisible={toggleVisible} />
    </View>
  );

  function toggleVisible() {
    setVisible(!visible);
  }
}

export default SearchModal;
