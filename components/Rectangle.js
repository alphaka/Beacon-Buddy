import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Rectangle = () => {
  return (
    <LinearGradient
      style={styles.rectangle}
      locations={[0, 1]}
      colors={["#0061c8", "#5aedff"]}
    />
  );
};

const styles = StyleSheet.create({
  rectangle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.59)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
});

export default Rectangle;
