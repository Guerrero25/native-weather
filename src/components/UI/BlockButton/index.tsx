import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { ReactNode } from "react";

export interface BlockButtonProps {
  children?: ReactNode;
}

const BlockButton: React.SFC<TouchableOpacityProps & BlockButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default BlockButton;

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
