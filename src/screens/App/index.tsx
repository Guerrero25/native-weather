import { createStackNavigator } from "react-navigation";

/* Screens */
import ScreenAppHome from "./Home";
import ScreenAppDetails from "./Details";

const ScreenAppNavigator = createStackNavigator(
  {
    AppHome: ScreenAppHome,
    AppDetails: ScreenAppDetails
  },
  {
    navigationOptions: { header: null },
    headerMode: "none"
  }
);

export default ScreenAppNavigator;
