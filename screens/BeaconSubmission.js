import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const BeaconSubmission = () => {
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
        <Pressable style={styles.selection}>
          <LinearGradient
            style={styles.bg}
            locations={[0, 1]}
            colors={["#26272c", "#1f2026"]}
          />
          <Text style={styles.cinemaTheater}>Location</Text>
          <Text style={styles.entertainment}>Venue</Text>
          <Text style={styles.text}>Time</Text>
          <Text style={styles.text1}>Date</Text>
        </Pressable>
        <View style={styles.sport1}>
          <LinearGradient
            style={styles.rectangleCopy2}
            locations={[0, 1]}
            colors={["#0061c8", "#5aedff"]}
          />
          <Image
            style={styles.basketballIcon}
            resizeMode="cover"
            source={require("../assets/basketball2.png")}
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
            source={require("../assets/timeline-1.png")}
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
            source={require("../assets/placeholder.png")}
          />
          <View style={styles.sensor1}>
            <Text style={styles.sensor}>Players</Text>
          </View>
        </View>
        <Text style={styles.basketball}>Basketball</Text>
        <Image
          style={styles.notReadyBeacon2}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon2.png")}
        />
        <Image
          style={styles.notReadyBeacon1}
          resizeMode="cover"
          source={require("../assets/not-ready-beacon1.png")}
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
                    source={require("../assets/players-icon1.png")}
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
              source={require("../assets/back.png")}
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
      <Image
        style={styles.backgroundIcon}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.modalPage}>
        <View style={styles.elementsAddons}>
          <View style={styles.swipeIndicator} />
        </View>
        <View style={styles.navigationBars}>
          <View style={styles.container1}>
            <View style={styles.elementsTextBoxNavBar}>
              <Text style={styles.title}>Edit Details</Text>
            </View>
          </View>
        </View>
        <View style={styles.month}>
          <View style={styles.divider}>
            <View style={styles.line} />
          </View>
          <View style={styles.divider1}>
            <View style={styles.line1} />
          </View>
          <View style={styles.sectionHeader}>
            <View style={styles.container2}>
              <Text style={styles.title1}>Select day</Text>
            </View>
          </View>
        </View>
        <View style={styles.month1}>
          <View style={styles.map}>
            <Image
              style={styles.locationIcon}
              resizeMode="cover"
              source={require("../assets/location.png")}
            />
          </View>
        </View>
        <View style={styles.groupsLarge}>
          <View style={styles.line2}>
            <Pressable
              style={styles.components}
              onPress={() => navigation.navigate("BeaconSubmissionTime")}
            >
              <View style={styles.master}>
                <View style={styles.placeholder2}>
                  <Image
                    style={styles.wrapperIcon2}
                    resizeMode="cover"
                    source={require("../assets/wrapper4.png")}
                  />
                </View>
                <Text style={[styles.label, styles.ml6]}>Select Date</Text>
                <View style={[styles.placeholder3, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon3}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </Pressable>
            <View style={[styles.placeholder4, styles.ml10]}>
              <Image
                style={styles.wrapperIcon4}
                resizeMode="cover"
                source={require("../assets/wrapper10.png")}
              />
            </View>
            <Pressable
              style={[styles.components1, styles.ml10]}
              onPress={() => navigation.navigate("BeaconSubmissionPlayer")}
            >
              <View style={styles.master1}>
                <View style={styles.placeholder5}>
                  <Image
                    style={styles.wrapperIcon5}
                    resizeMode="cover"
                    source={require("../assets/wrapper11.png")}
                  />
                </View>
                <Text style={[styles.label1, styles.ml6]}>4</Text>
                <View style={[styles.placeholder6, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon6}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </Pressable>
            <View style={[styles.placeholder7, styles.ml10]}>
              <Image
                style={styles.wrapperIcon7}
                resizeMode="cover"
                source={require("../assets/wrapper13.png")}
              />
            </View>
          </View>
          <View style={[styles.line3, styles.mt10]}>
            <View style={styles.components2}>
              <View style={styles.master2}>
                <View style={styles.placeholder8}>
                  <Image
                    style={styles.wrapperIcon8}
                    resizeMode="cover"
                    source={require("../assets/wrapper14.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.ml6]}>1</Text>
                <View style={[styles.placeholder9, styles.ml6]}>
                  <Image
                    style={styles.wrapperIcon9}
                    resizeMode="cover"
                    source={require("../assets/wrapper5.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.searchBars, styles.ml10]}>
              <View style={styles.search}>
                <View style={styles.searchField}>
                  <View style={styles.iconText}>
                    <Image
                      style={styles.iconMangnifyingglass}
                      resizeMode="cover"
                      source={require("../assets/icon--mangnifyingglass.png")}
                    />
                    <Text style={[styles.placeholderLabel, styles.ml10]}>
                      Search Places
                    </Text>
                  </View>
                  <Image
                    style={styles.iconMicrophone}
                    resizeMode="cover"
                    source={require("../assets/icon--microphone.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imageCircle}>
        <View style={styles.image}>
          <Image
            style={styles.multimediaImage}
            resizeMode="cover"
            source={require("../assets/multimedia--image.png")}
          />
          <Image
            style={styles.placeholderIcon1}
            resizeMode="cover"
            source={require("../assets/placeholder1.png")}
          />
          <View style={styles.badge}>
            <View style={styles.placeholder10}>
              <Image
                style={styles.wrapperIcon10}
                resizeMode="cover"
                source={require("../assets/wrapper16.png")}
              />
            </View>
          </View>
          <View style={styles.badge1}>
            <View style={styles.placeholder11}>
              <Image
                style={styles.wrapperIcon11}
                resizeMode="cover"
                source={require("../assets/wrapper16.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imageCircle1}>
        <View style={styles.image1}>
          <Image
            style={styles.multimediaImage1}
            resizeMode="cover"
            source={require("../assets/multimedia--image.png")}
          />
          <Image
            style={styles.placeholderIcon2}
            resizeMode="cover"
            source={require("../assets/placeholder2.png")}
          />
          <View style={styles.badge2}>
            <View style={styles.placeholder12}>
              <Image
                style={styles.wrapperIcon12}
                resizeMode="cover"
                source={require("../assets/wrapper16.png")}
              />
            </View>
          </View>
          <View style={styles.badge3}>
            <View style={styles.placeholder13}>
              <Image
                style={styles.wrapperIcon13}
                resizeMode="cover"
                source={require("../assets/wrapper16.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.imageCircle2}
        onPress={() => navigation.navigate("BeaconSubmissionLocation")}
      >
        <View style={styles.image2}>
          <Image
            style={styles.multimediaImage2}
            resizeMode="cover"
            source={require("../assets/multimedia--image2.png")}
          />
          <Image
            style={styles.placeholderIcon3}
            resizeMode="cover"
            source={require("../assets/placeholder3.png")}
          />
          <View style={styles.badge4}>
            <View style={styles.placeholder14}>
              <Image
                style={styles.wrapperIcon14}
                resizeMode="cover"
                source={require("../assets/wrapper20.png")}
              />
            </View>
          </View>
          <View style={styles.badge5}>
            <View style={styles.placeholder15}>
              <Image
                style={styles.wrapperIcon15}
                resizeMode="cover"
                source={require("../assets/wrapper20.png")}
              />
            </View>
          </View>
        </View>
      </Pressable>
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
  ml6: {
    marginLeft: 6,
  },
  ml10: {
    marginLeft: 10,
  },
  mt10: {
    marginTop: 10,
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
  backgroundIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 30,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  swipeIndicator: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#747b84",
    width: 40,
    height: 3,
    flexShrink: 0,
  },
  elementsAddons: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#303239",
    height: 20,
    flexDirection: "column",
    paddingHorizontal: 167,
    paddingVertical: 8,
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
    textAlign: "left",
  },
  elementsTextBoxNavBar: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  navigationBars: {
    position: "absolute",
    width: "100%",
    top: 20,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 33,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#23262b",
    height: 1,
    flexShrink: 0,
  },
  divider: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line1: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#23262b",
    height: 1,
    flexShrink: 0,
  },
  divider1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  container2: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sectionHeader: {
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  month: {
    position: "absolute",
    width: "100%",
    top: 50,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 64,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    height: 593,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  month1: {
    position: "absolute",
    width: "100%",
    top: 166,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    height: 598,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
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
  master: {
    flex: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#23262b",
    borderWidth: 1,
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  components: {
    flex: 1,
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
    borderRadius: 20,
    backgroundColor: "#09101d",
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "center",
    justifyContent: "flex-end",
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
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  wrapperIcon6: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder6: {
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
    borderColor: "#23262b",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components1: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  wrapperIcon7: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder7: {
    borderRadius: 20,
    backgroundColor: "#09101d",
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 4,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapperIcon8: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder8: {
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
    display: "none",
  },
  wrapperIcon9: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder9: {
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
  master2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#23262b",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  components2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconMangnifyingglass: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  placeholderLabel: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Rubik",
    color: "#747b84",
    textAlign: "left",
  },
  iconText: {
    width: 348,
    height: 22,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconMicrophone: {
    position: "relative",
    width: 11,
    height: 16,
    flexShrink: 0,
    display: "none",
  },
  searchField: {
    borderRadius: 15,
    backgroundColor: "#23262b",
    width: 291,
    height: 36,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 8,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 3,
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBars: {
    width: 294,
    height: 44,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupsLarge: {
    position: "absolute",
    width: "100%",
    top: 51,
    right: "0%",
    left: "0%",
    backgroundColor: "#303239",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  modalPage: {
    position: "absolute",
    width: "100%",
    top: 151,
    right: "-0.26%",
    left: "0.26%",
    height: 764,
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
  placeholderIcon1: {
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
  wrapperIcon10: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder10: {
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
  wrapperIcon11: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder11: {
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
  },
  imageCircle: {
    position: "absolute",
    top: 627,
    left: 124,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  multimediaImage1: {
    position: "absolute",
    marginTop: -8.38,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  placeholderIcon2: {
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
  wrapperIcon12: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder12: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge2: {
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
  wrapperIcon13: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder13: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge3: {
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
  image1: {
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  imageCircle1: {
    position: "absolute",
    top: 481,
    left: 152,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  multimediaImage2: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -11.88,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  placeholderIcon3: {
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
  wrapperIcon14: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder14: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge4: {
    position: "absolute",
    top: 42,
    left: 42,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 18,
    height: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  wrapperIcon15: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholder15: {
    borderRadius: 100,
    width: 12,
    height: 12,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  badge5: {
    position: "absolute",
    top: 0,
    left: 42,
    borderRadius: 20,
    backgroundColor: "#4141e7",
    width: 18,
    height: 18,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  image2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  imageCircle2: {
    position: "absolute",
    top: 385,
    left: 236,
    borderRadius: 50,
    backgroundColor: "#f4f6f9",
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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

export default BeaconSubmission;
