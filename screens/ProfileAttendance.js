import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ProfileAttendance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileAttendance}>
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
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-68.png")}
        />
        <View style={styles.address}>
          <View style={styles.components}>
            <View style={styles.master}>
              <Image
                style={styles.sportsBasketBall}
                resizeMode="cover"
                source={require("../assets/sports--basket-ball.png")}
              />
              <Text style={[styles.text, styles.ml6]}>1</Text>
              <View style={[styles.placeholder, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar, styles.ml10]}>
            <Text
              style={styles.title}
            >{`Levien Gymnasium         Dec. 17 `}</Text>
          </View>
        </View>
        <View style={styles.address1}>
          <View style={styles.components1}>
            <View style={styles.master1}>
              <Image
                style={styles.sportsTennisBall}
                resizeMode="cover"
                source={require("../assets/sports--tennis-ball.png")}
              />
              <Text style={[styles.text1, styles.ml6]}>1</Text>
              <View style={[styles.placeholder1, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon1}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar1, styles.ml10]}>
            <Text
              style={styles.title1}
            >{`Riverside Park                     Dec. 16 `}</Text>
          </View>
        </View>
        <View style={styles.address2}>
          <View style={styles.components2}>
            <View style={styles.master2}>
              <Text style={styles.text2}>1</Text>
              <View style={[styles.placeholder2, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon2}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
              <Image
                style={[styles.sportsBarbell, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/sports--barbell.png")}
              />
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar2, styles.ml10]}>
            <Text
              style={styles.title2}
            >{`DFC                                             Dec.  10 `}</Text>
          </View>
        </View>
        <View style={styles.address3}>
          <View style={styles.components3}>
            <View style={styles.master3}>
              <Image
                style={styles.sportsPingpong}
                resizeMode="cover"
                source={require("../assets/sports--pingpong.png")}
              />
              <Text style={[styles.text3, styles.ml6]}>1</Text>
              <View style={[styles.placeholder3, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon3}
                  resizeMode="cover"
                  source={require("../assets/wrapper5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.elementsTextBoxNavBar3, styles.ml10]}>
            <Text
              style={styles.title3}
            >{`Pier 2 Field                             Dec.  09 `}</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.done}
          locations={[0, 1]}
          colors={["#00d3ff", "rgba(0, 149, 232, 0.58)"]}
        >
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("PastBeaconRoster")}
          >
            <Text style={styles.cancel}>Attended</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={styles.done1}
          locations={[0, 1]}
          colors={["#00d3ff", "rgba(0, 149, 232, 0.58)"]}
        >
          <Pressable
            style={styles.pressable1}
            onPress={() => navigation.navigate("PastBeaconRoster")}
          >
            <Text style={styles.cancel1}>Attended</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={styles.done2}
          locations={[0, 1]}
          colors={["#00d3ff", "rgba(0, 149, 232, 0.58)"]}
        >
          <Pressable
            style={styles.pressable2}
            onPress={() => navigation.navigate("PastBeaconRoster")}
          >
            <Text style={styles.cancel2}>Attended</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={styles.done3}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        >
          <Pressable style={styles.pressable3}>
            <Text style={styles.cancel3}>Missed</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={styles.done4}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        >
          <Pressable style={styles.pressable4}>
            <Text style={styles.cancel4}>Cancelled</Text>
          </Pressable>
        </LinearGradient>
        <View style={styles.rectangleView} />
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
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.navigate("ProfileRevision")}
          >
            <View style={styles.elementsUserDataMaster}>
              <Text style={styles.text4}>4</Text>
              <Text style={[styles.label, styles.mt4]}>ACTIVITIES</Text>
            </View>
          </Pressable>
          <View style={styles.frameView}>
            <View style={styles.elementsUserDataMaster1}>
              <Text style={styles.text5}>95%</Text>
              <Text style={[styles.label1, styles.mt4]}>ATTENDANCE</Text>
            </View>
          </View>
          <View style={styles.frameView1}>
            <View style={styles.elementsUserDataMaster2}>
              <Text style={styles.text6}>0</Text>
              <Text style={[styles.label2, styles.mt4]}>FOLLOWING</Text>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.done5}
        locations={[0, 1]}
        colors={["#0061c8", "#5aedff"]}
      >
        <Pressable
          style={styles.pressable5}
          onPress={() => navigation.navigate("ManageActivities")}
        >
          <Text style={styles.cancel5}>Manage Activities</Text>
        </Pressable>
      </LinearGradient>
      <View style={styles.address4}>
        <View style={styles.components4}>
          <View style={styles.master4}>
            <Image
              style={styles.sportsBasketBall1}
              resizeMode="cover"
              source={require("../assets/sports--basket-ball.png")}
            />
            <Text style={[styles.text7, styles.ml6]}>1</Text>
            <View style={[styles.placeholder4, styles.ml6]}>
              <Image
                style={styles.wrapperIcon4}
                resizeMode="cover"
                source={require("../assets/wrapper5.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.elementsTextBoxNavBar4, styles.ml10]}>
          <Text
            style={styles.title4}
          >{`Central Park                          Dec. 18 `}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  ml10: {
    marginLeft: 10,
  },
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
  rectangleIcon: {
    position: "absolute",
    top: 422,
    left: 16,
    width: 359,
    height: 315,
  },
  sportsBasketBall: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master: {
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
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTextBoxNavBar: {
    width: 234,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address: {
    position: "absolute",
    top: 513,
    left: 16,
    width: 281,
    flexDirection: "row",
    paddingRight: 63,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sportsTennisBall: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master1: {
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
  components1: {
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTextBoxNavBar1: {
    width: 234,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address1: {
    position: "absolute",
    top: 568,
    left: 16,
    width: 298,
    flexDirection: "row",
    paddingRight: 63,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
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
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  sportsBarbell: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
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
  components2: {
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    paddingRight: 47,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTextBoxNavBar2: {
    width: 243,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address2: {
    position: "absolute",
    top: 623,
    left: 16,
    width: 307,
    flexDirection: "row",
    paddingRight: 63,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sportsPingpong: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text3: {
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
  components3: {
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    paddingRight: 47,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTextBoxNavBar3: {
    width: 243,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address3: {
    position: "absolute",
    top: 678,
    left: 16,
    width: 307,
    flexDirection: "row",
    paddingRight: 63,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cancel: {
    position: "absolute",
    top: "30.91%",
    left: "7.76%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#39f40b",
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
    left: "-544.58%",
    top: -184,
    right: "630.48%",
    width: "14.1%",
    height: 30,
  },
  cancel1: {
    position: "absolute",
    top: "30.91%",
    left: "7.76%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#39f40b",
    textAlign: "center",
  },
  pressable1: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done1: {
    position: "absolute",
    left: "-544.58%",
    top: -74,
    right: "630.48%",
    width: "14.1%",
    height: 30,
  },
  cancel2: {
    position: "absolute",
    top: "30.91%",
    left: "7.76%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#39f40b",
    textAlign: "center",
  },
  pressable2: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done2: {
    position: "absolute",
    left: "-544.58%",
    top: -129,
    right: "630.48%",
    width: "14.1%",
    height: 30,
  },
  cancel3: {
    position: "absolute",
    top: "30.91%",
    left: "16.85%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#ff0000",
    textAlign: "center",
  },
  pressable3: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done3: {
    position: "absolute",
    left: "82.82%",
    top: 685,
    right: "3.08%",
    width: "14.1%",
    height: 30,
  },
  cancel4: {
    position: "absolute",
    top: "30.91%",
    left: "4.12%",
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable4: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done4: {
    position: "absolute",
    left: "-544.58%",
    top: -236,
    right: "630.48%",
    width: "14.1%",
    height: 30,
  },
  rectangleView: {
    position: "absolute",
    top: -1271,
    left: -6693,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 5,
    width: 11061,
    height: 3397,
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
  text4: {
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
  framePressable: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text5: {
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
  frameView: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text6: {
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
  cancel5: {
    position: "absolute",
    top: "30.91%",
    left: "25.98%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable5: {
    width: "100%",
    borderRadius: 12,
    height: "100%",
    backgroundColor: "transparent",
  },
  done5: {
    position: "absolute",
    left: "7.18%",
    top: 754,
    right: "7.95%",
    width: "84.87%",
    height: 55,
  },
  sportsBasketBall1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  text7: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
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
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  master4: {
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
  components4: {
    width: 54,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  elementsTextBoxNavBar4: {
    width: 239,
    height: 44,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address4: {
    position: "absolute",
    top: 463,
    left: 16,
    width: 303,
    flexDirection: "row",
    paddingRight: 63,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileAttendance: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ProfileAttendance;
