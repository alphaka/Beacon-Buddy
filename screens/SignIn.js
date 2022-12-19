import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Rectangle from "../components/Rectangle";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Image
        style={styles.bitmapIcon}
        resizeMode="cover"
        source={require("../assets/bitmap.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle1.png")}
      />
      <View style={styles.typeIn}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
        <TextInput
          style={styles.password}
          placeholder="Password"
          keyboardType="default"
          autoCapitalize="none"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.login}
          placeholder="UNI"
          keyboardType="default"
          placeholderTextColor="#fff"
        />
        <View style={styles.rememberMe}>
          <View style={styles.groupView}>
            <Text style={styles.dontHaveAnAccoun}>Remember me</Text>
            <View style={styles.frameView} />
          </View>
        </View>
      </View>
      <View style={styles.barsHomeIndicatoriPhoneLig}>
        <View style={styles.homeIndicator} />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MenuNotFound")}
      >
        <Rectangle />
        <Text style={styles.login1}>Login</Text>
      </TouchableOpacity>
      <View style={styles.uNIHelp}>
        <Text style={styles.dontHaveAnAccoun1}>UNI Help</Text>
        <Image
          style={styles.path4Icon}
          resizeMode="cover"
          source={require("../assets/path-4.png")}
        />
      </View>
      <View style={styles.logoBeacon}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-311.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-411.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector-511.png")}
        />
        <Text style={styles.b}>B</Text>
      </View>
      <Text style={styles.customizeYourOwnS}>BeaconBuddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bitmapIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 811,
    height: 519,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 390,
    height: 844,
  },
  rectangleIcon: {
    position: "absolute",
    top: 465,
    left: 0,
    borderRadius: 30,
    width: 390,
    height: 427,
  },
  forgotPassword: {
    position: "absolute",
    marginTop: 58.5,
    width: "36.25%",
    top: "50%",
    left: "61.54%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
    height: 18,
    opacity: 0.78,
  },
  password: {
    position: "absolute",
    height: "35.36%",
    width: "100%",
    top: "42.51%",
    right: "0%",
    bottom: "22.13%",
    left: "0%",
  },
  login: {
    position: "absolute",
    height: "35.36%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "64.64%",
    left: "0%",
  },
  dontHaveAnAccoun: {
    position: "absolute",
    top: 0,
    left: 18,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 275,
    height: 22,
    opacity: 0.78,
  },
  frameView: {
    position: "absolute",
    top: 3,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 293,
    height: 22,
  },
  rememberMe: {
    position: "absolute",
    top: 145,
    left: 11,
    width: 293,
    height: 22,
  },
  typeIn: {
    position: "absolute",
    marginTop: 76,
    width: "91.76%",
    top: "50%",
    right: "4.14%",
    left: "4.1%",
    height: 167,
  },
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  barsHomeIndicatoriPhoneLig: {
    position: "absolute",
    top: 809,
    left: 126,
    width: 139,
    height: 35,
  },
  login1: {
    position: "absolute",
    marginTop: -12,
    width: "41.24%",
    top: "50%",
    left: "29.38%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    height: "5.92%",
    width: "91.54%",
    top: "83.77%",
    right: "4.3%",
    bottom: "10.31%",
    left: "4.16%",
    overflow: "hidden",
  },
  dontHaveAnAccoun1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 390,
    height: 22,
    opacity: 0.78,
  },
  path4Icon: {
    position: "absolute",
    top: 20,
    left: 163,
    width: 64,
    height: 2,
  },
  uNIHelp: {
    position: "absolute",
    top: 769,
    left: 0,
    width: 390,
    height: 22,
  },
  vectorIcon: {
    position: "absolute",
    top: -1,
    left: -3,
    width: 34,
    height: 82,
  },
  vectorIcon1: {
    position: "absolute",
    top: -1,
    left: 126,
    width: 34,
    height: 81,
  },
  vectorIcon2: {
    position: "absolute",
    top: -3,
    left: 33,
    width: 90,
    height: 115,
  },
  b: {
    position: "absolute",
    top: 7,
    left: 59,
    fontSize: 62,
    fontFamily: "Inter",
    color: "#aae0fa",
    textAlign: "center",
    width: 42,
    height: 50,
  },
  logoBeacon: {
    position: "absolute",
    top: 217,
    left: 115,
    width: 157,
    height: 107,
  },
  customizeYourOwnS: {
    position: "absolute",
    top: 162,
    left: 0,
    fontSize: 25,
    letterSpacing: -2,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 390,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  signIn: {
    position: "relative",
    backgroundColor: "#202127",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignIn;
