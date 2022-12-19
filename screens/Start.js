import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Start = () => {
  return (
    <View style={styles.start}>
      <View style={styles.barsHomeIndicatoriPhoneLig}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={styles.customizeYourOwnS}>
        <Text style={styles.bEACON}>BEACON</Text>
        <Text style={styles.bUDDY}>BUDDY</Text>
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
  bEACON: {
    marginBlockStart: 0,
    marginBlockEnd: 1,
  },
  bUDDY: {
    margin: 0,
  },
  customizeYourOwnS: {
    position: "absolute",
    top: 368,
    left: 0,
    fontSize: 42,
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
  start: {
    position: "relative",
    backgroundColor: "#202127",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Start;
