import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <LinearGradient
        style={styles.rectangle}
        locations={[0, 1]}
        colors={["#26272c", "#1f2026"]}
      />
      <Text style={styles.name}>Basketball</Text>
      <Text style={styles.name1}>My Activities</Text>
      <Pressable
        style={styles.arrows}
        onPress={() => navigation.navigate("MenuFootball")}
      >
        <Pressable
          style={styles.monochromeAngleRightB}
          onPress={() => navigation.navigate("Menu2Soccer")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/monochrome--angle-right-b.png")}
          />
        </Pressable>
        <Image
          style={styles.monochromeAngleLeft}
          resizeMode="cover"
          source={require("../assets/monochrome--angle-left.png")}
        />
      </Pressable>
      <Pressable
        style={styles.homerosterButtons}
        onPress={() => navigation.navigate("ActiveBeacons")}
      >
        <View style={styles.buttonGroup}>
          <View style={styles.buttons}>
            <View style={styles.mediumButtonMedium}>
              <View style={styles.master}>
                <LinearGradient
                  style={styles.labelIconLeftChevron}
                  locations={[0, 1]}
                  colors={["#0061c8", "#5aedff"]}
                >
                  <View style={styles.labelIconLeft}>
                    <Text style={[styles.label, styles.ml8]}>Find Beacon</Text>
                  </View>
                  
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      <Image
        style={styles.boxingIcon}
        resizeMode="cover"
        source={require("../assets/boxing.png")}
      />
      <Image
        style={styles.chessIcon}
        resizeMode="cover"
        source={require("../assets/chess.png")}
      />
      <Image
        style={styles.gymmingIcon}
        resizeMode="cover"
        source={require("../assets/gymming.png")}
      />
      <Image
        style={styles.tennisIcon}
        resizeMode="cover"
        source={require("../assets/tennis.png")}
      />
      <Image
        style={styles.tableTennisIcon}
        resizeMode="cover"
        source={require("../assets/table-tennis.png")}
      />
      <Image
        style={styles.rugbyIcon}
        resizeMode="cover"
        source={require("../assets/rugby.png")}
      />
      <Image
        style={styles.soccerIcon}
        resizeMode="cover"
        source={require("../assets/soccer.png")}
      />
      <ImageBackground
        style={styles.basketballIcon}
        resizeMode="cover"
        source={require("../assets/basketball.png")}
      />
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
      </View>
      <View style={styles.barsHomeIndicatoriPhoneLig}>
        <View style={styles.homeIndicator3} />
      </View>
      <View style={styles.barsStatusBariPhoneLight}>
      </View>
      <View style={styles.groupsLarge}>
        <View style={styles.line}>
          <View style={styles.components}>
            <View style={styles.master2}>
              <Image
                style={styles.basketballIcon1}
                resizeMode="cover"
                source={require("../assets/basketball1.png")}
              />
              <Text style={[styles.text, styles.ml6]}>2</Text>
              <View style={[styles.placeholder3, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon3}
                  resizeMode="cover"
                  source={require("../assets/wrapper3.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.components1, styles.ml10]}>
            <View style={styles.master3}>
              <View style={styles.placeholder4}>
                <Image
                  style={styles.wrapperIcon4}
                  resizeMode="cover"
                  source={require("../assets/wrapper4.png")}
                />
              </View>
              <Text style={[styles.label2, styles.ml6]}>Feb 6</Text>
              <View style={[styles.placeholder5, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon5}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
            </View>
          </View>
        </View>
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
      <Pressable style={styles.back}>
        <View style={styles.frameView1}>
          <Pressable
            style={styles.avatarCn}
            onPress={() => navigation.navigate("ProfileRevision")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/avatar-cn.png")}
            />
          </Pressable>
        </View>
      </Pressable>
      <Pressable
        style={styles.more1}
        onPress={() => navigation.navigate("SecondMenuBeacons")}
      >
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
            resizeMode="cover"
            source={require("../assets/vector-3.png")}
          />
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector-4.png")}
          />
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector-5.png")}
          />
          <Text style={styles.b}>B</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 100,
  },
  ml10: {
    marginLeft: 10,
  },
  ml6: {
    marginLeft: 6,
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
  name: {
    position: "absolute",
    height: "3.59%",
    width: "50.85%",
    top: "69.79%",
    left: "24.02%",
    fontSize: 25,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  name1: {
    position: "absolute",
    height: "3.59%",
    width: "50.85%",
    top: "20.38%",
    left: "24.79%",
    fontSize: 25,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  monochromeAngleRightB: {
    position: "absolute",
    left: "91.43%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    width: "8.57%",
    height: "100%",
  },
  monochromeAngleLeft: {
    position: "absolute",
    height: "100%",
    width: "8.57%",
    top: "0%",
    right: "91.43%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  arrows: {
    position: "absolute",
    height: "2.84%",
    width: "71.79%",
    top: "69.91%",
    right: "14.44%",
    bottom: "27.25%",
    left: "13.76%",
  },
  spacer: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  wrapperIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxHeight: "100%",
    width: 20,
    flexShrink: 0,
  },
  placeholder: {
    borderRadius: 100,
    height: 20,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  label: {
    position: "relative",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsDownArrow: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  labelIconLeftChevron: {
    alignSelf: "stretch",
    borderRadius: 10,
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  master: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mediumButtonMedium: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  spacer1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  playersIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  label1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  wrapperIcon2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder2: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  labelIconLeft1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arrowsDownArrow1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  labelIconLeftChevron1: {
    alignSelf: "stretch",
    borderRadius: 10,
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  master1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mediumButtonMedium1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  buttons: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
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
  homeIndicator1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicator2: {
    alignSelf: "stretch",
    position: "relative",
    height: 34,
    flexShrink: 0,
    display: "none",
  },
  buttonGroup: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  homerosterButtons: {
    position: "absolute",
    marginLeft: -180,
    top: 740,
    left: "50%",
    width: 357,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxingIcon: {
    position: "absolute",
    height: "13.74%",
    width: "29.74%",
    top: "28.55%",
    right: "55.47%",
    bottom: "57.7%",
    left: "14.79%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  chessIcon: {
    position: "absolute",
    height: "11.37%",
    width: "24.62%",
    top: "27.73%",
    right: "36.75%",
    bottom: "60.9%",
    left: "38.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  gymmingIcon: {
    position: "absolute",
    height: "12.32%",
    width: "26.67%",
    top: "28.91%",
    right: "14.44%",
    bottom: "58.77%",
    left: "58.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tennisIcon: {
    position: "absolute",
    height: "24.31%",
    width: "39.79%",
    top: "27.9%",
    right: "60.21%",
    bottom: "47.79%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  tableTennisIcon: {
    position: "absolute",
    height: "17.14%",
    width: "33.46%",
    top: "32.7%",
    right: "0%",
    bottom: "50.16%",
    left: "66.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rugbyIcon: {
    position: "absolute",
    height: "28.44%",
    width: "53%",
    top: "32.23%",
    right: "47%",
    bottom: "39.33%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  soccerIcon: {
    position: "absolute",
    height: "21.21%",
    width: "45.9%",
    top: "35.66%",
    right: "-0.43%",
    bottom: "43.13%",
    left: "54.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basketballIcon: {
    position: "absolute",
    height: "59.39%",
    width: "65.82%",
    top: "36.46%",
    right: "24.19%",
    bottom: "29.15%",
    left: "26.99%",
  },
  kitchen: {
    position: "absolute",
    top: 10,
    left: 105,
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
    left: 348,
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
    left: 0,
    width: 365,
    height: 44,
  },
  head: {
    position: "absolute",
    top: 55,
    left: 23,
    width: 365,
    height: 44,
  },
  homeIndicator3: {
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
  basketballIcon1: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  text: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
  },
  wrapperIcon3: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder3: {
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapperIcon4: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder4: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  wrapperIcon5: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder5: {
    borderRadius: 100,
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master3: {
    flex: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#303239",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  components1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupsLarge: {
    position: "absolute",
    width: "96.15%",
    top: 113,
    right: "1.79%",
    left: "2.05%",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
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
  vectorIcon3: {
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
    height: 18,
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
  icon1: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  avatarCn: {
    position: "relative",
    width: 41,
    height: 41,
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
    top: 40,
    left: 1,
    width: 89,
    height: 73,
  },
  menu: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Menu;
