import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { ReactNode } from "react";

const DEFAULT_BACKGROUND =
  "https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80";

export interface LayoutProps {
  children: ReactNode;
  imageUrl: string;
}

const Layout: React.SFC<LayoutProps> = ({ children, imageUrl }) => {
  return (
    <ImageBackground
      source={{
        uri: imageUrl || DEFAULT_BACKGROUND
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
