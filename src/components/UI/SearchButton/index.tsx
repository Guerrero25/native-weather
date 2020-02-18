import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ReactNode } from "react";

export interface SearchButtonProps {
  children?: ReactNode;
}

const SearchButton: React.SFC<SearchButtonProps> = ({ children }) => {
  return (
    <TouchableOpacity style={styles.container}>{children}</TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
});
