import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";

/* Screens */
import ScreenApp from "./App";

/* Navigation Services to Navigation Actions */
import NavigationService from "../services/NavigationService";

const AppStack = createStackNavigator({ Home: ScreenApp });

const NavigationContainer = createAppContainer(AppStack);

class ScreenRoot extends Component {
  render() {
    return (
      <NavigationContainer
        ref={ref => NavigationService.setTopLevelNavigator(ref)}
      />
    );
  }
}

export default ScreenRoot;
