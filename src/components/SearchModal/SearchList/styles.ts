import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    overflow: "hidden",
    top: -10,
    left: -10,
    right: -10,
    zIndex: 5
  },
  body: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flex: 1
  },
  content: {
    flex: 1
  },
  form: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  inputText: {
    flex: 1,
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10
  },
  suggestionsContainer: {
    flex: 1,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});
