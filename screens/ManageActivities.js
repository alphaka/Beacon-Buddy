import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ManageActivities = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.manageActivities}>
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
        <View style={styles.homeIndicator3}>
          <View style={styles.homeIndicator2}>
            <View style={styles.homeIndicator1} />
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
            <Text style={styles.cancel}>Done</Text>
          </Pressable>
        </LinearGradient>
        <View style={styles.search}>
          <View style={styles.searchField}>
            <View style={styles.iconText}>
              <Image
                style={styles.iconMangnifyingglass}
                resizeMode="cover"
                source={require("../assets/icon--mangnifyingglass3.png")}
              />
              <Text style={[styles.placeholderLabel, styles.ml10]}>Search</Text>
            </View>
            <Image
              style={styles.iconMicrophone}
              resizeMode="cover"
              source={require("../assets/icon--microphone3.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={styles.rectangleCopy}
          locations={[0, 1]}
          colors={["#26272c", "#1f2026"]}
        />
        <View style={styles.component}>
          <View style={styles.master}>
            <View style={styles.listItem}>
              <View style={styles.contentFrame}>
                <View style={styles.artworkFrame}>
                  <View style={styles.artwork}>
                    <Image
                      style={styles.wrapperIcon}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame}>
                  <View style={styles.mainText}>
                    <View style={styles.contentLeading}>
                      <View style={styles.elementsTextBoxTableRow}>
                        <Text style={styles.title}>Basketball</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder}>
                  <View style={styles.artwork1}>
                    <Image
                      style={styles.artworkIcon}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle}>
                  <View style={styles.artwork3}>
                    <View style={styles.artwork2}>
                      <View style={styles.circle} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider}>
                <View style={styles.line} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.selectionPlaceholder1}>
          <View style={styles.artwork4}>
            <Image
              style={styles.artworkIcon1}
              resizeMode="cover"
              source={require("../assets/artwork.png")}
            />
          </View>
        </View>
        <View style={styles.component1}>
          <View style={styles.master1}>
            <View style={styles.listItem1}>
              <View style={styles.contentFrame1}>
                <View style={styles.artworkFrame1}>
                  <View style={styles.artwork5}>
                    <Image
                      style={styles.wrapperIcon1}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame1}>
                  <View style={styles.mainText1}>
                    <View style={styles.contentLeading1}>
                      <View style={styles.elementsTextBoxTableRow1}>
                        <Text style={styles.title1}>Soccer</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder2}>
                  <View style={styles.artwork6}>
                    <Image
                      style={styles.artworkIcon2}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle1}>
                  <View style={styles.artwork8}>
                    <View style={styles.artwork7}>
                      <View style={styles.circle1} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider1}>
                <View style={styles.line1} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component2}>
          <View style={styles.master2}>
            <View style={styles.listItem2}>
              <View style={styles.contentFrame2}>
                <View style={styles.artworkFrame2}>
                  <View style={styles.artwork9}>
                    <Image
                      style={styles.wrapperIcon2}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame2}>
                  <View style={styles.mainText2}>
                    <View style={styles.contentLeading2}>
                      <View style={styles.elementsTextBoxTableRow2}>
                        <Text style={styles.title2}>Football</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder3}>
                  <View style={styles.artwork10}>
                    <Image
                      style={styles.artworkIcon3}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle2}>
                  <View style={styles.artwork12}>
                    <View style={styles.artwork11}>
                      <View style={styles.circle2} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider2}>
                <View style={styles.line2} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component3}>
          <View style={styles.master3}>
            <View style={styles.listItem3}>
              <View style={styles.contentFrame3}>
                <View style={styles.artworkFrame3}>
                  <View style={styles.artwork13}>
                    <Image
                      style={styles.wrapperIcon3}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame3}>
                  <View style={styles.mainText3}>
                    <View style={styles.contentLeading3}>
                      <View style={styles.elementsTextBoxTableRow3}>
                        <Text style={styles.title3}>Tennis</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder4}>
                  <View style={styles.artwork14}>
                    <Image
                      style={styles.artworkIcon4}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle3}>
                  <View style={styles.artwork16}>
                    <View style={styles.artwork15}>
                      <View style={styles.circle3} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider3}>
                <View style={styles.line3} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component4}>
          <View style={styles.master4}>
            <View style={styles.listItem4}>
              <View style={styles.contentFrame4}>
                <View style={styles.artworkFrame4}>
                  <View style={styles.artwork17}>
                    <Image
                      style={styles.wrapperIcon4}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame4}>
                  <View style={styles.mainText4}>
                    <View style={styles.contentLeading4}>
                      <View style={styles.elementsTextBoxTableRow4}>
                        <Text style={styles.title4}>Ping Pong</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder5}>
                  <View style={styles.artwork18}>
                    <Image
                      style={styles.artworkIcon5}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle4}>
                  <View style={styles.artwork20}>
                    <View style={styles.artwork19}>
                      <View style={styles.circle4} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider4}>
                <View style={styles.line4} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component5}>
          <View style={styles.master5}>
            <View style={styles.listItem5}>
              <View style={styles.contentFrame5}>
                <View style={styles.artworkFrame5}>
                  <View style={styles.artwork21}>
                    <Image
                      style={styles.wrapperIcon5}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame5}>
                  <View style={styles.mainText5}>
                    <View style={styles.contentLeading5}>
                      <View style={styles.elementsTextBoxTableRow5}>
                        <Text style={styles.title5}>Gymming</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder6}>
                  <View style={styles.artwork22}>
                    <Image
                      style={styles.artworkIcon6}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle5}>
                  <View style={styles.artwork24}>
                    <View style={styles.artwork23}>
                      <View style={styles.circle5} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider5}>
                <View style={styles.line5} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component6}>
          <View style={styles.master6}>
            <View style={styles.listItem6}>
              <View style={styles.contentFrame6}>
                <View style={styles.artworkFrame6}>
                  <View style={styles.artwork25}>
                    <Image
                      style={styles.wrapperIcon6}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame6}>
                  <View style={styles.mainText6}>
                    <View style={styles.contentLeading6}>
                      <View style={styles.elementsTextBoxTableRow6}>
                        <Text style={styles.title6}>Boxing</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder7}>
                  <View style={styles.artwork26}>
                    <Image
                      style={styles.artworkIcon7}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle6}>
                  <View style={styles.artwork28}>
                    <View style={styles.artwork27}>
                      <View style={styles.circle6} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider6}>
                <View style={styles.line6} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.component7}>
          <View style={styles.master7}>
            <View style={styles.listItem7}>
              <View style={styles.contentFrame7}>
                <View style={styles.artworkFrame7}>
                  <View style={styles.artwork29}>
                    <Image
                      style={styles.wrapperIcon7}
                      resizeMode="cover"
                      source={require("../assets/wrapper6.png")}
                    />
                  </View>
                </View>
                <View style={styles.textFrame7}>
                  <View style={styles.mainText7}>
                    <View style={styles.contentLeading7}>
                      <View style={styles.elementsTextBoxTableRow7}>
                        <Text style={styles.title7}>Chess</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.selectionPlaceholder8}>
                  <View style={styles.artwork30}>
                    <Image
                      style={styles.artworkIcon8}
                      resizeMode="cover"
                      source={require("../assets/artwork.png")}
                    />
                  </View>
                </View>
                <View style={styles.toggle7}>
                  <View style={styles.artwork32}>
                    <View style={styles.artwork31}>
                      <View style={styles.circle7} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.divider7}>
                <View style={styles.line7} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  cancel: {
    position: "absolute",
    top: "30.91%",
    left: "42.9%",
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
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  iconText: {
    flex: 1,
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
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23262b",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search: {
    position: "absolute",
    top: 127,
    left: 10,
    width: 375,
    height: 44,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleCopy: {
    position: "absolute",
    height: "62.68%",
    width: "84.87%",
    top: "22.51%",
    right: "6.92%",
    bottom: "14.81%",
    left: "8.21%",
    borderRadius: 12,
    shadowColor: "#333541",
    shadowOffset: {
      width: -11,
      height: -7,
    },
    shadowRadius: 44,
    elevation: 44,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  wrapperIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  artwork: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  selectionPlaceholder: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork2: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component: {
    position: "absolute",
    width: "83.85%",
    top: 199,
    right: "7.44%",
    left: "8.72%",
    height: 61,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  artworkIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder1: {
    position: "absolute",
    marginTop: -214,
    top: "50%",
    left: 308,
    height: 44,
    flexDirection: "row",
    paddingLeft: 10,
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
  artwork5: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading1: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame1: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon2: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle1: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork7: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork8: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line1: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component1: {
    position: "absolute",
    width: "83.85%",
    top: 260,
    right: "7.44%",
    left: "8.72%",
    height: 60,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
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
  artwork9: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading2: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame2: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon3: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle2: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork11: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork12: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line2: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider2: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component2: {
    position: "absolute",
    width: "83.85%",
    top: 320,
    right: "7.44%",
    left: "8.72%",
    height: 63,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIcon3: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  artwork13: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title3: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading3: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame3: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon4: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork14: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle3: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork15: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork16: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component3: {
    position: "absolute",
    width: "83.85%",
    top: 380,
    right: "7.44%",
    left: "8.72%",
    height: 60,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
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
  artwork17: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title4: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading4: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame4: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon5: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle4: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork19: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork20: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line4: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider4: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master4: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component4: {
    position: "absolute",
    width: "83.85%",
    top: 440,
    right: "7.44%",
    left: "8.72%",
    height: 63,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIcon5: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  artwork21: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title5: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading5: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame5: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon6: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork22: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder6: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle5: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork23: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork24: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line5: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider5: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem5: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master5: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component5: {
    position: "absolute",
    width: "83.85%",
    top: 497,
    right: "7.44%",
    left: "8.72%",
    height: 65,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wrapperIcon6: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  artwork25: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame6: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title6: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading6: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame6: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon7: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork26: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder7: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle6: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork27: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork28: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line6: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider6: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master6: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component6: {
    position: "absolute",
    width: "83.85%",
    top: 517,
    right: "7.44%",
    left: "8.72%",
    height: 45,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  wrapperIcon7: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  artwork29: {
    borderRadius: 100,
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  artworkFrame7: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title7: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contentLeading7: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  mainText7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFrame7: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  artworkIcon8: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  artwork30: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectionPlaceholder8: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circle7: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#4141e7",
    borderWidth: 2,
    width: 31,
    height: 31,
    flexShrink: 0,
  },
  artwork31: {
    borderRadius: 40,
    backgroundColor: "#4141e7",
    width: 51,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  artwork32: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  toggle7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  contentFrame7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line7: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider7: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItem7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master7: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  component7: {
    position: "absolute",
    width: "83.85%",
    top: 560,
    right: "7.44%",
    left: "8.72%",
    height: 45,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 5,
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
  manageActivities: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ManageActivities;
