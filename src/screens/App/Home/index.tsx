import * as React from "react";
/* Native Base Components */
import { Text, TouchableHighlight } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";
/* Services */
import NavigationService from "../../../services/NavigationService";

const Home = () => {
  return (
    <Layout>
      <Text>Screen Home</Text>

      <TouchableHighlight onPress={() => NavigationService.navigate("Auth")}>
        <Text>Go to Login Screen</Text>
      </TouchableHighlight>
    </Layout>
  );
};

Home.navigationOptions = {};

export default Home;
