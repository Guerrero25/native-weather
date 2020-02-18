import * as React from "react";
/* Native Base Components */
import { Text } from "react-native";
/* UI Components */
import Layout from "../../../components/UI/Layout";

const Details = () => {
  return (
    <Layout>
      <Text>Screen Details</Text>

      <Text>Go to Home Screen</Text>
    </Layout>
  );
};

Details.navigationOptions = {};

export default Details;
