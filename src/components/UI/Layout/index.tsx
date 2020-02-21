import * as React from "react";
import { ReactNode } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

/* Config */
import UIConfig from "../UIConfig";

export interface LayoutProps {
  children: ReactNode;
  imageUrl: string;
}

const Layout: React.SFC<LayoutProps> = ({ children, imageUrl }) => {
  return (
    <ImageBackground
      source={{
        uri: imageUrl || UIConfig.DEFAULT_LAYOUT_BACKGROUND
      }}
      style={styles.container}
    >
      <View style={styles.filter}>{children}</View>
    </ImageBackground>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filter: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 10,
    paddingHorizontal: 10
  }
});
