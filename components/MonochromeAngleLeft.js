import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const MonochromeAngleLeft = ({ style }) => {
  return (
    <Image
      style={[styles.monochromeAngleLeft, style]}
      resizeMode="cover"
      source={require("../assets/monochrome--angle-left.png")}
    />
  );
};

const styles = StyleSheet.create({
  monochromeAngleLeft: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default MonochromeAngleLeft;
