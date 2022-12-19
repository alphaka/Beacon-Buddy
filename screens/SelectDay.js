import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";

const SelectDay = () => {
  const [componentsDatePicker, setComponentsDatePicker] = useState(undefined);

  return (
    <View style={styles.selectDay}>
      <View style={styles.beaconSubmission}>
        <View style={styles.hello}>
          <LinearGradient
            style={styles.rectangle}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
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
          <Pressable style={styles.searchBeacon1}>
            <LinearGradient
              style={styles.bg}
              locations={[0, 1]}
              colors={["#0061c8", "#5aedff"]}
            />
            <Text style={styles.searchBeacon}>Continue</Text>
            <Image
              style={styles.iconArrowRight}
              resizeMode="cover"
              source={require("../assets/-icon-arrow-right.png")}
            />
          </Pressable>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery1.png")}
          />
          <View style={styles.cell}>
            <LinearGradient
              style={styles.bg1}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.fitness}>Start</Text>
            <Image
              style={styles.ovalIcon}
              resizeMode="cover"
              source={require("../assets/oval.png")}
            />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={styles.cell1}>
            <LinearGradient
              style={styles.bg2}
              locations={[0, 1]}
              colors={["#26272c", "#1f2026"]}
            />
            <Text style={styles.fitness1}>End</Text>
            <Image
              style={styles.ovalIcon1}
              resizeMode="cover"
              source={require("../assets/oval.png")}
            />
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Text style={styles.today23thFeb}>Today, 23th Feb</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.ovalIcon2}
        resizeMode="cover"
        source={require("../assets/oval2.png")}
      />
      <Image
        style={styles.ovalIcon3}
        resizeMode="cover"
        source={require("../assets/oval3.png")}
      />
      <View style={styles.calendar}>
        <View style={styles.group}>
          <Text style={styles.m}>M</Text>
          <Text style={styles.t}>T</Text>
          <Text style={styles.w}>W</Text>
          <Text style={styles.t1}>T</Text>
          <Text style={styles.f}>F</Text>
          <Text style={styles.s}>S</Text>
          <Text style={styles.sCopy}>S</Text>
        </View>
        <Text style={styles.text}>31</Text>
        <Text style={styles.text1}>1</Text>
        <Text style={styles.text2}>2</Text>
        <Text style={styles.text3}>3</Text>
        <Text style={styles.text4}>4</Text>
        <Text style={styles.text5}>5</Text>
        <Text style={styles.text6}>6</Text>
        <Text style={styles.text7}>7</Text>
        <Text style={styles.text8}>8</Text>
        <Text style={styles.text9}>9</Text>
        <Text style={styles.text10}>10</Text>
        <Text style={styles.text11}>11</Text>
        <Text style={styles.text12}>12</Text>
        <Text style={styles.text13}>13</Text>
        <Text style={styles.text14}>14</Text>
        <Text style={styles.text15}>15</Text>
        <Text style={styles.text16}>16</Text>
        <Text style={styles.text17}>17</Text>
        <Text style={styles.text18}>18</Text>
        <Text style={styles.text19}>19</Text>
        <Text style={styles.text20}>20</Text>
        <Text style={styles.text21}>21</Text>
        <Text style={styles.text22}>22</Text>
        <Text style={styles.text23}>23</Text>
        <Text style={styles.text24}>24</Text>
        <Text style={styles.text25}>25</Text>
        <Text style={styles.text26}>26</Text>
        <Text style={styles.text27}>27</Text>
        <Text style={styles.text28}>28</Text>
        <Text style={styles.text29}>29</Text>
        <Text style={styles.text30}>30</Text>
        <Text style={styles.text31}>31</Text>
        <Text style={styles.text32}>1</Text>
        <Text style={styles.text33}>2</Text>
        <Text style={styles.text34}>3</Text>
      </View>
      <View style={styles.groupsLarge}>
        <View style={styles.line}>
          <View style={styles.components}>
            <View style={styles.master}>
              <Image
                style={styles.basketballIcon}
                resizeMode="cover"
                source={require("../assets/basketball6.png")}
              />
              <Text style={[styles.label, styles.ml6]}>2</Text>
              <View style={[styles.placeholder, styles.ml6]}>
                <Image
                  style={styles.wrapperIcon}
                  resizeMode="cover"
                  source={require("../assets/wrapper3.png")}
                />
              </View>
            </View>
          </View>
          <RNKDatepicker
            placeholder={() => (
              <Text style={styles.componentsDatePickerPlaceHolder}>
                Feb 16 - Feb 17{" "}
              </Text>
            )}
            date={componentsDatePicker}
            onSelect={setComponentsDatePicker}
            controlStyle={styles.componentsDatePickerValue}
          />
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
        <Image
          style={styles.backIcon}
          resizeMode="cover"
          source={require("../assets/avatar-cn.png")}
        />
      </View>
      <View style={styles.logoBeacon}>
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
        <Text style={styles.b}>B</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  componentsDatePickerPlaceHolder: {
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    fontSize: 13,
  },
  componentsDatePickerValue: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  ml10: {
    marginLeft: 10,
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
  bg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  searchBeacon: {
    position: "absolute",
    marginTop: -17.5,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 18,
    lineHeight: 13,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    height: 24,
  },
  iconArrowRight: {
    position: "absolute",
    height: "9.64%",
    width: "3.85%",
    top: "33.73%",
    right: "7.44%",
    bottom: "56.63%",
    left: "88.72%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchBeacon1: {
    position: "absolute",
    height: "9.83%",
    width: "100%",
    top: "91.59%",
    right: "0%",
    bottom: "-1.42%",
    left: "0%",
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
  bg1: {
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
  fitness: {
    position: "absolute",
    marginTop: -12.5,
    top: "50%",
    left: "22.66%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  ovalIcon: {
    position: "absolute",
    height: "41.94%",
    width: "11.78%",
    top: "29.03%",
    right: "82.78%",
    bottom: "29.03%",
    left: "5.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon: {
    position: "absolute",
    height: "15.05%",
    width: "4.23%",
    top: "43.01%",
    right: "86.71%",
    bottom: "41.94%",
    left: "9.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cell: {
    position: "absolute",
    height: "11.02%",
    width: "84.87%",
    top: "59.83%",
    right: "7.95%",
    bottom: "29.15%",
    left: "7.18%",
  },
  bg2: {
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
  fitness1: {
    position: "absolute",
    marginTop: -12.5,
    top: "50%",
    left: "22.66%",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  ovalIcon1: {
    position: "absolute",
    height: "41.94%",
    width: "11.78%",
    top: "29.03%",
    right: "82.78%",
    bottom: "29.03%",
    left: "5.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "15.05%",
    width: "4.23%",
    top: "43.01%",
    right: "82.48%",
    bottom: "41.94%",
    left: "13.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cell1: {
    position: "absolute",
    height: "11.02%",
    width: "84.87%",
    top: "76.07%",
    right: "7.95%",
    bottom: "12.91%",
    left: "7.18%",
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
  today23thFeb: {
    position: "absolute",
    top: 447,
    left: 30,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#e8e8e8",
    textAlign: "left",
    textShadowColor: "rgba(255, 255, 255, 0.04)",
    textShadowOffset: {
      width: -3,
      height: -3,
    },
    textShadowRadius: 4,
  },
  rectangleView: {
    position: "absolute",
    top: 305,
    left: 144,
    backgroundColor: "#5aedff",
    borderStyle: "solid",
    borderColor: "#00d3ff",
    borderWidth: 1,
    width: 56,
    height: 41,
  },
  ovalIcon2: {
    position: "absolute",
    top: 305,
    left: 124,
    width: 41,
    height: 41,
  },
  ovalIcon3: {
    position: "absolute",
    top: 305,
    left: 178,
    width: 41,
    height: 41,
  },
  m: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "0.16%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  t: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "17.03%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  w: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "32.34%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  t1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "49.53%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  f: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "65.47%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  s: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "80.63%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  sCopy: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: "96.25%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  group: {
    position: "absolute",
    height: "8.89%",
    width: "97.86%",
    top: "0%",
    right: "1.38%",
    bottom: "91.11%",
    left: "0.76%",
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "0.46%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    opacity: 0.35,
  },
  text1: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "17.28%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "32.57%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "49.08%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "64.37%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "79.66%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    marginTop: -71.5,
    top: "50%",
    left: "94.8%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "1.99%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text8: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "16.97%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text9: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "32.42%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text10: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "47.86%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text11: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "63.61%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text12: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "78.44%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text13: {
    position: "absolute",
    marginTop: -30.5,
    top: "50%",
    left: "93.58%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text14: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "0.46%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text15: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "15.75%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text16: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "31.19%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text17: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "48.01%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text18: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "63.15%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text19: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "78.29%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text20: {
    position: "absolute",
    marginTop: 10.5,
    top: "50%",
    left: "93.27%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text21: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "0.61%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text22: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "15.29%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text23: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "30.89%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text24: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "47.55%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text25: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "62.84%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text26: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "77.98%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text27: {
    position: "absolute",
    marginTop: 51.5,
    top: "50%",
    left: "93.43%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text28: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "0.15%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text29: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "15.29%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text30: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "30.73%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text31: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "47.86%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text32: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "64.83%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text33: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "79.66%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  text34: {
    position: "absolute",
    marginTop: 92.5,
    top: "50%",
    left: "94.8%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  calendar: {
    position: "absolute",
    top: 192,
    left: 32,
    width: 327,
    height: 225,
    overflow: "hidden",
  },
  basketballIcon: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
  },
  label: {
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
  master: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#27282e",
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
    backgroundColor: "transparent",
  },
  pathIcon: {
    position: "absolute",
    top: 11,
    left: 324,
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
  backIcon: {
    position: "absolute",
    top: 1,
    left: 3,
    width: 41,
    height: 41,
  },
  head: {
    position: "absolute",
    top: 55,
    left: 14,
    width: 365,
    height: 44,
  },
  vectorIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 7,
    height: 17,
  },
  vectorIcon3: {
    position: "absolute",
    top: 0,
    left: 35,
    width: 7,
    height: 17,
  },
  vectorIcon4: {
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
  },
  selectDay: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    display: "none",
  },
});

export default SelectDay;
