import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SearchingRadar2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchingRadar2}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.barsStatusBariPhoneLight}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <View style={styles.groupView}>
          <Text style={styles.kitchen}>BeaconBuddy</Text>
          <Image
            style={styles.moreIcon}
            resizeMode="cover"
            source={require("../assets/more7.png")}
          />
          <View style={styles.back}>
            <LinearGradient
              style={styles.rectangle1}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Image
              style={styles.arrowRightLine1Icon}
              resizeMode="cover"
              source={require("../assets/arrowrightline-1.png")}
            />
          </View>
        </View>
        <View style={styles.elementsTextBoxNavBar}>
          <Text style={styles.title}>Request Sent !</Text>
        </View>
      </View>
      <View style={styles.beaconReady}>
        <Image
          style={styles.rectangleCopyIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-copy11.png")}
        />
        <Image
          style={styles.rectangleCopyIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-copy12.png")}
        />
        <Image
          style={styles.rectangleCopyIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-copy13.png")}
        />
        <Image
          style={styles.rectangleCopyIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-copy14.png")}
        />
        <Image
          style={styles.basketballIcon}
          resizeMode="cover"
          source={require("../assets/basketball23.png")}
        />
        <Image
          style={styles.basketballIcon1}
          resizeMode="cover"
          source={require("../assets/basketball24.png")}
        />
      </View>
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("PendingRoster")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-103.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    width: 390,
    height: 844,
    backgroundColor: "transparent",
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
  border: {
    position: "absolute",
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    height: 11,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    position: "absolute",
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: "#fff",
    width: 18,
    height: 7,
  },
  battery: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    position: "relative",
    width: 14,
    height: 11,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 16,
    height: 11,
  },
  time: {
    position: "absolute",
    marginTop: -3.5,
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "100",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 54,
  },
  timeStyle: {
    position: "absolute",
    top: 7,
    left: 21,
    width: 54,
    height: 21,
  },
  barsStatusBariPhoneLight: {
    position: "absolute",
    top: 0,
    left: 17,
    width: 353,
    height: 44,
  },
  kitchen: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 145,
    height: 30,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  moreIcon: {
    position: "absolute",
    top: 55,
    left: 326,
    width: 44,
    height: 44,
    display: "none",
  },
  rectangle1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 27,
    shadowColor: "#333541",
    shadowOffset: {
      width: -8,
      height: -2,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    width: 44,
    height: 44,
    backgroundColor: "transparent",
  },
  arrowRightLine1Icon: {
    position: "absolute",
    top: 15,
    left: 28,
    width: 13,
    height: 13,
  },
  back: {
    position: "absolute",
    top: -10,
    left: -102,
    width: 44,
    height: 44,
    display: "none",
  },
  groupView: {
    position: "absolute",
    top: 65,
    left: 125,
    width: 145,
    height: 30,
  },
  title: {
    position: "relative",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#e8e8e8",
    textAlign: "left",
  },
  elementsTextBoxNavBar: {
    position: "absolute",
    top: 641,
    left: 133,
    width: 161,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  rectangleCopyIcon: {
    position: "absolute",
    height: "84%",
    width: "84.04%",
    top: "53.24%",
    right: "2.71%",
    bottom: "-37.24%",
    left: "13.24%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  rectangleCopyIcon1: {
    position: "absolute",
    height: "117.57%",
    width: "105.41%",
    top: "-9.46%",
    right: "-1.89%",
    bottom: "-8.11%",
    left: "-3.51%",
    borderRadius: 185,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopyIcon2: {
    position: "absolute",
    height: "79.65%",
    width: "78.34%",
    top: "9.6%",
    right: "12.59%",
    bottom: "10.74%",
    left: "9.07%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopyIcon3: {
    position: "absolute",
    height: "64.13%",
    width: "62.24%",
    top: "17.9%",
    right: "19.31%",
    bottom: "17.96%",
    left: "18.45%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basketballIcon: {
    position: "absolute",
    top: 102,
    left: 104,
    width: 166,
    height: 166,
  },
  basketballIcon1: {
    position: "absolute",
    top: 213,
    left: 102,
    width: 200,
    height: 276,
    display: "none",
  },
  beaconReady: {
    position: "absolute",
    height: "43.84%",
    width: "94.87%",
    top: "20.14%",
    right: "1.79%",
    bottom: "36.02%",
    left: "3.33%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  groupPressable: {
    position: "absolute",
    left: 46,
    top: 205,
    width: 306,
    height: 306,
  },
  searchingRadar2: {
    position: "relative",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SearchingRadar2;
