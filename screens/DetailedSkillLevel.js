import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const DetailedSkillLevel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailedSkillLevel}>
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
        <View style={styles.stats}>
          <View style={styles.data}>
            <View style={styles.basic}>
              <View style={styles.master}>
                <View style={styles.listItemCompactArtwork}>
                  <View style={styles.contentFrame}>
                    <View style={styles.elementsSpacer} />
                    <View style={styles.iconFrame}>
                      <View style={styles.icon}>
                        <View style={styles.placeholder}>
                          <Image
                            style={styles.wrapperIcon}
                            resizeMode="cover"
                            source={require("../assets/wrapper149.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.textFrame}>
                      <View style={styles.mainText}>
                        <View style={styles.contentLeading}>
                          <View style={styles.elementsTextBoxTableRow}>
                            <Text style={styles.title}>Intermediate</Text>
                            <Text style={[styles.subtitle, styles.mt10]}>
                              XX Award
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.elementsSpacer1} />
                    <View style={styles.iconFrame1}>
                      <View style={styles.icon1}>
                        <View style={styles.placeholder1}>
                          <Image
                            style={styles.wrapperIcon1}
                            resizeMode="cover"
                            source={require("../assets/wrapper150.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.iconFrame2}>
                      <View style={styles.icon2}>
                        <View style={styles.placeholder2}>
                          <Image
                            style={styles.wrapperIcon2}
                            resizeMode="cover"
                            source={require("../assets/wrapper151.png")}
                          />
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
            <View style={styles.basic1}>
              <View style={styles.master1}>
                <View style={styles.listItemCompactArtwork1}>
                  <View style={styles.contentFrame1}>
                    <View style={styles.elementsSpacer2} />
                    <View style={styles.iconFrame3}>
                      <View style={styles.icon3}>
                        <View style={styles.placeholder3}>
                          <Image
                            style={styles.wrapperIcon3}
                            resizeMode="cover"
                            source={require("../assets/wrapper149.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.textFrame1}>
                      <View style={styles.mainText1}>
                        <View style={styles.contentLeading1}>
                          <View style={styles.elementsTextBoxTableRow1}>
                            <Text style={styles.title1}>Total Matches</Text>
                          </View>
                        </View>
                        <View style={[styles.contentTrailing, styles.ml16]}>
                          <View style={styles.elementsRightSide}>
                            <View style={styles.content}>
                              <Text style={styles.detail}>20</Text>
                            </View>
                            <View
                              style={[
                                styles.elementsRightSideArrow,
                                styles.ml4,
                              ]}
                            >
                              <Image
                                style={styles.arrowsRightArrow}
                                resizeMode="cover"
                                source={require("../assets/arrows--right-arrow4.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.elementsSpacer3} />
                    <View style={styles.controlFrame}>
                      <View style={styles.chevron} />
                    </View>
                  </View>
                  <View style={styles.divider1}>
                    <View style={styles.line1} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.basic2}>
              <View style={styles.master2}>
                <View style={styles.listItemCompactArtwork2}>
                  <View style={styles.contentFrame2}>
                    <View style={styles.elementsSpacer4} />
                    <View style={styles.iconFrame4}>
                      <View style={styles.icon4}>
                        <View style={styles.placeholder4}>
                          <Image
                            style={styles.wrapperIcon4}
                            resizeMode="cover"
                            source={require("../assets/wrapper149.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.textFrame2}>
                      <View style={styles.mainText2}>
                        <View style={styles.contentLeading2}>
                          <View style={styles.elementsTextBoxTableRow2}>
                            <Text style={styles.title2}>This Week</Text>
                          </View>
                        </View>
                        <View style={[styles.contentTrailing1, styles.ml16]}>
                          <View style={styles.elementsRightSide1}>
                            <View style={styles.content1}>
                              <Text style={styles.detail1}>1/2</Text>
                            </View>
                            <View
                              style={[
                                styles.elementsRightSideArrow1,
                                styles.ml4,
                              ]}
                            >
                              <Image
                                style={styles.arrowsRightArrow1}
                                resizeMode="cover"
                                source={require("../assets/arrows--right-arrow4.png")}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.elementsSpacer5} />
                    <View style={styles.controlFrame1}>
                      <View style={styles.chevron1} />
                    </View>
                  </View>
                  <View style={styles.divider2}>
                    <View style={styles.line2} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.navigationBars}>
              <View style={styles.container}>
                <View style={styles.elementsTextBoxNavBar}>
                  <Text style={styles.title3}>Performance</Text>
                </View>
              </View>
            </View>
            <View style={styles.chart}>
              <View style={styles.elementsDataY}>
                <View style={styles.elementsDataLinesY}>
                  <View style={styles.elementsLegendText}>
                    <Text style={styles.label}>5</Text>
                  </View>
                  <View style={[styles.elementsLines, styles.ml10]}>
                    <View style={styles.line3} />
                  </View>
                </View>
                <View style={[styles.elementsDataLinesY1, styles.mt15]}>
                  <View style={styles.elementsLegendText1}>
                    <Text style={styles.label1}>4</Text>
                  </View>
                  <View style={[styles.elementsLines1, styles.ml10]}>
                    <View style={styles.line4} />
                  </View>
                </View>
                <View style={[styles.elementsDataLinesY2, styles.mt15]}>
                  <View style={styles.elementsLegendText2}>
                    <Text style={styles.label2}>3</Text>
                  </View>
                  <View style={[styles.elementsLines2, styles.ml10]}>
                    <View style={styles.line5} />
                  </View>
                </View>
                <View style={[styles.elementsDataLinesY3, styles.mt15]}>
                  <View style={styles.elementsLegendText3}>
                    <Text style={styles.label3}>2</Text>
                  </View>
                  <View style={[styles.elementsLines3, styles.ml10]}>
                    <View style={styles.line6} />
                  </View>
                </View>
                <View style={[styles.elementsDataLinesY4, styles.mt15]}>
                  <View style={styles.elementsLegendText4}>
                    <Text style={styles.label4}>1</Text>
                  </View>
                  <View style={[styles.elementsLines4, styles.ml10]}>
                    <View style={styles.line7} />
                  </View>
                </View>
              </View>
              <View style={styles.chartsCustom}>
                <View style={styles.variwideChart}>
                  <Image
                    style={styles.columnIcon}
                    resizeMode="cover"
                    source={require("../assets/1-column.png")}
                  />
                  <Image
                    style={styles.columnIcon1}
                    resizeMode="cover"
                    source={require("../assets/2-column.png")}
                  />
                  <Image
                    style={styles.columnIcon2}
                    resizeMode="cover"
                    source={require("../assets/3-column.png")}
                  />
                  <Image
                    style={styles.columnIcon3}
                    resizeMode="cover"
                    source={require("../assets/4-column.png")}
                  />
                  <View style={styles.column} />
                </View>
              </View>
            </View>
            <View style={styles.componentsDataX}>
              <View style={styles.elementsDataLinesX}>
                <View style={styles.elementsLines5}>
                  <View style={styles.line8} />
                </View>
                <View style={[styles.elementsLegendText5, styles.mt5]}>
                  <Text style={styles.label5}>
                    <Text style={styles.aug1}>
                      <Text style={styles.aug}>Aug</Text>
                    </Text>
                    <Text style={styles.text1}>
                      <Text style={styles.text}>2022</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.elementsDataLinesX1}>
                <View style={styles.elementsLines6}>
                  <View style={styles.line9} />
                </View>
                <View style={[styles.elementsLegendText6, styles.mt5]}>
                  <Text style={styles.label6}>
                    <Text style={styles.sept1}>
                      <Text style={styles.sept}>Sept</Text>
                    </Text>
                    <Text style={styles.text3}>
                      <Text style={styles.text2}>2022</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.elementsDataLinesX2}>
                <View style={styles.elementsLines7}>
                  <View style={styles.line10} />
                </View>
                <View style={[styles.elementsLegendText7, styles.mt5]}>
                  <Text style={styles.label7}>
                    <Text style={styles.oct1}>
                      <Text style={styles.oct}>Oct</Text>
                    </Text>
                    <Text style={styles.text5}>
                      <Text style={styles.text4}>2022</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.elementsDataLinesX3}>
                <View style={styles.elementsLines8}>
                  <View style={styles.line11} />
                </View>
                <View style={[styles.elementsLegendText8, styles.mt5]}>
                  <Text style={styles.label8}>
                    <Text style={styles.nov1}>
                      <Text style={styles.nov}>Nov</Text>
                    </Text>
                    <Text style={styles.text7}>
                      <Text style={styles.text6}>2022</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.elementsDataLinesX4}>
                <View style={styles.elementsLines9}>
                  <View style={styles.line12} />
                </View>
                <View style={[styles.elementsLegendText9, styles.mt5]}>
                  <Text style={styles.label9}>
                    <Text style={styles.dec1}>
                      <Text style={styles.dec}>Dec</Text>
                    </Text>
                    <Text style={styles.text9}>
                      <Text style={styles.text8}>2022</Text>
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector-6.png")}
          />
        </View>
        <View style={styles.navigationBars1}>
          <View style={styles.container1}>
            <View style={styles.wrapper}>
              <View style={styles.title5}>
                <View style={styles.elementsTextBoxTableRow3}>
                  <Text style={styles.title4}>Basketball</Text>
                  <Text style={styles.subtitle1}>ilometres</Text>
                </View>
              </View>
              <View style={[styles.iconRight, styles.ml8]}>
                <View style={styles.placeholder5}>
                  <Image
                    style={styles.wrapperIcon5}
                    resizeMode="cover"
                    source={require("../assets/wrapper154.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.master3}>
          <View style={styles.container2}>
            <Image
              style={styles.solidStar}
              resizeMode="cover"
              source={require("../assets/solid--star.png")}
            />
          </View>
        </View>
        <Text style={styles.rating}>Adv.</Text>
      </View>
      <View style={styles.levelBar}>
        <View style={styles.skillLevelBar}>
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
        <View style={styles.master4}>
          <View style={styles.listItemCompactArtwork3}>
            <View style={styles.contentFrame3}>
              <View style={styles.elementsSpacer6} />
              <View style={styles.iconFrame5}>
                <View style={styles.icon5}>
                  <View style={styles.placeholder6}>
                    <Image
                      style={styles.wrapperIcon6}
                      resizeMode="cover"
                      source={require("../assets/wrapper149.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.textFrame3}>
                <View style={styles.mainText3}>
                  <View style={styles.contentLeading3}>
                    <View style={styles.elementsTextBoxTableRow4}>
                      <Text style={styles.title6}>Level</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.elementsSpacer7} />
              <View style={styles.controlFrame2}>
                <View style={styles.elementsPriceAmount}>
                  <View style={styles.placeholder7}>
                    <Image
                      style={styles.wrapperIcon7}
                      resizeMode="cover"
                      source={require("../assets/wrapper10.png")}
                    />
                  </View>
                  <View style={[styles.amount, styles.ml15]}>
                    <Text style={styles.text10}>5</Text>
                  </View>
                  <View style={[styles.placeholder8, styles.ml15]}>
                    <Image
                      style={styles.wrapperIcon8}
                      resizeMode="cover"
                      source={require("../assets/wrapper157.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divider3}>
              <View style={styles.line13} />
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
          <Text style={styles.cancel}>Done</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml4: {
    marginLeft: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  ml10: {
    marginLeft: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt5: {
    marginTop: 5,
  },
  ml8: {
    marginLeft: 8,
  },
  ml15: {
    marginLeft: 15,
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
  elementsSpacer: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
    display: "none",
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
  elementsSpacer1: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
  },
  wrapperIcon1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  placeholder1: {
    borderRadius: 100,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  wrapperIcon2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  placeholder2: {
    borderRadius: 100,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    display: "none",
  },
  contentFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
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
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItemCompactArtwork: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  master: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  basic: {
    alignSelf: "stretch",
    height: 82,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  elementsSpacer2: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    height: 16,
    flexShrink: 0,
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon3: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame3: {
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow1: {
    width: 160,
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
  detail: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsRightArrow: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  elementsRightSideArrow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  elementsRightSide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contentTrailing: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
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
  elementsSpacer3: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
  },
  chevron: {
    borderRadius: 20,
    backgroundColor: "#4141e7",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  controlFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    backgroundColor: "#303239",
    height: 1,
    flexShrink: 0,
  },
  divider1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listItemCompactArtwork1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  basic1: {
    alignSelf: "stretch",
    height: 28,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  elementsSpacer4: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    height: 16,
    flexShrink: 0,
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon4: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame4: {
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title2: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#747b84",
    textAlign: "left",
  },
  elementsTextBoxTableRow2: {
    width: 160,
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
  detail1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "right",
  },
  content1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowsRightArrow1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  elementsRightSideArrow1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  elementsRightSide1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  contentTrailing1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
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
  elementsSpacer5: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
  },
  chevron1: {
    borderRadius: 20,
    backgroundColor: "#4141e7",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    width: 12,
    height: 12,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  controlFrame1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItemCompactArtwork2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  basic2: {
    alignSelf: "stretch",
    height: 32,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  title3: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  navigationBars: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  label: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsLegendText: {
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line3: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#747b84",
    borderRadius: 0.001,
    borderTopWidth: 1,
  },
  elementsLines: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsDataLinesY: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label1: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsLegendText1: {
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line4: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#747b84",
    borderRadius: 0.001,
    borderTopWidth: 1,
  },
  elementsLines1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsDataLinesY1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label2: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsLegendText2: {
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line5: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#747b84",
    borderRadius: 0.001,
    borderTopWidth: 1,
  },
  elementsLines2: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsDataLinesY2: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label3: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsLegendText3: {
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line6: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#747b84",
    borderRadius: 0.001,
    borderTopWidth: 1,
  },
  elementsLines3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsDataLinesY3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  label4: {
    position: "relative",
    fontSize: 8,
    lineHeight: 11,
    fontWeight: "700",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "center",
  },
  elementsLegendText4: {
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  line7: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    borderStyle: "dashed",
    borderColor: "#747b84",
    borderRadius: 0.001,
    borderTopWidth: 1,
  },
  elementsLines4: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsDataLinesY4: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  elementsDataY: {
    position: "absolute",
    height: "100%",
    width: "92.48%",
    top: "0%",
    right: "4.18%",
    bottom: "0%",
    left: "3.34%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  columnIcon: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 162,
  },
  columnIcon1: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 144,
  },
  columnIcon2: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 36,
  },
  columnIcon3: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 16,
  },
  column: {
    flex: 1,
    position: "relative",
    backgroundColor: "#5aedff",
    height: 7,
  },
  variwideChart: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  chartsCustom: {
    position: "absolute",
    marginTop: -71,
    width: "72.42%",
    top: "50%",
    right: "-55.99%",
    left: "83.57%",
    height: 142,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  chart: {
    position: "relative",
    width: 359,
    height: 162,
    flexShrink: 0,
  },
  line8: {
    alignSelf: "stretch",
    position: "relative",
    width: 0,
    flexShrink: 0,
  },
  elementsLines5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  aug: {
    color: "#fff",
  },
  aug1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    color: "#878b95",
  },
  text1: {
    margin: 0,
  },
  label5: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  elementsLegendText5: {
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsDataLinesX: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line9: {
    alignSelf: "stretch",
    position: "relative",
    width: 0,
    flexShrink: 0,
  },
  elementsLines6: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  sept: {
    color: "#fff",
  },
  sept1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    color: "#878b95",
  },
  text3: {
    margin: 0,
  },
  label6: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsLegendText6: {
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsDataLinesX1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line10: {
    alignSelf: "stretch",
    position: "relative",
    width: 0,
    flexShrink: 0,
  },
  elementsLines7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  oct: {
    color: "#fff",
  },
  oct1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text4: {
    color: "#878b95",
  },
  text5: {
    margin: 0,
  },
  label7: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsLegendText7: {
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsDataLinesX2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line11: {
    alignSelf: "stretch",
    position: "relative",
    width: 0,
    flexShrink: 0,
  },
  elementsLines8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  nov: {
    color: "#fff",
  },
  nov1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text6: {
    color: "#878b95",
  },
  text7: {
    margin: 0,
  },
  label8: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsLegendText8: {
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsDataLinesX3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line12: {
    alignSelf: "stretch",
    position: "relative",
    width: 0,
    flexShrink: 0,
  },
  elementsLines9: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  dec: {
    color: "#fff",
  },
  dec1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text8: {
    color: "#878b95",
  },
  text9: {
    margin: 0,
  },
  label9: {
    position: "relative",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Archivo",
    textAlign: "center",
  },
  elementsLegendText9: {
    borderRadius: 10,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsDataLinesX4: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  componentsDataX: {
    width: 344,
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: 61,
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  data: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#303239",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 343,
    height: 438,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "absolute",
    top: 113,
    left: 12,
    width: 318,
    height: 1,
  },
  stats: {
    position: "absolute",
    top: 150,
    left: 23,
    width: 343,
    height: 438,
  },
  title4: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 34,
    lineHeight: 48,
    fontWeight: "900",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  subtitle1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Archivo",
    color: "#414249",
    textAlign: "left",
    display: "none",
  },
  elementsTextBoxTableRow3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title5: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },
  iconRight: {
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    display: "none",
  },
  wrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navigationBars1: {
    position: "absolute",
    width: "88.21%",
    top: 83,
    right: "9.49%",
    left: "2.31%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  solidStar: {
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
  master3: {
    position: "absolute",
    top: 709,
    left: 288,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    position: "absolute",
    marginTop: 289,
    width: "12.31%",
    top: "50%",
    left: "80%",
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
  hello: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
    overflow: "hidden",
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
  skillLevelBar: {
    position: "absolute",
    height: "12.07%",
    width: "92.76%",
    top: "87.93%",
    right: "5.01%",
    bottom: "0%",
    left: "2.23%",
  },
  elementsSpacer6: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
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
    width: 16,
    height: 16,
    flexShrink: 0,
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon5: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFrame5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "none",
  },
  title6: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 34,
    lineHeight: 48,
    fontWeight: "900",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  elementsTextBoxTableRow4: {
    width: 160,
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
    paddingVertical: 12,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  elementsSpacer7: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 16,
    flexShrink: 0,
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
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text10: {
    position: "relative",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Archivo",
    color: "#fff",
    textAlign: "left",
  },
  amount: {
    flexDirection: "row",
    alignItems: "flex-start",
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
    borderRadius: 20,
    backgroundColor: "#09101d",
    width: 24,
    height: 24,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  elementsPriceAmount: {
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  controlFrame2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  contentFrame3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line13: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#ebeef2",
    height: 1,
    flexShrink: 0,
  },
  divider3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingLeft: 64,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  listItemCompactArtwork3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  master4: {
    position: "absolute",
    marginTop: -45.49,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  levelBar: {
    position: "absolute",
    height: "10.78%",
    width: "92.05%",
    top: "72.04%",
    right: "2.56%",
    bottom: "17.18%",
    left: "5.38%",
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
  detailedSkillLevel: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default DetailedSkillLevel;
