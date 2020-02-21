import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
/* Components */
import Text from "../../../UI/Text";
/* Styles */
import { styles } from "./styles";

type SearchItemProps = {
  suggestion: GoogleSuggestions;
  onPress: (suggestion: GoogleSuggestions) => void;
};
function SearchItem({ suggestion, onPress, ...props }: SearchItemProps) {
  return (
    <TouchableOpacity
      style={styles.suggestion}
      onPress={() => {
        onPress && onPress(suggestion);
      }}
      {...props}
    >
      <React.Fragment>
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          {suggestion.description}
        </Text>
        <Text style={[styles.text, styles.subText, { fontSize: 16 }]}>
          {suggestion.distance_meters}
        </Text>
      </React.Fragment>
    </TouchableOpacity>
  );
}

export default SearchItem;
