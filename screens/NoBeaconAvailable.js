import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const NoBeaconAvailable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.noBeaconAvailable}>
      <View style={styles.beaconSubmission}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={styles.hello}>
          <LinearGradient
            style={styles.rectangle}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.map1}>
            <View style={styles.map}>
              <Image
                style={styles.locationIcon}
                resizeMode="cover"
                source={require("../assets/location3.png")}
              />
            </View>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery2.png")}
          />
        </View>
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("BeaconSubmission1")}
      >
        <LinearGradient
          style={styles.rectangle1}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        />
        <Text style={styles.login}>Create Beacon</Text>
      </TouchableOpacity>
      <View style={styles.label}>
        <LinearGradient
          style={styles.rectangle2}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Text style={styles.cardTips}>No Available Beacon</Text>
      </View>
      <View style={styles.head}>
        <Text style={styles.kitchen}>BeaconBuddy</Text>
        <View style={styles.more}>
          <LinearGradient
            style={styles.rectangle3}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path.png")}
          />
          <LinearGradient
            style={styles.rectangle4}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <View style={styles.frameView} />
        </View>
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SelectDay")}
        >
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("MenuFootball")}
          >
            <Image
              style={styles.backIcon}
              resizeMode="cover"
              source={require("../assets/back6.png")}
            />
          </Pressable>
        </TouchableOpacity>
      </View>
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
      <View style={styles.more1}>
        <LinearGradient
          style={styles.rectangle5}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.pathIcon1}
          resizeMode="cover"
          source={require("../assets/path2.png")}
        />
      </View>
      <View style={styles.groupView}>
        <View style={styles.label1}>
          <LinearGradient
            style={styles.rectangle6}
            locations={[0, 1]}
            colors={["#0061c8", "#5aedff"]}
          />
          <Text style={styles.cardTips1}>2W</Text>
        </View>
        <View style={styles.label2}>
          <View style={styles.rectangle7} />
          <Text style={styles.cardTips2}>1W</Text>
        </View>
        <View style={styles.label3}>
          <View style={styles.rectangle8} />
          <Text style={styles.cardTips3}>3D</Text>
        </View>
        <View style={styles.label4}>
          <View style={styles.rectangle9} />
          <Text style={styles.cardTips4}>1D</Text>
        </View>
      </View>
      <Pressable
        style={styles.logoBeacon1}
        onPress={() => navigation.navigate("SecondMenuBeacons")}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector-39.png")}
        />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../assets/vector-49.png")}
        />
        <Image
          style={styles.vectorIcon5}
          resizeMode="cover"
          source={require("../assets/vector-59.png")}
        />
        <Text style={styles.b1}>B</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 225,
    left: 0,
    borderRadius: 30,
    width: 390,
    height: 619,
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
  locationIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  map: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  map1: {
    position: "absolute",
    width: "100%",
    top: 109,
    right: "0%",
    left: "0%",
    backgroundColor: "#fff",
    height: 600,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  batteryIcon: {
    position: "absolute",
    height: "6.58%",
    width: "14.13%",
    top: "89.69%",
    right: "77.07%",
    bottom: "3.73%",
    left: "8.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  beaconSubmission: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  rectangle1: {
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
  login: {
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
    width: "87.95%",
    top: "87.8%",
    right: "5.9%",
    bottom: "6.28%",
    left: "6.15%",
    overflow: "hidden",
  },
  rectangle2: {
    position: "absolute",
    height: "90.48%",
    width: "98.43%",
    top: "0%",
    right: "1.57%",
    bottom: "9.52%",
    left: "0%",
    borderRadius: 19,
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
  cardTips: {
    position: "absolute",
    marginTop: -13,
    width: "98.03%",
    top: "50%",
    left: "1.97%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 34,
  },
  label: {
    position: "absolute",
    height: "4.98%",
    width: "50%",
    top: "65.88%",
    right: "46.41%",
    bottom: "29.15%",
    left: "3.59%",
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
  rectangle3: {
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
  rectangle4: {
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
  framePressable: {
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
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 17,
  },
  vectorIcon1: {
    position: "absolute",
    top: 0,
    left: 35,
    width: 7,
    height: 17,
  },
  vectorIcon2: {
    position: "absolute",
    top: 0,
    left: 8,
    width: 19,
    height: 24,
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
    top: 67,
    left: 330,
    width: 35,
    height: 24,
    display: "none",
  },
  rectangle5: {
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
  more1: {
    position: "absolute",
    top: 58,
    left: 322,
    width: 44,
    height: 44,
  },
  rectangle6: {
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
  cardTips1: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label1: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "78.26%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips2: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label2: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "52.17%",
    bottom: "0%",
    left: "26.09%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips3: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label3: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "26.09%",
    bottom: "0%",
    left: "52.17%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  rectangle9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#0c0c14",
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  cardTips4: {
    position: "absolute",
    marginTop: -6.5,
    width: "62.86%",
    top: "50%",
    left: "19.3%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 13,
  },
  label4: {
    position: "absolute",
    height: "100%",
    width: "21.74%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "78.26%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  groupView: {
    position: "absolute",
    height: "3.2%",
    width: "41.28%",
    top: "66.47%",
    right: "2.05%",
    bottom: "30.33%",
    left: "56.67%",
  },
  vectorIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 18,
  },
  vectorIcon4: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 7,
    height: 18,
  },
  vectorIcon5: {
    position: "absolute",
    top: -1,
    left: 7,
    width: 20,
    height: 26,
  },
  b1: {
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
  logoBeacon1: {
    position: "absolute",
    top: 68,
    left: 326,
    width: 35,
    height: 24,
  },
  noBeaconAvailable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NoBeaconAvailable;
