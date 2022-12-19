import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ProfileRevision = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileRevision}>
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
            source={require("../assets/wifi6.png")}
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
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("Menu")}
          >
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
          </Pressable>
        </View>
        <View style={styles.homeIndicator3}>
          <View style={styles.homeIndicator2}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
        <Text style={styles.marysaLabrone}>Brian Smith</Text>
        <Image
          style={styles.avatarIcon}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={styles.groupView1}>
          <View style={styles.group}>
            <LinearGradient
              style={styles.rectangle2}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <LinearGradient
              style={styles.rectangle3}
              locations={[0, 1]}
              colors={["#0061c8", "#5aedff"]}
            />
          </View>
          <View style={styles.groupCopy}>
            <LinearGradient
              style={styles.rectangle4}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <LinearGradient
              style={styles.rectangle5}
              locations={[0, 1]}
              colors={["#0061c8", "#5aedff"]}
            />
          </View>
          <Text style={styles.savings}>Gymming</Text>
          <Text style={styles.management}>Tennis</Text>
          <Pressable
            style={styles.groupCopy2}
            onPress={() => navigation.navigate("DetailedSkillLevel")}
          >
            <LinearGradient
              style={styles.rectangle6}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <LinearGradient
              style={styles.rectangle7}
              locations={[0, 1]}
              colors={["#0061c8", "#5aedff"]}
            />
          </Pressable>
          <Text style={styles.rating}>Basketball</Text>
          <Text style={styles.rating1}>Adv.</Text>
          <View style={styles.master}>
            <View style={styles.container}>
              <Image
                style={styles.solidStar}
                resizeMode="cover"
                source={require("../assets/solid--star.png")}
              />
            </View>
          </View>
          <Text style={styles.rating2}>Adv.</Text>
          <View style={styles.master1}>
            <View style={styles.container1}>
              <Image
                style={styles.solidStar1}
                resizeMode="cover"
                source={require("../assets/solid--star.png")}
              />
            </View>
          </View>
          <Text style={styles.rating3}>Upper Int.</Text>
          <View style={styles.master2}>
            <View style={styles.container2}>
              <Image
                style={styles.solidStar2}
                resizeMode="cover"
                source={require("../assets/solid--star.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.logoBeacon}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-35.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector-55.png")}
        />
        <Text style={styles.b}>B</Text>
      </View>
      <View style={styles.elementsUserData}>
        <View style={styles.frameView2}>
          <View style={styles.frameView}>
            <View style={styles.elementsUserDataMaster}>
              <Text style={styles.text}>4</Text>
              <Text style={[styles.label, styles.mt4]}>ACTIVITIES</Text>
            </View>
          </View>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("ProfileAttendance")}
          >
            <View style={styles.elementsUserDataMaster1}>
              <Text style={styles.text1}>95%</Text>
              <Text style={[styles.label1, styles.mt4]}>ATTENDANCE</Text>
            </View>
          </Pressable>
          <View style={styles.frameView1}>
            <View style={styles.elementsUserDataMaster2}>
              <Text style={styles.text2}>0</Text>
              <Text style={[styles.label2, styles.mt4]}>FOLLOWING</Text>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.done}
        locations={[0, 1]}
        colors={["#0061c8", "#5aedff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("SecondMenuBeacons")}
        >
          <Text style={styles.cancel}>Manage Activities</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
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
    top: 10,
    left: 102,
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
    top: 10,
    left: 9,
    width: 27,
    height: 27,
  },
  back: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 44,
    height: 44,
  },
  groupView: {
    position: "absolute",
    top: 55,
    left: 23,
    width: 247,
    height: 44,
  },
  homeIndicator1: {
    position: "absolute",
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
    display: "none",
  },
  homeIndicator2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicator3: {
    position: "absolute",
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    height: 34,
  },
  marysaLabrone: {
    position: "absolute",
    marginTop: -151,
    top: "50%",
    left: "26.15%",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.98,
  },
  avatarIcon: {
    position: "absolute",
    height: "23.82%",
    width: "50.77%",
    top: "11.14%",
    right: "25.38%",
    bottom: "65.05%",
    left: "23.85%",
    borderRadius: 26,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.89,
  },
  rectangle2: {
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
  rectangle3: {
    position: "absolute",
    height: "62.7%",
    width: "64.86%",
    top: "20.17%",
    right: "33.32%",
    bottom: "17.13%",
    left: "1.82%",
    borderRadius: 12,
    shadowColor: "#202024",
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  group: {
    position: "absolute",
    height: "5.97%",
    width: "100%",
    top: "78.42%",
    right: "0%",
    bottom: "15.61%",
    left: "0%",
  },
  rectangle4: {
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
  rectangle5: {
    position: "absolute",
    height: "62.7%",
    width: "96.1%",
    top: "23.15%",
    right: "2.09%",
    bottom: "14.15%",
    left: "1.82%",
    borderRadius: 12,
    shadowColor: "#202024",
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  groupCopy: {
    position: "absolute",
    height: "5.97%",
    width: "100%",
    top: "39.13%",
    right: "0%",
    bottom: "54.9%",
    left: "0%",
  },
  savings: {
    position: "absolute",
    marginTop: 71,
    width: "32.13%",
    top: "50%",
    left: "0.6%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "left",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  management: {
    position: "absolute",
    marginTop: -1.32,
    width: "32.73%",
    top: "50%",
    left: "0.6%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "left",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
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
  rectangle7: {
    position: "absolute",
    height: "63.73%",
    width: "96.4%",
    top: "18.21%",
    right: "1.8%",
    bottom: "18.06%",
    left: "1.8%",
    borderRadius: 12,
    shadowColor: "#202024",
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  groupCopy2: {
    position: "absolute",
    height: "5.97%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.03%",
    left: "0%",
  },
  rating: {
    position: "absolute",
    marginTop: -74,
    width: "37.84%",
    top: "50%",
    left: "0.6%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "left",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  rating1: {
    position: "absolute",
    marginTop: -77,
    width: "13.51%",
    top: "50%",
    left: "85.89%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "right",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  solidStar: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  container: {
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  master: {
    position: "absolute",
    top: 15,
    left: 262,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating2: {
    position: "absolute",
    marginTop: 0,
    width: "13.51%",
    top: "50%",
    left: "85.89%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "right",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  solidStar1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  container1: {
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  master1: {
    position: "absolute",
    top: 87,
    left: 264,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating3: {
    position: "absolute",
    marginTop: 71,
    width: "27.03%",
    top: "50%",
    left: "71.17%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "right",
    height: 17,
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  solidStar2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  container2: {
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  master2: {
    position: "absolute",
    top: 160,
    left: 209,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView1: {
    position: "absolute",
    height: "21.8%",
    width: "85.38%",
    top: "55.57%",
    right: "7.18%",
    bottom: "22.63%",
    left: "7.44%",
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
    top: 67,
    left: 330,
    width: 35,
    height: 24,
  },
  text: {
    position: "relative",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  label: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "left",
  },
  elementsUserDataMaster: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    position: "relative",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  label1: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "left",
  },
  elementsUserDataMaster1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  framePressable: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    position: "relative",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  label2: {
    position: "relative",
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#dadee3",
    textAlign: "left",
    display: "none",
  },
  elementsUserDataMaster2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView1: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  elementsUserData: {
    position: "absolute",
    width: "100%",
    top: 338,
    right: "0%",
    left: "0%",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cancel: {
    position: "absolute",
    top: "30.91%",
    left: "25.98%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done: {
    position: "absolute",
    left: "-620.23%",
    top: 50,
    right: "635.35%",
    width: "84.87%",
    height: 55,
  },
  profileRevision: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ProfileRevision;
