import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SearchingBarProgressBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchingBarProgressBar}>
      <View style={styles.hello}>
        <View style={styles.barsHomeIndicatoriPhoneLig}>
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.groupView}>
          <LinearGradient
            style={styles.rectangle}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <LinearGradient
            style={styles.rectangle1}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Text style={styles.dontHaveAnAccoun}>Beacon sent!</Text>
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
        <View style={styles.groupView1}>
          <Text style={styles.kitchen}>BeaconBuddy</Text>
          <Image
            style={styles.moreIcon}
            resizeMode="cover"
            source={require("../assets/more6.png")}
          />
          <View style={styles.back}>
            <LinearGradient
              style={styles.rectangle2}
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
        <LinearGradient
          style={styles.cancelBeacon}
          locations={[0, 1]}
          colors={["#0061c8", "#5aedff"]}
        >
          <Pressable style={styles.pressable}>
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
        </LinearGradient>
        <View style={styles.homerosterButtons}>
          <View style={styles.buttonGroup}>
            <View style={styles.buttons}>
              <Pressable
                style={styles.mediumButtonMedium}
                onPress={() => navigation.navigate("Menu")}
              >
                <View style={styles.master}>
                  <View style={styles.labelIconLeftChevron}>
                    <View style={styles.spacer} />
                    <View style={styles.labelIconLeft}>
                      <View style={styles.placeholder}>
                        <Image
                          style={styles.wrapperIcon}
                          resizeMode="cover"
                          source={require("../assets/wrapper160.png")}
                        />
                      </View>
                      <Text style={[styles.label, styles.ml8]}>Menu</Text>
                      <View style={[styles.placeholder1, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon1}
                          resizeMode="cover"
                          source={require("../assets/wrapper161.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={styles.arrowsDownArrow}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow10.png")}
                    />
                  </View>
                </View>
              </Pressable>
              <View style={[styles.mediumButtonMedium1, styles.ml10]}>
                <Pressable
                  style={styles.master1}
                  onPress={() => navigation.navigate("Roster")}
                >
                  <View style={styles.labelIconLeftChevron1}>
                    <View style={styles.spacer1} />
                    <View style={styles.labelIconLeft1}>
                      <Image
                        style={styles.playersIcon}
                        resizeMode="cover"
                        source={require("../assets/players-icon.png")}
                      />
                      <Text style={[styles.label1, styles.ml8]}>Roster</Text>
                      <View style={[styles.placeholder2, styles.ml8]}>
                        <Image
                          style={styles.wrapperIcon2}
                          resizeMode="cover"
                          source={require("../assets/wrapper2.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={styles.arrowsDownArrow1}
                      resizeMode="cover"
                      source={require("../assets/arrows--down-arrow11.png")}
                    />
                  </View>
                </Pressable>
              </View>
            </View>
            <View style={styles.homeIndicator3}>
              <View style={styles.homeIndicator2}>
                <View style={styles.homeIndicator1} />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.deleteIcon}
          resizeMode="cover"
          source={require("../assets/delete.png")}
        />
        <Image
          style={styles.rectangleCopyIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-copy7.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-101.png")}
        />
        <View style={styles.groupView2}>
          <LinearGradient
            style={styles.rectangle3}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <LinearGradient
            style={styles.rectangleLinearGradient}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
        </View>
      </View>
      <View style={styles.beaconReady}>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-102.png")}
        />
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-102.png")}
        />
        <Image
          style={styles.rectangleCopyIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-copy.png")}
        />
        <Image
          style={styles.rectangleCopyIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-copy9.png")}
        />
        <Image
          style={styles.rectangleCopyIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-copy10.png")}
        />
        <Image
          style={styles.basketballIcon}
          resizeMode="cover"
          source={require("../assets/basketball21.png")}
        />
        <Image
          style={styles.basketballIcon1}
          resizeMode="cover"
          source={require("../assets/basketball13.png")}
        />
      </View>
      <View style={styles.elementsTextBoxNavBar}>
        <Text style={styles.title}>Creating Beacon ...</Text>
      </View>
      <LinearGradient
        style={styles.cancelBeacon1}
        locations={[0, 1]}
        colors={["#0061c8", "#5aedff"]}
      >
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("SubmissionWaiting")}
        >
          <Text style={styles.cancel1}>Cancel</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml10: {
    marginLeft: 10,
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
  rectangle: {
    position: "absolute",
    height: "49.11%",
    width: "49.11%",
    top: "25.45%",
    right: "25.45%",
    bottom: "25.45%",
    left: "25.45%",
    borderRadius: 124,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 46,
    elevation: 46,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  rectangle1: {
    position: "absolute",
    height: "13.32%",
    width: "13.41%",
    top: "43.34%",
    right: "43.24%",
    bottom: "43.34%",
    left: "43.35%",
    borderRadius: 43,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    display: "none",
    backgroundColor: "transparent",
  },
  dontHaveAnAccoun: {
    position: "absolute",
    top: "94.04%",
    left: "34.59%",
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
    display: "none",
    opacity: 0.78,
  },
  groupView: {
    position: "absolute",
    top: 95,
    left: -56,
    width: 503,
    height: 503,
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
  groupView1: {
    position: "absolute",
    top: 65,
    left: 125,
    width: 145,
    height: 30,
  },
  cancel: {
    position: "absolute",
    top: "30.91%",
    left: "40.48%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable: {
    borderRadius: 12,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  cancelBeacon: {
    position: "absolute",
    left: 28,
    top: 754,
    width: 331,
    height: 55,
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
  },
  label: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
    justifyContent: "flex-start",
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
    backgroundColor: "#35373d",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
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
    backgroundColor: "#35373d",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  buttons: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  homeIndicator1: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
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
    display: "none",
  },
  homerosterButtons: {
    position: "absolute",
    marginLeft: -181,
    top: 688,
    left: "50%",
    width: 357,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  deleteIcon: {
    position: "absolute",
    top: 251,
    left: 38,
    width: 328,
    height: 328,
    display: "none",
  },
  rectangleCopyIcon: {
    position: "absolute",
    height: "38.86%",
    width: "84.1%",
    top: "30.92%",
    right: "7.95%",
    bottom: "30.21%",
    left: "7.95%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  groupIcon: {
    position: "absolute",
    top: 186,
    left: 26,
    width: 343,
    height: 343,
    display: "none",
  },
  rectangle3: {
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
  rectangleLinearGradient: {
    position: "absolute",
    height: "21.12%",
    width: "45.7%",
    top: "21.24%",
    right: "49.36%",
    bottom: "57.64%",
    left: "4.94%",
    display: "none",
    backgroundColor: "transparent",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 1,
    width: 390,
    height: 844,
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
  groupIcon1: {
    position: "absolute",
    top: -6,
    left: -9,
    width: 315,
    height: 312,
  },
  groupIcon2: {
    position: "absolute",
    top: -6,
    left: -9,
    width: 315,
    height: 312,
  },
  rectangleCopyIcon1: {
    position: "absolute",
    height: "101.56%",
    width: "101.62%",
    top: "64.38%",
    right: "-17.63%",
    bottom: "-65.94%",
    left: "16.01%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  rectangleCopyIcon2: {
    position: "absolute",
    height: "96.31%",
    width: "94.72%",
    top: "1.16%",
    right: "4.77%",
    bottom: "2.53%",
    left: "0.51%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopyIcon3: {
    position: "absolute",
    height: "77.55%",
    width: "75.26%",
    top: "11.19%",
    right: "12.89%",
    bottom: "11.26%",
    left: "11.86%",
    borderRadius: 156,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  basketballIcon: {
    position: "absolute",
    top: 70,
    left: 72,
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
    top: 202,
    left: 45,
    width: 306,
    height: 306,
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
    top: 639,
    left: 108,
    width: 179,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cancel1: {
    position: "absolute",
    top: "30.91%",
    left: "40.48%",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  pressable1: {
    borderRadius: 12,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  cancelBeacon1: {
    position: "absolute",
    left: 30,
    top: 754,
    width: 331,
    height: 55,
  },
  searchingBarProgressBar: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SearchingBarProgressBar;
