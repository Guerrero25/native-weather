import * as React from "react";
import {
  StyleSheet,
  Text as NativeText,
  StyleProp,
  TextStyle
} from "react-native";

export interface TextProps {
  children?: string | number | any;
  style?: StyleProp<TextStyle>;
}

const Text: React.SFC<TextProps> = ({ children, style }) => {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
});
