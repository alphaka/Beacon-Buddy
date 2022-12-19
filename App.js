const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Menu from "./screens/Menu";
import MenuNotFound from "./screens/MenuNotFound";
import BeaconSubmission from "./screens/BeaconSubmission";
import BeaconSubmissionLocation from "./screens/BeaconSubmissionLocation";
import BeaconSubmissionTime from "./screens/BeaconSubmissionTime";
import BeaconSubmissionPlayer from "./screens/BeaconSubmissionPlayer";
import SelectDay from "./screens/SelectDay";
import ProfileRevision from "./screens/ProfileRevision";
import ProfileAttendance from "./screens/ProfileAttendance";
import ManageActivities from "./screens/ManageActivities";
import PastBeaconRoster from "./screens/PastBeaconRoster";
import ChatRoom from "./screens/ChatRoom";
import ChatRoom1 from "./screens/ChatRoom1";
import ActiveReceiverRosterCance from "./screens/ActiveReceiverRosterCance";
import MenuFootball from "./screens/MenuFootball";
import NoBeaconAvailable from "./screens/NoBeaconAvailable";
import Menu2Soccer from "./screens/Menu2Soccer";
import DetailedSkillLevel from "./screens/DetailedSkillLevel";
import SignIn from "./screens/SignIn";
import BeaconSubmission1 from "./screens/BeaconSubmission1";
import Start from "./screens/Start";
import SearchingRadar from "./screens/SearchingRadar";
import SubmissionWaiting from "./screens/SubmissionWaiting";
import Roster from "./screens/Roster";
import RosterConfirmation from "./screens/RosterConfirmation";
import SenderAfterRosterConfirma from "./screens/SenderAfterRosterConfirma";
import ActiveReceiverRoster from "./screens/ActiveReceiverRoster";
import ActiveBeacons from "./screens/ActiveBeacons";
import ActiveBeacons1 from "./screens/ActiveBeacons1";
import SecondMenuBeacons from "./screens/SecondMenuBeacons";
import SearchingBarProgressBar from "./screens/SearchingBarProgressBar";
import SearchingRadar2 from "./screens/SearchingRadar2";
import SearchingBarProgressBar1 from "./screens/SearchingBarProgressBar1";
import PendingRoster from "./screens/PendingRoster";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  useFonts({
    Archivo: require("./assets/fonts/Archivo.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    "Della Respira": require("./assets/fonts/Della_Respira.ttf"),
    Rubik: require("./assets/fonts/Rubik.ttf"),
    "SF Pro Display": require("./assets/fonts/SF_Pro_Display.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MenuNotFound"
                component={MenuNotFound}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BeaconSubmission"
                component={BeaconSubmission}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BeaconSubmissionLocation"
                component={BeaconSubmissionLocation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BeaconSubmissionTime"
                component={BeaconSubmissionTime}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BeaconSubmissionPlayer"
                component={BeaconSubmissionPlayer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectDay"
                component={SelectDay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileRevision"
                component={ProfileRevision}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileAttendance"
                component={ProfileAttendance}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ManageActivities"
                component={ManageActivities}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PastBeaconRoster"
                component={PastBeaconRoster}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatRoom1"
                component={ChatRoom1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActiveReceiverRosterCancellation"
                component={ActiveReceiverRosterCance}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MenuFootball"
                component={MenuFootball}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NoBeaconAvailable"
                component={NoBeaconAvailable}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Menu2Soccer"
                component={Menu2Soccer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DetailedSkillLevel"
                component={DetailedSkillLevel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BeaconSubmission1"
                component={BeaconSubmission1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Start"
                component={Start}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchingRadar"
                component={SearchingRadar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SubmissionWaiting"
                component={SubmissionWaiting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Roster"
                component={Roster}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RosterConfirmation"
                component={RosterConfirmation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SenderAfterRosterConfirmation"
                component={SenderAfterRosterConfirma}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActiveReceiverRoster"
                component={ActiveReceiverRoster}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActiveBeacons"
                component={ActiveBeacons}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActiveBeacons1"
                component={ActiveBeacons1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SecondMenuBeacons"
                component={SecondMenuBeacons}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchingBarProgressBar"
                component={SearchingBarProgressBar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchingRadar2"
                component={SearchingRadar2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchingBarProgressBar1"
                component={SearchingBarProgressBar1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PendingRoster"
                component={PendingRoster}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Start />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
