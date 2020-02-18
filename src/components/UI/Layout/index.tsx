import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  imageUrl: string;
}

const Layout: React.SFC<LayoutProps> = ({ children, imageUrl }) => {
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
});
