import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const BeaconSubmission1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.beaconSubmission}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <TouchableOpacity
          style={styles.selection}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("BeaconSubmission")}
        >
          <LinearGradient
            style={styles.bg}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Text style={styles.cinemaTheater}>Location</Text>
          <Text style={styles.entertainment}>Venue</Text>
          <Text style={styles.text}>Time</Text>
          <Text style={styles.text1}>Date</Text>
        </TouchableOpacity>
        <View style={styles.sport1}>
          <LinearGradient
            style={styles.rectangleCopy2}
            locations={[0, 1]}
            colors={["#0061c8", "#5aedff"]}
          />
          <Image
            style={styles.basketballIcon}
            resizeMode="cover"
            source={require("../assets/basketball11.png")}
          />
          <Text style={styles.sport}>Sport</Text>
        </View>
        <View style={styles.location1}>
          <LinearGradient
            style={styles.rectangleCopy3}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.locationAndMapMap}
            resizeMode="cover"
            source={require("../assets/location-and-map--map.png")}
          />
          <Image
            style={styles.fillIcon}
            resizeMode="cover"
            source={require("../assets/fill.png")}
          />
          <Text style={styles.location}>Location</Text>
        </View>
        <View style={styles.timer1}>
          <LinearGradient
            style={styles.rectangleCopy4}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.timeLine1Icon}
            resizeMode="cover"
            source={require("../assets/timeline-14.png")}
          />
          <Image
            style={styles.userVoiceFillIcon}
            resizeMode="cover"
            source={require("../assets/fill.png")}
          />
          <Text style={styles.timer}>Time</Text>
        </View>
        <View style={styles.player}>
          <LinearGradient
            style={styles.rectangleCopy5}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.placeholderIcon}
            resizeMode="cover"
            source={require("../assets/placeholder15.png")}
          />
          <View style={styles.sensor1}>
            <Text style={styles.sensor}>Players</Text>
          </View>
        </View>
        <Text style={styles.basketball}>Basketball</Text>
        <Image
          style={styles.notReadyBeacon2}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon24.png")}
        />
        <Image
          style={styles.notReadyBeacon1}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon14.png")}
        />
        <View style={styles.ofPlayers}>
          <View style={styles.master1Line}>
            <View style={styles.helpersTopHelper}>
              <View style={styles.container}>
                <Text style={styles.inputTitle}>Players</Text>
              </View>
            </View>
            <View style={[styles.input, styles.mt8]}>
              <View style={styles.content}>
                <View style={styles.iconsLeft}>
                  <Image
                    style={styles.playersIcon}
                    resizeMode="cover"
                    source={require("../assets/players-icon7.png")}
                  />
                </View>
                <View style={[styles.textContainer, styles.ml15]}>
                  <Image
                    style={styles.inputElementsIcon}
                    resizeMode="cover"
                    source={require("../assets/input-elements.png")}
                  />
                  <Image
                    style={styles.inputElementsIcon1}
                    resizeMode="cover"
                    source={require("../assets/input-elements.png")}
                  />
                  <Text style={styles.text2}>0</Text>
                </View>
                <View style={[styles.iconsRight, styles.ml15]}>
                  <View style={styles.placeholder}>
                    <Image
                      style={styles.wrapperIcon}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                  <View style={[styles.placeholder1, styles.ml20]}>
                    <Image
                      style={styles.wrapperIcon1}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.head}>
        <Text style={styles.kitchen}>BeaconBuddy</Text>
        <View style={styles.more}>
          <LinearGradient
            style={styles.rectangle1}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
          <LinearGradient
            style={styles.rectangle2}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.frameView} />
        </View>
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MenuNotFound")}
        >
          <View style={styles.frameView1}>
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={require("../assets/back6.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.more1}>
        <LinearGradient
          style={styles.rectangle3}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.pathIcon1}
          resizeMode="cover"
          source={require("../assets/path2.png")}
        />
        <View style={styles.logoBeacon}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector-4.png")}
          />
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector-5.png")}
          />
          <Text style={styles.b}>B</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  ml15: {
    marginLeft: 15,
  },
  mt8: {
    marginTop: 8,
  },
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
  bg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  cinemaTheater: {
    position: "absolute",
    marginTop: -20.5,
    top: "50%",
    left: "5.74%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  entertainment: {
    position: "absolute",
    marginTop: 3.5,
    top: "50%",
    left: "5.44%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#43caf1",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    marginTop: 3.5,
    width: "43.5%",
    top: "50%",
    left: "50.15%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#848588",
    textAlign: "right",
  },
  text1: {
    position: "absolute",
    marginTop: -20.5,
    width: "43.5%",
    top: "50%",
    left: "50.15%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
  },
  selection: {
    position: "absolute",
    height: "11.02%",
    width: "84.87%",
    top: "83.29%",
    right: "7.44%",
    bottom: "5.69%",
    left: "7.69%",
  },
  rectangleCopy2: {
    position: "absolute",
    height: "69.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.69%",
    left: "0%",
    borderRadius: 20,
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
  basketballIcon: {
    position: "absolute",
    top: 18,
    left: 18,
    width: 36,
    height: 36,
  },
  sport: {
    position: "absolute",
    marginTop: 33.78,
    width: "60%",
    top: "50%",
    left: "19.29%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  sport1: {
    position: "absolute",
    height: "12.44%",
    width: "18.67%",
    top: "67.65%",
    right: "73.64%",
    bottom: "19.91%",
    left: "7.69%",
    display: "none",
  },
  rectangleCopy3: {
    position: "absolute",
    height: "69.96%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.04%",
    left: "0%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  locationAndMapMap: {
    position: "absolute",
    top: 24,
    left: 24,
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  fillIcon: {
    position: "absolute",
    height: "23.99%",
    width: "34.29%",
    top: "22.99%",
    right: "32.86%",
    bottom: "53.03%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  location: {
    position: "absolute",
    marginTop: 34,
    width: "96.15%",
    top: "50%",
    left: "3.63%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.74,
  },
  location1: {
    position: "absolute",
    height: "12.32%",
    width: "18.67%",
    top: "67.65%",
    right: "51.24%",
    bottom: "20.02%",
    left: "30.09%",
    display: "none",
  },
  rectangleCopy4: {
    position: "absolute",
    height: "69.31%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.69%",
    left: "0%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  timeLine1Icon: {
    position: "absolute",
    height: "23.76%",
    width: "34.29%",
    top: "22.77%",
    right: "32.86%",
    bottom: "53.47%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  userVoiceFillIcon: {
    position: "absolute",
    height: "23.76%",
    width: "34.29%",
    top: "22.77%",
    right: "32.86%",
    bottom: "53.47%",
    left: "32.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  timer: {
    position: "absolute",
    marginTop: 33.78,
    width: "60%",
    top: "50%",
    left: "20%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  timer1: {
    position: "absolute",
    height: "12.44%",
    width: "18.67%",
    top: "67.65%",
    right: "28.84%",
    bottom: "19.91%",
    left: "52.49%",
    display: "none",
  },
  rectangleCopy5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  placeholderIcon: {
    position: "absolute",
    height: "35.73%",
    width: "35.71%",
    top: "31.61%",
    right: "32.69%",
    bottom: "32.65%",
    left: "31.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sensor: {
    position: "absolute",
    marginTop: -9.35,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 19,
    opacity: 0.74,
  },
  sensor1: {
    position: "absolute",
    marginTop: 49.89,
    width: "72.86%",
    top: "50%",
    right: "13.46%",
    left: "13.68%",
    height: 19,
    display: "none",
  },
  player: {
    position: "absolute",
    height: "8.62%",
    width: "18.67%",
    top: "72.39%",
    right: "73.64%",
    bottom: "18.99%",
    left: "7.69%",
    display: "none",
  },
  basketball: {
    position: "absolute",
    top: 120,
    left: 106,
    fontSize: 39,
    letterSpacing: -2,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    width: 253,
    height: 41,
  },
  notReadyBeacon2: {
    position: "absolute",
    top: 168,
    left: 10,
    width: 372,
    height: 372,
    display: "none",
  },
  notReadyBeacon1: {
    position: "absolute",
    top: 169,
    left: 9,
    width: 372,
    height: 372,
  },
  inputTitle: {
    flex: 1,
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  helpersTopHelper: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  playersIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  iconsLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputElementsIcon: {
    position: "relative",
    width: 2,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  inputElementsIcon1: {
    position: "relative",
    width: 2,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 39,
  },
  textContainer: {
    width: 220,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapperIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperIcon1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder1: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  content: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#303239",
    width: 326,
    height: 36,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  master1Line: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ofPlayers: {
    position: "absolute",
    top: 644,
    left: 17,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
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
  kitchen: {
    position: "absolute",
    top: 10,
    left: 112,
    fontSize: 18,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 148,
    height: 30,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  rectangle1: {
    position: "absolute",
    top: 0,
    left: 310,
    borderRadius: 27,
    shadowColor: "#333541",
    shadowOffset: {
      width: -8,
      height: -2,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    width: 45,
    height: 44,
    display: "none",
    backgroundColor: "transparent",
  },
  pathIcon: {
    position: "absolute",
    top: 66,
    left: 339,
    width: 20,
    height: 19,
  },
  rectangle2: {
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
    width: 45,
    height: 44,
    backgroundColor: "transparent",
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 299,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  more: {
    position: "absolute",
    top: 0,
    left: 7,
    width: 365,
    height: 44,
  },
  backIcon: {
    position: "relative",
    width: 27,
    height: 26,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 61,
    height: 44,
  },
  head: {
    position: "absolute",
    top: 55,
    left: 7,
    width: 372,
    height: 44,
  },
  rectangle3: {
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
  pathIcon1: {
    position: "absolute",
    top: 69,
    left: 336,
    width: 19,
    height: 19,
  },
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 18,
  },
  vectorIcon1: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 7,
    height: 18,
  },
  vectorIcon2: {
    position: "absolute",
    top: -1,
    left: 7,
    width: 20,
    height: 26,
  },
  b: {
    position: "absolute",
    top: 1,
    left: 13,
    fontSize: 14,
    fontFamily: "Della Respira",
    color: "#fff",
    textAlign: "center",
    width: 9,
    height: 11,
  },
  logoBeacon: {
    position: "absolute",
    top: 10,
    left: 4,
    width: 35,
    height: 24,
  },
  more1: {
    position: "absolute",
    top: 58,
    left: 322,
    width: 44,
    height: 44,
  },
  beaconSubmission: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default BeaconSubmission1;
