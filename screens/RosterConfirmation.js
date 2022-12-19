import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const RosterConfirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rosterConfirmation}>
      <View style={styles.hello}>
        <LinearGradient
          style={styles.rectangle}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.groupView}>
          <Text style={styles.kitchen}>BeaconBuddy</Text>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("Roster")}
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
        <View style={styles.author} />
        <View style={styles.imageCircle}>
          <View style={styles.image}>
            <Image
              style={styles.multimediaImage}
              resizeMode="cover"
              source={require("../assets/multimedia--image.png")}
            />
            <Image
              style={styles.placeholderIcon}
              resizeMode="cover"
              source={require("../assets/placeholder13.png")}
            />
            <View style={styles.badge}>
              <View style={styles.placeholder}>
                <Image
                  style={styles.wrapperIcon}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
            <View style={styles.badge1}>
              <View style={styles.placeholder1}>
                <Image
                  style={styles.wrapperIcon1}
                  resizeMode="cover"
                  source={require("../assets/wrapper16.png")}
                />
              </View>
            </View>
          </View>
        </View>
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
          <View style={styles.groupCopy2}>
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
          </View>
          <Text style={styles.rating}>Basketball</Text>
          <Text style={styles.rating1}>Upper Beg.</Text>
          <Text style={styles.rating2}>Upper Int.</Text>
          <View style={styles.master}>
            <View style={styles.container}>
              <Image
                style={styles.solidStar}
                resizeMode="cover"
                source={require("../assets/solid--star.png")}
              />
            </View>
          </View>
          <View style={styles.master1}>
            <View style={styles.container1}>
              <Image
                style={styles.solidStar1}
                resizeMode="cover"
                source={require("../assets/solid--star.png")}
              />
            </View>
          </View>
          <Text style={styles.rating3}>Adv.</Text>
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
        <View style={styles.elementsUserData}>
          <View style={styles.frameView3}>
            <View style={styles.frameView}>
              <View style={styles.elementsUserDataMaster}>
                <Text style={styles.text}>3</Text>
                <Text style={[styles.label, styles.mt4]}>ACTIVITIES</Text>
              </View>
            </View>
            <View style={styles.frameView1}>
              <View style={styles.elementsUserDataMaster1}>
                <Text style={styles.text1}>85%</Text>
                <Text style={[styles.label1, styles.mt4]}>ATTENDANCE</Text>
              </View>
            </View>
            <View style={styles.frameView2}>
              <View style={styles.elementsUserDataMaster2}>
                <Text style={styles.text2}>0</Text>
                <Text style={[styles.label2, styles.mt4]}>FOLLOWING</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.elementsTextBoxTableRow}>
        <Text style={styles.title}>Fatima</Text>
        <Text style={styles.subtitle} />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SenderAfterRosterConfirmation")}
      >
        <LinearGradient
          style={styles.rectangle8}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        />
        <Text style={styles.login}>Confirm</Text>
      </TouchableOpacity>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar2.png")}
      />
      <Pressable
        style={styles.more}
        onPress={() => navigation.navigate("SecondMenuBeacons")}
      >
        <LinearGradient
          style={styles.rectangle9}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <Image
          style={styles.pathIcon}
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
      </Pressable>
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
  author: {
    position: "absolute",
    top: 373,
    left: 265,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  multimediaImage: {
    position: "absolute",
    marginTop: -8.38,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  placeholderIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge: {
    position: "absolute",
    top: 18,
    left: 18,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 12,
    height: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
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
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge1: {
    position: "absolute",
    top: 0,
    left: 18,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 12,
    height: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  image: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 30,
    height: 30,
    flexShrink: 0,
    display: "none",
  },
  imageCircle: {
    position: "absolute",
    top: 620,
    left: 234,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    width: "96.1%",
    top: "20.17%",
    right: "2.09%",
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
    width: "99.11%",
    top: "78.42%",
    right: "0.89%",
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
    width: "63.66%",
    top: "23.15%",
    right: "34.52%",
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
    width: "99.11%",
    top: "39.13%",
    right: "0.89%",
    bottom: "54.9%",
    left: "0%",
  },
  savings: {
    position: "absolute",
    marginTop: 71,
    width: "31.85%",
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
    width: "32.44%",
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
    height: "62.7%",
    width: "31.83%",
    top: "20.9%",
    right: "66.35%",
    bottom: "16.4%",
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
  groupCopy2: {
    position: "absolute",
    height: "5.97%",
    width: "99.11%",
    top: "0%",
    right: "0.89%",
    bottom: "94.03%",
    left: "0%",
  },
  rating: {
    position: "absolute",
    marginTop: -74,
    width: "37.5%",
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
    marginTop: -74,
    width: "39.88%",
    top: "50%",
    left: "60.12%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
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
  rating2: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    left: "72.32%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#bbc5d1",
    textAlign: "right",
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
    top: 86,
    left: 216,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    top: 15,
    left: 216,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating3: {
    position: "absolute",
    marginTop: 71,
    width: "28.57%",
    top: "50%",
    left: "71.43%",
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: "500",
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
    left: 264,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView1: {
    position: "absolute",
    height: "21.8%",
    width: "86.15%",
    top: "51.78%",
    right: "6.67%",
    bottom: "26.42%",
    left: "7.18%",
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
  frameView1: {
    flex: 1,
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
  frameView2: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  frameView3: {
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
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
  },
  title: {
    position: "relative",
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: "Archivo",
    textAlign: "left",
  },
  subtitle: {
    position: "relative",
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow: {
    position: "absolute",
    top: 303,
    left: 142,
    width: 113,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    width: "86.15%",
    top: "86.61%",
    right: "6.67%",
    bottom: "7.46%",
    left: "7.18%",
    overflow: "hidden",
  },
  avatarIcon: {
    position: "absolute",
    height: "23.82%",
    width: "50.77%",
    top: "13.86%",
    right: "24.62%",
    bottom: "62.32%",
    left: "24.62%",
    borderRadius: 26,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.89,
  },
  rectangle9: {
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
  pathIcon: {
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
  more: {
    position: "absolute",
    top: 58,
    left: 322,
    width: 44,
    height: 44,
  },
  rosterConfirmation: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default RosterConfirmation;
